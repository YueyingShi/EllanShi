<script>
	import ThreeCols from '$lib/components/molecules/ThreeCols.svelte';
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	import H5 from '$lib/components/atoms/headings/H5.svelte';

	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';
	import { Icon, ClipboardDocumentList, MagnifyingGlass, ChartBar } from 'svelte-hero-icons';
	import Chapter from '$lib/components/molecules/Chapter.svelte';
	import Divider from '$lib/components/atoms/Divider.svelte';
	import Quotation from '$lib/components/molecules/Quotation.svelte';
	import ThreeColsItem from '$lib/components/molecules/ThreeColsItem.svelte';
</script>

<div class="max-w-4xl">
	<!-- Abstract -->
	<Chapter id="Abstract">
		<ChapterHeader bg_title="00">Abstract</ChapterHeader>

		<p>
			Nowadays, the usage of virtual environments (VE) is growing rapidly in many areas, such as
			entertainment, healthcare, and remote operations. It's important to understand how users feel
			in these VEs. However, current methods face challenges in comparing user reports, behavior,
			and body responses.
		</p>
		<p>
			Building on the Rasch Model study by Haans and IJsselsteijn (2018), I further investigated
			using the Rasch model to help measure and compare the sense of presence. In this project, we
			used pit and street VEs and successfully compared results across studies. This demonstrated
			the capability of the Rasch Model to measure presence in VEs, potentially shaping the future
			of VE development.
		</p>
	</Chapter>

	<!-- Introduction -->
	<Chapter id="Introduction">
		<ChapterHeader bg_title="01">Introduction</ChapterHeader>
		<H4>Presence is, illusion of non-mediation</H4>
		<p>
			The fast-paced advancements in virtual technology, networks, and computing power contribute to
			the immersive development of virtual environments (VE). Achieving a much higher sense of
			presence now become possible. Just like what we have seen in the sci-fi movies.
		</p>
		<p>
			But first of all, what is presence? After ages of discussion, recently the researcher start to
			define that "Presence is illusion of non-mediation". where users consciously immerse
			themselves in the virtual world, ignoring the mediation interface.
		</p>
		<Quotation author="Lombard M., Ditton T. (1997)">
			<p>
				Presence is an “illusion of non-mediation” that occurs when a person fails to perceive or
				acknowledge the existence of a medium in his/her communication environment and responds as
				he/she would if the medium were not there
			</p>
		</Quotation>
		<p>
			In this picture, we can see that the vr glasses/headset is the mediation between the person
			and the simulation world. When the people feeling presence, they would full into the illusion,
			the existing of the vr glass would become transparent or disappear for them.
		</p>
		<div class="flex gap-4">
			<img src="/projectimg/rasch/1a.svg" alt="wearing ve helmet" class="w-1/2" />
			<img src="/projectimg/rasch/1b.svg" alt="wearing ve helmet" class="w-1/2" />
		</div>

		<Divider />
		<H4>Conventional Measurements of presence</H4>
		<H5>Self-reports, behavioral observations, and physiological measures</H5>

		<p>
			Numerous methods exist for measuring presence based on different conceptualizations.
			Traditionally, three approaches are employed: self-reports, behavioral observations, and
			physiological measures.
		</p>

		<ThreeCols>
			<ThreeColsItem title="Self-reports">
				<svelte:fragment slot="icon">
					<Icon src={ClipboardDocumentList} size="24px" mini color="white" />
				</svelte:fragment>
				<svelte:fragment slot="description">
					Self-reports involve questionnaires and interviews, offering subjective feedback. While
					cost-effective and comparable between studies, they risk bias and may lack objectivity.
				</svelte:fragment>
			</ThreeColsItem>
			<ThreeColsItem title="Behavioral observation">
				<svelte:fragment slot="icon">
					<Icon src={MagnifyingGlass} size="24px" mini color="white" />
				</svelte:fragment>
				<svelte:fragment slot="description">
					Behavioral observation gauges real-life consistency, yet predicting participant reactions
					remains challenging. Conventional measures encounter issues of inconsistency and a lack of
					standardization.
				</svelte:fragment>
			</ThreeColsItem>
			<ThreeColsItem title="Physiological measures">
				<svelte:fragment slot="icon">
					<Icon src={ChartBar} size="24px" mini color="white" />
				</svelte:fragment>
				<svelte:fragment slot="description">
					Physiological measures, including EEG and heart rate, provide more objective insights but
					face limitations such as cost and sensitivity to content.
				</svelte:fragment>
			</ThreeColsItem>
		</ThreeCols>

		<p>
			The proposed Rasch-based approach addresses these challenges by treating indicators as
			reflections of presence, not independent scales, and offering a flexible item bank for
			customized instruments, allowing comparison across studies without the need for standardized
			instruments.
		</p>
		<Divider />
		<H5>Problem is, the studies are not comparable</H5>

		<p>
			The study addresses challenges in traditional virtual environment (VE) presence measurement
			methods
		</p>
		<ul class="list-decimal pl-6 text-slate-600">
			<li>
				Inconsistency in Traditional Measures: Traditional methods of virtual environment (VE)
				presence measurement, such as self-report, behavioral, and physiological measures, often
				yield inconsistent results. For example, studies show conflicting correlations between
				physiological indices (e.g., skin conductance, heart rate) and self-reported presence.
			</li>
			<li>
				Lack of Standardized Instrument: Conventional measures lack a standardized instrument for
				comparing presence estimates across different studies and virtual environments. This absence
				of a consistent metric poses challenges in making meaningful comparisons and drawing
				reliable conclusions about presence in VEs.
			</li>
		</ul>

		<p>
			To overcome this, a Rasch-based approach by Haans and IJsselsteijn is introduced. It treats
			indicators (e.g., self-reports, physiological measures) as reflective of presence, offering a
			standardized solution through an item bank. This approach ensures independence of item
			difficulty and individual presence levels, allowing for a test-free assessment. Indicators are
			selected based on a perfect fit with the Rasch model. The study demonstrates the feasibility
			of cross-study comparisons and builds an item bank for VE presence measurement in two
			different environments.
		</p>
		<Divider />

		<H4>Rasch-Based Approach for Presence Measurement</H4>

		<p>
			The study employs a Rasch-based approach for presence measurement, following the model
			proposed by Haans and IJsselsteijn. The Rasch model, rooted in Rasch's logistic model, links
			the probability of correctly responding to an item with a person's ability and the item's
			difficulty. It establishes a scale allowing independent estimation of presence-related
			difficulties and individual propensities for presence.
		</p>
		<div class="py-4 px-12 bg-white">
			<img src="/projectimg/rasch/2.svg" alt="" />
		</div>

		<p>
			The Rasch-based approach, termed test-free assessment, enables the selection of diverse
			indicators for measuring presence in virtual environments (VEs). Items demonstrating good fit
			are identified through infit and outfit measurements. Scale equating ensures
			interchangeability of measures across studies, while item banking constructs a reliable
			presence item pool. The study, employing this approach, separately measures presence in two
			VEs and demonstrates the feasibility of comparing participants and items across studies.
		</p>
		<div class="py-4 px-12 bg-white">
			<img src="/projectimg/rasch/3.svg" alt="" />
		</div>
		<Divider />

		<H4>Current Study</H4>
		<H5>Goals</H5>

		<p>
			This study has two purposes. Firstly, we want to extend the presence item bank by proposing
			new presence indicators besides those already proposed by Haans and IJsselsteijn (2018).
			Therefore, we need to conduct a Rasch analysis on the new indicators involved in the
			experiment. In the meantime, this study wants to demonstrate that we can perform the
			comparison between two different studies that use different subsets of indicators from the
			pool. Therefore, we must first successfully equate the two subsets of indicators into one
			scale with the Rasch model to map the participant ability in both experiments on the same
			continuum before we can compare people's experiences of presence in the two environments.
		</p>
		<Divider />
		<H5>Research Questions</H5>

		<p>
			Based on the research goals, there are three research questions and an extra exploratory
			question.
		</p>
		<ul class="list-decimal pl-6">
			<li>
				Do we succeed in measuring presence in each VE using a combination of self-reports,
				behavioral and / or physiological indicators?
			</li>
			<li>
				Do we succeed in equating measurements obtained with different subsets of items from the
				pool?
			</li>
			<li>
				Do the two VEs differ in the presence they elicit? The convergence validity between the new
				method and the already empirically validated IPQ questionnaire is necessary for the
				effectiveness of this new approach based on the Rasch model. They should show a higher
				convergent validity, which can be estimated by correlation if they measure the same
				construct.
			</li>
			<li>
				Exploratory question: Do the novel Rasch-based measures correlate with those obtained with
				the often used conventional IPQ presence instrument?
			</li>
		</ul>
		<Divider />
	</Chapter>
	<!-- Methods -->
	<Chapter id="Methods">
		<ChapterHeader bg_title="02">Methods</ChapterHeader>
		<!-- subchapter  -->

		<H4>Participants</H4>

		<p>
			Eighty-two volunteers participated in the study, with 44 females, 37 males, and one choosing
			not to disclose gender. Ages ranged from 18 to 59 years (Mean=24.21, SD=5.37). Participants
			were randomly selected from the JSF participant database via email, required to be aged 18 to
			65 without eye disease, and were cautioned against participating if prone to motion sickness
			in virtual environments. Compensation of €7.50 was provided, with an extra €2.00 for non-TU/e
			or Fontys participants to cover travel expenses.
		</p>
		<Divider />

		<H4>Experiment Design</H4>

		<p>
			Sample size determination for accurate item measurement in each virtual environment (VE) was
			based on Linacre's principles. A diminishing return point was identified at a standard error
			(SE) of 0.40, corresponding to a sample size of 40 per VE. Due to data loss, two additional
			participants were recruited for the pit VE, resulting in 42 participants for pit VE and 40 for
			street VE. The study employed a two-condition between-subject design, measuring presence with
			distinct item sets in pit and street VEs.
		</p>
		<Divider />
		<H4>Materials and apparatus</H4>

		<p>
			Two VEs were utilized: a pit VE and a street VE, created in Autodesk 3D Studio Max and
			operated with Vizard 7.0 software.
		</p>
		<div class="flex gap-4 py-4">
			<img src="/projectimg/rasch/5.png" class="w-1/2" />
			<img src="/projectimg/rasch/6.png" class="w-1/2" />
		</div>

		<p>
			Participants experienced VEs through an HTC VIVE headset, simulating natural walking with VIVE
			controllers. A high-resolution camera recorded behavioral data, and GSR data were measured
			using the Mobi8 device. The experiment received ethical approval from the Ethical Review Board
			of Eindhoven University of Technology.
		</p>
		<div class="flex gap-4 py-4">
			<img src="/projectimg/rasch/7.png" class="w-1/2 bg-white px-4" />
			<img src="/projectimg/rasch/8.png" class="w-1/2 bg-white pr-4" />
		</div>
		<Divider />
		<H4>Procedure</H4>

		<p>
			After the welcome, participants were asked to carefully read and sign the informed consent
			form, which described the general purpose and procedures of the experiment and mentioned that
			their behavioral and physiological data would be recorded. Participants were then assigned to
			one of the two VEs.
		</p>
		<h5>Pit</h5>
		<ul class="list-decimal pl-6">
			<li>GSR measurements and baseline establishment with 3min aquarium video</li>
			<li>
				Put on VR glass and enter start room. wait 3 min for the biologic respond to get settle.
			</li>
			<li>
				Go into task room, complete tasks included entering a room, standing on the pit's edge,
				standing on closed grates, and simulating a fall into the pit.
			</li>
			<li>Blow a ballon to make it pop for measured maximum GS</li>
			<li>complete a self-report questionnaire</li>
		</ul>
		<div class="flex gap-4 py-4">
			<img src="/projectimg/rasch/9.svg" class="px-4 py-2 bg-white" />
		</div>

		<ul class="list-decimal pl-6">
			<li>
				Put on VR glass and complete tasks included walking and crossing the street, responding to
				triggered events.
			</li>

			<li>a self-report questionnaire.</li>
		</ul>
		<div class="flex gap-4 py-4">
			<img src="/projectimg/rasch/10.svg" class="px-4 py-2 bg-white" />
		</div>
		<Divider />
		<H4>Measurement</H4>
		<Divider />
		<H4>Data Preparation and Analysis</H4>
	</Chapter>

	<!-- Result -->
	<Chapter id="Result">
		<ChapterHeader bg_title="03">Result</ChapterHeader>
		<!-- subchapter  -->

		<H4>Rasch Analysis for Pit VE</H4>
		<H4>Rasch Analysis for Street VE</H4>
		<H4>Compare Analysis</H4>
		<H4>Scale Equation</H4>
		<H4>Measurement</H4>
		<H4>Presence Different Between VEs</H4>
		<H4>Correlation With IPQ</H4>
	</Chapter>

	<!-- Discussion -->
	<Chapter id="Discussion">
		<ChapterHeader bg_title="04">Discussion</ChapterHeader>
		<!-- subchapter  -->

		<H4
			>Measuring Presence with Self-Reports, Behavioral Observations and Physiological Measures as
			Indicators</H4
		>
		<H4>Convergent validity</H4>
		<H4>limitation and Future Works</H4>
	</Chapter>

	<!-- Conclusion -->
	<Chapter id="Conclusion">
		<ChapterHeader bg_title="05">Conclusion</ChapterHeader>
		<!-- subchapter  -->
		<div class="flex flex-col gap-4" />
	</Chapter>
</div>

<style lang="postcss">
	p {
		color: theme(colors.slate.600);
	}
</style>
