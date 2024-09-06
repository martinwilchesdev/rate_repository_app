import React from 'react';
import Constants from 'expo-constants';

/**
 * Text es el unico componente de React Native que puede tener hijos textuales, similar a los elementos <strong> y <h1>
 * View es el componente basico de la interfaz de usuario, similar al elemento <div>
 * TextInput es un componente de campo de texto similar al elemento <input>
 * Los componenetes Touchable* sirven para capturar eventos similares al elemento <button>
*/
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Rate Repository Application</Text>
        </View>
    );
};

export default Main;