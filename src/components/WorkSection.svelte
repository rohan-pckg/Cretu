<!-- WorkSection.svelte -->
<script>
    import { onMount } from "svelte";

    // Fixed set of image paths (ensure these exist in your public folder)
    const workImages = [
        "/work5.png",
        "/work2.png",
        "/work3.png",
        "/work4.png",
        "/work1.png",
        "/work2.png", // Added as a backup, but we’ll only use 5 for the grid
    ];

    let workSection;

    onMount(() => {
        // Use Intersection Observer for scroll-based animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.1 },
        ); // Trigger when 10% of the section is visible

        if (workSection) {
            observer.observe(workSection);
        }

        // Fallback: Ensure content is visible by default if JavaScript fails
        workSection.classList.add("default-visible");
    });
</script>

<div class="work-section container" bind:this={workSection}>
    <h2>Some of our work!</h2>
    <div class="work-grid">
        <div class="work-image large top-left">
            <img src={workImages[0]} alt="Large work sample" />
        </div>
        <div class="work-image medium top-right">
            <img src={workImages[1]} alt="Medium work sample 1" />
        </div>
        <div class="work-image small bottom-left">
            <img src={workImages[2]} alt="Small work sample 2" />
        </div>
        <div class="work-image medium bottom-right">
            <img src={workImages[3]} alt="Medium work sample 3" />
        </div>
        <div class="work-image large bottom-center">
            <img src={workImages[4]} alt="Large work sample 4" />
        </div>
    </div>
</div>

<style lang="scss">
    .work-section {
        background: var(--dark);
        padding: 4rem 2rem;
        color: var(--white);
        position: relative;
        overflow: hidden;

        h2 {
            font-family: "Base Neue";
            font-size: 48px;
            font-weight: 500;
            margin-bottom: 3rem;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            opacity: 1;
            transform: translateY(0);
            transition:
                opacity 1s ease-out,
                transform 1s ease-out;
        }
        .work-grid {
            display: grid;
            grid-template-areas:
                "top-left top-right"
                "bottom-left bottom-right"
                "bottom-center bottom-center";
            grid-gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 0;

            .large {
                aspect-ratio: 16 / 9;
                overflow: hidden;
            }

            .medium {
                aspect-ratio: 4 / 3;
                overflow: hidden;
            }

            .small {
                aspect-ratio: 1 / 1;
                overflow: hidden;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            border-radius: 16px;
            transition:
                transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
                box-shadow 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .work-image {
            // Default visible
            opacity: 1;
            transform: translateY(0) scale(1);
            transition:
                opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1),
                transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);

            &:hover img {
                transform: scale(1.08);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            }

            // Specific positioning for Bento grid
            &.top-left {
                grid-area: top-left;
            }
            &.top-right {
                grid-area: top-right;
            }
            &.bottom-left {
                grid-area: bottom-left;
            }
            &.bottom-right {
                grid-area: bottom-right;
            }
            &.bottom-center {
                grid-area: bottom-center;
            }
        }
    }

    @media (max-width: 1000px) {
        .work-section {
            padding: 2rem 1rem;

            h2 {
                font-size: 40px;
                margin-bottom: 2rem;
            }

            .work-grid {
                grid-template-areas:
                    "top-left"
                    "top-right"
                    "bottom-left"
                    "bottom-right"
                    "bottom-center";
                grid-template-columns: 1fr;
                grid-gap: 1rem;
                padding: 1rem 0;
            }

            .work-image {
                &:hover img {
                    transform: scale(1.04);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
                }
            }
        }
    }
</style>
