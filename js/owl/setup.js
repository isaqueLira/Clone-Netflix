$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function acaoInfo(){

    let modal = document.querySelector('.modalInfo')
    
    modal.style.display = 'block';
}

function fecharInfo(){
    
    let modal = document.querySelector('.modalInfo')
    
    modal.style.display = 'none';
}