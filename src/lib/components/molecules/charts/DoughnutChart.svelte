<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount, onDestroy } from 'svelte';
	export let label = '';

	export let percentage = 0;
	let chart: any;
	onMount(() => {
		const ctx = document.getElementById('donutChart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: ['At Least Once', 'Never'],
				datasets: [
					{
						label: label,
						data: [percentage, 100 - percentage],
						backgroundColor: ['#fb7185', '#ffe4e6'],
						borderWidth: 0,
						borderRadius: 0
					}
				]
			},
			options: {
				responsive: true,
				cutout: 80,
				plugins: {
					legend: {
						display: false,
						position: 'bottom'
					},
					title: {
						display: false,
						text: 'title'
					}
				}
			}
		});
	});

	onDestroy(() => {
		chart.destroy();
	});
</script>

<div class=" max-h-64 p-4">
	<canvas id="donutChart" />
</div>
