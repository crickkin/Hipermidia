$(document).ready(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        success: function (response) {
            $.map(response, function (e) {
                $('#users').append(`<option value="${e.id}">${e.name}</option>`);
            });
        }
    });

    $('#users').change(function (e) { 
        ShowAllPost(this.value);
    });

    // $('#carregar').click(function (e) {
    //     ShowAllPost($('#num').val());        
    // });

    function ShowAllPost(number) {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts?",
            data: { userId: number },
            success: function (response) {
                $('#items').empty();
                $.map(response, function (item) {
                    $('#items').append(() => {
                        return `<div><p>ID: ${item.id}</p><p>Título: ${item.title}</p><p>Corpo: ${item.body}</p></div><br>`;
                    });
                });
            }
        });
    }
});