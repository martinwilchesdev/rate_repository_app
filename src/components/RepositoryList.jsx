import React from 'react';
import RepositoryItem from '../components/RepositoryItem';
import { Text, FlatList, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const repositories = [
    {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1589,
        stargazersCount: 21553,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
        id: 'rails.rails',
        fullName: 'rails/rails',
        description: 'Ruby on Rails',
        language: 'Ruby',
        forksCount: 18349,
        stargazersCount: 45377,
        ratingAverage: 100,
        reviewCount: 2,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
        id: 'reduxjs.redux',
        fullName: 'reduxjs/redux',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    return (
        // El componente FlatList permite mostrar una lista de datos
        <FlatList
            data={repositories} // La propiedad data recibe como valor los datos a listar
            ItemSeparatorComponent={ItemSeparator}
            /**
             * La propiedad renderItem recibe como valor una funcion.
             * - item :: Cada elemento del arreglo recibido en data
             * - index :: El indice de cada elemento del arreglo
             */
            renderItem={({ item, index }) => (
                <RepositoryItem key={index + 1} repo={item} />
            )}
        />
    );
};

export default RepositoryList;
