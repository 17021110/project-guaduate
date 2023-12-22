import staticPageRoutes from "../views/static-page/static-page.routes";
import pagesRoutes from "../views/page/pages.routes";
export const routes = [...pagesRoutes(), ...staticPageRoutes()];
