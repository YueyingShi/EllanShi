import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.id) {
		return {
			prop: params.id
		};
	} else {
		return { prop: 'notfound' };
	}
}
