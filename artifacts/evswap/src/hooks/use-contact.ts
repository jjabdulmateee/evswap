import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Simulate network request for the static site
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted successfully:", data);
      return { success: true, message: "Thanks for reaching out! We'll get back to you soon." };
    },
  });
}
