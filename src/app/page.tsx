import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Fian Siburian</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a front-end developer that loves <Highlight>building products</Highlight> and web apps that can impact millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>6th semester computer engineering student</Highlight> with experience building scalable, performance-optimized, and attractive web applications.
      </Paragraph>
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        Some of my projects
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
