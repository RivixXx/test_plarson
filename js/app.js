"use strict"
// Реализация функционала аналога window.onload ================================

function windowOnload() {
    if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", windowOnload);
    } else {
        console.log("Cтраница полностью загружена.")
    }
}

windowOnload();

// бургер меню =================================================================

const burgerMenu = document.querySelector('.burger__menu');

if (burgerMenu) {
    burgerMenu.addEventListener('click', function(e) {
        burgerMenu.classList.toggle('_active');
    });
}


// Получение данных из API ===========================================================

const ApiUrl = "https://reqres.in/api/users?per_page=12";

async function getUsersData() {
    let response = await fetch(ApiUrl);
    let content = await response.json();
    content = content.data;

    let contentBox = document.querySelector('.navigation');

    let key;

    for (key in content) {
        contentBox.innerHTML += `
            <div class="contact">
                <div class="contact__avatar">
                    <img src="${content[key].avatar}" alt="Аватар пользователя" title="Аватар пользователя" width="40px" height="40px">
                </div>
                <div class="contact__body">
                    <h3 class="contact__body-title">${content[key].first_name}</h3>
                </div>
                <div class="contact__info">
                    <p class="contact__info-time">21:41</p>
                    <span class="contact__info-count">1</span>
                </div>
            </div>
        `
    }
}

getUsersData();


