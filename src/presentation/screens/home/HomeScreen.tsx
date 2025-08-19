import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'

export const HomeScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button>Cerrar SECCION</Button>
    </Layout>
  )
}