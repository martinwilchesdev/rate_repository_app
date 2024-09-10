import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TouchableWithoutFeedback } from 'react-native';

import AppBarTab from './AppBarTab';

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight, // Evita que la barra de estado se superponga al contenido
        backgroundColor: theme.colors.backgroundPrimary,
        paddingHorizontal: 20,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {}}>
                <AppBarTab>Repositories</AppBarTab>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default AppBar;
