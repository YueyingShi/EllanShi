<script>
	import Banner from '$lib/components/Banner.svelte';
	import H1 from '$lib/components/atoms/headings/H1.svelte';
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	import { Icon, ArrowUp, AdjustmentsHorizontal, Funnel } from 'svelte-hero-icons';
</script>

<Banner>
	<img src="/ellanSign.svg" class="h-12 pb-1 md:h-16 inline" alt="Ellan sign" />
	<h1 class="text-xl md:text-3xl w-2/3 font-medium">Who I am, and what I did</h1>
</Banner>
<!-- here is the general background information block -->

<div class="max-w-6xl my-6 mx-auto grid grid-cols-3 gap-4">
	<div>
		<p>
			My Principle: Data-driven & User-centric In the design world, I advocate for the integration
			of data-driven insights and user-centric strategies. Analyzing user feedback and behavior
			empowers designers to craft solutions that are not just visually appealing but also
			functionally effective, addressing real user challenges.
		</p>
	</div>
	<div>
		<p>
			My Philosophy: Design Empowered by Tech As a designer, I'm dedicated to unraveling
			technology's intricacies, not treating it as a black box. I firmly believe that a designer's
			ability to enhance user experiences thrives on a deep understanding of technology. Explaining
			a black box becomes challenging when you're in the dark about its inner workings.
		</p>
	</div>
	<div>
		<p>
			My Ambition: Cross-media Cross-senses Interaction I dedicate myself to crafting experiences
			that seamlessly blend the digital and human realms. My ambition is to create subtly
			impressive, cross-sensory encounters that captivate without overwhelming.
		</p>
	</div>
</div>
