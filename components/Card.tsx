import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

export function Card({ data, navigation }) {
    const handlePress = () => {
        navigation.navigate('Details', { url: data.url });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.card}>
           
                <View style={styles.overlay}>
                    <Text style={styles.text}>{data.name}</Text>
                </View>
          
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 15,
        justifyContent:'center',
        backgroundColor: '#FF6347', // Cambiado a un color más suave
        borderRadius: 20, // Esquinas redondeadas más pronunciadas
        overflow: 'hidden', // Para que la imagen de fondo no se salga de los bordes redondeados
        height: 120, // Incrementar la altura para una apariencia más atractiva
        width: 200, // Incrementar el ancho para más espacio de contenido
    },


    overlay: {
        ...StyleSheet.absoluteFillObject, // Cubre toda la imagen
        backgroundColor: '#FF0000', // Fondo negro semitransparente para mayor contraste
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center' // Centra el contenido horizontalmente
    },

    text: {
        fontSize: 18, // Tamaño de fuente más grande
        fontWeight: 'bold', // Texto en negrita
        textAlign: 'center',
        color: 'white', // Color del texto blanco para contraste
        padding: 10, // Agregar relleno para una mejor apariencia
    }
});
