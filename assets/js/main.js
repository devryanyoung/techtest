
//add to cart
function addToCart() {
    const btn1 = document.querySelector('#sizing1');
    const btn2 = document.querySelector('#sizing2');
    const btn3 = document.querySelector('#sizing3');
    
    if ( btn1.classList.contains("active") || btn2.classList.contains("active") || btn3.classList.contains("active") ) {
        var totalCartItems = document.getElementById('totalCart').innerText;
        var a = parseInt(totalCartItems);
        a += 1;    
        document.getElementById("totalCart").innerHTML = a;
        alert("add to cart succesfully ...");
    }
    else {
        alert("select sizing ...");
    }

}

//toggle class
$(document).ready(function(){
    $('#cartItem').hide();
    $('#sizing1').click(function(){
        $('#sizing2,#sizing3').removeClass("active")
        $('#sizing1').toggleClass("active")
        $('#size').empty().append('S');
    });
    
    $('#sizing2').click(function(){
        $('#sizing1,#sizing3').removeClass("active")
        $('#sizing2').toggleClass("active")
        $('#size').empty().append('M');
    });
    
    $('#sizing3').click(function(){
        $('#sizing1,#sizing2').removeClass("active")
        $('#sizing3').toggleClass("active")
        $('#size').empty().append('L');
    });

    $('.addtocart').click(function(){
        $('.addcart').toggleClass("active")

        var totalCart = 0;

        totalCart = $('#totalCart').app
    });
    $('#mycart')
        .mouseenter(function() {
            $('#cartItem').show();
        })
        .mouseleave(function() {
            $('#cartItem').hide();
        })
});
