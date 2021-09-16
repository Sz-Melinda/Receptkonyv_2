
var receptek = [];

$(function() {

    $.ajax (

        {url: "receptkonyv.json",

            success: function(result){
                
                console.log(result);
                receptek = result.receptkonyv;
                console.log(receptek);
                megjelenit();
            }
        }
    );

});

function megjelenit() {

    console.log(receptek);

    $("article").append(receptek[0]["nev"]);

    $("article").append("<table>");
    
    /** 
    for (let index = 0; index < receptek.length; index++) {
        
        $("article table").append("<tr> <td>" + receptek[0].nev + "</td> <td>" + receptek[0].elkIdo + "</td> <td>" + receptek[0].kep + "</td> <td>"+  + "</td> <td>Hozzávalók</td> </tr>");
    }
    */

   var txt = "<tr id='fejlec'> <th>Név</th> <th>Idő</th> <th>Kép</th> <th>Leírás</th> <th>Hozzávalók</th> </tr>";

   for (var i=0; i<receptek.length; i++) {
       
       txt += "<tr id='" + i + "'>";

       for (var item in receptek[i]) {
           
           txt += "<td>" + receptek[i][item] + "</td>";
       }

       txt += "</tr>";
   }

   $("article table").append(txt);

   $("article table tr").hover(hatter);

   $("article table tr").click(kiemeltRecept);

}




function hatter() {
 
    var kattintottID = $(this).attr("id");
    $("#" + kattintottID).toggleClass("hatter");
}


function kiemeltRecept() {

    if ($(this).attr("id") !== "fejlec") {

        sorID = Number($(this).attr("id"));
        console.log(receptek[sorID].kep);

        $("section div").eq(1).append("<img id='kep'>");

        $("#kep").attr("src", receptek[sorID].kep);
        $("#kep").attr("alt", receptek[sorID].nev);
    }
}