
document.addEventListener("DOMContentLoaded", () => {

    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });



    try {

        document.querySelectorAll(".slide-layer")[swiper.activeIndex].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        let activeSlide = document.querySelectorAll(".swiper-slide")[swiper.activeIndex];

        let title = activeSlide.querySelector("h1");
        let button = activeSlide.querySelector("button");

        title.classList.add("animate__animated", "animate__flipInX");
        button.classList.add("animate__animated", "animate__flipInX");


        setTimeout(function () {
            title.classList.remove("animate__animated", "animate__flipInX");
            button.classList.remove("animate__animated", "animate__flipInX");
        }, 3500);
    } catch (err) {
        console.log("erro: " + err)
    }


    swiper.on('slideChange', function () {
        try {
            // console.log(`Slide mudou!. Swiper ativo: ${swiper.activeIndex}`);

            document.querySelectorAll(".slide-layer").forEach(function (layer) {
                layer.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            });


            console.log(swiper.activeIndex)
            if(swiper.activeIndex==3){
                document.querySelectorAll(".slide-layer")[swiper.activeIndex].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
            }else{
                document.querySelectorAll(".slide-layer")[swiper.activeIndex].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            }
         

           


            // Adiciona a animação ao titulo e ao botão do slide ativo
            let activeSlide = document.querySelectorAll(".swiper-slide")[swiper.activeIndex];

            let title = activeSlide.querySelector("h1");
            let button = activeSlide.querySelector("button");

            title.classList.add("animate__animated", "animate__flipInX");
            button.classList.add("animate__animated", "animate__flipInX");


            setTimeout(function () {
                title.classList.remove("animate__animated", "animate__flipInX");
                button.classList.remove("animate__animated", "animate__flipInX");
            }, 3500);


        } catch (erro) {
            console.log("Erro:", erro);
        }
    });









})