// $(document).ready(function(){
// });

// Pause the carousel
// $("#carousel").carousel('pause');

// Resume Carousel - not working
// $('input').focus(function(){
//     $("#myCarousel").carousel('pause');
//  }).blur(function() {
//     $("#myCarousel").carousel('cycle');
//  });




$('.carousel').carousel({
    interval: 3000
  });



$('#mattressModal').on('show.bs.modal', function (event) {

    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.




    var Belleza = {
        name: 'Belleza Classica',
        comfortLevel: 'Medium Firm',
        topperType: 'Pillow Top',
        info: '<li>Memory Foam Infused with Gel Pillow Top</li> <li>Individual Pocket Coil Unit</li><li>Foam Encasement</li><li>Blue Suede Border</li>',
        price: '<li>Full: $1399</li> <li>Queen: $1999</li> <li>California King: $2399</li> <li>Easter King: $2399</li> '
    };

    var chiro = {
        name: 'chiro',
        comfortLevel: '2Medium Firm',
        topperType: '2Pillow Top',
        info: '<li>2Memory Foam Infused with Gel Pillow Top</li> <li>2Individual Pocket Coil Unit</li> <li>2Foam Encasement</li> <li>2Blue Suede Border</li>',
        price:{ twin: '2$1399',
                full: '2$1700',
                queen: '2$1999',
                calKing: '2$2399',
                eastKing: '2$2399'
                }
    };


    var mattress = [
                Belleza, chiro
    ];

    console.log(recipient);
    

    for(var i=0; i < mattress.length;i++){
        if(mattress[i].name == recipient){
            console.log(mattress[i].name, 'here ' + i);
            var info = mattress[i].info;
            var price = mattress[i].price;
            var comfortLevel = mattress[i].comfortLevel;
            var topperType = mattress[i].topperType;
            
        }
    }
    

    


    var modal = $(this)
    
    modal.find('.modal-title').html( recipient )
    modal.find('.modal-body .modalLeft').html( info )
    modal.find('.modal-body .modalRight').html( price )
    modal.find('.modal-body .comfLevel').html( comfortLevel )
    modal.find('.modal-body .topperType').html( topperType )
    
    
    // modal.find('.modal-title').html( "<b>Wow!</b> Such excitement..." );
    // modal.find('.modal-body input').val(recipient)


  })