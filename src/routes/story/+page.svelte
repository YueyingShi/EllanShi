<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import Banner from '$lib/components/Banner.svelte';
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';

	import { Icon, ArrowUp, AdjustmentsHorizontal, Funnel } from 'svelte-hero-icons';
</script>

<Banner>
	<img src="/ellanSign.svg" class="h-12 pb-1 md:h-16 inline" alt="Ellan sign" />
	<h1 class="text-xl md:text-3xl w-2/3 font-medium">Who I am, and what I did</h1>
</Banner>
<!-- here is the general background information block -->

<div class="max-w-6xl my-6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
	<div>
		<H4>My Principle</H4>
		<p>
			Data-driven & User-centric In the design world, I advocate for the integration of data-driven
			insights and user-centric strategies. Analyzing user feedback and behavior empowers designers
			to craft solutions that are not just visually appealing but also functionally effective,
			addressing real user challenges.
		</p>
	</div>
	<div>
		<H4>My Philosophy</H4>
		<p>
			Design Empowered by Tech As a designer, I'm dedicated to unraveling technology's intricacies,
			not treating it as a black box. I firmly believe that a designer's ability to enhance user
			experiences thrives on a deep understanding of technology. Explaining a black box becomes
			challenging when you're in the dark about its inner workings.
		</p>
	</div>
	<div>
		<H4>My Ambition</H4>
		<p>
			Cross-media Cross-senses Interaction I dedicate myself to crafting experiences that seamlessly
			blend the digital and human realms. My ambition is to create subtly impressive, cross-sensory
			encounters that captivate without overwhelming.
		</p>
	</div>
</div>

<ChapterHeader>Education</ChapterHeader>
<div class="max-w-6xl my-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
	<ExperienceElement
		title="Human-Technology Interaction Master"
		subtitle="2020-2022 | Eindhoven University of Technology"
		description="Courses include user experience methods, data analysis, ergonomics, data-aided design, data visualization, machine learning and design, principles of robot interaction, etc."
	/>
	<ExperienceElement
		title="Industrial Design Bechelor"
		subtitle="2014-2018 | South China University of Technology"
		description="Courses include Interaction Design, Vehicle Design, 3D Design, Design Psychology, Design
	Management, Design Methodology, etc."
	/>
</div>

<ChapterHeader>Work Experience</ChapterHeader>
<div class="max-w-6xl my-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
	<ExperienceElement
		title="UX Designer"
		subtitle="2022.09 - now | Deerns"
		description="I am responsible for UX designer & researcher for digital solutions, which including UX Web apps development, design system set-up & maintenance. "
	/>
</div>
