import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        width: deviceSize.width,
        flex: 1,
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: deviceSize.height / 4,
        borderRadius: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: -40,
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "#fff",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 40,
        textAlignVertical: "center",
        textAlign: "right",
        paddingRight: 10,
    },
});