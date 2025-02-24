<!-- WhyUsSection.svelte -->
<script>
  import { onMount } from 'svelte';

  let whyUsSection;

  onMount(() => {
    // Use Intersection Observer for scroll-based animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    if (whyUsSection) {
      observer.observe(whyUsSection);
    }

    // Fallback: Ensure content is visible by default if JavaScript fails
    whyUsSection.classList.add('default-visible');
  });
</script>

<div class="why-us-section container" bind:this={whyUsSection}>
  <h1>Why Choose Cretu?</h1>
  <div class="cards-grid">
    <div class="card">
      <h3>Holistic Approach</h3>
      <p>We’re not just about one piece of the puzzle; we’re here to assemble the whole picture, seamlessly integrating all aspects of media and marketing.</p>
    </div>
    <div class="card">
      <h3>Expertise You Can Trust</h3>
      <p>Our team of seasoned professionals brings years of experience across industries to every project.</p>
    </div>
    <div class="card">
      <h3>Creativity Unleashed</h3>
      <p>We don’t just think outside the box — we reinvent the box entirely. At Cretu, innovation is our foundation.</p>
    </div>
    <div class="card">
      <h3>Results-Driven</h3>
      <p>Your success is our success. We focus on delivering measurable outcomes that make an impact.</p>
    </div>
  </div>
</div>

<style lang="scss">
  .why-us-section {
    padding: 4rem 2rem;
    position: relative;
    overflow: hidden;
    width: 100%; // Full page width
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    h1 {
      font-family: "Base Neue";
      font-size: 48px;
      font-weight: 500;
      color: var(--white); // Vibrant red for contrast
      margin-bottom: 4rem;
      opacity: 1;
      transform: translateY(0);
      transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2.5rem;
      max-width: 100%; // Ensure full width
      margin: 0 auto;
      padding: 2rem 0;
      width: 100%; // Full page width for grid

      .card {
        background: var(--dim-dark); // Subtle white overlay for contrast
        border-radius: 8px; // Larger radius for modern feel
        padding: 2.5rem;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        // Default visible
        opacity: 1;
        transform: translateY(0) scale(1);
        transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease;

        h3 {
          font-family: "Base Neue";
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--white); // White for contrast on dark background
        }

        p {
          font-size: 18px;
          color: var(--gray); // Light gray for readability
          line-height: 1.6;
          margin-bottom: 0;
        }

        &:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.2); // Slightly more opaque on hover
        }
      }
    }

    &.is-visible h1,
    &.is-visible .card {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    &.default-visible h1,
    &.default-visible .card {
      opacity: 1;
      transform: translateY(0) scale(1);
      transition: none; // No animation if default visible
    }

    // Initial hidden state for animation (optional, but content is visible by default)
    h1,
    .card {
      opacity: 1;
      transform: translateY(30px) scale(0.95);
    }
  }

  @media (max-width: 1000px) {
    .why-us-section {
      min-height: auto; // Reset full height on mobile

      h1 {
        font-size: 30px;
        margin-bottom: 2rem;
      }

      .cards-grid {
        grid-template-columns: 1fr;
        grid-gap: 1.5rem;
      }

      .card {
        border-radius: 16px; // Smaller radius on mobile
        width : 60dvw;

        h3 {
          font-size: 16px;
        }

        p {
          font-size: 14px;
        }

        &:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
</style>
