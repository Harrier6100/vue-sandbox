import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/useAuthStore';

export const useAuth = () => {
    const authStore = useAuthStore();
    const { login } = authStore;

    return {
        login,
    };
};