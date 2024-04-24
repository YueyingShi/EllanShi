<script lang="ts">
	import Chapter from '$lib/components/molecules/Chapter.svelte';
	import Quotation from '$lib/components/molecules/Quotation.svelte';
</script>

<Chapter>
	<p>
		Every November, Eindhoven hosts light art festivals all over the city, attracting a large number
		of visitors. Over the past 15 years, from 45,000 visitors in the beginning to over 770,000
		visitors in 2019, GLOW has grown from a week-long light art festival to a city symbol in
		Eindhoven.
	</p>
	<p>
		In 2021, interest led five of us from different majors and years to get together and brainstorm
		an interactive art installation. The idea turned into 80 glowing mushrooms all over the campus,
		which point visitors in the direction of the next interactive installation.
	</p>
	<p>
		Each mushroom contains an ESP microcontroller and a PSR sensor that receives information from
		other mushrooms and pedestrians. People passing by or touching the mushrooms trigger the
		sensors, which can cause the current mushroom to change colour. The colour of this mushroom will
		slowly spread to the surrounding mushrooms like a spore.
	</p>
	<Quotation>
		A path full of magical luminescent mushrooms. Enchanting interaction. A unique and beautiful way
		to find your way. That is how visitors to Eindhoven University of Technology are guided through
		the site during GLOW, from one installation to another. Between all these installations, that's
		where the Wayfinding project shines. The mushrooms form an interactive system. Visitors can
		activate a mushroom, after which it glows and spreads its 'spores', which activate another
		mushroom nearby. This creates a chain reaction, which submerges the entire path - or parts of it
		- in a sea of ​​​​light.
	</Quotation>

	<img src="/projectimg/glow/mushroom1.jpg" alt="" class="border" />
	<img src="/projectimg/glow/mushroom2.jpg" alt="" class="border" />
	<img src="/projectimg/glow/mushroom3.jpg" alt="" class="border" />
	<img src="/projectimg/glow/mushroom4.jpg" alt="" class="border" />
</Chapter>
