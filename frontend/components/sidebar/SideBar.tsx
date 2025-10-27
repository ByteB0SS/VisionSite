import { House, LaptopMinimalCheck, PanelLeft, BriefcaseBusiness, GalleryHorizontalEnd, Handshake } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "../ui/sheet"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent} from "@/components/ui/tooltip"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "../ButtonTogleTheme"

export default function SideBar () {
    return (
        <div>

            {/* desktop aside*/}
            <aside className="hidden fixed inset-y-0 left-0 p-2 border sm:flex sm:flex-col z-50">
                <Button  size={"icon"} className="mb-5">
                    V
                    <span className="sr-only">Logo</span>
                </Button>

                <TooltipProvider>
                    <nav className="flex flex-col gap-2.5">
                        
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size={"icon"} variant={"outline"}>
                                    <Link href={"#home"} className="w-full h-full flex justify-center items-center">
                                        <House></House>
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Inicio
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size={"icon"} variant={"outline"}>
                                    <Link href={"#"} className="w-full h-full flex justify-center items-center">
                                        <LaptopMinimalCheck></LaptopMinimalCheck>
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Habilidades
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size={"icon"} variant={"outline"}>
                                    <Link href={"#"} className="w-full h-full flex justify-center items-center">
                                        <BriefcaseBusiness></BriefcaseBusiness>
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Serviços
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size={"icon"} variant={"outline"}>
                                    <Link href={"#"} className="w-full h-full flex justify-center items-center">
                                        <GalleryHorizontalEnd></GalleryHorizontalEnd>
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Portfólio
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size={"icon"} variant={"outline"}>
                                    <Link href={"#"} className="w-full h-full flex justify-center items-center">
                                        <Handshake></Handshake>
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Contacte
                            </TooltipContent>
                        </Tooltip>


                        <ModeToggle/>

                    </nav>
                    
                </TooltipProvider>


            </aside>

            {/* Mobile header */}
            <header className="border fixed inset-x-0 top-0 p-2 flex items-center  backdrop-blur-sm sm:hidden z-50">
                <Sheet>
                    <SheetTrigger asChild >
                        <Button size={"icon"} variant={"outline"}>
                            <PanelLeft></PanelLeft>
                            <span className="sr-only">navegação</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="max-w-[50vw] p-2.5">
                        <SheetHeader>
                            <SheetTitle>VisionSite</SheetTitle>
                        </SheetHeader>

                        <nav className="mobile-nav">
                            <ul className="flex flex-col gap-2.5">
                                <Button variant={"ghost"} className="flex justify-start hover:">
                                    <Link href={"#home"} className="flex items-center gap-2.5">
                                        <House size={20}></House> Início
                                    </Link>
                                </Button>
                                <Button variant={"ghost"} className="flex justify-start hover:">
                                    <Link href={"#"} className="flex items-center gap-2.5">
                                        <LaptopMinimalCheck size={20}></LaptopMinimalCheck> Habilidades
                                    </Link>
                                </Button>
                                <Button variant={"ghost"} className="flex justify-start hover:">
                                    <Link href={"#"} className="flex items-center gap-2.5">
                                        <BriefcaseBusiness  size={20}></BriefcaseBusiness > Serviços
                                    </Link>
                                </Button>
                                <Button variant={"ghost"} className="flex justify-start hover:">
                                    <Link href={"#"} className="flex items-center gap-2.5">
                                        <GalleryHorizontalEnd  size={20}></GalleryHorizontalEnd > Portfólio
                                    </Link>
                                </Button>
                                <Button variant={"ghost"} className="flex justify-start hover:">
                                    <Link href={"#"} className="flex items-center gap-2.5">
                                        <Handshake size={20}></Handshake> Contacte
                                    </Link>
                                </Button>
                            </ul>
                        </nav>

                        <nav className="mt-auto mobile-nav">
                            <Button className=" w-full flex flex-row justify-start"><Link href={"#"} className="flex items-center gap-2.5"><Handshake/> Contactar startup</Link></Button>
                        </nav>

                        <SheetFooter className="relative mt-0">
                            <SheetClose asChild>
                                <div className="absolute bottom-0 right-0"><Button variant={"outline"}>Voltar</Button></div>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>

                <span className="ml-1.5 font-bold text-primary">VisionSite</span>

                <Button className="flex flex-row justify-start ml-auto"><Link href={"#"} className="flex items-center gap-2.5"><Handshake/> Contactar startup</Link></Button>
            </header>
        </div>
    )
}