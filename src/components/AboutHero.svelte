<!-- AboutSection.svelte -->
<script>
  import { onMount } from 'svelte';

  let aboutSection;
  let videoRef;

  onMount(() => {
    // Use Intersection Observer for scroll-based animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing after animation
          // Play video when section is visible
          if (videoRef) videoRef.play();
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    // Fallback: Ensure content is visible by default if JavaScript fails
    aboutSection.classList.add('default-visible');
  });
</script>

<div class="about-section" bind:this={aboutSection}>
  <div class="content-wrapper container">
    <div class="text-content">
      <h1>Cretu</h1>
      <p>At Cretu, we live by the Latin essence of our name: "Born of." We are born of ideas, born of passion, and born of the drive to bring your vision to life. As a full-service film production and media powerhouse, we craft stories that captivate, connect, and inspire.</p>
      <p>Founded with the spirit of innovation, Cretu began as a premier film production company. Now, we’ve expanded to become your one-stop destination for all things media and marketing. From cinematic storytelling to dynamic branding strategies, we do it all—and we do it with excellence.</p>
    </div>
    <div class="video-content">
      <video bind:this={videoRef} muted loop playsinline class="about-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

<style lang="scss">
  .about-section {
    background: var(--dark);
    color: var(--white);
    position: relative;
    overflow: hidden;
    max-width: 1440px; // Match the image width
    margin: 0 auto;
    min-height: 100vh; // Ensure section takes full viewport height

    .content-wrapper {
      display: flex;
      gap: 2rem;
      align-items: stretch; // Stretch items to full height
      justify-content: space-between;
      min-height: 100vh; // Match the full viewport height

      @media (max-width: 1000px) {
        flex-direction: column;
        gap: 1.5rem;
        min-height: auto; // Reset on mobile
      }
    }

    .text-content {
      flex: 1;
      max-width: 50%;
      display: flex;
      flex-direction: column;
      margin-top : 4rem;
      h1 {
        font-family: "Base Neue";
        font-size: 48px;
        font-weight: 600;
        color: var(--red); // Red title as in the image
        // Default visible
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
      }

      p {
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 1rem;
        // Default visible
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.9s cubic-bezier(0.25, 1, 0.5, 1), transform 0.9s cubic-bezier(0.25, 1, 0.5, 1);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .video-content {
      flex: 1;
      max-width: 50%;
      overflow: hidden;
      height: 90vh; // Full viewport height for video
      position: relative; // Ensure video stays within bounds

      .about-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        // Default visible
        opacity: 1;
        transform: scale(1);
        transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
      }
    }

    &.is-visible h1,
    &.is-visible p,
    &.is-visible .about-video {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    &.default-visible h1,
    &.default-visible p,
    &.default-visible .about-video {
      opacity: 1;
      transform: translateY(0) scale(1);
      transition: none; // No animation if default visible
    }

    // Initial hidden state for animation (optional, but content is visible by default)
    h1,
    p,
    .about-video {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
  }

  @media (max-width: 1000px) {
    .about-section {
      min-height: auto; // Reset full height on mobile

      .content-wrapper {
        flex-direction: column;
      }

      .text-content,
      .video-content {
        max-width: 100%;
        padding: 1rem;
      }

      .text-content h1 {
        font-size: 36px;
        margin-bottom: 1rem;
      }

      .text-content p {
        font-size: 16px;
      }

      .video-content {
        width: 100vw;

        .about-video {
          position: static; // Reset position on mobile
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
