<!-- ContactSection.svelte -->
<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";

    let contactSection;

    onMount(() => {
        if (!contactSection) return; // Safety check to avoid errors

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.1 }, // Trigger when 10% is visible
        );

        observer.observe(contactSection);
        contactSection.classList.add("default-visible"); // Fallback visibility
    });
</script>

<div class="contact-section" bind:this={contactSection}>
    <div class="contact-content container">
        <div class="heading">
            <h2>
                Cretu is more than a media company; it’s a movement. We’re here to empower your
                ideas, magnify your message, and bring your dreams to fruition. Whatever your
                vision, let’s create it together.
            </h2>
        </div>

        <div class="link">
            <Link to="/contact">Contact us</Link>
        </div>
    </div>
</div>

<style lang="scss">
    .contact-section {
        background: var(--red);
        padding: 2rem;

        .contact-content {
            display: grid;
            grid-template-columns: 4fr 1fr;
            align-items: center;
            grid-gap: 2rem;
        }

        h2 {
            font-family: "Base Neue";
            font-size: 36px;
            font-weight: 500;
            opacity: 1;
            transform: translateY(0);
            transition:
                opacity 1s cubic-bezier(0.25, 1, 0.5, 1),
                transform 1s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .link {
            border: none;
            background: var(--white);
            padding: 0.8rem 16px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            width: 153px;
            text-align: center;
            transition:
                transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
                box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1),
                background 0.4s ease;
        }

        .link :global(a) {
            color: red;
            text-decoration: none; /* Ensure no underline unless desired */
        }

        .link:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .link:active {
            transform: translateY(0) scale(0.98);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        &.is-visible h2 {
            opacity: 1;
            transform: translateY(0);
        }

        &.default-visible h2 {
            opacity: 1;
            transform: translateY(0);
            transition: none; /* No animation if default visible */
        }
    }

    @media (max-width: 1000px) {
        .contact-section {
            padding: 1.5rem;

            .contact-content {
                grid-template-columns: 1fr;
            }

            h2 {
                font-size: 24px;
                margin-bottom: 0.8rem;
            }
        }
    }
</style>
