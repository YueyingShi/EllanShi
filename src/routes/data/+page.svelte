<script>
	import ProjectDataRow from './ProjectDataRow.svelte';
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';
	import { user } from '$lib/stores.js';
	let projects = [];
	let newProject = { title: '', description: '' };

	async function updateProject(project) {
		try {
			const { data, error } = await supabase
				.from('projects')
				.update({ title: project.title, isEmphasis: project.isEmphasis })
				.eq('id', project.id)
				.select();
			await getAllProjects();
		} catch (err) {
			console.log(err);
		}
	}

	async function deleteProject(project) {
		try {
			const { error } = await supabase.from('projects').delete().eq('id', project.id);
			await getAllProjects();
		} catch (err) {
			console.log(err);
		}
	}
	async function addProject() {
		try {
			const { data, error } = await supabase
				.from('projects')
				.insert([{ title: newProject.title, description: newProject.description ?? null }])
				.select();

			await getAllProjects();
			newProject = { title: '', description: '' };
		} catch (err) {
			console.log(err);
		}
	}
	async function getAllProjects() {
		try {
			const { data } = await supabase.from('projects').select();
			projects = data;
		} catch (err) {
			console.log(err);
		}
	}

	onMount(async () => {
		await getAllProjects();
	});
	$: console.log($user.email);
</script>

<p>Welcome {$user?.email ? $user.email : ''}</p>

<div>
	<p>add project</p>
	<input type="text" bind:value={newProject.title} />
	<input type="text" bind:value={newProject.description} />
	<button
		on:click={() => {
			addProject();
		}}>Add</button
	>
</div>

<div class="flex flex-col gap-4">
	<div class="flex">
		<p>Project Title</p>
		<p>Main project</p>
	</div>
	{#each projects as project}
		<ProjectDataRow {project} {updateProject} {deleteProject} />
	{:else}
		<p>No projects</p>
	{/each}
</div>
