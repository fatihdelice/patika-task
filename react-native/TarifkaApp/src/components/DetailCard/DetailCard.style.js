import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: Dimensions.get('window').height / 3,
    },
    title: {
        margin: 5,
        marginHorizontal: 10,
        fontSize: 26,
        fontWeight: "900",
        color: "#B21A02",
    },
    area: {
        fontSize: 22,
        fontWeight: "700",
        margin: 5,
        marginHorizontal: 10,
        color: "#B21A02",
    },
    line: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        opacity: 0.5,
    },
    instruction: {
        margin: 5,
        fontSize: 18,
        marginHorizontal: 10,
    },
    button: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: 50,
        backgroundColor: "red",
        margin: 10,
        marginBottom: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 22,
        fontWeight: "600",
    }

});