<script lang="ts">
	import Chapter from '$lib/components/molecules/Chapter.svelte';
	import H3 from '$lib/components/atoms/headings/H3.svelte';

	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';
</script>

<Chapter>
	<ChapterHeader>User research and data analysis</ChapterHeader>
	<p>
		In order to better understand the needs of the users, eight people from the target group were
		interviewed. The target group of this study is university students, so a "convenience sampling"
		method was used to find suitable users from the researcher's social network.
	</p>
	<p>
		Of the eight interviewees, five were male and three were female. Four of the interviews were
		conducted in online sessions through Teams and four were conducted offline. The interviews were
		conducted two-on-one, with only the interviewer, the transcriber and the respondent present. The
		interviews were conducted in a quiet place so that the interviews would not be interrupted and
		to give the interviewees an environment in which they felt comfortable.
	</p>
	<p>
		We fragmented and coded all the interview information to create the Affinity Diagram (above). We
		clustered their comments into themes and extracted user pain points from them. We then defined
		and categorised the pain points according to "urgency" and "optimised value". We started
		designing for the urgent and valuable pain points.
	</p>
	<p>
		While analysing the interview data, we found that users mostly mentioned the impact of
		coronavirus pandemic on their learning. The sudden shift to online learning has severely
		weakened the face-to-face interaction in the traditional classroom. At the same time, the lack
		of "peer pressure" makes students less effective.
	</p>

	<img src="/projectimg/educate/affinity.jpg" alt="" class="border" />

	<p>Affinity diagram</p>

	<ChapterHeader>Design Concept</ChapterHeader>
	<p>
		In the previous interviews, we distilled the core pain point: the difficulty for students to
		maintain a high level of learning efficiency during the transition phase to online education.
	</p>
	<p>
		Accordingly, we used a opposite-thinking approach to brainstorming. Each team member wrote down
		several hypotheses about the issue at hand, trying to cover all aspects of the issue at hand,
		such as "students find it harder to concentrate in online classes than in live classes". Then
		for all of these hypotheses, the group members wrote down the "opposite" of the hypothesis, such
		as "students think it is easier to concentrate in online classes". After each opposing opinion
		was written down, the panelists worked together to think about these new realities, how it
		affected this core pain point, and the resulting potential solutions.
	</p>
	<img src="/projectimg/educate/opposite-thinking.jpg" alt="" class="border" />
	<p>Opposite thinking method</p>

	<ChapterHeader>User Testing</ChapterHeader>
	<p>
		Based on the brainstorming, we designed a prototype to test the usability with eight target
		users. The process of user testing is as follows
	</p>
	<ol>
		<li>
			1. Test introduction: We will introduce the purpose and scenario of using the current
			software. We also informed the test users that they needed to think out loud.
		</li>
		<li>
			2. User tasks: They were asked to perform two tasks, "watch a specific course video" and
			"confirm completion of a learning task for today".
		</li>
		<li>
			3. Feedback: Users were then asked to indicate their three favorite and least favorite
			feelings.
		</li>
	</ol>
	<p>
		Through user testing, we have ranked the user feedback in order of frequency of mention. We also
		mark the pages where the problems occur. We will prioritize the high frequency issues and
		consider redesigning the pages with more problems.
	</p>
	<img src="/projectimg/educate/interface.png" alt="" class="border" />
	<p>User Testing prototype</p>
	<ChapterHeader>UI Mock Up</ChapterHeader>
	<img src="/projectimg/educate/ui.png" alt="" class="border" />
</Chapter>
