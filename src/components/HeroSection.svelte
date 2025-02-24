<script type="text/javascript">
	import Contact from "../routes/Contact.svelte";
	import { Link } from "svelte-routing";

	import { onMount } from 'svelte';
    import gsap from 'gsap';

    import ScrollTrigger from 'gsap/ScrollTrigger';

  onMount(() => {
    gsap.from('.hero-section', { opacity: 0, y: 50, duration: 1 });
  });
</script>


<div class="hero-section container">
	<div class="heading">
		<h1>Welcome to <span class="highlight">Cretu</span> : Born of creativity, Inspired by you</h1>
	</div>

	<div class="hero-bottom">
		<div>
			<img class="banner" src="/hero-image.png">
		</div>

		<div class="content-section">
			<div class="content">
				<p>
				where stories are born of bold ideas and boundless passion. As a full-service <span>film production</span> and <span>media powerhouse</span>, we bring your vision to life with storytelling that captivates, connects, and inspires.
			</p>
			</div>
			<div class="link">
        <Link to="/contact">Lets talk</Link>
        <img class="arrow-icon" src="/right_arrow.svg">
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.hero-section{
		margin-bottom : 6rem;
		.heading{
			h1 {
			margin-top :  8dvw;
    		font-family: 'Base Neue';
    		font-size :  48px;
    		font-weight: 500;
    		width :  40rem;
  				}
  			.highlight{
  				color :  var(--red);
  			}
		}
		.hero-bottom{
			margin-top :  6dvh;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap :  4rem;

			.banner{
				width :  680px;
			}

			.content-section{
				display: grid;
				.content{
					font-size: 24px;
					margin :  0px;
				}

				.link{
					align-self: self-end;
				}
			}
		}
	}


	.arrow-icon{
			padding-left :  10px;
		}
		
	p{
		margin :  0;
		color : var(--gray);
	}

	span{
		color : var(--white);
		font-style: italic;
		font-weight: 600;
	}

	@media (max-width: 1300px) {
		.hero-section{
			.heading{
				h1{
					margin-top :  8dvw;
					font-size: 40px;
					width: 80dvw;
				}
			}


			.hero-bottom{
				grid-template-columns: 1fr;
				margin-top :  6dvh;
			display: grid;
				.banner{
					width : 80vw;
				}

				.content-section{
				.content{

				}

				.link{
					margin-top: 4rem;
				}
			}
			}
		}
		
	}

	@media (max-width: 500px) {
		.hero-section{
			.heading{
				h1{
					margin-top :  8dvw;
					font-size: 32px;
					width: 80dvw;
				}
			}


			.hero-bottom{
				grid-template-columns: 1fr;
				margin-top :  6dvh;
			display: grid;

				.banner{
					width : 80vw;
				}

				.content-section{

					.content{
						font-size: 16px;
					}

				}
			}
		}
		
	}
</style>
