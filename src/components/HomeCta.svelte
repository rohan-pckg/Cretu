<!-- ContactSection.svelte -->
<script>
  import { onMount } from 'svelte';
 import Contact from "../routes/Contact.svelte";
  import { Link } from "svelte-routing";

  let contactSection;

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

    if (contactSection) {
      observer.observe(contactSection);
    }

    // Fallback: Ensure content is visible by default if JavaScript fails
    contactSection.classList.add('default-visible');
  });
</script>

<div class="contact-section" bind:this={contactSection}>
  <div class="contact-content container">
    <div class="heading">
      <h2>Let’s talk about how we can bring your story to life.
    Contact us today and discover the power of being born of creativity.</h2>
    </div>

    <div class="link">
        <Link to="/contact" style="color: #ff0000;" >Contact us</Link>

      </div>

  </div>

 
</div>

<style lang="scss">

  img{
    padding-left : 10px;
  }

  .link a{
    color : red;
  }

  .contact-section {
    background: var(--red);
    padding: 2rem;
    .contact-content{
      display: grid;
    grid-template-columns: 4fr 1fr;
    align-items: center;
    grid-gap : 2rem;
    }

    h2 {
      font-family: "Base Neue";
      font-size: 36px;
      font-weight: 500;
      opacity: 1;
      transform: translateY(0);
      transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .link {
      border: none;
      background: var(--white);
      padding: 0.8rem 16px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      width : 153px;
      text-align: center;
      transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1), background 0.4s ease, color 0.4s ease;
      overflow: hidden;
      transform: translateY(0);

      &:hover {
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent);
          opacity: 0.8;
          transform: scale(1.5);
          transition: transform 0.4s ease;
        }
      }

      &:active {
        transform: translateY(0) scale(0.98);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }

    &.is-visible h2,
    &.is-visible p,
    &.is-visible .contact-button {
      opacity: 1;
      transform: translateY(0);
    }

    &.default-visible h2,
    &.default-visible p,
    &.default-visible .contact-button {
      opacity: 1;
      transform: translateY(0);
      transition: none; // No animation if default visible
    }

    // Remove initial hidden state to ensure visibility
    /* h2,
    p,
    .contact-button {
      opacity: 0;
      transform: translateY(20px);
    } */
  }

  @media (max-width: 1000px) {
    .contact-section {
      padding: 1.5rem;
      .contact-content{
          display: grid;
          grid-template-columns: 1fr;
      h2 {
        font-size: 24px;
        margin-bottom: 0.8rem;
      }
    }
  }
}
</style>
