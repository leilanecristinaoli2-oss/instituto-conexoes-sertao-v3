
import { navegar } from "./modules/router.js";

document.addEventListener("DOMContentLoaded", () => {
    navegar();

    window.addEventListener("hashchange", navegar);
});

