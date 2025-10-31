import Image from "next/image";
import Container from "@/components/container/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Atom, BriefcaseBusiness, CircleCheckBig, Handshake, LaptopMinimalCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselNext,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SkillsAnimatedLogos from "@/components/SkillsLogos";
import TechCarousel from "@/components/TechSlider";
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

export default function Home() {
  const mensagesSlider = [
    {
      title: "Sobre Nós",
      text: "Conheça a VisionSite, sua parceira confiável para soluções web inovadoras e personalizadas.",
      link: "#",
    },
    {
      title: "Habilidades",
      text: "Explore nossas habilidades em desenvolvimento web e veja como podemos ajudar seu negócio a crescer.",
      link: "#skills",
    },
    {
      title: "Serviços",
      text: "Conheça nossos serviços personalizados de desenvolvimento web.",
      link: "#",
    },
    {
      title: "Portifólio",
      text: "Explore nossos projectos recentes e veja nosso trabalho em ação.",
      link: "#",
    },
    {
      title: "Contato",
      text: "Entre em contato conosco para discutir suas necessidades de desenvolvimento web.",
      link: "#",
    },
  ];
  return (
    <Container>
      <div className="w-full h-full">
        <Card id="#home">
          <CardHeader>
            <div className="flex">
              <CardTitle>Seja bem vindo à VisionSite!</CardTitle>
              <Atom size={17} className="ml-auto "></Atom>
            </div>

            <CardDescription>
              A sua parceira de confiança para soluções web inovadoras e
              personalizadas.
            </CardDescription>
          </CardHeader>
        </Card>

        <section className="grid grid-cols-2 gap-4 mt-2.5">
          <Card>
            <CardHeader>
              <div className="flex">
                <CardTitle>Nossos Serviços</CardTitle>

                <BriefcaseBusiness
                  size={17}
                  className="ml-auto"
                ></BriefcaseBusiness>
              </div>

              <CardDescription>
                Descubra como podemos ajudar a transformar sua presença online.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Button variant={"default"} className="w-full">
                <Link href={"#"} className="">
                  Ver Serviços
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex">
                <CardTitle>Clientes Satisfeitos</CardTitle>

                <CircleCheckBig
                  size={17}
                  className="ml-auto text-green-500"
                ></CircleCheckBig>
              </div>

              <CardDescription>
                Vê o trabalho que realizamos para nossos clientes satisfeitos.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Button variant={"default"} className="w-full">
                <Link href={"#"} className="">
                  Ver Projectos
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-2.5">
          {/* slider */}
          <Carousel className="relative" opts={{ loop: true }}>
            <CarouselContent>
              {mensagesSlider.map((mensage, index) => (
                <CarouselItem key={index} className="">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{mensage.title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription>{mensage.text}</CardDescription>
                    </CardContent>

                    <CardFooter>
                      <Button variant={"outline"}>
                        <Link href={mensage.link}>Saber mais</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-3.5" />
            <CarouselNext className="absolute -right-3.5" />
          </Carousel>

          {/* about us */}
          <Card className="mt-2.5 relative ">
            <CardHeader>
              <CardTitle>
                Sobre a VisionSite
              </CardTitle>

              <CardDescription className="flex flex-col gap-2.5">
                <span>Na Vision Site, acreditamos que cada ideia merece ser vista. Somos uma startup focada em criar soluções web inteligentes, acessíveis e impactantes. Nosso objetivo é transformar visões em experiências digitais únicas,  desde sites institucionais até plataformas completas e personalizadas.</span>

                <span>Com uma equipe apaixonada por design, tecnologia e inovação, unimos criatividade e performance para ajudar empresas, empreendedores e criadores a conquistarem presença online com propósito e qualidade.</span>

                <span>Mais do que desenvolver sites, nós construímos conexões entre pessoas e marcas. Porque na Vision Site, o futuro começa com uma boa visão.</span>
              </CardDescription>

            </CardHeader>

            <CardFooter className="justify-end">
              <Button><Handshake/>  Contacte</Button>
            </CardFooter>
          </Card>


          {/* skills */}
          <Card className="mt-2.5" id="skills">
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>Habilidades</CardTitle>
                  <LaptopMinimalCheck size={17} className="text-green-600"></LaptopMinimalCheck>
                </div>

                <CardDescription>
                  Aqui, verás algumas das tecnologia que usamos pra solucionar problemas de clientes.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <SkillsAnimatedLogos/>

                <TechCarousel/>
              </CardContent>
          </Card>


          {/* Services */}

          <Card className="mt-2.5" id="services">
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>Serviços</CardTitle>
                  <BriefcaseBusiness size={17} className="text-green-600"></BriefcaseBusiness>
                </div>

                <CardDescription>
                  Aqui, verás os serviços que podemos oferecer para nossos clientes
                </CardDescription>
              </CardHeader>

              <CardContent>
                  <div className="flex flex-col gap-2.5">
                    <Card className="hover:shadow-sm hover:scale-[101%] transition-all ">
                      <CardHeader>
                        <CardTitle>Front-end</CardTitle>

                        <CardDescription>
                          A Vision site pode ajudar-te com projectos front-end, com criatividade inovadoras, aplicando conceitos de ui e ux, usando tecnologias como next, react tailwind...
                        </CardDescription>

                        <CardContent>
                          <div className="flex mt-5 justify-around ">
                            <SiNextdotjs size={50} color=""/>
                            <SiReact size={50} className="text-blac"/>
                            <SiTailwindcss size={50}/>
                          </div>
                        </CardContent>
                      </CardHeader>
                    </Card>
                    
                    <Card className="hover:shadow-sm hover:scale-[101%] transition-all ">
                      <CardHeader>
                        <CardTitle>Back-end</CardTitle>

                        <CardDescription>
                          A Vision site pode ajudar-te com projectos front-end, com criatividade inovadoras, aplicando conceitos de ui e ux, usando tecnologias como next, react tailwind...
                        </CardDescription>

                        <CardContent>
                          <div className="flex mt-5 justify-around ">
                            <SiNestjs size={50} color=""/>
                            <SiPrisma size={50} className="text-blac"/>
                            <SiPostgresql size={50}/>
                          </div>
                        </CardContent>
                      </CardHeader>
                    </Card>
                    
                    <Card className="hover:shadow-sm hover:scale-[101%] transition-all ">
                      <CardHeader>
                        <CardTitle>Full-stack</CardTitle>

                        <CardDescription>
                          A Vision site pode ajudar-te com projectos Back-end, 
                        </CardDescription>

                        <CardContent>
                          <div className="flex mt-5 justify-around ">
                            <SiNextdotjs size={50} color=""/>   
                            <SiNestjs size={50} color=""/>
                            <SiPrisma size={50} className="text-blac"/>
                          </div>
                        </CardContent>
                      </CardHeader>
                    </Card>
                    
                  </div>
              </CardContent>
          </Card>
        </section>
      </div>
    </Container>
  );
}
