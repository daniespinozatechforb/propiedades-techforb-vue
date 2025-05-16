/// <reference types="vite/client" />

/* declarar a .vue es un módulo válido */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
