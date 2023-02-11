import { error } from "@sveltejs/kit";
import { articlesMock } from "../../../mock/article.mock";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
	const articleId = parseInt(params.id);
	const article = articlesMock.find(article => article.id === articleId);

	if (!article) {
		throw error(404, "This article does not exist!");
	}

	return {
		article,
	};
};
