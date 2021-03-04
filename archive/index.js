$(document).ready(function loadDoc() {
    $.ajax({
  
           url: "movies.xml",
           dataType: "xml",
           success: function(data) {
              
              $("table").append('<tr><td>Title</td><td>Genre</td><td>Director</td><td>Cast</td><td>Short Description</td><td>IMDB Rating</td>');
              $(data).find('movie').each(function(){
                  var title = $(this).find('title').text();
                  var genrearr = [];
                  $(this).find('genre').each(function(idx,value) {
                      genrearr.push($(value).text());
                  });
                  var genre = genrearr.join();
                  var director = $(this).find('director').text();
                  var cast;
                  $(this).find('cast').each(function() {
                      var persons = $(this).find('person')
                      var personarr = [];
                      $.each(persons,function(idx,value){
                          personarr.push($(value).attr('name'));
                      })
                      cast = personarr.join();
  
                  })
                  var synop = $(this).find('imdb-info').find('synopsis').text();
                  var score = $(this).find('imdb-info').find('score').text();
                  var info = '<tr><td>' + title +'</td><td>' +  genre + '</td><td>' +  director + '</td><td>' +  cast + '</td><td>' +  synop + '</td><td>'+  score + '</td><td>' +'</td></tr>';
                  $("table").append(info);
              });
              
  
           },
           error: function() { alert("error loading file");  }
       });
  
  
  });