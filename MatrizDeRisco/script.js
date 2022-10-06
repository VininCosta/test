$(document).ready(function() {
    $("td").click(function() {
    $(this).css("background-color", "#ccc");
    $(this).data("bgColor")
    return true;
    });
    });
    
$(document).ready(function() {
    $(function() {
    $("td").hover(function() {
    $(this).data("bgColor", $(this).css("background-color"));
    }, function() {
    $(this).css("background-color", $(this).data("bgColor"));
    });
    });
    }); 


/*[...document.getElementsByTagName("td")].forEach(td => td.addEventListener("click", e => e.target.style.background= "#ccc"))*/

