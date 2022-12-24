import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default StyleSheet.create({
    title: {
        color: colors.mainPink,
        fontSize: 20,
        padding: 5
    },
    back : {
        color : colors.mainPink,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center"
    }
})