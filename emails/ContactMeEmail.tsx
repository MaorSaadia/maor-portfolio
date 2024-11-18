import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface ContactMeEmailProps {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  message: string;
}

const ContactMeEmail: React.FC<ContactMeEmailProps> = ({
  firstname = "John",
  lastname = "Doe",
  email = "john@example.com",
  phone = "",
  message = "Hello, I'm interested in discussing a potential project.",
}) => {
  return (
    <Html>
      <Head />
      <Preview>
        New contact from {firstname} {lastname}
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 py-10">
          <Container className="bg-white border border-gray-200 rounded-lg p-8 mx-auto">
            <Heading className="text-2xl font-bold text-gray-900 mb-2">
              New Contact Form Submission
            </Heading>
            <Text className="text-gray-600 mb-6">
              You have received a new message from your website&apos;s contact
              form.
            </Text>

            <Section className="mb-6">
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Contact Information:
              </Text>
              <div className="bg-gray-50 rounded-lg p-4">
                <Text className="text-gray-800 mb-2">
                  <span className="font-semibold">Name:</span> {firstname}{" "}
                  {lastname}
                </Text>
                <Text className="text-gray-800 mb-2">
                  <span className="font-semibold">Email:</span> {email}
                </Text>
                <Text className="text-gray-800 mb-2">
                  <span className="font-semibold">Phone:</span>{" "}
                  {phone || "Not provided"}
                </Text>
              </div>
            </Section>

            <Hr className="border-gray-200 my-6" />

            <Section>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Message:
              </Text>
              <div className="bg-gray-50 rounded-lg p-4">
                <Text className="text-gray-800 whitespace-pre-wrap">
                  {message}
                </Text>
              </div>
            </Section>

            <Hr className="border-gray-200 my-6" />

            <Text className="text-sm text-gray-600">
              This email was sent from your website&apos;s contact form. Please
              respond to the sender directly by replying to this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactMeEmail;
