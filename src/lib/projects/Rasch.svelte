<script>
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';
</script>

<div class="flex flex-col gap-8">
	<!-- Abstract -->
	<section class="gap-4">
		<ChapterHeader title="Abstract" bg_title="00" />
		<div class="grid md:grid-cols-2 gap-4">
			<div class="relative columns-1 gap-4">
				<p class="mb-4">
					Nowadays, the usage of virtual environments (VE) is growing rapidly in many areas, such as
					entertainment, healthcare, and remote operations. It's important to understand how users
					feel in these VEs. However, current methods face challenges in comparing user reports,
					behavior, and body responses.
				</p>
				<p class="mb-4">
					Building on the Rasch Model study by Haans and IJsselsteijn (2018), I further investigated
					using the Rasch model to help measure and compare the sense of presence. In this project,
					we used pit and street VEs and successfully compared results across studies. This
					demonstrated the capability of the Rasch Model to measure presence in VEs, potentially
					shaping the future of VE development.
				</p>
			</div>
			<div class="h-full w-full p-4 bg-gray-300">picture place holder</div>
		</div>
	</section>
	<!-- Introduction -->
	<section class="gap-4">
		<ChapterHeader title="Introduction" bg_title="01" />
		<!-- Subchapter  -->
		<div class="mb-8">
			<H4
				>Presence is ...
				<br />illusion of non-mediation
			</H4>
			<div class="grid md:grid-cols-3 gap-4">
				<div class="flex flex-col gap-4">
					<p>
						First, we talk about what is presence. Presence is illusion of non-mediation. in this
						picture, we can see that the vr glasses/headset is the mediation between the person and
						the simulation world.
					</p>
					<p>
						When the people feeling presence, they would full into the illusion, the existing of the
						vr glass would become transparent or disappear for them.
					</p>
				</div>
				<img src="/projectimg/rasch/1a.svg" alt="wearing ve helmet" class="object-contain" />
				<img src="/projectimg/rasch/1b.svg" alt="wearing ve helmet" class="object-contain" />
			</div>
		</div>
		<H4>Conventional Measurements of presence</H4>
		<p>
			Numerous methods exist for measuring presence based on different conceptualizations.
			Traditionally, three approaches are employed: self-reports, behavioral observations, and
			physiological measures. Self-reports involve questionnaires and interviews, offering
			subjective feedback. While cost-effective and comparable between studies, they risk bias and
			may lack objectivity. Physiological measures, including EEG and heart rate, provide more
			objective insights but face limitations such as cost and sensitivity to content. Behavioral
			observation gauges real-life consistency, yet predicting participant reactions remains
			challenging. Conventional measures encounter issues of inconsistency and a lack of
			standardization. The proposed Rasch-based approach addresses these challenges by treating
			indicators as reflections of presence, not independent scales, and offering a flexible item
			bank for customized instruments, allowing comparison across studies without the need for
			standardized instruments.
		</p>
	</section>
</div>

<style lang="postcss">
	p {
		color: theme(colors.slate.600);
	}
</style>
