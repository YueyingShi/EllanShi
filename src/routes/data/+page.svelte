<script lang="ts">
	import ProjectDataRow from '../../lib/components/molecules/ProjectDataRow.svelte';
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';
	import { user } from '$lib/stores.js';
	let projects: any = [];
	let newProject = { title: '', description: '' };

	function sortProject() {
		projects.sort((a: any, b: any) => {
			return a.id - b.id;
		});
	}

	async function updateProject(project: any) {
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
			sortProject();
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

<div class="flex flex-col max-w-6xl my-6 mx-auto gap-4">
	<div class="w-full">
		<p>add project</p>
		<input type="text" placeholder="title" bind:value={newProject.title} />
		<input type="text" placeholder="description" bind:value={newProject.description} />
		<button
			class="p-2 border rounded"
			on:click={() => {
				addProject();
			}}>Add</button
		>
	</div>

	<div
		class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg sm:min-w-[720px]"
	>
		<table class="w-full divide-y divide-gray-300">
			<thead class="bg-gray-50 text-left">
				<tr>
					<th class="p-2"> ID </th>
					<th class="p-2"> Title </th>
					<th class="p-2"> Description </th>

					<th class="p-2"> Emphasis? </th>
					<th class="p-2"> Delete? </th>
				</tr>
			</thead>

			<tbody class="divide-y divide-gray-200 bg-white">
				{#each projects as project}
					<tr>
						<ProjectDataRow {project} {updateProject} {deleteProject} />
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
