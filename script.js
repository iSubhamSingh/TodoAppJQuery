$(document).ready(function() {
    function addItem(text) {
        const newItem = $(`
            <li class="todo-item">
                <input type="text" value="${text}" readonly>
                <div class="buttons">
                    <button class="edit-button"><i class="fas fa-edit"></i></button>
                    <button class="complete-button"><i class="fas fa-check"></i></button>
                    <button class="delete-button"><i class="fas fa-trash-alt"></i></button>
                </div>
            </li>
        `);
        $('#todo-list').append(newItem);
    }
 
    $('#add-button').on('click', function() {
        const newItemText = $('#new-item').val();
        if (newItemText.trim()) {
            addItem(newItemText);
            $('#new-item').val('');
        }
    });

    $('#todo-list').on('click', '.delete-button', function() {
        $(this).closest('.todo-item').remove();
    });

    $('#todo-list').on('click', '.edit-button', function() {
        const item = $(this).closest('.todo-item');
        const input = item.find('input[type="text"]');
        if ($(this).html() === '<i class="fas fa-edit"></i>') {
            input.removeAttr('readonly').focus();
            $(this).html('<i class="fas fa-save"></i>');
        } else {
            input.attr('readonly', true);
            $(this).html('<i class="fas fa-edit"></i>');
        }
    });

    $('#todo-list').on('click', '.complete-button', function() {
        const item = $(this).closest('.todo-item');
        item.toggleClass('completed');
    });
});
