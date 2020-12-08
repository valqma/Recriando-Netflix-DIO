$('.owl-carousel').owlCarousel({
    loop:true, /*para deixar efeito sem fim loop */
    margin:10, /*margem entre uma imagem e outra*/
    nav:false, /*são as setinhas de navegação em cima das bolinhas */
    responsive:{ /*elementos se encaixam quando altera o tamanho da tela responsividade */
        0:{ /*quando a tela estiver proximo de 0 apresenta 1 unico item */
            items:1
        },
        600:{ /*quando a tela tiver 600px ou menos apresenta 3 itens por vez*/
            items:3
        },
        1000:{ /*quando a tela tiver 1000px ou menos apresenta 5 itens por vez*/
            items:5
        }
    }
})