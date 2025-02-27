import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fian - Developer",
  description: "Generated ny fian siburian.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      {/* <p className="text-xs text-blue-400 hover:cursor-pointer hover:underline hover:text-blue-700 font-bold">Fitur ini sedang dalam pengembangan, Silakan hubungi saya melalui media sosial yang tertera terlebih dahulu.</p> */}
      <Paragraph className="mb-10 max-w-xl">Hubungi saya melalui email atau isi formulir kontak ini. Saya akan segera menghubungi Anda.</Paragraph>
      <Contact />
    </Container>
  );
}
