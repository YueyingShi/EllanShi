<script lang="ts">
	import Chapter from '$lib/components/molecules/Chapter.svelte';
	import H3 from '$lib/components/atoms/headings/H3.svelte';

	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';
</script>

<Chapter>
	<ChapterHeader>User research and data analysis</ChapterHeader>
	<p>
		To better understand the needs of users, we conducted eight semi-structure interviews. We found
		suitable users from the our social network who fit in the target group -- college students.The
		interviews were conducted on site, with the interviewer, recorder, and interviewee. These
		questions focus on a broad scope to learn more about the whole life changes caused by covid-19.
		For example, where and how they lived during the lockdown. What activities they did before,
		during, and after covid situation. we digged into the details that they mentioned, to find the
		underlying reason and need. We fragmented and coded all the interview information to create an
		Affinity Diagram. We clustered their comments into themes and extracted user pain points from
		them. After that, we defined and categorized the pain points according to "urgency" and
		"optimized value", and proceeded to design for the urgent and valuable pain points. Like the
		short-time lack of outdoor activitites is definitly not for big value as it could be easily
		solve when lock-down is over. However, online-study(hybird) is not the case. It is going to be a
		trend. In the process of analyzing the interview data, we found that most of the users mentioned
		that COVID-19 had affected their learning. The sudden shift in learning style to online has
		severely weakened the face-to-face interaction experience in the traditional classroom. At the
		same time, the lack of "peer pressure" also makes students less effective.
	</p>
	<img src="/projectimg/educate/affinity.jpg" alt="" class="border" />

	<p>Affinity diagram</p>
	<ChapterHeader>Design Concept</ChapterHeader>
	<p>
		In the previous interviews, we extracted the core pain point: students have difficulty
		maintaining high learning efficiency during the transition to online education. Accordingly, we
		used a opposite-thinking approach to brainstorming. Each team member wrote down several
		hypotheses about the issue at hand, trying to cover all aspects of the issue at hand, such as
		"students find it harder to concentrate in online classes than in live classes". Then for all of
		these hypotheses, the group members wrote down the "opposite" of the hypothesis, such as
		"students think it is easier to concentrate in online classes". After each opposing opinion was
		written down, the panelists worked together to think about these new realities, how it affected
		this core pain point, and the resulting potential solutions.
	</p>

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
	<ChapterHeader>UI Mock Up</ChapterHeader>
	<img src="/projectimg/educate/ui.png" alt="" class="border" />
</Chapter>
