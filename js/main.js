requirejs.config({
  // Так можно подключить удаленный модуль, например с CDN
  paths: {
    'moduleName': 'http:// module url...'
  },
  // Поле в котором можем менять имена модулей
  //(можно указать модуль который не экспортирует никакого значения и не обернут в define()!)
  shim: {}

});


require(
  // Список модулей которые будем вызывать
[
  'libs/jquery',
  'libs/tmpl',
  'model',
  'view',
  'controller'
],
// Функция которая вызывается когда все модули подгрузились
  function($, tmpl, model, view, controller) {

  }
);
