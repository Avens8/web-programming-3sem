function addText (txt) {
    var elem = $('<li><span></span><button class="button_rm">Удалить</button></li>');
    $('span', elem).text(txt);
    $('#root ul').append(elem);
    $('.button_rm', elem).click(function (e) {$(this).parent().remove()});
}

$(function () {
    $('#root').append('<ul></ul>');
    $('#root').append('<input id="add_task_input"><button id="add_task">Добавить</button>');
    $('#add_task').click(function() {addText($('#add_task_input').val())});
    addText('Сделать задание #3 по web-программированию');
})
