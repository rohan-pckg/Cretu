<!-- ContactForm.svelte -->
<script>
  import { onMount } from 'svelte';

  let contactForm;

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

    if (contactForm) {
      observer.observe(contactForm);
    }

    // Fallback: Ensure content is visible by default if JavaScript fails
    contactForm.classList.add('default-visible');
  });
</script>

<div class="contact-form container" bind:this={contactForm}>
  <div class="content-wrapper">
    <div class="left-content">
      <h2>Let’s be in touch</h2>
      <p>For general inquiries, please fill out the information below. One of our associates will contact you as soon as possible.</p>
      <form class="contact-form-fields">
        <input type="text" placeholder="Name *" required />
        <input type="text" placeholder="Country" required />
        <input type="email" placeholder="Email *" required />
        <textarea placeholder="Messages" required></textarea>
        <button type="submit" class="send-button">Submit</button>
      </form>
      <p class="footer-text">© 2025 CRETU</p>
    </div>
  </div>
</div>

<style lang="scss">
  .contact-form {
    background: var(--dark); // Black background for dark mode
    padding: 4rem 2rem;
    color: var(--white);
    position: relative;
    overflow: hidden;
    width: 100%; // Full width
    margin: 0 auto;
    min-height: 100vh; // Ensure full viewport height for cinematic feel

    .header {
      margin-bottom: 4rem; // Increased spacing to match image

      .number {
        font-family: "Base Neue";
        font-size: 48px;
        font-weight: 700;
        color: var(--white);
        opacity: 0.5; // Subtle effect as in image
        // Default visible
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
      }
    }

    .content-wrapper {
      display: flex;
      gap: 10rem; // Increased gap to match image spacing
      align-items: flex-start;
      justify-content: center; // Center content horizontally

      @media (max-width: 1000px) {
        flex-direction: column;
        gap: 1.5rem;
      }
    }

    .left-content {
      flex: 1;
      max-width: 50%; // Maintain half-width on desktop
      padding: 0; // Remove padding to match image
      position: relative; // Ensure footer is positioned correctly

      h2 {
        font-family: "Base Neue";
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 1rem;
        color: var(--white);
        // Default visible
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
      }

      p {
        font-size: 16px;
        color: #ccc; // Light gray for readability
        margin-bottom: 2rem; // Increased spacing to match image
        line-height: 1.6;
        // Default visible
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.9s cubic-bezier(0.25, 1, 0.5, 1), transform 0.9s cubic-bezier(0.25, 1, 0.5, 1);
      }

      .contact-form-fields {
        display: flex;
        flex-direction: column;
        gap: 1.5rem; // Increased gap to match image spacing

        input,
        textarea {
          background: transparent; // Remove background
          border: none; // Remove border
          border-bottom: 1px solid rgba(255, 255, 255, 0.3); // Single underline
          padding: 0.8rem 0; // Adjust padding to match image
          font-size: 16px;
          color: var(--white);
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;

          &:focus {
            border-color: var(--red); // Red underline on focus
            box-shadow: 0 2px 4px rgba(255, 0, 0, 0.3); // Subtle shadow on focus
          }

          &::placeholder {
            color: var(--gray); // Gray placeholder text
            opacity: 0.7;
          }
        }

        textarea {
          height: 120px; // Adjust height to match image
          resize: vertical; // Allow vertical resizing only
          border-bottom: 1px solid rgba(255, 255, 255, 0.3); // Single underline for textarea
        }

        .send-button {
          background: var(--white);
          color: var(--dark);
          border: none;
          padding: 0.8rem 2rem;
          font-size: 16px;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          align-self: flex-start; // Align left as in image
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1), background 0.4s ease, color 0.4s ease;
          position: relative;
          overflow: hidden;
          margin-top: 1.5rem; // Space above button to match image
          // Default visible
          opacity: 1;
          transform: translateY(0);

          &:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            background: #ff0000; // Red on hover
            color: var(--white);

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
      }

      .footer-text {
        font-size: 14px;
        color: #999;
        margin-top: 2rem; // Increased spacing to match image
        text-align: center;
        position: absolute;
        bottom: -60px; // Position below content, matching image
        left: 50%;
        transform: translateX(-50%);
        // Default visible
        opacity: 1;
        transform: translateY(0) translateX(-50%);
        transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
      }
    }

    &.is-visible .number,
    &.is-visible h2,
    &.is-visible p,
    &.is-visible .contact-form-fields input,
    &.is-visible .contact-form-fields textarea,
    &.is-visible .send-button,
    &.is-visible .footer-text {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }

    &.default-visible .number,
    &.default-visible h2,
    &.default-visible p,
    &.default-visible .contact-form-fields input,
    &.default-visible .contact-form-fields textarea,
    &.default-visible .send-button,
    &.default-visible .footer-text {
      opacity: 1;
      transform: translateY(0) translateX(0);
      transition: none; // No animation if default visible
    }

    // Initial hidden state for animation (optional, but content is visible by default)
    /* .number,
    h2,
    p,
    .contact-form-fields input,
    .contact-form-fields textarea,
    .send-button,
    .footer-text {
      opacity: 0;
      transform: translateY(20px);
    } */
  }

  @media (max-width: 1000px) {
    .contact-form {
      padding: 2rem 1rem;
      min-height: auto; // Reset full height on mobile

      .header {
        margin-bottom: 1.5rem;

        .number {
          font-size: 36px;
        }
      }

      .content-wrapper {
        flex-direction: column;
      }

      .left-content {
        max-width: 100%;
        padding: 0;
        margin-bottom: 1rem;

        h2 {
          font-size: 28px;
          margin-bottom: 0.8rem;
        }

        p {
          font-size: 14px;
          margin-bottom: 1rem;
        }

        .contact-form-fields {
          gap: 0.8rem;

          input,
          textarea {
            padding: 0.6rem 0;
            font-size: 14px;
          }

          textarea {
            height: 100px; // Reduced height on mobile
          }

          .send-button {
            padding: 0.6rem 1.5rem;
            font-size: 14px;
            margin-top: 1rem;
          }
        }

        .footer-text {
          font-size: 12px;
          margin-top: 1rem;
          position: static; // Reset position on mobile
          transform: none; // Reset transform
          text-align: center;
          bottom: auto; // Remove absolute positioning
        }
      }
    }
  }
</style>
