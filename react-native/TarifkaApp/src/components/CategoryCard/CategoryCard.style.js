import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#bcaaa4",
        backgroundColor: "#eceff1",
        margin: 10,
        flexDirection: "row",
        alignItems: 'center',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: "contain",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 10,
    },
});