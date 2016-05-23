'use strict';

// Google Chrome has 100% percent of support ES6.

const LETTER_E = 69;

let bindEditButton = () => {
    let $button = document.querySelector('.icon.icon-edit');

    window.addEventListener('keydown', (event) => {
        if (event.keyCode !== LETTER_E) {
            // Letter 'e' is not pressed.
            return;
        }

        if (!event.metaKey && !event.ctrlKey) {
            // Button COMMAND or CTRL are not pressed.
            return;
        }

        if (!$button) {
            // Edit button is not exist.
            return;
        }

        let $form = document.querySelector('#update');
        let $subject = $form.querySelector('#issue_subject');

        // Display edition form.
        $form.style.display = 'block';

        // Set focus to issue subject.
        $subject.focus();
    });
}

bindEditButton();
