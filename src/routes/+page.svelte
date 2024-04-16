<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';
	import { user } from '$lib/stores.js';
	let projects: any = [];

	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import FilterBadge from '$lib/components/atoms/FilterBadge.svelte';
	import Banner from '$lib/components/Banner.svelte';
	let selected: string = 'All';
	let categories = ['All', 'Design', 'Research', 'Data', 'Development'];
	import { fade } from 'svelte/transition';

	function sortProject() {
		projects.sort((a: any, b: any) => {
			return a.id - b.id;
		});
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
	$: console.log(projects);
</script>

hello
