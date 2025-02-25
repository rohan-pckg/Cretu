<script lang="javascript">
    import { Router, Route, Link } from "svelte-routing";
    import Home from "../routes/Home.svelte";
    import About from "../routes/About.svelte";
    import Contact from "../routes/Contact.svelte";
</script>

<nav class="container">
    <div class="nav-left">
        <Link to="/">
            <img src="/cretu_logo.svg" alt="cretu logo" />
        </Link>
    </div>
    <div class="nav-right">
        <Link to="/about">About</Link>
        <div class="contact-link">
            <Link to="/contact">Contact</Link>
            <img class="arrow-icon" src="/right_arrow.svg" alt="right-icon-arrow" />
        </div>
    </div>
</nav>

<style lang="scss">
    nav {
        .arrow-icon {
            padding-left: 10px;
        }

        display: flex;
        justify-content: space-between;
        .nav-right {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2dvw;
            align-self: center;
        }
    }

    @media (max-width: 800px) {
        nav {
            .nav-right {
                grid-gap: 5px;
            }
        }
    }
</style>
