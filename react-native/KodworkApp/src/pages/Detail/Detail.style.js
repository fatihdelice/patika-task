import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
export default StyleSheet.create({
    top_container: {
        borderBottomWidth: 1,
        borderBottomColor: colors.borderGray,
        backgroundColor: "#F2F2F2",
    },
    header_title: {
        color: colors.titleGray,
        fontSize: 25,
        fontWeight: "700"
    },
    location_title: {
        color: colors.mainPink,
        fontSize: 16
    },
    location_content: {
        color: "black"
    },
    job_title_head: {
        color: colors.titleGray,
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        marginTop : 10
    },
    content_container : {
        padding : 5,
        marginHorizontal : 5,
        backgroundColor : colors.white,
    },
    content_title : {
        color : colors.black,
    },
    button_container : {
        flexDirection : "row",
        justifyContent : "center",
        backgroundColor : colors.white
    }
})