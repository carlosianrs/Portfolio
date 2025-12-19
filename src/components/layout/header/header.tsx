'use client'

import { Logo } from '@/components/logo';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from "next/link"
import { useEffect, useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed bg-gray-800 top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className='flex flex-row items-center gap-2'>
            <Logo />
            <p className='text-white'>|</p>
            <Link href="/curriculo - Carlos Ian Rodrigues dos Santos.pdf" download scroll={true} className='text-cyan-100 hover:text-cyan-200'>Currículo</Link>
          </div>
          <div className='hidden md:block'>
            <Breadcrumb>
                <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <Link href="/#home" scroll={true} className='text-gray-300 hover:text-gray-100'>Início</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='text-gray-300' />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <Link href="/#about-me" scroll={true} className='text-gray-300 hover:text-gray-100'>Sobre mim</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='text-gray-300' />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <Link href="/#experience" scroll={true} className='text-gray-300 hover:text-gray-100'>Experiência</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='text-gray-300' />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <Link href="/#projects" scroll={true} className='text-gray-300 hover:text-gray-100'>Projetos</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='text-gray-300' />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <Link href="/#languages" scroll={true} className='text-gray-300 hover:text-gray-100'>Linguagens</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Menu className="text-gray-300" />
              </SheetTrigger>
              <SheetTitle />
              <SheetDescription />
              <SheetContent side="right" className="bg-gray-900 text-gray-200">
                <nav className="flex flex-col gap-4 mt-6 text-lg">
                  <Link href="/#home" className="hover:text-white" onClick={closeMenu}>Início</Link>
                  <Link href="/#about-me" className="hover:text-white" onClick={closeMenu}>Sobre mim</Link>
                  <Link href="/#experience" className="hover:text-white" onClick={closeMenu}>Experiência</Link>
                  <Link href="/#projects" className="hover:text-white" onClick={closeMenu}>Projetos</Link>
                  <Link href="/#languages" className="hover:text-white" onClick={closeMenu}>Linguagens</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
