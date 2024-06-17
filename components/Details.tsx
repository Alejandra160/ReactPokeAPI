import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import usePokeinfo from '@/hooks/usePokeinfo';

export function Details({ navigation, route }) {
    const { url } = route.params;
    const { info, loading, error } = usePokeinfo(url);

    if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
    if (error) return <Text style={styles.errorText}>Error: {error.message}</Text>;

    function handleClick() {
        navigation.navigate('Home');
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={handleClick} style={styles.headerContainer}>
                <Text style={styles.header}>Details</Text>
            </TouchableOpacity>
            
            <View style={styles.detailContainer}>
                <Text style={styles.title}>ID: {info.id}</Text>
                <Text style={styles.title}>Name: {info.name}</Text>
                <Text style={styles.title}>Type: {info.types.map(t => t.type.name).join(', ')}</Text>
                <Text style={styles.title}>Weight: {info.weight}</Text>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.subtitle}>Abilities:</Text>
                <View style={styles.abilitiesContainer}>
                    {info.abilities.map((ability, index) => (
                        <Text key={index} style={styles.text}>{ability.ability.name}</Text>
                    ))}
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.subtitle}>Moves:</Text>
                <View style={styles.movesContainer}>
                    {info.moves.slice(0, 10).map((move, index) => (
                        <Text key={index} style={styles.text}>{move.move.name}</Text>
                    ))}
                </View>
            </View>

            <View style={styles.imageContainer}>
                <Image source={{ uri: info.sprites.front_default }} style={styles.image} />
                <Image source={{ uri: info.sprites.back_default }} style={styles.image} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    headerContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#FF6347',
        borderRadius: 10,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    detailContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    sectionContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#FF6347',
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginHorizontal: 10,
    },
    abilitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    movesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    loadingText: {
        fontSize: 18,
        color: '#FF6347',
        textAlign: 'center',
        marginTop: 20,
    },
    errorText: {
        fontSize: 18,
        color: '#FF0000',
        textAlign: 'center',
        marginTop: 20,
    },
});
