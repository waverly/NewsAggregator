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

    $.get("https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 21 (buzzfeed)

    $.get("https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 22 (cnbc)

    $.get("https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 23 (financial times)

    $.get("https://newsapi.org/v1/articles?source=fortune&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 24 (fortune)

    $.get("https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 25 (google news)

    $.get("https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=24471d8efdd04ef4aa01fd04efb28328", function(results){
      var root = results.articles;
      var length = root.length;
      var sourceName = results.source;
      forLoop(root, length, sourceName);
      postToPage(sourceName);
    });
    //End Get Request 26 (mtv news)
  }
  // end of getAndPost


TrumpCount = 0;

// Pull data out of the API, store it in a firebase key that is the name of the source
function forLoop(root, length, sourceName){
  for (i=0; i<length; i++){
    var title = root[i].title;
    var description = root[i].description;
    var url = root[i].url;


    if (title.indexOf("Trump") >= 0){
      TrumpCount++;
      titlesAppReference.ref('TrumpCount/').push({
        title: title,
        count: TrumpCount
      });

    }
    // use the set method to save data to the messages
    titlesAppReference.ref('sources/' + sourceName + '/' + i).set({
      title: title,
      url: url
    });
  }
}

  // use reference to app database to listen for changes in messages data
  // Whenever a new source is added, append the titles within it to the page

  var firebaseArray = []

  function postToPage (source){
    titlesAppReference.ref('/sources/' + source).on('value', function(results) {
      // iterate through results coming from database call;
        results.forEach(function (item) {
          var title = item.val().title;
          var url = item.val().url;
          var newTitle = "<li><a target='_blank' href='"+url+"'>"+title+"</a></li>"
          firebaseArray.push(newTitle);
        });  // end for each
      });  // end on fx
      counter ++;
  }  // end postToPage fx

  setTimeout(function(){
      postArrayToPage();
  }, 2500)


  function postArrayToPage(){
    for (i=0; i<=firebaseArray.length; i++){
      $("ul").append(firebaseArray[i]);
    }

  }



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
            var innerText = ($(this).html());

            if (innerTextLength < 60){
              $(this).html(function(){
                return innerText + " " + innerText;
              });
            }

            else if (innerTextLength < 26){
              $(this).html(function(){
                return innerText + " " + innerText + "" + innerText;
              });
            }
          });

          // when page is done loading and all headlines have been printed appropriately, remove loading screen
          $('#load').toggleClass('loader');

        }, 2000);
        // end SetTimeOut


        var searchQuery;

        document.getElementById('message').addEventListener('keyup', function (event){
          searchQuery = ($(this).val());

          // what if delete is pressed
          if(event.keyCode == 8) {
             $(".headlines").empty();
             searchQuery = $('#message').val();
             postArrayToPage()

             $('.headlines li').each(function(){
               // for each headline make sure it fills the width of page
               // by getting length and if it is too short, print it twice
               var innerTextLength = ($(this).text()).length;
               var innerText = ($(this).html());

               if (innerTextLength < 60){
                 $(this).html(function(){
                   return innerText + " " + innerText;
                 });
               }

               else if (innerTextLength < 26){
                 $(this).html(function(){
                   return innerText + " " + innerText + "" + innerText;
                 });
               }
             });

             if ( counter >= 19 ){

               setTimeout(function(){

                //  append second headline if it's too short
                 $('.headlines li').each(function(){
                   var innerTextLength = ($(this).text()).length;
                   var innerText = ($(this).html());

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
            $('#numResults').text(filtered.length);

            $('.headlines').empty();
            for ( i = 0; i<filtered.length; i++){
              $('.headlines').append("<li>" + filtered[i] + "</li>");
            }

          }
        }, false);
        // end keyup fx

      }  // end setInterval callback fx
    }, 1000);// end setInterval


    var ref = titlesAppReference.ref("TrumpCount");
    ref.once("value", function(snapshot) {
      var a = snapshot.numChildren();
      $("#trumpstats").append("<h4>The string 'Trump' has been printed " +
       a + " times since the inception of this app</h4>");
    });

    $('i').on("click", function(){
      $("#trumpstats").toggle();
    });

// end Document Ready
});
