<script>
	import ListItem from '$lib/components/molecules/ListItem.svelte';
	import { Icon, ClipboardDocumentList, MagnifyingGlass, ChartBar } from 'svelte-hero-icons';
	import H5 from '$lib/components/atoms/types/H5.svelte';
	import H4 from '$lib/components/atoms/types/H4.svelte';
	import H3 from '$lib/components/atoms/types/H3.svelte';
	import H2 from '$lib/components/atoms/types/H2.svelte';
	import Subtitle3 from '$lib/components/atoms/types/Subtitle3.svelte';
</script>

<div class="max-w-4xl flex flex-col gap-4">
	<H2 id="Introduction">Introduction</H2>

	<H5>Understanding Presence</H5>
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
	<H5>The Concept of Presence</H5>

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
	<H5>Conventional Measurements of Presence</H5>

	<ListItem title="Self-reports">
		<svelte:fragment slot="icon">
			<Icon src={ClipboardDocumentList} size="32px" mini color="white" />
		</svelte:fragment>
		<svelte:fragment slot="text">
			<Subtitle3>Method:</Subtitle3>
			Utilizes questionnaires and interviews to gather subjective feedback from users.
			<br />
			<Subtitle3>Advantages:</Subtitle3> Cost-effective and allows for comparisons between different
			studies.
			<br />
			<Subtitle3>Disadvantages:</Subtitle3> Prone to bias and subjectivity, which may affect the reliability
			of results.
		</svelte:fragment>
	</ListItem>
	<ListItem title="Behavioral observation">
		<svelte:fragment slot="icon">
			<Icon src={MagnifyingGlass} size="32px" mini color="white" />
		</svelte:fragment>

		<svelte:fragment slot="text">
			<Subtitle3>Method:</Subtitle3> Observes user behavior to assess their consistency in real-life
			scenarios.
			<br />
			<Subtitle3>Advantages:</Subtitle3> Can provide insights into natural reactions.
			<br />
			<Subtitle3>Disadvantages:</Subtitle3> Predicting participant behavior is challenging, and the method
			lacks standardization.
		</svelte:fragment>
	</ListItem>
	<ListItem title="Physiological measures">
		<svelte:fragment slot="icon">
			<Icon src={ChartBar} size="32px" mini color="white" />
		</svelte:fragment>
		<svelte:fragment slot="text">
			<p>
				<Subtitle3>Method:</Subtitle3> Measures physical responses such as EEG and heart rate to gauge
				presence.
				<br />
				<Subtitle3>Advantages:</Subtitle3> Offers objective data.
				<br />
				<Subtitle3>Disadvantages:</Subtitle3> High cost and sensitivity to content variations can limit
				effectiveness.
			</p>
		</svelte:fragment>
	</ListItem>

	<p>
		Traditional presence measurement methods face several issues:
		<br />
		<Subtitle3>Inconsistency:</Subtitle3> Results from self-reports, behavioral observations, and physiological
		measures often conflict.
		<br />
		<Subtitle3>Lack of Standardization:</Subtitle3> No standardized instrument exists to compare presence
		across different studies and virtual environments, making it hard to draw reliable conclusions.
	</p>
	<H5>The Rasch Model</H5>

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
			<Subtitle3>Test-Free Assessment:</Subtitle3> Items from an item bank are used to measure presence
			without needing standardized instruments.
		</li>
		<li>
			<Subtitle3>Independent Estimation:</Subtitle3> Separates the difficulty of items from the individual's
			propensity for presence.
		</li>
		<li>
			<Subtitle3>Scale Equating:</Subtitle3> Ensures measures are interchangeable across different studies.
		</li>
	</ul>
	<p>
		In our project, it serves to quantify the sense of presence in virtual environments. By
		analyzing user responses, the Rasch Model helps us understand how various factors contribute to
		the overall feeling of presence. This model not only measures the difficulty of tasks within the
		VE but also assesses the abilities of users, providing a comprehensive understanding of how
		immersive a virtual experience can be.
	</p>
	<H2 id="Questions">Current Study: Goals and Research Questions</H2>
	<H5>Goals</H5>
	<ol>
		<li>
			<Subtitle3>Extend the Presence Item Bank:</Subtitle3> Propose new presence indicators and validate
			them using the Rasch model.
		</li>
		<li>
			<Subtitle3>Enable Cross-Study Comparisons:</Subtitle3> Equate measurements from different subsets
			of indicators to allow for comparison across studies.
		</li>
	</ol>

	<H5>Research Questions</H5>
	<ol>
		<li>
			Can presence be measured effectively in each VE using a combination of self-reports,
			behavioral, and physiological indicators?
		</li>
		<li>Can measurements from different subsets of items be equated on the same scale?</li>
		<li>Do different VEs elicit different levels of presence?</li>
	</ol>

	<H5>Exploratory Question</H5>
	<p>
		Do the novel Rasch-based measures correlate with those from the conventional IPQ presence
		instrument?
	</p>

	<p>
		This study demonstrates the feasibility of using a Rasch-based approach to create a reliable and
		standardized method for measuring presence in virtual environments, enabling meaningful
		comparisons and enhancing the understanding of user experiences in different VEs.
	</p>

	<H2 id="Methods">Our Methodology</H2>
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

	<H2 id="Results">Key Findings and Insights</H2>
	<H5>Data Analysis Overview</H5>
	<p>
		The main data analysis was performed on Rasch-based approach items, including self-report,
		behavioral, and physiological data, from 42 participants in the pit VE and 40 participants in
		the night road environment. The pit VE had 20 items, with two items having missing data due to
		human error. Similarly, the street VE also had 20 items, with one item missing data because the
		corresponding event did not trigger for some participants.
	</p>
	<p>
		Item reliability for both environments was high (pit VE: 0.90, street VE: 0.89), indicating
		sufficient precision for decision-making.
	</p>

	<H5>Rasch Analysis for Pit VE</H5>
	<p>
		The Rasch analysis focused on item difficulty rather than presence levels. Item difficulty was
		estimated along with standard errors and the probability of a standard person achieving the
		item. Most items fit well within the Rasch model, except item 6, which was not a good indicator
		of presence and was excluded from further analysis.
	</p>

	<H5>Rasch Analysis for Street VE</H5>
	<p>
		The same analysis was conducted for the street VE. Again, item 6 showed poor fit and was
		excluded. All other items demonstrated adequate fit within the Rasch model.
	</p>

	<H5>Comparison Analysis</H5>
	<p>
		The goal was to compare the two studies using different subsets of items. Common items were used
		as anchor points for scale equating. Item 1 showed significant bias and was removed from the
		analysis, as was item 5 due to differences in navigation modes. After removing these items, the
		correlation between the remaining common items was Subtitle3 (0.93), allowing for successful
		scale equating.
	</p>
	<div class="flex gap-4 py-4">
		<img src="/projectimg/rasch/17a.png" alt="" class="w-1/3 px-4 bg-white" />
		<img src="/projectimg/rasch/17b.png" alt="" class="w-1/3 px-4 bg-white" />
		<img src="/projectimg/rasch/17c.png" alt="" class="w-1/3 px-4 bg-white" />
	</div>
	<H5>Scale Equation</H5>
	<p>
		With five common items chosen as anchors, scale equating was conducted, resulting in adequate
		fit indices. The analysis ensured that measures from different studies could be merged into one
		common scale.
	</p>

	<H5>Presence Difference Between VEs</H5>
	<p>
		After equating the scales, a t-test was conducted to compare the presence levels between the two
		VEs. The results showed no significant difference between the two environments (t(80)=-1.85,
		p=0.07), indicating that both environments were equally capable of eliciting a sense of
		presence.
	</p>

	<H2 id="Discussions">Discussions</H2>
	<p>
		The current study used the Rasch-based approach by Haans and IJsselsteijn (2018) to measure the
		sense of presence. The research aimed to extend the item bank for measuring presence, validate
		self-report, behavioral, and physiological measures, demonstrate comparisons between studies
		using different subsets of indicators, test differences between two VEs, and explore the
		convergent validity with the IPQ instrument.
	</p>

	<H5>Measuring Presence</H5>
	<p>
		The study validated the subset of items used as indicators of presence in each VE. Eight common
		items were tested across the VEs, but item 6 failed to fit the model in both analyses. Items 1
		and 5 were biased towards the pit VE and were not used as anchors for scale equating. Five items
		with sufficient invariance were used for scale equating, and the linking quality was adequate.
	</p>

	<H5>Comparison of VEs</H5>
	<p>
		The Rasch model effectively combined measures from multiple studies into one scale, but no
		significant difference was found between the VEs. Possible reasons include a lower presence
		level in the current pit VE and a narrow range of item difficulties. The study focused on
		demonstrating the feasibility of comparison rather than precise person measurement.
	</p>

	<H5>Convergent Validity</H5>
	<p>
		The new Rasch-based approach was moderately correlated with all dimensions of the IPQ,
		indicating it measured similar constructs but slightly different aspects of presence.
	</p>

	<H5>Limitations and Future Work</H5>

	The study had several limitations:
	<ul>
		<li>Natural walking was not possible, potentially reducing presence levels.</li>
		<li>Small item sets limited precise person measures.</li>
		<li>
			Adjustments were made in the street VE to ensure participants encountered enough events.
		</li>
	</ul>
	Future research should explore alternative methods for analyzing physiological data, extend the item
	bank, and increase the item difficulty range for better separation and validation of human ability
	estimates.

	<H2 id="Conclusion">Conclusion</H2>

	<p>
		Our project illustrates the potential of the Rasch Model in measuring the sense of presence in
		virtual environments. By understanding and enhancing this sense, we can create more engaging and
		effective virtual experiences. This research not only contributes to the field of VR but also
		provides practical guidelines for developers seeking to improve the immersive quality of their
		applications. We look forward to further exploring this exciting intersection of psychometrics
		and virtual reality.
	</p>
</div>
