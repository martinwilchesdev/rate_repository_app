import React from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';
import NumericDataInfo from './NumericDataInfo';

import theme from '../theme';

const styles = StyleSheet.create({
    containerItem: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        gap: 16,
        backgroundColor: '#fff'
    },
    containerInfo: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
    },
    containerData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,
    },
    imageStyle: {
        width: 80,
        height: 80,
    },
});

const RepositoryItem = ({ repo }) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.containerInfo}>
                <Image
                    source={{ uri: repo.ownerAvatarUrl }}
                    style={styles.imageStyle}
                />
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ fontSize: 24, fontWeight: 900 }}>
                        {repo.fullName}
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            flex: 1,
                            flexWrap: 'wrap',
                        }}
                    >
                        {repo.description}
                    </Text>
                    <Text>{repo.language}</Text>
                </View>
            </View>
            <View style={styles.containerData}>
                <NumericDataInfo number={repo.stargazersCount} label="Stars" />
                <NumericDataInfo number={repo.forksCount} label="Forks" />
                <NumericDataInfo number={repo.reviewCount} label="Reviews" />
                <NumericDataInfo number={repo.ratingAverage} label="Rating" />
            </View>
        </View>
    );
};

export default RepositoryItem;
