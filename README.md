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

## Estilos

- La mayoria de los componentes principales aceptan un prop llamado `style`, el cual acepta un objeto con propiedades de estilo y sus valores.
- Todos los valores de propiedad relacionados con la dimension son sin unidades. Estas unidades representan pixeles independientes de la densidad.
- Los estilos deberian ser definidos fuera de la funcion de ernderizacion del componente usando el medoto `StyleSheet.create`, el cual acepta un unico argumento que es un objeto que consta de objetos de estilo con nombre y crea una referencia de estilo StyleSheet a partir del objeto dado.

```sh
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    text: {
        color: 'blue',
        fontSize: 24
    }
})
```

Ademas de un objeto, el prop `style` acepta una matriz de objetos. Si una matriz contiene valores que se evaluan como falsos, como `null` o `undefined`, estos valores se ignoran, lo cual facilita la definicion de estilos condicionales.

```sh
const styles = SyleSheet.create({
    blueText: {
        color: 'blue'
    },
    bigText: {
        fontSize: 24
    }
});

const FancyText = ({isBlue, isBig, children}) => {
    const stylesText = [
        isBlue && styles.blueText
        isBig && styles.bigText
    ];

    return <Text style={stylesText}>{children}</Text>
};

const App = () => {
    return(
        <FancyText isBlue>Blue text</FancyText>
        <FancyText isBig>Big Text</FancyText>
    );
};
```

### Tematizacion

La apariencia de los componentes de la interfaz de usuario siguen un patron constante.

- La idea principal es utilizar siempre usar variables comom `colors.primary` en lugar de numeros como `#0366d6` al definir estilos.