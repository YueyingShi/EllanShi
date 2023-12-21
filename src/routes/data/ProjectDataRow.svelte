<script>
	export let project, updateProject, deleteProject;
</script>

<div class="flex gap-2">
	<input
		type="text"
		value={project.title}
		on:input={(e) => {
			project.title = e.currentTarget.value;
			updateProject(project);
		}}
		class="border-2 border-gray-300 rounded px-1"
	/>
	<input
		type="checkbox"
		name=""
		id=""
		checked={project.isEmphasis}
		on:change={(e) => {
			project.isEmphasis = e.currentTarget.checked;
			updateProject(project);
		}}
	/>{project.isEmphasis}
	<button
		on:click={() => {
			deleteProject(project);
		}}>Delete</button
	>
</div>
