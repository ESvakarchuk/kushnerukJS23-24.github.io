define(
    // Указываем имя модуля
    'test',
    // Список зависимостей (что надо подгрузить перед запуском модуля)
    [],
    // Описание самого модуля
    function() {
      var abc = 123;
        // В конце всегда делаем возвращение значения
        return {
            say: function() {
                console.log('Hello World');
            }
        };
    }
);
