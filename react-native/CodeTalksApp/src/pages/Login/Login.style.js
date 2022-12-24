import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    top_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom_container: {
        flex: 1,
    },
    title: {
        color: '#e0e0e0',
        fontSize: 40,
    },
});