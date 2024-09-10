import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 20,
        color: theme.colors.textTertiary,
        paddingVertical: 16
    },
});

const AppBarTab = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={styles.textStyles}>{children}</Text>
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;
