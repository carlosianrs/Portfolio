import { Button } from '@/components/ui/button';
import { House } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 flex-col relative overflow-hidden">
        <div className="relative z-10 text-center">
            <div className="relative inline-block mb-4">
            <span className="text-[12rem] font-bold bg-gradient-to-r from-cyan-100 to-blue-200 bg-clip-text text-transparent">
                404
            </span>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-100 to-blue-200 rounded-full"></div>
            </div>

            <h1 className="text-gray-100 mb-3">
                Página não encontrada
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                    variant={'default'}
                    className="text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                >
                    <Link href="/">
                        <House />
                        Voltar para Tela Inicial
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  );
}