import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
    },
    textSize: {
        fontSize: 20,
    },
    boldText: {
        fontWeight: 900,
    },
    softColor: {
        color: theme.colors.textSecondary,
    },
});

const TextData = ({ isBold, isSoftColor, children }) => {
    const textStyles = [
        styles.textSize,
        isBold && styles.boldText,
        isSoftColor && styles.softColor,
    ];

    return <Text style={textStyles}>{children}</Text>;
};

const NumericDataInfo = ({ number, label }) => {
    return (
        <View style={styles.container}>
            <TextData isBold>
                {number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number}
            </TextData>
            <TextData isSoftColor>{label}</TextData>
        </View>
    );
};

export default NumericDataInfo;
