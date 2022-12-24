import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : colors.mainPink,
        alignItems : "center",
        padding : 10,
        marginHorizontal : 5,
        borderRadius : 5,
    },
    button_text :{
        color : colors.white,
        fontWeight : "bold"
    }
})