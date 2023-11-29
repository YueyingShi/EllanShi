<script>
	import LongArticleText from './LongArticleText.svelte';

	import H4 from '$lib/components/atoms/headings/H4.svelte';
	import H5 from '$lib/components/atoms/headings/H5.svelte';
	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';
</script>

<div class="flex gap-12">
	<div class="sticky top-0 h-64 w-40 pt-24">
		<div class=" w-full flex flex-col gap-4 list-decimal">
			{#each ['abstract', 'introduction'] as chapter}
				<a href="#{chapter}" class="list-item text-slate-400 hover:text-slate-800">{chapter}</a>
			{/each}
		</div>
	</div>

	<div class="flex-1 relative flex flex-col gap-8">
		<!-- Abstract -->
		<section class="flex flex-col gap-8" id="abstract">
			<ChapterHeader extraClass="pr-40" title="Abstract" bg_title="00" />
			<LongArticleText>
				<p>
					Nowadays, the usage of virtual environments (VE) is growing rapidly in many areas, such as
					entertainment, healthcare, and remote operations. It's important to understand how users
					feel in these VEs. However, current methods face challenges in comparing user reports,
					behavior, and body responses.
				</p>
				<p>
					Building on the Rasch Model study by Haans and IJsselsteijn (2018), I further investigated
					using the Rasch model to help measure and compare the sense of presence. In this project,
					we used pit and street VEs and successfully compared results across studies. This
					demonstrated the capability of the Rasch Model to measure presence in VEs, potentially
					shaping the future of VE development.
				</p>
			</LongArticleText>
			<div class="">
				<div class="bg-gray-300 h-64 w-full">picture place holder</div>
			</div>
		</section>
		<!-- Introduction -->
		<section class="flex flex-col gap-16" id="introduction">
			<ChapterHeader extraClass="pr-40" title="Introduction" bg_title="01" />
			<!-- Subchapter  -->
			<div class="flex flex-col gap-4 -mt-6">
				<H4 extraClass="pr-40">Presence is, illusion of non-mediation</H4>
				<LongArticleText>
					<p>
						The fast-paced advancements in virtual technology, networks, and computing power
						contribute to the immersive development of virtual environments (VE). Achieving a much
						higher sense of presence now become possible. Just like what we have seen in the sci-fi
						movies.
					</p>
					<p>
						But first of all, what is presence? After ages of discussion, recently the researcher
						start to define that "Presence is illusion of non-mediation". where users consciously
						immerse themselves in the virtual world, ignoring the mediation interface.
					</p>
					<p>
						In this picture, we can see that the vr glasses/headset is the mediation between the
						person and the simulation world. When the people feeling presence, they would full into
						the illusion, the existing of the vr glass would become transparent or disappear for
						them.
					</p>

					<div class="flex gap-4">
						<img src="/projectimg/rasch/1a.svg" alt="wearing ve helmet" class="w-1/2" />
						<img src="/projectimg/rasch/1b.svg" alt="wearing ve helmet" class="w-1/2" />
					</div>
				</LongArticleText>
			</div>

			<!-- subchapter  -->
			<div class="flex flex-col gap-4">
				<H4 extraClass="pr-40">Conventional Measurements of presence</H4>
				<H5 extraClass="pr-40">Self-reports, behavioral observations, and physiological measures</H5
				>
				<LongArticleText>
					<p>
						Numerous methods exist for measuring presence based on different conceptualizations.
						Traditionally, three approaches are employed: self-reports, behavioral observations, and
						physiological measures.
					</p>
					<div class="grid grid-cols-3 gap-2">
						<p>
							Self-reports involve questionnaires and interviews, offering subjective feedback.
							While cost-effective and comparable between studies, they risk bias and may lack
							objectivity.
						</p>
						<p>
							Behavioral observation gauges real-life consistency, yet predicting participant
							reactions remains challenging. Conventional measures encounter issues of inconsistency
							and a lack of standardization.
						</p>
						<p>
							Physiological measures, including EEG and heart rate, provide more objective insights
							but face limitations such as cost and sensitivity to content.
						</p>
					</div>
					<p>
						The proposed Rasch-based approach addresses these challenges by treating indicators as
						reflections of presence, not independent scales, and offering a flexible item bank for
						customized instruments, allowing comparison across studies without the need for
						standardized instruments.
					</p>
				</LongArticleText>
				<H5 extraClass="pr-40">Problem is, the studies are not comparable</H5>
				<LongArticleText>
					<p>
						The traditional methods of measuring presence in virtual environments face two main
						issues. Firstly, self-report, behavioral, and physiological measures sometimes yield
						inconsistent results. For instance, studies show both positive and negative correlations
						between physiological indices (e.g., skin conductance, heart rate) and self-reported
						presence.
					</p>

					<p>
						Secondly, conventional measures lack a standardized instrument for comparing presence
						estimates across studies and virtual environments (VEs). To address these challenges, a
						Rasch-based approach proposed by Haans and IJsselsteijn is introduced. This approach
						treats indicators like self-reports, physiological, and behavioral measures not as
						independent scales but as reflective of presence.
					</p>
					<p>
						It offers a solution to the lack of a standardized instrument by providing an item bank,
						allowing researchers to select indicators suitable for their study and facilitating
						cross-study comparisons through scale equation methods. The Rasch model, based on
						logistic principles, ensures independence of item difficulty and individual presence
						levels, allowing for a test-free assessment.
					</p>
					<p>
						Indicators for presence, considered as items in the Rasch model, are selected based on
						item fit, aiming for a perfect fit with the model. Scale equating and item banking are
						key processes that enable the comparison of presence measures across different studies
						and the creation of a flexible item bank for measuring presence in virtual environments.
					</p>
					<p>
						The study employs this Rasch-based approach to measure presence separately in two
						different virtual environments, demonstrating the feasibility of comparing participants
						and items across studies and building an item bank for presence measurement.
					</p>
				</LongArticleText>
			</div>
		</section>
	</div>
</div>

<style lang="postcss">
	p {
		color: theme(colors.slate.600);
	}
</style>
