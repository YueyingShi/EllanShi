<script lang="ts">
	import H4 from '$lib/components/atoms/types/H4.svelte';
	import Chapter from '$lib/components/molecules/Chapter.svelte';
	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';
</script>

<Chapter>
	<div class="flex flex-col gap-8">
		<div class="flex flex-col lg:flex-row gap-4">
			<div class="flex-1">
				<img class=" object-contain" src="/projectimg/foodtinder/collection.png" alt="" />
			</div>
			<div class="flex-1 space-y-4">
				<H4>Data Collection</H4>
				<p>
					We designed an app to perform the initial data collection. This data will be used as
					learning material for the AI. The information collected included basic information about
					the user, mood of the day as well as needs, overall preferences for food, preferences for
					specific ingredients, etc. We recruited eight users for a data collection that lasted for
					one week and got 388 usable data.
				</p>
			</div>
		</div>
		<div class="flex flex-col lg:flex-row-reverse gap-4">
			<div class="flex-1">
				<img class=" object-contain" src="/projectimg/foodtinder/learning.png" alt="" />
			</div>
			<div class="flex-1 space-y-4">
				<H4>Machine learning to predict user preferences</H4>
				<p>
					By learning from the 388 data, we generated different algorithms based on different models
					including regression model, decision tree model and k-nearest neighbors model. After
					fine-tuning the parameters and considering the user experience, we chose the regression
					model. The regression model can achieve more than 75% accuracy in determining the
					dichotomous choice of "like/dislike". Also, according to the regression model, we can
					easily get a user's likelihood of liking the current dish. This can be reflected as a
					"dish score" on the interface, giving the user a more detailed reference.
				</p>
			</div>
		</div>
		<div class="flex flex-col lg:flex-row gap-4">
			<div class="flex-1">
				<img class=" object-contain" src="/projectimg/foodtinder/ui.png" alt="" />
			</div>
			<div class="flex-1 space-y-4">
				<H4>Bringing algorithms to the user interface</H4>
				<p>
					After introducing the algorithm into the program, the first step implemented is to
					intervene in the recommendation of the dish. The higher the prediction score, the higher
					the chance of recommending the dish to the user (50%-75%); on the contrary, the dish that
					the machine predicts the user will not like will be blocked by the algorithm with a 10% to
					20% chance of recommending to the user.
				</p>
				<p>
					Meanwhile, for the sake of "AI transparency", we show the final judgment of the algorithm
					"like/fair/dislike" through emoji, and the prediction score given by the regression
					algorithm, so that users can understand how we recommend dishes according to the
					algorithm.
				</p>
			</div>
		</div>
	</div>

	<img src="/projectimg/foodtinder/mockup.png" alt="" class="border" />
</Chapter>
