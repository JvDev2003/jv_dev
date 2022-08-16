$(function(){

    debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    //-----------------------------------------------------

    (function(){//função para fazer a transição do banner
    var bg = $('header');

        function sli1(){
            bg.css('background-image',`url('img/bg2.jpg')`);
            setTimeout(sli2,10000);
        };
        function sli2(){
            bg.css('background-image',`url('img/bg3.jpg')`);
            setTimeout(sli3,10000);
        };

        function sli3(){
            bg.css('background-image',`url('img/bg1.jpg')`);
            setTimeout(sli1,10000);
        }

        setTimeout(sli1, 10000);
    }());
    //---------------------------------------------------------
    
    (function(){//função para animar a aparição do conteudo
    var $anime = $('.transicao'),animacao = 'transicao-start';
    function animeScroll(){
        var documentTop = $(document).scrollTop();//calcula a distancia entre o topo e o ponto atual da pagina
        offset = $(window).height() * 3/4;//variavel que da um intervalo satisfatorio para a aparição do conteudo

        $anime.each(function(){
            var itemTop = $(this).offset().top;//calcula a distancia do item até o topo do site
            if(documentTop > itemTop - offset){
                console.log('teste');
                $(this).addClass(animacao);
            }
        })
    };
    animeScroll();
    $(document).scroll(debounce(animeScroll,200));
    }());

    //---------------------------------------------------------
    (function(){
        $('nav a').click(function(e){
            e.preventDefault();

            var id = $(this).attr('href');// this pega um elemento especifico mesmo que tenham outros iguais, attr pega o atributo selecionado
            distancia = $(id).offset().top;
            $('html, body').animate({
                scrollTop: distancia-10
            },500);
        });
    }());

    $('form input[type=submit]').click(function(e){
        e.preventDefault();
        alert('Contato por formulario ainda não funcional \nProblema: {sem email de dominio}.');
    });
});

function myFunction() {
    var x = document.getElementById("mobile");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
