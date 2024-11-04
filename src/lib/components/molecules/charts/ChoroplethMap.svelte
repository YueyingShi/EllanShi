<script>
	import { onMount } from 'svelte';
	export let currentyear = 2000;
	let data = [];
	let layout = {
		map: {
			center: { lon: -110, lat: 50 },
			zoom: 2.5
		},
		height: 800
	};

	async function loadCSVData() {
		const response = await fetch('src/lib/components/molecules/charts/election.csv');
		const text = await response.text();

		const rows = text.split('\n').slice(1);
		const states = [];
		const zValues = [];
		const texts = [];

		rows.forEach((row) => {
			const [year, state, demVotes, repVotes, z] = row.split(',');
			if (parseInt(year) === currentyear) {
				states.push(state);
				zValues.push(parseFloat(z));
				texts.push(`${state} - Dem: ${demVotes}, Rep: ${repVotes}`);
			}
		});

		data = [
			{
				type: 'choroplethmap',
				name: 'US states',
				geojson:
					'https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json',

				locations: states,
				z: zValues,
				text: texts,
				colorscale: [
					[0, 'blue'],
					[0.5, 'white'],
					[1, 'red']
				],
				colorbar: {
					title: 'Red vs. Blue',
					tickvals: [-1, 0, 1],
					ticktext: ['Democratic', 'Neutral', 'Republican']
				}
			}
		];
		console.log(data); // Ensure data is loaded correctly
	}

	onMount(async () => {
		if (!window.Plotly) {
			await new Promise((resolve) => {
				const script = document.createElement('script');
				script.src = 'https://cdn.plot.ly/plotly-2.35.2.min.js';
				script.onload = resolve;
				document.body.appendChild(script);
			});
		}
		await loadCSVData();
		// Ensure data is loaded before plotting
		if (data.length > 0) {
			Plotly.newPlot('myDiv', data, layout, { responsive: true });
		}
	});
	// Watch for changes to currentyear to re-load data
	$: if (currentyear) {
		loadCSVData();
	}
</script>

<p>{currentyear}</p>
<div id="myDiv" class="plot-container" />

<style>
	.plot-container {
		width: 100%;
		height: 100%;
	}
</style>
