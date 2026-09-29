import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput, useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [success, setSuccess] = useState(false);
  const { mutate: submitContact, isPending } = useSubmitContact();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactInput) => {
    submitContact(data, {
      onSuccess: () => {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 5000);
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Have questions about our service, partnership opportunities, or station locations? Our team is here to help you make the switch.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-muted-foreground">Evswap@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-muted-foreground">+92 315 9575367</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-muted-foreground">Peshawar, KPK, Pakistan</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-border">
              {success ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">Thanks for reaching out. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <Input placeholder="Your full name" {...register("name")} />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input type="email" placeholder="you@example.com" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <Textarea placeholder="How can we help you?" {...register("message")} />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
