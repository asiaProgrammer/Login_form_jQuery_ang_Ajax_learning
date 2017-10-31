function ajax()
{
    for(i=90; i<=100; i++){

    $.ajax({url: "http://192.168.1.13:8000/api/articles/"+i, success: function(result)
    {
       $(".list_element").append('<li>' + result.title +"</li>");
      //   console.log(result.title);
    }});
    }
}
// {
//     $.post("http://192.168.1.13:8000/api/articles",
//         $('form').serializeArray(),
//         function (data) {
//             console.log(data);
//         });
// }



