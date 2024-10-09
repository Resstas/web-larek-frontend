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
