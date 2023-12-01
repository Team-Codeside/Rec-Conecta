import api from "../utils/api";

export const registerUser = async (user) => {
    try {
        const res = await api.post('user/register', user);
        return {
            data: res
        
        }
    } catch (error) {
        return error
    }
}