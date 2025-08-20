import { StackScreenProps } from '@react-navigation/stack';
import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { useWindowDimensions, ScrollView } from 'react-native'
import { RootStackParamList } from '../../navigation/StackNavigator';
import { API_URL, STAGE } from '@env';

interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {

}

export const LoginScreen = ({ navigation }: Props) => {

  const { height } = useWindowDimensions();

  console.log({apiUrl: API_URL, stage: STAGE})
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
            style={{marginBottom: 10}}
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            style={{marginBottom: 10}}
          />
        </Layout>
         {/* Space */}
        <Layout style={{height: 10}} />

        {/* Button */}
        <Layout>
          <Button 
            onPress={() => {

            }}
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
          <Text>¿No tienes cuenta?</Text>          <Text 
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

