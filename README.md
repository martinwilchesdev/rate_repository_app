React Native es un framework utilizado para desarrollar aplicaciones de Android y iOS usando JavaScript y React.

## Inicializar una nueva aplicacion Expo

Expo es una plataforma que facilita la configuracion, desarrollo, construccion e implementacion de aplicaciones React Native.

Instalacion de la interfaz de comandos expo-cli

```sh
npm install --global explo-cli
```

Inicializacion una nueva aplicacion Expo.

```sh
npx create-expo-app@latest
```

### Metro

Es un paquete de JavaScript para React Native, considerado como el webpack del ecosistema React Native.

## Aplicacion movil de Expo

Permite obtener una vista previa de la aplicacion utilizando un dispositivo movil real, proporcionando una experiencia de desarrollo mas concreta en comparacion del uso del emuladores.

`Para que la aplicacion movil Expo se abra, esta debe estar conectada a la misma re local que la computadora utilizada para el desarrollo.`

### ESLint

```sh
npm install --save-dev eslint babel-eslint eslint-plugin-react
```

package.json

```sh
"scripts": {
    "lint": "eslint ./src/**/*.{js,jsx} App.js --no-error-on-unmatched-pattern"
}
```

## Componentes principales

Son un conjunto de componentes proporcionados por React Native.

### Diferencias entre los componentes principales y los elementos del DOM

- El componente `Text` es el unico elemento de React Native que puede tener hijos textuales.
- Al trabajar con el DOM se pueden agregar controladores de eventos como `onClick` practicamente a cualquier element. En React Native se debe leer la documentacion de la API para saber que controladores de eventos acepta un componente.