# Техническое задание к проекту Седона

### 1. Общие технические требования

* 1.1. Сетка: определена в макете.
* 1.2. Адаптивность сетки: мобильная, планшетная, десктопная версии («фикс» или «резина»).
* 1.3. Адаптивность графики: ретинизация, векторные изображения.
* 1.4. Используемые методологии: БЭМ.
* 1.5. Используемые препроцессоры: Less или Sass.
* 1.6. Используемые инструменты автоматизации: Grunt или Gulp.
* 1.7. Используемые фреймворки: нет.
* 1.8. Кроссбраузерность: Chrome, Firefox, Opera, Safari, Edge и IE11.
* 1.9. Типографика: частично определена в макете.
* 1.10. Используемые шрифты: PT Sans

### 2. Пояснения для учащихся

* 2.1. Верстка трёх страниц (главная страница, страница с формой, страница с фото и видео).
* 2.2. В макетах есть скрытые слои со всплывающими окнами. Такие слои выделены зелёным цветом в панели слоёв Photoshop.
* 2.3. Макеты верстаются постепенно: сначала мобильная версия, далее от мобильной версии к планшетной, а затем и к десктопной.

## Пожелания к поведению блоков

### 3. Все макеты

* 3.1. Между версиями (мобильная, планшетная, десктопная) сетка может быть как резиновой, так и фиксированной.
* 3.2. При фиксированной сетке контентная область центрируется и не может быть уже макетной ширины.
* 3.3. Логотип на внутренних страницах — это ссылка на главную страницу.
* 3.4. Блок с главным меню в мобильной и планшетной версии открывается при нажатии на иконку «гамбургера». Меню появляется над шапкой сайта. При открытом меню, иконка «гамбургера» заменяется на крестик.
* 3.5. При нажатии на иконку с крестиком меню закрывается.
* 3.6. Реализация открытия/закрытия должна быть выполнена на JS.
* 3.7. Все состояния элементов при наведении и нажатии указаны в макете sedona-styleguide.psd.

### 4. Главная

#### Мобильная версия (sedona-index-mobile.psd):

v 4.1. Логотип показывается в самом упрощённом виде.
* 4.2. Блок поиска гостиницы: при нажатии на кнопку поиска должен осуществляться переход на отдельную страницу.
* 4.3. Блок карты: необходимая реализация — интерактивная карта (Google\Яндекса), ширина подстраивается под ширину вьюпорта (но не уже контентной ширины макета), на карте размещён маркер (может быть как кастомным, так и дефолтным), центр карты соответствует центру блока в макете.

#### Планшетная версия (sedona-index-tablet.psd):

* 4.4. Блоки меняют размеры и расположение согласно макету.
* 4.4. В составе логотипа добавляются новые элементы.
* 4.6. Главное меню открыто всегда вне зависимости от его состояния на мобильной версии.

#### Десктопная версия (sedona-index-desktop.psd):

* 4.7. Блоки меняют размеры и расположение согласно макету.
* 4.8. В составе логотипа добавляются новые элементы.

### 5. Форма

#### Мобильная версия (sedona-form-mobile.psd):

* 5.1. Должны быть реализованы кастомные элементы форм.
* 5.2. У полей ввода телефона и почты должны быть указаны соответствующие типы для удобного заполнения с телефона.
* 5.3. При попытке отправить форму, в которой поля для ввода телефона или почты заполнены данными в неподходящем формате, появляется встроенное в браузер сообщение об ошибке.

#### Планшетная версия (sedona-form-tablet.psd):

* 5.4. Блоки меняют размеры и расположение согласно макету.

### Десктопная версия (sedona-form-desktop.psd):

* 5.5. Блоки меняют размеры и расположение согласно макету.

### 6. Страница с фото и видео

#### Мобильная версия (sedona-photo-mobile.psd):

* 6.1. Все изображения являются ссылками на полноразмерный вариант (открытие полноразмерного изображения реализовывать не нужно).
* 6.2. Работу плеера для проигрывания видео реализовывать не нужно, только вёрстка элементов интерфейса.

#### Планшетная версия (sedona-photo-tablet.psd):

* 6.3. Блоки меняют размеры и расположение согласно макету.

#### Десктопная версия (sedona-photo-desktop.psd):

* 6.4. Блоки меняют размеры и расположение согласно макету.
