// $(document).ready(function(){
//     $("p").hide();
// }
// )

// $(function(){
//     $("p").hide();
// });


// $(function(){
//     $("button").mouseenter(function(){
//         $("#para").hide();
//     })
// });

// hide();
// show();

// fadeOut();
// fadeIn();
// fadeToggle();



// $(function(){
//     $('#hide').click(function(){
//         $("#para").fadeOut(5000);
//     });
//     $('#show').click(function(){
//         $("#para").fadeIn(2000);
//     });
//     $('#both').click(function(){
//         $("#para").fadeToggle(2000);
//     });
// })


// slideDown();
// slideUp();
// slideToggle();


// $(function(){
//     $('.flip').click(function(){
//         $('.panel').slideToggle();
//     })
// })

// changing style


// $(function(){
//     $('p').css('color', 'red').fadeOut(2000).fadeIn(1000);
// })

// content fetching - text(), html(), and val()

// $(function(){
//     alert($('p').html());
// });


// $(function(){
//     $('p').text('i am a para');
// });

// fetching attribute values and re-writting it


// $(function(){
//     $('#anchor').attr('href', 'https://yahoo.co.in');
// })


// add new html/ remove element

// append()
// prepend()
// after()
// before()

// remove()
// empty()

$(function(){
    $('#list').prepend("<li>added item</li>");
    $('#list').before('<p>this is para</p>');
})