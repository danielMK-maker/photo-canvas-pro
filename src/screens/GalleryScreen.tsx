import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const GalleryScreen = () => {
    const savedPhotos = [
        // Add your saved photos here. Replace the URIs with your image path.
        { id: '1', uri: 'https://example.com/photo1.jpg' },
        { id: '2', uri: 'https://example.com/photo2.jpg' },
        { id: '3', uri: 'https://example.com/photo3.jpg' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saved Photos Gallery</Text>
            <FlatList
                data={savedPhotos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.uri }} style={styles.image} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
});

export default GalleryScreen;