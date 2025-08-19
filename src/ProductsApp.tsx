import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { useColorScheme } from 'react-native';

export const ProductsApp = () => {

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  return (
    <ApplicationProvider {...eva} theme={theme}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
};
