import { StackScreenProps } from '@react-navigation/stack';
import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { useWindowDimensions, ScrollView, Alert } from 'react-native'
import { RootStackParamList } from '../../navigation/StackNavigator';
import { API_URL, STAGE } from '@env';
import { useState } from 'react';
import { useAuthStore } from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {

}

export const LoginScreen = ({ navigation }: Props) => {

 const { login } = useAuthStore();
const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { height } = useWindowDimensions();

  const onLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }

    const wasSuccessful = await login(form.email, form.password);
    if (wasSuccessful) {
      return;
    } 
      Alert.alert('Error', 'Credenciales incorrectas');

  }

  console.log({ apiUrl: API_URL, stage: STAGE });
  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category='h1'>Ingresar</Text>
          <Text category='p2'>Por favor ingrese su contraseña</Text>
        </Layout>

     <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
            style={{marginBottom: 10}}
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            value={form.password}
            onChangeText={(password) => setForm({ ...form, password })}
            style={{marginBottom: 10}}
          />
        </Layout>

        <Text>{JSON.stringify(form, null, 2)}</Text>
         {/* Space */}
        <Layout style={{height: 10}} />

        {/* Button */}
        <Layout>
          <Button 
            onPress={onLogin}
          >
            Ingresar
          </Button>
        </Layout>
        <Layout style={{height: 50}} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>¿No tienes cuenta?</Text>
          <Text 
            status="primary" 
            category="s1"
            onPress={() =>{ navigation.navigate('RegisterScreen') }}
          >
            {' '}
            crea una{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  )
}

