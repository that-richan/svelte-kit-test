import { articlesMock } from "../../mock/article.mock";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
	return {
		articles: articlesMock,
	};
};
