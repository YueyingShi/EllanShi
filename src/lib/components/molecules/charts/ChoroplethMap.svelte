<script>
	import Plotly from 'plotly.js-dist';

	// Example population data for each state
	const data = [
		{
			type: 'choropleth',
			z: [
				39538223, // California
				29145505, // Texas
				20201249, // Florida
				19615085 // New York
				// Add more states here
			],
			text: [
				'California',
				'Texas',
				'Florida',
				'New York'
				// Add more states here
			],
			colorscale: 'Viridis',
			colorbar: {
				title: 'Population'
			},
			locationmode: 'USA-states',
			locations: [
				'CA',
				'TX',
				'FL',
				'NY'
				// Add more state abbreviations here
			]
		}
	];

	// Layout for the map
	const layout = {
		title: 'US Population by State',
		geo: {
			scope: 'usa',
			showland: true
		}
	};

	// Render the plot after the component mounts
	import { onMount } from 'svelte';
	onMount(() => {
		Plotly.newPlot('map', data, layout);
	});
</script>

<div class="container mx-auto p-4">
	<div id="map" class="w-full h-96" />
</div>

<style>
	#map {
		height: 600px; /* Adjust height as needed */
	}
</style>
