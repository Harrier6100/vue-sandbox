import { defineStore } from 'pinia';
import { api } from '@/api/api';

export const useAuthStore = defineStore('auth', () => {
    const login = async (id) => {
        try {
            const response = await api.get(`/api/employees?employeeCode=${id}`);
            const employee = response.data.shift();
            if (employee) {
                console.log(employee);
            } else throw new Error('none');
        } catch (error) {
            throw error;
        }
    };

    return {
        login,
    };
});