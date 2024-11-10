import * as z from "zod";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedText from "./AnimatedText";

// Define form validation schema
const formSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(0, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission - replace with your actual submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowIcon(true);
    form.reset();

    // Hide success icon after 3 seconds
    const timer = setTimeout(() => {
      setShowIcon(false);
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText
              text="Contact Me"
              textStyles="h2 mb-12 text-center xl:text-left"
            />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 w-full max-w-[480px]"
              >
                {/* firstname & lastname fields */}
                <div className="flex gap-8">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-primary">
                          First Name <span className="text-accent">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            className="input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-primary">
                          Last Name <span className="text-accent">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            className="input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* email field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary">
                        Email <span className="text-accent">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="youremail@email.com"
                          className="input"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* phone field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary">
                        Phone number <span className="text-accent">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Phone"
                          className="input"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* message field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary">
                        Message <span className="text-accent">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          className="textarea"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-accent flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaCheckCircle
                        className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                          showIcon ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <span
                        className={`transition-opacity duration-500 ease-in-out ${
                          showIcon ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        Send message
                      </span>
                    </>
                  )}
                </button>
              </form>
            </Form>
          </div>

          {/* image */}
          <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
            <Image
              src="/assets/contact/img.png"
              className="object-cover"
              fill
              quality={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
