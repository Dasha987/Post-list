import { createApp } from 'vue'
import App from "./App.vue"
import components from "@/components/UI/index"
import router from "@/router/router"
import directives from "@/directives/index"
import store from '@/store/index'

const app = createApp(App);

//регистрация компонентов
components.forEach(component => {
    app.component(component.name, component)
})

//Регистрация директив
directives.forEach(directive => {
    app.directive(directive.name, directive)
})

//сторонний модуль подключается с помощью .use
app
    .use(store)
    .use(router)
    .mount('#app');

