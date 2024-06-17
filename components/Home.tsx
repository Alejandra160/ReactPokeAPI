import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Card } from './Card';

export function Home({ navigation }) {
    const pageLimit = 10;
    const [limit, setLimit] = useState(pageLimit);
    const [offset, setOffset] = useState(0);

    const { list, loading, error } = useFetch(limit, offset);
    useEffect(() => {
        console.log(list, loading, error?.message);
    }, [loading]);

    function handleClick() {
        setLimit(limit + pageLimit);
    }

    const uniqueList = [...new Map(list.map(item => [item.name, item])).values()];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={handleClick} style={styles.button}>
                <Text style={styles.buttonText}>MORE POKEMONS</Text>
            </TouchableOpacity>
            {loading && <Text style={styles.loadingText}>Loading...</Text>}
            {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
            <View style={styles.cardContainer}>
                {uniqueList.map((element) => (
                    <Card key={element?.name} data={element} navigation={navigation} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        flexGrow: 1,
    },
    button: {
        backgroundColor: '#FF6347', // Cambia el color a azul
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    loadingText: {
        fontSize: 18,
        color: '#ff1493',
        textAlign: 'center',
        marginTop: 20,
    },
    errorText: {
        fontSize: 18,
        color: '#ff0000',
        textAlign: 'center',
        marginTop: 20,
    },
});
