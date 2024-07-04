import  * as z from "zod";

export const RegisterSchema = z.object({
    username: z.string().min(1, {
        message: "Please enter a valid username"
    }),
    email: z.string().email({
        message: "Please enter a valid email address"
    }), 
    password: z.string().min(8, {
        message: "Password must be at least 8 characters"
    }),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // path of error
});