import React from 'react'
import { SafeAreaView, View, Text, Image, Alert } from 'react-native'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Login.style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import usePost from '../../hooks/usePost'
import { API_AUTH_URL } from '@env'

const Login = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const { data, error, loading, post } = usePost();
    const dispatch = useDispatch();

    function handleLogin(values) {
        post(API_AUTH_URL + '/login', values);
    }

    if (error) {
        Alert.alert('Dükkan', 'Bir hata oluştu');
    }

    if (data) {
        if (data.status === 'Error') {
            Alert.alert('Dükkan', 'Kullanıcı Bulunamadı');
        } else {
            dispatch({ type: 'SET_USER', payload: { user: JSON.stringify(user) } });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/login-logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı adını giriniz"
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"
                        />
                        <Input
                            placeholder="Şifrenizi giriniz"
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login;

// const user = {
//     "address": {
//         "geolocation": {
//             "lat": "-37.3159",
//             "long": "81.1496"
//         },
//         "city": "kilcoole",
//         "street": "new road",
//         "number": 7682,
//         "zipcode": "12926-3874"
//     },
//     "id": 1,
//     "email": "john@gmail.com",
//     "username": "johnd",
//     "password": "m38rmF$",
//     "name": {
//         "firstname": "john",
//         "lastname": "doe"
//     },
//     "phone": "1-570-236-7033",
//     "__v": 0
// }