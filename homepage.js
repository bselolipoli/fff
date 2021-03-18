$(document).ready(function(){
    $("#myForm").submit(function(event){
        event.preventDefault();
        var t1 = $('#t1').val();
        var g1 = $('#g1').val();
        var t2 = $('#t2').val();
        var g2 = $('#g2').val();
        $.ajax({
            method: 'post',
            url: 'http://localhost:3000/list',
            contentType: 'application/json',
            success: function(data) {
                localStorage.setItem("t1", t1);
                localStorage.setItem("t2", t2);
                localStorage.setItem("g1", g1);
                localStorage.setItem("g2", g2);
                window.location.pathname = "/list"
            }

        })
    });
});