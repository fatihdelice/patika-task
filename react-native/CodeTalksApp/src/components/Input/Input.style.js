import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        padding:5,
        margin:10,
        borderBottomWidth:1,
        borderBottomColor: "#fff",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center"
    },
    input:{
        flex:1,
        padding: Platform.OS === "android" ? 3 : 5
    },

})