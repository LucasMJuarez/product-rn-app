import { create } from "zustand";
import { User } from "../../../domain/entities/user";
import { AuthStatus } from "../../../infrastructure/interfaces/auth.status";
import { AuthCheckStatus, AuthLogin } from "../../../actions/auth/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    login: (email: string, password: string) => Promise<boolean>;
    checkStatus: () => Promise<boolean>;
    logout: () => Promise<void>;
}


export const useAuthStore = create<AuthState>()((set,get) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: async( email: string, password: string) => {
        const resp = await AuthLogin(email, password);
        if(!resp) {
            set({ status: 'unauthenticated', token: undefined, user: undefined });
            return false;
        }

        //TODO SAVE TOKEN IN STORAGE
        await AsyncStorage.setItem('token', resp.token);

        console.log({resp})
        set({ status: 'authenticated', token: resp.token, user: resp.user });
        return true;
    },

    checkStatus: async () => {
        const resp = await AuthCheckStatus( get().token || '' );
        if (!resp) {
            set({ status: 'unauthenticated', token: undefined, user: undefined });
            return false;
        }

        set({ status: 'authenticated', token: resp.token, user: resp.user });
        return true;
    },


    logout: async () => {
        await AsyncStorage.removeItem('token');
        set({ status: 'unauthenticated', token: undefined, user: undefined });
    }   
}))
