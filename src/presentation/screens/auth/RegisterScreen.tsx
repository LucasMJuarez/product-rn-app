import { StackScreenProps } from '@react-navigation/stack';
import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { useWindowDimensions, ScrollView } from 'react-native'
import { RootStackParamList } from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {

}

export const RegisterScreen = ({ navigation }: Props) => {

  const { height } = useWindowDimensions();
  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category='h1'>Crear Cuenta</Text>
          <Text category='p2'>Por favor ingrese su información</Text>
        </Layout>

     <Layout style={{marginTop: 20}}>
                <Input
            placeholder="Nombre completo"
            keyboardType="default"
            autoCapitalize="words"
            style={{marginBottom: 10}}
          />

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
            Crear Cuenta
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
            onPress={() => { navigation.pop() }}
          >
            Ingresar
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  )
}

