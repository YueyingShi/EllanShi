<script>
	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';
	import ThreeCols from '$lib/components/molecules/ThreeCols.svelte';
	import ThreeColsItem from '$lib/components/molecules/ThreeColsItem.svelte';
	import { Icon, ClipboardDocumentList, MagnifyingGlass, ChartBar } from 'svelte-hero-icons';
	import H4 from '$lib/components/atoms/headings/H4.svelte';
</script>

<div class="max-w-4xl flex flex-col gap-4">
	<ChapterHeader bg_title="00">Introduction</ChapterHeader>
	<p />
	<H4>Understanding Presence</H4>
	<p>
		In today’s digital age, virtual environments (VEs) are revolutionizing education, training, and
		entertainment. However, a crucial aspect of these experiences is the sense of presence—the
		feeling of actually being "there" in a virtual space. Our recent project delves into this
		phenomenon, employing the Rasch Model, a sophisticated tool from psychometrics, to measure and
		understand how real these virtual worlds feel to users. By analyzing this sense of presence, we
		aim to enhance the design and effectiveness of VR applications, making them more immersive and
		impactful.
	</p>
	<p>
		Presence in virtual environments (VEs) refers to the "illusion of non-mediation," where users
		immerse themselves so deeply that they no longer notice the mediation interface, such as VR
		headsets. This concept, defined by researchers Lombard and Ditton (1997), implies that the
		medium becomes transparent or invisible to the user, creating a sense of being in the virtual
		world as if it were real.
	</p>
	<ChapterHeader bg_title="01" id="Introduction">The Concept of Presence</ChapterHeader>

	<p>
		Presence in virtual environments refers to the user's psychological state of being immersed in a
		virtual space. It's a critical factor for creating truly engaging VR experiences. Measuring
		presence allows us to fine-tune the elements that contribute to this immersion, from visual and
		auditory cues to the interactivity of the environment. This chapter explores why presence is
		essential for the success of VR applications, particularly in educational and training contexts,
		where a higher sense of presence can significantly improve learning outcomes and user
		engagement.
	</p>
	<div class="flex gap-4">
		<img src="/projectimg/rasch/1a.svg" alt="wearing ve helmet" class="w-1/2" />
		<img src="/projectimg/rasch/1b.svg" alt="wearing ve helmet" class="w-1/2" />
	</div>
	<H4>Conventional Measurements of Presence</H4>
	<ThreeCols>
		<ThreeColsItem title="Self-reports">
			<svelte:fragment slot="icon">
				<Icon src={ClipboardDocumentList} size="24px" mini color="white" />
			</svelte:fragment>
			<svelte:fragment slot="description">
				<p>
					<strong>Method:</strong> Utilizes questionnaires and interviews to gather subjective
					feedback from users.
					<br />
					<strong>Advantages:</strong> Cost-effective and allows for comparisons between different
					studies.
					<br />
					<strong>Disadvantages:</strong> Prone to bias and subjectivity, which may affect the reliability
					of results.
				</p>
			</svelte:fragment>
		</ThreeColsItem>
		<ThreeColsItem title="Behavioral observation">
			<svelte:fragment slot="icon">
				<Icon src={MagnifyingGlass} size="24px" mini color="white" />
			</svelte:fragment>
			<svelte:fragment slot="description">
				<p>
					<strong>Method:</strong> Observes user behavior to assess their consistency in real-life
					scenarios.
					<br />
					<strong>Advantages:</strong> Can provide insights into natural reactions.
					<br />
					<strong>Disadvantages:</strong> Predicting participant behavior is challenging, and the method
					lacks standardization.
				</p>
			</svelte:fragment>
		</ThreeColsItem>
		<ThreeColsItem title="Physiological measures">
			<svelte:fragment slot="icon">
				<Icon src={ChartBar} size="24px" mini color="white" />
			</svelte:fragment>
			<svelte:fragment slot="description">
				<p>
					<strong>Method:</strong> Measures physical responses such as EEG and heart rate to gauge
					presence.
					<br />
					<strong>Advantages:</strong> Offers objective data.
					<br />
					<strong>Disadvantages:</strong> High cost and sensitivity to content variations can limit effectiveness.
				</p>
			</svelte:fragment>
		</ThreeColsItem>
	</ThreeCols>

	<p>
		Traditional presence measurement methods face several issues:
		<br />
		<strong>Inconsistency:</strong> Results from self-reports, behavioral observations, and
		physiological measures often conflict.
		<br />
		<strong>Lack of Standardization:</strong> No standardized instrument exists to compare presence across
		different studies and virtual environments, making it hard to draw reliable conclusions.
	</p>
	<ChapterHeader bg_title="02" id="Research">The Rasch Model</ChapterHeader>

	<p>
		To address the challenges for traditional presence measurement, Haans and IJsselsteijn proposed
		a Rasch-based approach. The Rasch Model is a powerful statistical tool used to measure latent
		traits such as abilities and attitudes.
	</p>
	<p>
		This method treats various indicators of presence (e.g., self-reports, physiological measures)
		as reflections of presence, not as independent scales. The Rasch model allows for:
	</p>
	<ul>
		<li>
			<strong>Test-Free Assessment:</strong> Items from an item bank are used to measure presence without
			needing standardized instruments.
		</li>
		<li>
			<strong>Independent Estimation:</strong> Separates the difficulty of items from the individual's
			propensity for presence.
		</li>
		<li>
			<strong>Scale Equating:</strong> Ensures measures are interchangeable across different studies.
		</li>
	</ul>
	<p>
		In our project, it serves to quantify the sense of presence in virtual environments. By
		analyzing user responses, the Rasch Model helps us understand how various factors contribute to
		the overall feeling of presence. This model not only measures the difficulty of tasks within the
		VE but also assesses the abilities of users, providing a comprehensive understanding of how
		immersive a virtual experience can be.
	</p>
	<ChapterHeader bg_title="03" id="Research"
		>Current Study: Goals and Research Questions</ChapterHeader
	>
	<H4>Goals</H4>
	<ol>
		<li>
			<strong>Extend the Presence Item Bank:</strong> Propose new presence indicators and validate them
			using the Rasch model.
		</li>
		<li>
			<strong>Enable Cross-Study Comparisons:</strong> Equate measurements from different subsets of
			indicators to allow for comparison across studies.
		</li>
	</ol>

	<H4>Research Questions</H4>
	<ol>
		<li>
			Can presence be measured effectively in each VE using a combination of self-reports,
			behavioral, and physiological indicators?
		</li>
		<li>Can measurements from different subsets of items be equated on the same scale?</li>
		<li>Do different VEs elicit different levels of presence?</li>
	</ol>

	<H4>Exploratory Question</H4>
	<p>
		Do the novel Rasch-based measures correlate with those from the conventional IPQ presence
		instrument?
	</p>

	<p>
		This study demonstrates the feasibility of using a Rasch-based approach to create a reliable and
		standardized method for measuring presence in virtual environments, enabling meaningful
		comparisons and enhancing the understanding of user experiences in different VEs.
	</p>

	<ChapterHeader bg_title="04" id="Methods">Our Methodology</ChapterHeader>
	<p>
		Our study was meticulously designed to assess the sense of presence in different virtual
		environments. Participants experienced two different VEs, each with distinct levels of
		immersion.
	</p>
	<div class="flex gap-4 py-4">
		<img src="/projectimg/rasch/5.png" class="w-1/2" />
		<img src="/projectimg/rasch/6.png" class="w-1/2" />
	</div>

	<p>
		All conventional measures of presence have been used. during the session, we conducted behavior
		observation and physiological measure (EEG). After these sessions, they completed questionnaires
		aimed at measuring their sense of presence, focusing on aspects like spatial presence,
		involvement, and realism.
	</p>
	<div class="flex gap-4 py-4">
		<img src="/projectimg/rasch/7.png" class="w-1/2 bg-white px-4" />
		<img src="/projectimg/rasch/8.png" class="w-1/2 bg-white pr-4" />
	</div>
	<p>
		We then used the Rasch Model to analyze these data, understanding the underlying principle under
		the rate of achieve of each items in terms of sense of presence. This methodology ensured a
		detailed and accurate measurement of presence across diverse virtual settings.
	</p>

	<ChapterHeader bg_title="05" id="Key findings">Key Findings and Insights</ChapterHeader>
	<p>
		The analysis revealed that certain elements, such as spatial audio, realistic graphics, and
		interactive components, significantly enhance the sense of presence in virtual environments. The
		Rasch Model provided a nuanced understanding of how these factors impact user experience. Our
		findings suggest that to create more immersive VR experiences, developers should focus on these
		critical elements. The practical applications of this research are vast, offering valuable
		insights for improving VR-based educational tools, training programs, and entertainment
		applications, making them more engaging and effective.
	</p>
	<div class="flex gap-4 py-4">
		<img src="/projectimg/rasch/17a.png" alt="" class="w-1/3 px-4 bg-white" />
		<img src="/projectimg/rasch/17b.png" alt="" class="w-1/3 px-4 bg-white" />
		<img src="/projectimg/rasch/17c.png" alt="" class="w-1/3 px-4 bg-white" />
	</div>
	<ChapterHeader bg_title="06" id="Discussion">Challenges and Future Directions</ChapterHeader>

	<p>
		While our study provided valuable insights, it also highlighted several challenges. Ensuring a
		diverse participant pool is crucial for comprehensive results, and continuously updating VR
		technologies and methodologies is essential. Future research will expand to different types of
		virtual environments and incorporate more advanced VR technologies. By addressing these
		challenges, we aim to further refine our understanding of presence in virtual environments,
		paving the way for even more immersive and effective VR experiences.
	</p>
	<ChapterHeader bg_title="07" id="Conclusion">Conclusion</ChapterHeader>

	<p>
		Our project illustrates the potential of the Rasch Model in measuring the sense of presence in
		virtual environments. By understanding and enhancing this sense, we can create more engaging and
		effective virtual experiences. This research not only contributes to the field of VR but also
		provides practical guidelines for developers seeking to improve the immersive quality of their
		applications. We look forward to further exploring this exciting intersection of psychometrics
		and virtual reality.
	</p>
</div>
