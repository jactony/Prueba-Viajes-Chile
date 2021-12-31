$(function(){   //Esta es la función general de jquery
    //Todos los métodos de jquery van acá adentro

    //esconde una seccion o zona al dobleclick
$("p").dblclick(function(){
$(this).hide();
});

//ventanas chicas mostrando inf al pasar el mouse
$('[data-bs-toggle ="tooltip"]').tooltip();

$('#twitter').click(function(){
alert("Viajes Chile es una aventura");
});

$('#facebook').click(function(){
    alert("Viajes Chile es una aventura");
    });

    $('#instagram').click(function(){
        alert("Viajes Chile es una aventura");
        });
    
        $('#github').click(function(){
            alert("Viajes Chile es una aventura");
            });

//escondemos el párrafo en las tarjetas
// hciendo click en el titulo
$('.card-img-top').click(function(){
$('.esconder').toggle();
});

//cambiar color a texto
$('body').on('dblclick','h1', function(){
$(this).css("color", "blue");
})

});