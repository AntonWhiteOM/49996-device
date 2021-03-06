# Техническое задание на вёрстку

* Название сайта: Девайс
* Домен: пока нет

---

1.  **Общие технические требования**

 * 1.1 Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.
 * 1.2 Сетка: определена в макете.
 * 1.3 Адаптивность вёрстки: нет.
 * 1.4 Используемые фреймворки: нет.
 * 1.5 Кроссбраузерность: IE10+, Chrome, Firefox, Opera, Safari.
 * 1.6 Типографика: частично определена в макете (прочее — на усмотрение разработчика).
 * 1.7 Используемые шрифты: Gilroy, Open Sans (есть в папке с макетом и на WebFont.ru).
 * 1.8 С макетом предоставлен `styleguide.psd`, содержащий прорисовку состояний элементов интерфейса. При любых расхождениях с макетами он должен иметь наивысший приоритет.

2.  **Пояснения для учащихся**

 * 2.1 В макетах есть скрытые слои с всплывающими окнами. Такие слои в блоке слоёв фотошопа выделены синим цветом.
 * 2.2 Макеты верстаются постепенно, не нужно сразу выполнять все требования.

3.  **Пожелания к поведению блоков**

   **Все макеты:**

  * 3.1 Контентная область центрируется и не может быть уже макетной ширины.
  * 3.2 Логотип — это ссылка на главную страницу.
  * 3.3 Авторизованному и неавторизованному посетителю показывается разный вид блока авторизации (смотрите `device-catalog.psd` и `device-index.psd`).
  * 3.4 В блоке авторизованного посетителя имя и иконка пользователя являются ссылкой на профайл.

   **device-index.psd:**

  * 3.5 Блоки с названиями разделов («виртуальная реальность», «моноподы для селфи», ...) являются ссылками на разделы каталога.
  * 3.6 Промо-слайдер: смена слайдов в слайдере должна происходить мгновенно, без промежуточных состояний и анимации (некоторые слайды скрыты - смотрите слои выделенные красным цветом).
  * 3.7 Блок «Сервисы» («доставка», «гарантии», «кредит»): слайдер с табами работает аналогично промо-слайдеру: по клику на таб меняется слайд мгновенно.
  * 3.8 Блок карты — достаточная реализация — обычное изображение, клик по ней приводит к переходу на сервис карт.
  * 3.9 Блок карты — реализация по желанию — часть интерактивной карты, клик на неё приводит к появлению полного размера интерактивной карты (смотрите папку слоёв «map hover»).
  * 3.10 При клике по кнопке «Напишите нам?..» возникает модальное окно (смотрите папку слоёв «write us»), окно позиционируется относительно вьюпорта, а не страницы.

   **device-catalog.psd:**

  * 3.11 Блок «Стоимость» — при наведении на любой из маркеров появляется указатель `cursor: pointer`, делать маркеры подвижными не обязательно, цена меняться не должна.
  * 3.12 Фильтр: верстать с помощью формы, кнопка «Показать» отвечает за отправку формы, при выключенном JavaScript должен осуществляться переход на отдельную страницу (отдельную страницу верстать не нужно).
  * 3.13 При наведении на карточку товара появляются кнопки «В корзину» и «Добавить к сравнению» (смотрите `styleguide.psd`). Ссылкой на отдельную страницу товара является только название товара (отдельную страницу верстать не нужно).
  * 3.14 Количество товаров в правом блоке может быть любым, добавление товаров не должно ломать страницу.
  * 3.15 У любого товара может быть метка «new».
