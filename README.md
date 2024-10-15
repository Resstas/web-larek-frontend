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
Класс ProductApi используется для управления данными о продуктах. 
Его функции: взаимодействие с API для получения и удаления продуктов.  

Атрибуты:
  id: string - Id продукта.
  description: string - Описание продукта.
  image: string - Изображение продукта.
  title: string - Название продукта.
  category: string - Категория продукта.
  price: number - Цена продукта.
Метод:
  getProduct: () => Promise<Product[]>; - Возвращает список продуктов
  
Класс Order используется для управления данными о заказе.
Его функции: Создание заказов.

Атрибуты:
  payment: string - Способ оплаты.
  email: string - Email покупателя.
  phone: string - Телефон покупателя.
  address: string - Адрес покупателя.
  total: number - Сумма заказа.
  items: string[] - Массив продуктов.
Метод:
  order: (order: Order) => Promise<Order[]>; - Создаёт новый заказ.
  
Класс ProductData используется для отоброжения продуктов.
Функции: выводит список продуктов на экран.

Атрибуты:
  id: string; - Id продукта.
  title: string; - Описание продукта.
  description: string; - Изображение продукта.
  category: string; - Название продукта.
  image: string; - Категория продукта.
  price: string; - Цена продукта.
Метод:
  viewProduct: () => Promise<ProductData[]>; Выводит список продуктов.

Класс OrderData используется для отоброжения интерфейса заказа.
Функции: отоброжения интерфейса корзины и заказа.

Атрибуты: 
  id: string; - Id продукта.
  items: ProductData[]; - массив продуктов.
  price: string; - Сумма заказа.
  payment: string; - Способ оплаты.
  address: string; - Адрес покупателя.
  email: string; - Email покупателя.
  phone: string; - Телефон покупателя.
Метод:
  viewOrder: (order: Order) => Promise<OrderData[]>;
  
## Связи

Класс ProductApi вазимодействует с классом ProductData, предоставляя данные о продуктах с API. 
ProductData использует полученные данные, чтобы отобразить продукты в интрефейсе.

Класс Order взаимодействует с классом OrderData для получения информации о заказе. OrderData использует получанные данные, чтобы отобразить их.

