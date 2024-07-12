<script lang="ts">
	import Chapter from '$lib/components/molecules/Chapter.svelte';
	import H4 from '$lib/components/atoms/types/H4.svelte';
</script>

<div class="flex flex-col">
	<Chapter id="Data Collection">
		<H4>Data Collection</H4>
		<p>
			The data collection was divided into two phases, the objective data collection phase and the
			subjective data collection phase. Objective data was collected using both the control panel
			unit and the PCR IR sensor on the bathroom door. Data was collected in the following manner:
		</p>
		<ul>
			<li>
				Touch panel: The user was asked to press a button on the manipulation panel once each time
				he/she ingested a high-sugar food.
			</li>
			<li>
				PCR infrared sensor: Used to track the patient's toileting patterns to determine the amount
				of water consumed and the user's health.
			</li>
			<li>
				Mobile phone pedometer: We also tracked the patient's daily physical activity through the
				pedometer function in the patient's mobile phone.
			</li>
		</ul>
		<img src="/projectimg/sugar/tangiblepanel.jpg" alt="" class="border" />
		<p>
			Part of the collection of proactive reporting information from patients and family members is
			done through the Telegram platform chatbot. Users are required to report each of their meals
			to the bot. We control the bot through an automated script that reminds the patient three
			times a day to perform proactive dietary reporting. The bot receives text and image messages
			sent by the user and puts them into a database, from which we can estimate the amount of sugar
			consumed by the user as well as their lifestyle patterns.
		</p>
		<p>
			We also sent daily questionnaires via a Telegram chatbot asking cohabitants what they thought
			they were "supported by" and what patients thought they were "supported by". The user can use
			the elements on the tangible panel for input.
		</p>
		<img src="/projectimg/sugar/telegrambot.png" alt="" class="border" />
	</Chapter>
	<Chapter id="Data Analysis">
		<H4>Data Analysis</H4>
		<p>
			The data collected were analysed. As shown in the figure, the couples were quite consistent in
			agreeing on the "giving" and "receiving" of support between them on a daily basis, and
			consistently gave high scores. Therefore, we hypothesised that the couples were communicating
			effectively.
		</p>
		<p>
			Based on our assumptions, we interviewed the patient's family (wife). We found that: the
			couple had a unified plan for their lifestyle; there was adequate communication between the
			couple; however, the patient was not very active in sharing her physical condition. The
			patient's wife, inspired by our data, suggested that the low point in the graph for "daily
			support" was due to the fact that both partners were busy on that day and communication was
			reduced. Therefore, we believe that the presentation of information is more likely to increase
			the motivation of patients to communicate with each other than specific "communication
			counselling".
		</p>
		<img src="/projectimg/sugar/data.png" alt="" class="border" />
	</Chapter>
	<Chapter id="Design Intervention">
		<H4>Design Intervention and Influence</H4>
		<p>
			Based on our data analysis and user interviews, we designed the interactive light installation
			shown in Fig. The main material is a milky-white frosted glass lamp, divided into left and
			right ends. The anthropomorphic knot shape is a symbol of "communication and connection". The
			left and right lamps each have a variable-height light bulb, the height of which is changed by
			collecting data from the user's mobile phone. The left bulb represents the patient's blood
			glucose level; the right bulb represents the patient's insulin intake.
		</p>
		<p>
			The height of the two lamp beads allows the patient to be instructed on insulin intake on the
			one hand (as shown in the picture above), and on the other hand allows the family members
			living together to be informed about the current health and medication status of the patient
			as well.
		</p>

		<img src="/projectimg/sugar/installation.png" alt="" class="border" />
	</Chapter>
	<Chapter id="Follow-up">
		<H4>Follow-up Interview</H4>
		<p>
			It is worth mentioning that the patients and their families who participated in the project
			reported after the course that the patient's motivation to communicate about his health
			condition had significantly increased after the UCD. "He now actively shares data from the
			blood glucose logging app with me." The patient's family mentioned this. Even though the blood
			glucose logging app has a well-developed setting for automatic sharing by relatives, the
			patient had not given this aspect much thought in the past.
		</p>
	</Chapter>
</div>
