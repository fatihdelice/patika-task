import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default StyleSheet.create({
    container: {
        padding: 5,
        borderWidth: 1,
        margin: 5,
        flex: 1,
        borderColor: colors.borderGray,
        borderRadius: 10
    },
    category_name: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20
    },
    company: {
        color: "black",
        fontWeight: "600",
        fontSize: 18
    },
    location: {
        backgroundColor: colors.mainPink,
        color: "white",
        fontSize: 16,
        overflow: "hidden",
        borderRadius: 50,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: "flex-start"
    },
    level: {
        color: colors.mainPink,
        fontWeight: "bold",
        textAlign: "right"
    },
    remove_btn_container : {
        backgroundColor : colors.mainPink,
        borderRadius : 5,
        marginTop : 10
    },
    removeBtn : {
        color : colors.white,
        textAlign : "center",
        paddingVertical : 5,
    }
})