define(
    // Указываем имя модуля
    'model',
    // Список зависимостей (что надо подгрузить перед запуском модуля)
    [],
    // Описание самого модуля
    function() {

        function Model(data) {
            var self = this;

            self.data = data;

            self.addItem = function(item) {
                if (item.length === 0) {
                    return;
                }

                self.data.push(item);

                return self.data;
            };

            self.removeItem = function(item) {
                var index = self.data.indexOf(item);

                if (index === -1) {
                    return;
                }

                self.data.splice(index, 1);

                return self.data;
            };

            self.editItem = function(item, newitem) {
                if (item.length === 0) {
                    return;
                }
                var index = self.data.indexOf(item);
                self.data.splice(index, 1, newitem);
                return self.data;
            };

        }
        var firstToDoList = ['learn javascript', 'learn html', 'make coffe'];
        var model = new Model(firstToDoList);

        // В конце всегда делаем возвращение значения
        return model;
    }
);
