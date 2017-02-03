$("#message").on('input propertychange paste', function() {

  searchQuery = ($(this).val());

  alert('RED ALERT' + " " + searchQuery);
  $(".headlines li").unmark();

  $(".headlines li").mark(searchQuery, {
    "element": "span",
    "className": "highlight"
  });

  //filter();

  function filter(){
    var list = document.getElementsByTagName("li");
    var newList = [];

    for (i=0;i<list.length;i++){
      newList.push(list[i].innerHTML);
    }

    var filtered = newList.filter(containsQuery);
    var filteredLength = filtered.length;
    console.log(filtered);
    console.log(filteredLength);
  }

        function containsQuery(value){
          if (value.indexOf(searchQuery) >= 0){
            return true;
          }
          else {
            return false;
          }

        }

      // var ulHeight = ((filtered.length)*80)/2;
      // console.log(ulHeight);

    //$('#numResults').text(filtered.length);

    $('.headlines').empty();
    for ( i = 0; i<filtered.length; i++){
      $('.headlines').append("<li>" + filtered[i] + "</li>");
    }

    console.log(searchQuery);
});

document.getElementById('message').addEventListener('keyup', function (event){
  searchQuery = ($(this).val());



  $(".headlines li").unmark();

  $(".headlines li").mark(searchQuery, {
    "element": "span",
    "className": "highlight"
  });




  filter();

  function filter(){
    var list = document.getElementsByTagName("li");
    var newList = [];

    for (i=0;i<list.length;i++){
      newList.push(list[i].innerHTML);
    }
    var filtered = newList.filter(containsQuery);

    function containsQuery(value){
      if (value.indexOf(searchQuery) >= 0){
        return true;
      }
      else {
        return false;
      }

    }

    var ulHeight = ((filtered.length)*80)/2;
    console.log(ulHeight);

    $('#numResults').text(filtered.length);

    $('.headlines').empty();
    for ( i = 0; i<filtered.length; i++){
      $('.headlines').append("<li>" + filtered[i] + "</li>");
    }

    console.log(searchQuery);
  }
  // end filter fx


}, false);
// end keyup fx
}
// end setInterval callback fx
}, 1000);




--------

// document.getElementById('message').addEventListener('keyup', function (event){
//   searchQuery = ($(this).val());
//
//   // what if delete is pressed
//   if(event.keyCode == 8) {
//     $('#load').toggleClass('loader');
//      console.log('Delete Key Pressed');
//      $(".headlines").empty();
//      searchQuery = $('#message').val();
//      console.log("something has been deleted " + searchQuery);
//      getAndPost();
//
//      $('.headlines li').each(function(){
//        var innerTextLength = ($(this).text()).length;
//        var innerText = ($(this).text());
//
//        if (innerTextLength < 60){
//          $(this).text(function(){
//            return innerText + " " + innerText;
//          });
//        }
//
//        else if (innerTextLength < 26){
//          $(this).text(function(){
//            return innerText + " " + innerText + "" + innerText;
//          });
//        }
//      });
//
//      if ( secondCounter >= 19 ){
//        console.log("secondCounter is"+secondCounter);
//        console.log('outside of setTimeOut');
//        console.log( $('li'));
//
//        setTimeout(function(){
//          console.log( $('li'));
//
//         //  append second headline if it's too short
//          $('.headlines li').each(function(){
//            var innerTextLength = ($(this).text()).length;
//            var innerText = ($(this).text());
//
//            if (innerTextLength < 60){
//              $(this).text(function(){
//                return innerText + " " + innerText;
//              });
//            }
//
//            else if (innerTextLength < 26){
//              $(this).text(function(){
//                return innerText + " " + innerText + "" + innerText;
//              });
//            }
//          });
//
//          filter();
//
//          $(".headlines li").unmark();
//          $(".headlines li").mark(searchQuery, {
//            "element": "span",
//            "className": "highlight"
//          });
//          $('#load').toggleClass('loader');
//        }, 2000)
//
//      }
//   }
//
//   $(".headlines li").unmark();
//
//   $(".headlines li").mark(searchQuery, {
//     "element": "span",
//     "className": "highlight"
//   });
//
//
//
//
  filter();

  function filter(){
    var list = document.getElementsByTagName("li");
    var newList = [];

    for (i=0;i<list.length;i++){
      newList.push(list[i].innerHTML);
    }
    var filtered = newList.filter(containsQuery);

    function containsQuery(value){
      if (value.indexOf(searchQuery) >= 0){
        return true;
      }
      else {
        return false;
      }

    }

    var ulHeight = ((filtered.length)*80)/2;
    console.log(ulHeight);

    $('#numResults').text(filtered.length);

    $('.headlines').empty();
    for ( i = 0; i<filtered.length; i++){
      $('.headlines').append("<li>" + filtered[i] + "</li>");
    }

    console.log(searchQuery);
  }
//
//
// }, false);
// end keyup fx
}
// end setInterval callback fx
}, 1000);
// end setInterval
