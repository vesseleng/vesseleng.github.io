

document.addEventListener("DOMContentLoaded", () => {

    let logo = document.querySelector("#logo")

    logo.addEventListener("click", () => {

        window.location.href = "/"


    })




    let ham = document.querySelector(".ham")
    let menuDrop = document.querySelector(".menuDrop")
    ham.addEventListener("click", () => {
        if (menuDrop.style.display === "flex") {
            menuDrop.style.display = "none";
        } else {
            menuDrop.style.display = "flex";
        }
    })





    //bandeira


    let selecionada = document.querySelector(".selected");
    let aberta = false;

    selecionada.addEventListener("click", () => {
        let atual = document.querySelector(".selected").src.substring(document.querySelector(".selected").src.lastIndexOf("/") + 1, document.querySelector(".selected").src.lastIndexOf("."));

        if (!aberta) {
            aberta = true;
            document.querySelectorAll(".bandeira").forEach((bandeira) => {
                if (bandeira.id !== atual) {
                    bandeira.style.display = "block";
                }
            });
        } else {
            aberta = false;
            document.querySelectorAll(".bandeira").forEach((bandeira) => {
                bandeira.style.display = "none";
            });
        }
    });

    document.querySelectorAll(".bandeira").forEach((bandeira) => {
        bandeira.addEventListener("click", () => {
            selecionada.src = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${bandeira.id}.svg`;
            selecionada.id = bandeira.id;

            if (bandeira.id === "GB") {
                window.location.href = "/eng";
            }
            if (bandeira.id === "BR") {
                window.location.href = "/";
            }

            aberta = false;

            document.querySelectorAll(".bandeira").forEach((bandeira) => {
                bandeira.style.display = "none";
            });
        });
    });




})



