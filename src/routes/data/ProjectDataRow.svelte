<script lang="ts">
	export let project: any, updateProject: any, deleteProject: any;
</script>

<td class="p-2">
	{project.id}
</td>
<td class="p-2">
	<input
		type="text"
		value={project.title}
		on:blur={(e) => {
			project.title = e.currentTarget.value;
			updateProject(project);
		}}
		class="border-2 border-gray-300 rounded px-1"
	/>
</td>
<td class="p-2">
	{project.description}
</td>
<td class="p-2">
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
</td>
<td class="p-2">
	<button
		class="p-2 border rounded"
		on:click={() => {
			deleteProject(project);
		}}>Delete</button
	>
</td>
