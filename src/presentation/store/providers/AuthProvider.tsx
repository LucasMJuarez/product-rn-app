import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useEffect} from 'react';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAuthStore} from '../auth/useAuthStore';

export const AuthProvider = ({children}: PropsWithChildren) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {checkStatus, status} = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status !== 'checking') {
        if(status === 'authenticated') {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }],
            });
        }else {
            navigation.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
            });
        }
    }
  }, [status]);

  return <>{children}</>;
};
