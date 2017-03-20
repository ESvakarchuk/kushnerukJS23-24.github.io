define(
    // Указываем имя модуля
    'controller',
    // Список зависимостей (что надо подгрузить перед запуском модуля)
    [
        'model',
        'view',
        'libs/jquery'
    ],
    // Описание самого модуля
    function(model, view) {

        function Controller(model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.item-edit', editItem);

            function addItem() {
                var newItem = view.elements.input.val();

                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem() {
                var item = $(this).attr('data-value');

                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem() {
                var item = $(this).attr('data-value');
                var editField = $(`<input type="text" class="item-editField" value="${item}">`);
                var editBtn = $(this, '.item-edit');
                $(this).parent().html('').append(editField).append(editBtn);
                editBtn.on('click', function() {
                    model.editItem(item, editField.val());
                    view.renderList(model.data);
                });
            }
        }
        var controller = new Controller(model, view);

        // В конце всегда делаем возвращение значения
        return controller;
    }
);
