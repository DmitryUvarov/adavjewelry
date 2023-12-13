// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener('load', pageLoad)

function pageLoad() {
    const htmlTag = document.documentElement

    document.addEventListener('click', e => {
        const targetElement = e.target

        if (targetElement.closest('.class')) {
            console.log('1');
        }

        let catalog = document.querySelector('[data-catalog]');

        if (catalog && targetElement.closest('[data-catalog-open]')) {
            htmlTag.classList.toggle('open-catalog')
        }
        // || htmlTag.closest('.open-catalog') && !targetElement.closest(".catalog-header__body") && !targetElement.closest('[data-catalog-open]')
        if (htmlTag.closest('.open-catalog') && !targetElement.closest(".catalog-header__body") && !targetElement.closest('[data-catalog-open]')) {
            htmlTag.classList.toggle('open-catalog')
        }

        /////


        if (targetElement.closest('[data-search]')) {
            htmlTag.classList.toggle('open-search')

            let input = document.querySelector('.search-header input')
            input && input.focus()

        }
        if (htmlTag.closest('.open-search') && !targetElement.closest("[data-search]") && !targetElement.closest(".search-header")) {
            htmlTag.classList.toggle('open-search')
        }
    })





}