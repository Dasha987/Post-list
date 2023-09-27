# List of posts

### Описание проекта
Проект представляет собой веб-приложение, целью которого является управление списком постов. 

В этом приложении:
- полная настойка на Vue CLI;
- установка и настройка Vue-router для Vue.js 3;
- данные для постов берутся со стороннего сервера;
- создан ряд компонентов (кнопки удаления поста, элементы интерфейса для сортировки и поиска постов и т.д.);
- страница постов была разработана в двух вариациях: 
  - данные и логика хранятся в самом компоненте (PostsPage.vue);
  - с использованием централизованного хранилища данных - VueX (PostsPageWithVueX.vue). 
***
### Возможности
- добавлять пост;
- удалять пост;
- сортировать посты по названию;
- сортировать посты по описанию;
- искать посты по названию.
***
### Демонстрация проекта:
|![2023-09-03_19-59-53](https://github.com/Dasha987/Posts-list/assets/33686892/da86bb55-ccb6-4322-88ca-a4cdc46bb0e3)|![2023-09-03_20-00-35](https://github.com/Dasha987/Posts-list/assets/33686892/01f72fc0-55af-43d9-9bf6-24c0b8761f19)|
|------|-----|
***
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
