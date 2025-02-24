<script type="text/javascript">
  import { onMount } from 'svelte';

  let servicesSectionWrapper;
  let cards;

  onMount(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = servicesSectionWrapper.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = servicesSectionWrapper.offsetHeight;
      
      if (scrollPosition > sectionTop - window.innerHeight && scrollPosition < sectionTop + sectionHeight) {
        const progress = (scrollPosition - (sectionTop - window.innerHeight)) / (sectionHeight + window.innerHeight);
        
        cards.forEach((card, index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          const movement = (progress * 100 - 50) * direction;
          card.style.setProperty('--parallax-y', `${movement}px`);
        });
        
        servicesSectionWrapper.style.setProperty('--bg-parallax', `${(progress * 20 - 10)}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="services-section-wrapper" bind:this={servicesSectionWrapper}>
  <div class="services-section">
    <div class="services container">
      <div class="heading"><h1>Services</h1></div>

      <div class="services-cards">
        {#each Array(6) as _, i}
          <div class="card" bind:this={cards[i]}>
            <div class="card-bg"></div>
            <div class="card-content">
              <div class="title">
                <p>{@html [
                  'Film production',
                  'Social Media Management',
                  'Marketing & Digital Marketing',
                  'Branding',
                  'Public Relations',
                  'Media Solutions'
                ][i]}</p>
              </div>
              <div class="info">
                <p>{@html [
                  "Whether it's a feature film, documentary, or commercial, we bring your story to life with cinematic precision and artistry.",
                  "Build your brand's online presence with tailored social strategies that engage and grow your audience.",
                  "From traditional campaigns to cutting-edge digital strategies, we create marketing solutions that deliver results.",
                  "Define and elevate your identity with cohesive and impactful branding that resonates.",
                  "We craft compelling narratives that amplify your voice and connect you with the world.",
                  "Need something unique? We've got you covered with customized media and marketing services tailored to your needs."
                ][i]}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .services-section-wrapper {
    --bg-parallax: 0px;
    position: relative;
    width: 100%;
    min-height: 120vh;
    overflow: hidden;
    perspective: 1000px;
  }

  .services-section {
    background: var(--dim-dark);
    min-height: 100vh;
    width: 100%;
    position: relative;
    transform-style: preserve-3d;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(255,255,255,0.05), transparent);
      transform: translateY(var(--bg-parallax));
      z-index: 0;
    }

    .services {
      position: relative;
      z-index: 1;

      .heading {
        h1 {
          margin-top: 4dvw;
          font-family: "Base Neue";
          font-size: 48px;
          font-weight: 500;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          animation: fadeInUp 0.8s ease-out;
        }
      }
      
      .services-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2.5rem;
        padding: 2rem 0;
        transform-style: preserve-3d;
        
        .card {
          --parallax-y: 0px;
          position: relative;
          background: var(--dark);
          padding: 2rem;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(var(--parallax-y)) translateZ(0);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform-style: preserve-3d;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: cardFadeIn 0.6s ease-out;
          
          @for $i from 1 through 6 {
            &:nth-child(#{$i}) {
              animation-delay: #{$i * 0.1}s;
            }
          }
          
          .card-bg {
            position: absolute;
            top: -10%;
            left: -10%;
            right: -10%;
            bottom: -10%;
            background: linear-gradient(
              45deg,
              rgba(255,255,255,0.1) 0%,
              rgba(255,255,255,0.05) 100%
            );
            opacity: 0;
            transition: all 0.4s ease;
            transform: scale(0.8) translateY(calc(var(--parallax-y) * 0.5));
            pointer-events: none;
          }
          
          .card-content {
            position: relative;
            z-index: 2;
            transform: translateZ(20px);
          }
          
          .title {
            font-size: 34px;
            font-weight: 500;
            margin-bottom: 1rem;
            transition: transform 0.4s ease;
          }
          
          .info {
            font-size: 18px;
            color: var(--gray);
            line-height: 1.6;
            transition: transform 0.4s ease;
          }
          
          &:hover {
            transform: translateY(calc(var(--parallax-y) - 5px)) translateZ(20px) scale(1.02);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
            
            .card-bg {
              opacity: 1;
              transform: scale(1.05) translateY(calc(var(--parallax-y) * 0.5));
              background: radial-gradient(
                  circle at 80% 100%,
                  rgba(255, 0, 0, 0.5),
                  rgba(255, 0, 0, 0) 40%
                ),
            }
            
            .title {
              transform: translateY(-5px);
            }
            
            .info {
              transform: translateY(-3px);
            }
          }
          
          animation: float 4s ease-in-out infinite, cardFadeIn 0.6s ease-out;
          @for $i from 1 through 6 {
            &:nth-child(#{$i}) {
              animation-delay: #{$i * 0.2}s, #{$i * 0.1}s;
            }
          }
        }
      }
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes cardFadeIn {
    from {
      opacity: 0;
      transform: translateY(60px) translateZ(-20px) rotateX(15deg);
    }
    to {
      opacity: 1;
      transform: translateY(var(--parallax-y)) translateZ(0) rotateX(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(var(--parallax-y)) translateZ(0) rotateX(0);
    }
    50% {
      transform: translateY(calc(var(--parallax-y) - 10px)) translateZ(0) rotateX(2deg);
    }
  }

  @media (max-width: 1000px) {
    .services-section {
      .services {
        .heading {
          h1 {
            margin-top: 4dvw;
            font-size: 40px;
          }
        }
        
        .services-cards {
          grid-template-columns: 1fr;
          padding: 1rem 0;
          
          .card {
            padding: 1.5rem;
            
            .title {
              font-size: 24px;
            }
            
            .info {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
