import { SafeAreaView, View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './Sign.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';

import { showMessage } from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.goBack();
  };

  const handleFormSubmit = async formValues => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor...',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      showMessage({
        message: 'Kayıt işlemi başarıyla tamamlandı',
        type: 'success',
      });
    } catch (error) {
      setLoading(false);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      console.log(formValues);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>codetalks</Text>
      </View>

      <View style={styles.bottom_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <>
              <Input
                value={values.usermail}
                onChangeText={handleChange('usermail')}
                placeholder="E-postanızı giriniz"
              />
              <Input
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Şifrenizi giriniz"
                isSecure
              />
              <Input
                value={values.repassword}
                onChangeText={handleChange('repassword')}
                placeholder="Şifrenizi tekrar giriniz"
                isSecure
              />
              <Button text="Kayıt Ol" loading={loading} onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <Button
          text="Geri"
          theme="secondary"
          onPress={handleLogin}
          loading={loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default Sign;
