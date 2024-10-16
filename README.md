# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Типы данных 
Интерфейс для данных продукта, приходящих с API:

```
export interface Product {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number;
}
```
Интерфейс для данных заказа, отправляемых на сервер:

```
export interface Order {
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
}
```
## Интерфейсы отображений
Интерфейс для отображения продукта:

```
export interface ProductData {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: string;
}
```
Интерфейс для отображения заказа:

```
export interface OrderData {
  id: string;
  items: ProductData[];
  price: string;
  payment: string;
  address: string;
  email: string;
  phone: string;
}
```

## Классы
Класс ProductModel используется для управления данными о продуктах.<br>
Его функции: взаимодействие с API для получения и удаления продуктов.  

Атрибуты:
```
  id: string - Id продукта.
  description: string - Описание продукта.
  image: string - Изображение продукта.
  title: string - Название продукта.
  category: string - Категория продукта.
  price: number - Цена продукта.
```
Метод:
```
  getProductData: () => Promise<ProductModel[]>; - Возвращает список продуктов
```
  
Класс OrderModel используется для управления данными о заказе.<br>
Его функции: Создание заказов.

Атрибуты:
```
  payment: string - Способ оплаты.
  email: string - Email покупателя.
  phone: string - Телефон покупателя.
  address: string - Адрес покупателя.
  total: number - Сумма заказа.
  items: string[] - Массив продуктов.
```
Метод:
```
  getOrderData: (order: Order) => Promise<OrderModel[]>; - Создаёт новый заказ.
```
  
Класс ProductView используется для отоброжения продуктов.<br>
Функции: выводит список продуктов на экран.

Атрибуты:
```
  id: string; - Id продукта.
  title: string; - Описание продукта.
  description: string; - Изображение продукта.
  category: string; - Название продукта.
  image: string; - Категория продукта.
  price: string; - Цена продукта.
```
Метод:
```
  renderProducts: (products: ProductModel[]) => void; - Выводит список продуктов.
```

Класс OrderView используется для отоброжения интерфейса заказа.<br>
Функции: отоброжения интерфейса корзины и заказа.

Атрибуты:
```
  id: string; - Id продукта.
  items: ProductData[]; - массив продуктов.
  price: HTMLElement; - Сумма заказа.
  payment: HTMLButtonElement; - Способ оплаты.
  address: HTMLInputElement; - Адрес покупателя.
  email: HTMLInputElement; - Email покупателя.
  phone: HTMLInputElement; - Телефон покупателя.
```
Метод:
```
  renderOrder: (order: OrderModel) => void;
```
Класс BasketModel используется для добавления, удаления и очистки корзины

Атрибуты:
```
  items: ProductModel[]; - Массив продуктов, которые пользователь добавил в корзину
  total: number; - Общая сумма продуктов в корзине
```
Методы:
```
  addItem: (product: ProductModel) => void; - Добавляет продукт в корзину.
  removeItem: (ptoductId: string) => void; - Удаляет продукт из корзины по Id
  getTotal: () => number; - Сумма всех продуктов
```

Класс ProductPresenter управляет взаимодействием между моделью продуктов, корзиной и отображением

Атрибуты:
```
  productModel: ProductModel[]; - Массив данных о продуктах.
  productView: ProductView; - отображения продуктов.
  basketModel: BasketModel; - Модель корзины хранящая текущие товары в корзине и управляющая ей.
```
Методы
```
  fetchProducts: () => Promise<void>; - Получает список продуктов с API и передает их для отображения.
  addToBasket; (productId: string) => void; - Добавляет выбранный продукт в корзину, используя BasketModel.
  removeFromBasket: (productId: string) => void; - Удаляет продукт из корзины по Id.
```

Класс OrderPresenter управляет логикой оформления заказа

Атрибуты: 
```
  orderModel: OrderModel; - Модель для хранения данных о заказе.
  orderView: OrderView; - Представление для отображения информации о заказе.
  basketModel: BasketModel; - Модель корзины для получения продуктов, добавленныч в заказ.
```
Методы: 
```
  submitOrder: () => Promise<void>;
```
## Связи

Класс ProductModel хранит данные о прдуктах, полученные с API, и передаёт их в класс ProductPresenter.<br>
Класс ProductView отображает продукты, полученные из класса ProductPresenter.<br>
BasketModel взаимодействует с классом ProductController, который вызывает методы для изменения содержимого корзины и затем обновляет представление через ProductView.<br>
Класс OrderPresenter взаимодействует с классом BasketModel для получения списка продуктов и прередаёт их в класс OrderModel.<br>
Класс OrderView полдучает данные от класса OrderPresenter и отображает данные о заказе.<br>
