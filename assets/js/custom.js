'use strict';

//Creation context and hoisting (hissage)
console.log(a);
var a = "Hello World";

function greet() {
    return console.log("WTF");
}
greet();

//ex: On appelle la fonction avant de la créer
nomChat("Chloé");

function nomChat(nom) {
    console.log("Le nom de mon chat est " + nom);
}

// Pendant la phase de création la fonction et la variable sont mises en mémoire
// Mais pas la valeur de la variable

window.addEventListener('DOMContentLoaded', function () {
    // window.getComputedStyle
    const avatar = document.querySelector('.apropos__foto figure img');
    let cssVar = window.getComputedStyle(avatar).getPropertyValue("height");
    console.log(cssVar);
    const cssAvatar = getComputedStyle(avatar, null);
    console.log("Font size: ", cssAvatar.fontSize);
    console.log(getComputedStyle(avatar).getPropertyValue("border-bottom-style"));
    console.log(typeof cssVar);

    let sectionTheme = document.querySelectorAll('section:nth-of-type(2n)');
    let btnRadio = document.querySelectorAll('input[name="theme"]');

    // let section = sectionTheme.forEach((sec) => {
    //une manière de parcourir la collection
    // })

    // console.log(btnRadio);

    // let btnRadioArray = Array.from(btnRadio)
    // console.log(btnRadioArray);


    // btnRadioArray.map((btn) => {
    //une manière de parcourir la collection
    //     return console.log(btn.classList.add('lower'));
    // })


    // Themes Color
    function changeColorSection(color) {
        for (const section of sectionTheme) {
            // Set Property of var CSS to change color of theme
            section.style.setProperty('--bg-section-color', color);
        }
        for (const btn of btnRadio) {
            //une manière de parcourir la collection
            btn.removeAttribute('checked');
        }
    }
    function changeColorTheme() {
        for (const btn of btnRadio) {
            btn.addEventListener('change', () => {
                switch (btn.value) {
                    case 'light': changeColorSection('#6a89cc'); btn.setAttribute('checked', '');
                        break;
                    case 'gold': changeColorSection('#daa520'); btn.setAttribute('checked', '');
                        break;
                    default: changeColorSection('#373737'); btn.setAttribute('checked', '');
                }
            })
        }
    }
    changeColorTheme();

    console.log(window.innerHeight);
})