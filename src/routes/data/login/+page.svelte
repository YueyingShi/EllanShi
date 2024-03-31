<script>
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/stores';
	import { goto } from '$app/navigation';
	let email = '';

	async function signUpNewUser() {
		const { data: userDetails, error } = await supabase.auth.signUp({
			email: email,
			password: 'example-password'
		});
		$user = userDetails;
		goto('/data');
	}

	async function logIn() {
		let { data: userDetails, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: 'example-password'
		});
		$user = userDetails.user;
		goto('/data');
	}
</script>

<!-- 
<label for="email">Email</label>
<input type="email" name="email" id="email" bind:value={email} /> -->
<input type="email" name="email" id="email" bind:value={email} />
<button
	on:click={() => {
		signUpNewUser();
	}}>Sign Up</button
>
<button
	on:click={() => {
		logIn();
	}}>Log In</button
>
