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
        const {data} = await tesloApi.post<AuthResponse>('/auth/login', { email, password });
        return returnUserToken(data);
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}