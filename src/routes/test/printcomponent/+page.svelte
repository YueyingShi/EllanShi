<script>
	import html2canvas from 'html2canvas';

	let component;

	const captureComponent = async () => {
		if (component) {
			const canvas = await html2canvas(component);
			const link = document.createElement('a');
			link.href = canvas.toDataURL('image/png');
			link.download = 'component.png';
			link.click();
		}
	};
</script>

<div bind:this={component} style="padding: 20px; border: 1px solid #000;">
	<!-- Your component content -->
	<h1>Hello, World!</h1>
	<p>This is the component we will capture.</p>
</div>
<button on:click={captureComponent}>Capture Component</button>
