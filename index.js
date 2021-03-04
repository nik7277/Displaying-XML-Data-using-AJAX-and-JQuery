$(document).ready(function loadDoc() {
    $.ajax({
  
           url: "movies.xml",
           dataType: "xml",
           success: function(data) {
              
              $("table").append('<thead class="thead-dark"><tr><th scope="col">Title</th><th scope="col">Genre</th><th scope="col">Director</th><th scope="col">Cast</th><th scope="col">Short Description</th><th scope="col">IMDB Rating</th></tr></thead><tbody>');
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
                  var info = '<tr><td>' + title +'</td><td>' +  genre + '</td><td>' +  director + '</td><td>' +  cast + '</td><td>' +  synop + '</td><td>'+  score + '</td></tr>';
                  $("table").append(info);
              });
              
              $("table").append('</tbody>');
           },
           error: function() { alert("error loading file");  }
       });
  
  
  });