function addText (txt) {
    var elem = $('<li><span></span><button class="button_rm">Удалить</button></li>');
    $('span', elem).text(txt);
    $('#root ul').append(elem);
    $('.button_rm', elem).click(function (e) {$(this).parent().remove()});
}

$(function () {
    $('root').append('<input id="input_add_task"><button id="add_task"></button>');
    $('root').append('<ul></ul>');
    $('add_task').click(function() {addText($('input_add_task').val())});
    addText('Сделать задание #3 по web-программированию');
}
