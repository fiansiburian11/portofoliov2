"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/0.jpg",
    "/images/2.jpg",
    "/images/16.jpg",
    "/images/1.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image src={image} width={200} height={400} alt="about" className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">Hey there, I&apos;m Firman Parulian Siburian - seorang pengembang yang bersemangat, penulis yang tekun, dan penikmat desain yang mengagumkan. Selamat datang di sudut dunia digital saya!</Paragraph>
        <Paragraph className=" mt-4">
          Saya mahasiswa Ilmu Komputer , yang sangat tertarik dengan pengembangan web, khususnya teknologi front-end. Fokus saya saat ini adalah meningkatkan keterampilan saya dalam teknologi web modern sambil berusaha menjadi seorang
          insinyur perangkat lunak full-stack.
        </Paragraph>

        <Paragraph className=" mt-4">
          🔭 Saat ini sedang mengerjakan:
          <br />
          Meningkatkan keterampilan front-end saya dengan Next.js & Tailwind CSS serta Menjelajahi pengembangan backend untuk kemampuan tumpukan penuh
        </Paragraph>
        <Paragraph className=" mt-4">🌱 Saat ini sedang belajar: Pola JavaScript tingkat lanjut & Dasar-dasar Java</Paragraph>
        <Paragraph className=" mt-4">✨ Saya selalu bersemangat untuk belajar, berkembang, dan berkontribusi pada proyek-proyek yang menarik. Mari kita terhubung dan menciptakan sesuatu yang luar biasa bersama-sama!</Paragraph>
        <Paragraph className=" mt-4">
          Melalui situs ini, saya ingin berbagi wawasan, pengalaman, dan karya saya dengan Anda. Baik Anda seorang pengembang yang mencari solusi, seorang penulis yang mencari inspirasi, atau sekadar seseorang yang menghargai desain
          berkualitas, ada sesuatu di sini untuk Anda.
        </Paragraph>
      </div>
    </div>
  );
}
