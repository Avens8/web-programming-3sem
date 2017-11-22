function addText (txt) {
    if (txt != '') {
        var elem = $('<li><span></span><button class="button_rm">Удалить</button></li>');
        $('span', elem).text(txt);
        $('#root ul').append(elem);
        $('.button_rm', elem).click(function () {$(this).parent().remove()});
    }
}

$(document).ready(function () {
    $('#root').append('<ul></ul>');
    $('#root').append('<input id="add_task_input"><button id="add_task" class="input_button">Добавить</button>');
    $('#add_task').click(function() {
        addText($('#add_task_input').val());
        $(this).parent().find('#add_task_input').val('');
});
    $('#add_task_input').keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            addText($('#add_task_input').val());
            $(this).val('');
        }
    })
    addText('Сделать задание #3 по web-программированию');
})
