import { tesloApi } from "../../config/api/tesloApi";
import { User } from "../../domain/entities/user";
import type { AuthResponse } from "../../infrastructure/interfaces/auth.responses";


const returnUserToken = (data: AuthResponse) => {

    const user : User = {
        id: data.id,
        email: data.email,
        fullName: data.fullName,
        isActive: data.isActive,
        roles: data.roles,
    };
    return {
        user,
        token: data.token
    }
}


export const AuthLogin = async (email:string, password:string) => {

    email = email.toLowerCase();
    try {
        console.log('Making login request to:', tesloApi.defaults.baseURL + '/auth/login');
        const {data} = await tesloApi.post<AuthResponse>('/auth/login', { email, password });
        return returnUserToken(data);
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}


export const AuthCheckStatus = async (token: string) => {
    try {
        const { data } = await tesloApi.get<AuthResponse>('/auth/check-status', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return returnUserToken(data);
    } catch (error) {
        
    }
}