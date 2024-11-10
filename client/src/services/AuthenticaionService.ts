import api from "./Api";

export default {
    async login(email: string, password: string) {
        try {
            const response = await api().post("/auth/login", { email, password });
            return response;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    },
    async register(email: string, password: string) {
        try {
            const response = await api().post("/auth/register", { email, password });
            return response;
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    },
    async logout() {
        try {
            const response = await api().post("/auth/logout");
            return response;
        } catch (error) {
            console.error("Logout failed:", error);
            throw error;
        }
    },
    async me() {
        try {
            const response = await api().get("/auth/me");
            return response;
        } catch (error) {
            console.error("Fetch user data failed:", error);
            throw error;
        }
    }
}
