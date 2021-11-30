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
    console.log(getComputedStyle(avatar).getPropertyValue("border-bottom-style"));
    console.log(typeof cssVar);

    // Set Property of var CSS to change color of theme
    let sectionTheme = document.querySelectorAll('section:nth-of-type(2n)');
    let btnRadio = document.querySelectorAll('input[name="theme"]');
    //let propsColor = sectionTheme.style.setProperty('--bg-section-color', 'red');

    // for (const section of sectionTheme) { 
    //     style.setProperty('--bg-section-color', '#6a89cc'); 
    // }


    // let section = sectionTheme.forEach((sec) => {

    // })

    // Themes Color
    function changeColorTheme() {
        for (const btn of btnRadio) {
            btn.addEventListener('change', () => {
                let isChecked = btn.checked;
                if (isChecked === true) {
                    switch (btn.value) {
                        case 'light': for (const section of sectionTheme) { section.style.setProperty('--bg-section-color', '#6a89cc'); }
                            break;
                        case 'dark': for (const section of sectionTheme) { section.style.setProperty('--bg-section-color', '#373737'); }
                            break;
                        case 'gold': for (const section of sectionTheme) { section.style.setProperty('--bg-section-color', '#daa520'); }
                            break;
                        default:
                    }

                }
            })
        }
    }
    changeColorTheme();

    console.log(window.innerHeight);
})