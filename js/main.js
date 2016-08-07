
 $(document).ready(function(){
    var h = $('.main').height(); 
    $('.picture-2').css('height', h/2);
    $('.picture-3').css('height', h/3);
    $('.full-picture').css('height', h); 

    $('input.example').on('change', function() {
    $('input.example').not(this).prop('checked', false);  
		});

     window.onresize = myFunction;


 });

function myFunction() {

        var grid1 = "";
        var grid2 = "";
        var grid3 = "";
        if (document.getElementById('6-6').checked) {
            grid1 = '6';
            grid2 = '6';
        } else if (document.getElementById('4-8').checked) {
            grid1 = '4';
            grid2 = '8';
        } else if (document.getElementById('5-7').checked) {
            grid1 = '5';
            grid2 = '7';
        } else if (document.getElementById('3-9').checked) {
            grid1 = '3';
            grid2 = '9';
        } else if (document.getElementById('8-4').checked) {
            grid1 = '8';
            grid2 = '4';
        } else if (document.getElementById('7-5').checked) {
            grid1 = '7';
            grid2 = '5';
        } else if (document.getElementById('9-3').checked) {
            grid1 = '9';
            grid2 = '3';
        } else if (document.getElementById('4-4-4').checked) {
            grid1 = '4';
            grid2 = '4';
            grid3 = '4';
        } else if (document.getElementById('4-3-5').checked) {
            grid1 = '4';
            grid2 = '3';
            grid3 = '5';
        } else if (document.getElementById('4-5-3').checked) {
            grid1 = '4';
            grid2 = '5';
            grid3 = '3';
        } else if (document.getElementById('5-3-4').checked) {
            grid1 = '5';
            grid2 = '3';
            grid3 = '4';
        } else if (document.getElementById('5-4-3').checked) {
            grid1 = '5';
            grid2 = '4';
            grid3 = '3';
        } else if (document.getElementById('3-5-4').checked) {
            grid1 = '3';
            grid2 = '5';
            grid3 = '4';
        } else if (document.getElementById('3-4-5').checked) {
            grid1 = '3';
            grid2 = '4';
            grid3 = '5';
        }

        var link1 = document.getElementById('link1').value;
        var link2 = document.getElementById('link2').value;
        var link3 = document.getElementById('link3').value;
        var link21 = document.getElementById('link21').value;
        var link22 = document.getElementById('link22').value;
        var link23 = document.getElementById('link23').value;
        var link31 = document.getElementById('link31').value;
        var link32 = document.getElementById('link32').value;
        var link33 = document.getElementById('link33').value;
        var description1 = document.getElementById('description-1').value;
        var description2 = document.getElementById('description-2').value;
        var description3 = document.getElementById('description-3').value;
        var description21 = document.getElementById('description-21').value;
        var description22 = document.getElementById('description-22').value;
        var description23 = document.getElementById('description-23').value;
        var description31 = document.getElementById('description-31').value;
        var description32 = document.getElementById('description-32').value;
        var description33 = document.getElementById('description-33').value;
         if (link1 == "") {
            link1 = 'images/placeholder.png'
        }
         if (link2 == "") {
            link2 = 'images/placeholder.png'
        }
         if (link3 == "") {
            link3 = 'images/placeholder.png'
        }

         if (link21 == "") {
            link21 = 'images/placeholder.png'
        }
         if (link22 == "") {
            link22 = 'images/placeholder.png'
        }
         if (link23 == "") {
            link23 = 'images/placeholder.png'
        }
          if (link31 == "") {
            link31 = 'images/placeholder.png'
        }
         if (link32 == "") {
            link32 = 'images/placeholder.png'
        }
         if (link33 == "") {
            link33 = 'images/placeholder.png'
        }
        if (description1 != "") {
            description1 = "<div class='over-image'><div class='img-description'>" +  description1 + "</div></div>";
        }
         if (description2 != "") {
            description2 = "<div class='over-image'><div class='img-description'>" +  description2 + "</div></div>";
        }
         if (description3 != "") {
            description3 = "<div class='over-image'><div class='img-description'>" +  description3 + "</div></div>";
        }

         if (description21 != "") {
            description21 = "<div class='over-image'><div class='img-description'>" +  description21 + "</div></div>";
        }
         if (description22 != "") {
            description22 = "<div class='over-image'><div class='img-description'>" +  description22 + "</div></div>";
        }
         if (description23 != "") {
            description23 = "<div class='over-image'><div class='img-description'>"+  description23 + "</div></div>";
        }
         if (description31 != "") {
            description31 = "<div class='over-image'><div class='img-description'>" +  description31 + "</div></div>";
        }
         if (description32 != "") {
            description32 = "<div class='over-image'><div class='img-description'>" +  description32 + "</div></div>";
        }
         if (description33 != "") {
            description33 = "<div class='over-image'><div class='img-description'>" +  description33 + "</div></div>";
        }

        var firstcolmd6 = "<div class='col-md-" + grid1 + "'><div class='main'><div class='no-margin'><img src='" + link1 + "'>" + description1 + "</div></div></div>"
        var firstcolmd6half = '<div class="col-md-' + grid1 + '"><div class="main"><div class="row"><div class="col-md-12"><div class="no-margin"><img src="'+link1+'"> ' + description1 + ' </div></div><div class="col-md-12"><div class="no-margin"><img src="'+link2+'">' + description2+ ' </div></div></div> </div></div>'
        var firstcolmd6in3 = '<div class="col-md-' + grid1 + '"><div class="main"><div class="row"><div class="col-md-12"><div class="no-margin"><img src="'+link1+'"> ' + description1 + ' </div></div><div class="col-md-12"><div class="no-margin"><img src="'+link2+'">' + description2+ '</div></div><div class="col-md-12"><div class="no-margin"><img src="'+link3+'">' + description3 + '</div></div> </div></div></div>'
        var secondcolmd6 = "<div class='col-md-" + grid2 + "'><div class='no-margin'><img src='" + link21 + "' class='full-picture'>" + description21 + "</div></div>"
        var secondcolmd6half = '<div class="col-md-' + grid2 + '"><div class="row"><div class="col-md-12"><div class="no-margin"><img src="'+ link21 +'" class="picture-2">'+ description21 +'</div></div><div class="col-md-12"><div class="no-margin"><img src="'+ link22 + '" class="picture-2">' + description22 + '</div></div> </div></div>'
        var secondcolmd6in3 = '<div class="col-md-' + grid2 + '"><div class="row"><div class="col-md-12"><div class="no-margin"><img src="' + link21 + '" class="picture-3">' + description21 + '</div></div><div class="col-md-12"><div class="no-margin"><img src="' + link22 + '" class="picture-3">' + description22 + '</div></div><div class="col-md-12"><div class="no-margin"><img src="' + link23 + '" class="picture-3">' + description23 +'</div></div> </div></div>'
        var thirdcolmd6 = "<div class='col-md-" + grid3 + "'><div class='no-margin'><img src='" + link31 + "' class='full-picture'>" + description31 + "</div></div>"
        var thirdcolmd6half = '<div class="col-md-' + grid3 + '"><div class="row"><div class="col-md-12"><div class="no-margin"><img src="' + link31+ '" class="picture-2">'+description31+'</div></div><div class="col-md-12"><div class="no-margin"><img src="'+ link32+ '" class="picture-2">'+ description32 +'</div></div> </div></div>'
        var thirdcolmd6in3 = '<div class="col-md-' + grid3 + '"><div class="row"><div class="col-md-12"><div class="no-margin"><img src="'+ link31 + '" class="picture-3">'+ description31 + '</div></div><div class="col-md-12"><div class="no-margin"><img src="' + link32 + '" class="picture-3">' + description32 + '</div></div><div class="col-md-12"><div class="no-margin"><img src="' + link33 + '" class="picture-3">' + description33 + '</div></div> </div></div>'

        var result = "";
        var result2 = "";
        if (document.getElementById('option2-1').checked) {
            result += firstcolmd6;
        } else if (document.getElementById('option2-1a').checked) {
            result += firstcolmd6half;
        } else if (document.getElementById('option2-1b').checked) {
            result += firstcolmd6in3;
        }
        if (document.getElementById('option2-2').checked) {
            result2 += secondcolmd6;
        } else if (document.getElementById('option2-2a').checked) {
            result2 += secondcolmd6half;
        } else if (document.getElementById('option2-2b').checked) {
            result2 += secondcolmd6in3;
        }
        if (document.getElementById('option3-2').checked) {
            result2 += thirdcolmd6;
        } else if (document.getElementById('option3-2a').checked) {
            result2 += thirdcolmd6half;
        } else if (document.getElementById('option3-2b').checked) {
            result2 += thirdcolmd6in3;
        }

        document.getElementById("demo").innerHTML = result + result2;


        var h = $('.main').height();
        $('.picture-2').css('height', h / 2);
        $('.picture-3').css('height', h / 3);
        $('.full-picture').css('height', h);

        $( ".code" ).text(result);

    }