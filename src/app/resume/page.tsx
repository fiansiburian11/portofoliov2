import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Experience History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a front-end web developer who loves <Highlight>web products and applications</Highlight>that can impact millions of lives.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
