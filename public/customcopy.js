// FIREBASE DEPLOY

// Initialize Firebase
    var config = {
      apiKey: "AIzaSyAhPnK6JCmsellK8yTbIA9tXixxIuvfkiw",
      authDomain: "finalproject-1694e.firebaseapp.com",
      databaseURL: "https://finalproject-1694e.firebaseio.com",
      storageBucket: "finalproject-1694e.appspot.com",
      messagingSenderId: "323938447538"
    };
    firebase.initializeApp(config);
    var titlesAppReference = firebase.database();



$(document).ready(function(){

  // Count how many get requests have loaded
  var counter = 0;

  // Call get requests as soon as document is ready
  getAndPost();

  // Create fx to wrap all get requests
  // Run a <li> append resource at the end of every get request
  function getAndPost(){
    $.get("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    // End Get Request 1 (CNN)

    $.get("https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    // End Get Request 2 (associated-press)

    $.get("https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    // End Get Request 3 (business-insider)

    $.get("https://newsapi.org/v1/articles?source=fortune&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    // End Get Request 4 (fortune)

    $.get("https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    // End Get Request 5 (new-scientist)

    $.get("https://newsapi.org/v1/articles?source=newsweek&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    // End Get Request 6 (newsweek)


    $.get("https://newsapi.org/v1/articles?source=new-york-magazine&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 7 (new-york-magazine)


    $.get("https://newsapi.org/v1/articles?source=reddit-r-all&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 8 (reddit)

    $.get("https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 9 (economist)

    $.get("https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 10 (NYT)

    $.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 11 (BBC)

    $.get("https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 12 (Bloomberg)

    $.get("https://newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 13 (Reuters)

    $.get("https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 14 (guardian)



    $.get("https://newsapi.org/v1/articles?source=the-huffington-post&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 15 (huffington post)



    $.get("https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 16 (the-wall-street-journal)

    $.get("https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 17 (the washington post)

    $.get("https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 18 (time)

    $.get("https://newsapi.org/v1/articles?source=usa-today&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 19 (usa today)

    $.get("https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 20 (the times of india)
  }
  // end of getAndPost



// Pull data out of the API, store it in a firebase key that is the name of the source
function forLoop(root, length, sourceName){
  for (i=0; i<length; i++){
    var title = root[i].title;
    var description = root[i].description;
    var url = root[i].url;
    // use the set method to save data to the messages
    titlesAppReference.ref('sources/' + sourceName + '/' + i).set({
      title: title,
      url: url
    });
  }
}

  // use reference to app database to listen for changes in messages data
  // Whenever a new source is added, append the titles within it to the page
  function postToPage (source){
    titlesAppReference.ref('/sources/' + source).on('value', function(results) {
      // iterate through results coming from database call;
        results.forEach(function (item) {
          var title = item.val().title;
          var url = item.val().url;
          var newTitle = "<li>"+title+"</li>"
          // var testTitle = $(newTitle).append("<a href='" + url + "'>" + title + "</a>");
          // console.log(testTitle);
          $("ul").append(newTitle);
        });  // end for each
      });  // end on fx
      counter ++;
  }  // end postToPage fx



// Set up a timer to check and see if enough sources have loaded
  var checkCount = setInterval(
    function(){
      if ( counter >= 19){
        clearInterval(checkCount);

        // Run a function once the li elements have been appended and all get requests fufilled
        setTimeout(function(){
          // how many li elements have been appended? Put this number at the top of pg
          $('#numResults').text(" " + $(".headlines li").length);

          $('.headlines li').each(function(){
            // for each headline make sure it fills the width of page
            // by getting length and if it is too short, print it twice
            var innerTextLength = ($(this).text()).length;
            var innerText = ($(this).text());

            if (innerTextLength < 60){
              $(this).text(function(){
                return innerText + " " + innerText;
              });
            }

            else if (innerTextLength < 26){
              $(this).text(function(){
                return innerText + " " + innerText + "" + innerText;
              });
            }
          });

          // when page is done loading and all headlines have been printed appropriately, remove loading screen
          $('#load').toggleClass('loader');

        }, 2000);


        var searchQuery;

        // refactor to use .change()

        $("#message").on('input propertychange paste', function() {
            $('#load').toggleClass('loader');
            $(".headlines").empty();
            getAndPost();
            searchQuery = ($(this).val());

            alert('RED ALERT' + " " + searchQuery);

            $(".headlines li").unmark();
            $(".headlines li").mark(searchQuery, {
              "element": "span",
              "className": "highlight"
            });

            filter();

            function filter(){
              alert('filter!');
              var list = document.getElementsByTagName("li");
              var newList = [];

              for (i=0;i<list.length;i++){
                newList.push(list[i].innerHTML);
              }

              var filtered = newList.filter(containsQuery);
              alert("filtered =  " + filtered);
              // var filteredLength = filtered.length;
              // console.log(filtered);
              // console.log(filteredLength);
              //
              function containsQuery(value){
                if (value.indexOf(searchQuery) >= 0){
                  return true;
                }
                else {
                  return false;
                }
              }

              $('#numResults').text(filtered.length);

              $('.headlines').empty();
              for ( i = 0; i<filtered.length; i++){
                $('.headlines').append("<li>" + filtered[i] + "</li>");
              }

              console.log(searchQuery);
              $('#load').toggleClass('loader');
            } // end filter fx
        });


        document.getElementById('message').addEventListener('keyup', function (event){
          searchQuery = ($(this).val());

          // what if delete is pressed
          if(event.keyCode == 8) {
            $('#load').toggleClass('loader');
             console.log('Delete Key Pressed');
             $(".headlines").empty();
             searchQuery = $('#message').val();
             console.log("something has been deleted " + searchQuery);
             getAndPost();

             $('.headlines li').each(function(){
               var innerTextLength = ($(this).text()).length;
               var innerText = ($(this).text());

               if (innerTextLength < 60){
                 $(this).text(function(){
                   return innerText + " " + innerText;
                 });
               }

               else if (innerTextLength < 26){
                 $(this).text(function(){
                   return innerText + " " + innerText + "" + innerText;
                 });
               }
             });

             if ( secondCounter >= 19 ){
               console.log("secondCounter is"+secondCounter);
               console.log('outside of setTimeOut');
               console.log( $('li'));

               setTimeout(function(){
                 console.log( $('li'));

                //  append second headline if it's too short
                 $('.headlines li').each(function(){
                   var innerTextLength = ($(this).text()).length;
                   var innerText = ($(this).text());

                   if (innerTextLength < 60){
                     $(this).text(function(){
                       return innerText + " " + innerText;
                     });
                   }

                   else if (innerTextLength < 26){
                     $(this).text(function(){
                       return innerText + " " + innerText + "" + innerText;
                     });
                   }
                 });

                 filter();

                 $(".headlines li").unmark();
                 $(".headlines li").mark(searchQuery, {
                   "element": "span",
                   "className": "highlight"
                 });
                 $('#load').toggleClass('loader');
               }, 2000)

             }
          }
          // end delete;

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


        }, false);
        // end keyup fx
      }
      // end setInterval callback fx
    }, 1000);
    // end setInterval

// end Document Ready
});
