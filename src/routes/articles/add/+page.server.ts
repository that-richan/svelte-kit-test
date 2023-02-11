import type { Actions } from "./$types";
import { articlesMock } from "../../../mock/article.mock";
import { redirect } from "@sveltejs/kit";

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log("Received request to add an article: ", formData);

		const newId = articlesMock.reduce((max, article) => article.id > max ? article.id : max, 0) + 1;
		console.log("Calculated new ID: ", newId);

		articlesMock.push({
			id: newId,
			name: formData.get("name")?.toString() ?? "",
			description: formData.get("description")?.toString() ?? "",
		});

		throw redirect(303, "/articles");
	},
};
