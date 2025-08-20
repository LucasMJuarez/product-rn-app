import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { useAuthStore } from '../../store/auth/useAuthStore';

export const HomeScreen = () => {

  const {logout} = useAuthStore();
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={logout}>Cerrar SECCION</Button>
    </Layout>
  )
}