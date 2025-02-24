<script type="text/javascript">
	import { Router, Route, Link } from "svelte-routing";
	import Home from "../routes/Home.svelte"
	import About from "../routes/About.svelte"
	import Contact from "../routes/Contact.svelte"
</script>

<nav class="container">
    <div class="nav-left">
    	<Link to="/">
    		<img src="/cretu_logo.svg">
    	</Link>
    </div>
    <div class="nav-right">
    	<Link to="/about">About</Link>
        <div class="contact-link">
        <Link to="/contact">Contact</Link>
        <img class="arrow-icon" src="../public/right_arrow.svg">
        </div>
    </div>
</nav>


<style lang="scss">

	
a {
  color: var(--white);
  text-decoration: none;
  padding: 0;
}

a:hover{
	color : var(--red);
}

	nav{
		.arrow-icon{
			padding-left :  10px;
		}
		

		display: flex;
		justify-content: space-between;
		.nav-left{
			
		}
		.nav-right{
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 2dvw;
			align-self: center;
		}
	}

</style>
