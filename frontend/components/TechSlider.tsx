"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiNestjs,
} from "react-icons/si";

const techList = [
  {
    icon: <SiReact className="text-sky-500 text-5xl" />,
    name: "React",
    description: "Biblioteca JavaScript para criar interfaces de usuário interativas e reativas.",
  },
  {
    icon: <SiNextdotjs className="text-black dark:text-white text-5xl" />,
    name: "Next.js",
    description: "Framework React que oferece renderização no servidor e geração de sites estáticos.",
  },
  {
    icon: <SiTypescript className="text-blue-600 text-5xl" />,
    name: "TypeScript",
    description: "Superconjunto do JavaScript que adiciona tipagem estática e segurança ao código.",
  },
  {
    icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
    name: "Tailwind CSS",
    description: "Framework CSS utilitário para criar interfaces rápidas e responsivas.",
  },
  {
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    name: "JavaScript",
    description: "Linguagem de programação usada para adicionar interatividade em páginas web.",
  },
  {
    icon: <SiHtml5 className="text-orange-500 text-5xl" />,
    name: "HTML5",
    description: "Linguagem de marcação usada para estruturar conteúdo na web.",
  },
  {
    icon: <SiCss3 className="text-blue-500 text-5xl" />,
    name: "CSS3",
    description: "Linguagem de estilo usada para definir aparência e layout das páginas web.",
  },
  {
    icon: <SiPostgresql className="text-sky-700 text-5xl" />,
    name: "PostgreSQL",
    description: "Banco de dados relacional avançado e de código aberto.",
  },
  {
    icon: <SiPrisma className="text-purple-500 text-5xl" />,
    name: "Prisma",
    description: "ORM moderno que facilita o acesso a bancos de dados em TypeScript/Node.js.",
  },
  {
    icon: <SiMysql className="text-blue-600 text-5xl" />,
    name: "MySQL",
    description: "Banco de dados relacional amplamente usado em aplicações web.",
  },
  {
    icon: <SiNestjs className="text-red-600 text-5xl" />,
    name: "NestJS",
    description: "Framework Node.js para construir APIs escaláveis e bem estruturadas.",
  },
];

export default function TechCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Carousel className="w-full">
        <CarouselContent>
          {techList.map((tech, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 relative" // 1 card abaixo de sm, 2 acima
            >
              <Card className="flex flex-col items-center justify-center text-center h-60 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-col items-center">
                  {tech.icon}
                  <CardTitle className="mt-2 text-lg font-semibold">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0"/>
        <CarouselNext className="right-0"/>
      </Carousel>
    </div>
  );
}
