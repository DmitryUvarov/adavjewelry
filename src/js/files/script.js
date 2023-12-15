// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLock, bodyUnlock, isMobile } from "./functions.js";
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



        ///


        if (targetElement.closest('[data-filter]')) {
            bodyLock()
            htmlTag.classList.add("open-filter")
        }

        if (targetElement.closest('[data-filter-close]')) {
            htmlTag.classList.remove("open-filter")
            bodyUnlock()
        }
    })


    let category = document.querySelector('.category')

        if (category) {
            let categoryShowBtn = category.querySelector('.category__more')

            categoryShowBtn.addEventListener('click', () => {

                if (!category.closest('.show')) {
                    category.classList.add('show')
                    return;
                } else {
                    category.classList.remove('show')
                    return;
                }
            })

        }


        /////////////////

      let amount = document.querySelector('[data-amount]');
      if (amount) {
            let amountValueElement = document.querySelector('[data-amount-value]');
            let amountMinusButton = document.querySelector('[data-amount-minus]');
            let amountPlusButton = document.querySelector('[data-amount-plus]');
            let amountInput = document.querySelector('.amount__input');

            let currentValue = parseInt(amountValueElement.textContent.replace(/\s/g, ''), 10);

            function formatNumberWithSpaces(number) {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }

            function updateValue(step) {
                currentValue += step;
                amountValueElement.textContent = formatNumberWithSpaces(currentValue);
                amountInput.value = currentValue;
            }

            amountMinusButton.addEventListener('click', function() {
                if (currentValue > 10000) {
                updateValue(-10000);
                }
            });

            updateValue(0)

            amountPlusButton.addEventListener('click', function() {
                updateValue(10000);
            });
      }

      ///////////////////

      let textareaBlock = document.querySelector('[data-textarea]');
      if (textareaBlock) {
        let textarea = textareaBlock.querySelector('textarea');
        let enteredSpan = textareaBlock.querySelector('[data-entered]');

        // Максимальное количество символов
        let maxLength = textarea.getAttribute('maxlength');

        // Обработчик события ввода в текстовое поле
        textarea.addEventListener('input', function() {
          let enteredText = textarea.value.length;
          enteredSpan.textContent = enteredText;

          // Добавляем/удаляем класс .full в зависимости от достижения лимита
          if (enteredText >= maxLength) {
            textareaBlock.classList.add('full');
          } else {
            textareaBlock.classList.remove('full');
          }
        });
      }



}