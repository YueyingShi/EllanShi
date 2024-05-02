<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import Banner from '$lib/components/Banner.svelte';
	import H2 from '$lib/components/atoms/headings/H2.svelte';
	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';

	import { Icon, ArrowUp, AdjustmentsHorizontal, Funnel } from 'svelte-hero-icons';
	import Chapter from '$lib/components/molecules/Chapter.svelte';
	import H4 from '$lib/components/atoms/headings/H4.svelte';
</script>

<Banner>
	<div class="space-y-8 lg:flex lg:items-center lg:space-y-0 lg:gap-8">
		<div class="w-1/3">
			<img src="/EllanPhoto.jpg" alt="" class=" object-contain rounded-full" />
		</div>
		<div class=" w-2/3 space-y-6 h-full">
			<img src="/ellanSign.svg" class="h-12 pb-1 md:h-16 inline" alt="Ellan sign" />
			<p class="text-xl md:text-2xl font-medium opacity-50">
				I believed in the power of data-driven and user-centric. By analyzing user feedback and
				behavior, designers can create solutions that are visually appealing and functionally
				efficient, directly addressing user challenges.
			</p>
		</div>
	</div>
</Banner>
<!-- here is the general background information block -->

<!-- <div class="max-w-6xl my-6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
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
</div> -->

<div class="max-w-6xl my-12 mx-auto gap-8">
	<div class="grid lg:grid-cols-3 gap-8">
		<div class="space-y-8">
			<H4>Education</H4>
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
		<div class="space-y-8 col-span-2">
			<div class="grid lg:grid-cols-2 gap-8">
				<div class="space-y-8">
					<H4>Works</H4>
					<ExperienceElement
						title="UX Designer & Researcher"
						subtitle="2022.09 - now | Deerns"
						description="I am responsible for UX designer & researcher for digital solutions, which including UX Web apps development, design system set-up & maintenance. "
					/>
					<ExperienceElement
						title="UX Design Intern"
						subtitle="2021.09-2022.03 | Accenture"
						description="Worked as an interaction design intern at VanBerlo, one of the top design studios in the Netherlands under Accenture, I was responsible for user research, interaction and visual design, and user testing for design validation. Participated in client consulting projects and internal design tool development for the design team. "
					/>
					<ExperienceElement
						title="UX Designer"
						subtitle="2018.7-2019.9 | Konka"
						description="Mainly responsible for interaction design of smart TV software and system, including TV games, video chat , facial recognition applications, voice assistant, etc. Participated in the iteration of the main smart TV system with more than 21.9 million daily active users."
					/>
				</div>
				<div class="space-y-8">
					<H4>Part-time Projects</H4>
					<ExperienceElement
						title="Graphic Designer"
						subtitle="2022.09 - now | Glow Eindhoven"
						description="I was also responsible for the visual design of the posters for more than 30 exhibitions throughout the GLOW Festival."
					/>
					<ExperienceElement
						title="Installation Artist"
						subtitle="2022.09 - 2022.12 | Glow Eindhoven"
						description="The interactive installation 'Wayfinding' (fantasy mushrooms) is 80 interactive mushroom lights spreading over the whole two kilometers of the outdoor exhibition path. "
					/>
					<ExperienceElement
						title="New-media/Concept Artist"
						subtitle="2020.3 - 2020.8 | Pixel Forest"
						description="Responsible for exhibition design and event concept design for new media art exhibitions, wall projection shows, lighting and projection concept design for zoos, botanical gardens, etc. "
					/>
				</div>
			</div>
		</div>
	</div>
</div>
