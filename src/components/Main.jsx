import React from 'react';
import Constants from 'expo-constants';

import { StyleSheet, View } from 'react-native';

import RepositoryList from '../components/RepositoryList';

// Mediante StyleSheet se pueden definir objetos mediante los cuales se añaden estilos a la aplicacion
const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight, // statusBarHeight añade un margen superior del tamaño de la barra de estado
        flexGrow: 1,
        flexShrink: 1,
    },
    blueText: {
        color: 'blue',
    },
    bigText: {
        fontSize: 24,
    },
});

const Main = () => {
    return (
        // View es el componente basico de la interfaz de usuario, similar al elemento <div>
        <View style={styles.container}>
            {/* Text es el unico componente de React Native que puede tener hijos textuales, similar a los elementos <strong> y <h1> */}
            <RepositoryList />
        </View>
    );
};

export default Main;
