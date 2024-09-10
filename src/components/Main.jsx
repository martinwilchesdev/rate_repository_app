import React from 'react';

import { StyleSheet, View } from 'react-native';

import RepositoryList from '../components/RepositoryList';
import AppBar from './AppBar';

import theme from '../theme';

// Mediante StyleSheet se pueden definir objetos mediante los cuales se añaden estilos a la aplicacion
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.backgroundSecondary
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
            <AppBar />
            <RepositoryList />
        </View>
    );
};

export default Main;
