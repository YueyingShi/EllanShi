import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.projectProp) {
		return {
			prop: params.projectProp
		};
	} else {
		return { prop: 'notfound' };
	}
}
