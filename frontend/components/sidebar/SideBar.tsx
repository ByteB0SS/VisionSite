"use client";

import { House, LaptopMinimalCheck, PanelLeft, BriefcaseBusiness, GalleryHorizontalEnd, Handshake } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ButtonTogleTheme";

const navItems = [
  { id: 1, name: "Início", href: "#home", icon: House },
  { id: 2, name: "Habilidades", href: "#skills", icon: LaptopMinimalCheck },
  { id: 3, name: "Serviços", href: "#services", icon: BriefcaseBusiness },
  { id: 4, name: "Portfólio", href: "#portfolio", icon: GalleryHorizontalEnd },
  { id: 5, name: "Contacte", href: "#contact", icon: Handshake },
];

function NavButton({ href, icon: Icon, name }: { href: string; icon: any; name: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="outline" asChild>
          <Link href={href} className="w-full flex justify-center items-center"><Icon /></Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">{name}</TooltipContent>
    </Tooltip>
  );
}

function MobileNavButton({ href, icon: Icon, name }: { href: string; icon: any; name: string }) {
  return (
    <SheetClose asChild>
      <Button variant="ghost" className="flex justify-start" asChild>
        <Link href={href} className="flex items-center gap-2.5"><Icon size={20} /> {name}</Link>
      </Button>
    </SheetClose>
  );
}

export default function SideBar() {
  return (
    <div>
      <aside className="hidden fixed inset-y-0 left-0 p-2 border sm:flex sm:flex-col z-50">
        <Button size="icon" variant="outline" className="mb-5 flex items-center justify-center">V<span className="sr-only">Logo</span></Button>
        <TooltipProvider>
          <nav className="flex flex-col gap-2.5">
            {navItems.map((item) => (<NavButton key={item.id} href={item.href} icon={item.icon} name={item.name} />))}
            <ModeToggle />
          </nav>
        </TooltipProvider>
      </aside>

      <header className="border fixed inset-x-0 top-0 p-2 flex items-center backdrop-blur-sm sm:hidden z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline"><PanelLeft /><span className="sr-only">navegação</span></Button>
          </SheetTrigger>
          <SheetContent side="left" className="max-w-[50vw] p-2.5 flex flex-col">
            <SheetHeader><SheetTitle>VisionSite</SheetTitle></SheetHeader>
            <nav className="flex flex-col gap-2.5 mt-4">
              {navItems.map((item) => (<MobileNavButton key={item.id} href={item.href} icon={item.icon} name={item.name} />))}
            </nav>
            <nav className="mt-auto">
              <SheetClose asChild>
                <Button className="w-full flex flex-row justify-start"><Link href="#contact" className="flex items-center gap-2.5"><Handshake /> Contactar startup</Link></Button>
              </SheetClose>
            </nav>
            <SheetFooter className="relative mt-4">
              <SheetClose asChild><div className="absolute bottom-0 right-0"><Button variant="outline">Voltar</Button></div></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <span className="ml-1.5 font-bold text-primary">VisionSite</span>
        <Button className="flex flex-row justify-start ml-auto"><Link href="#contact" className="flex items-center gap-2.5"><Handshake /> Contactar startup</Link></Button>
      </header>
    </div>
  );
}
