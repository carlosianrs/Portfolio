import { pathConfig } from "@/lib/settings.config";

export default function getProjects() {
    const projects = [
        {
            key: 1,
            pathImage: `${pathConfig.basePath}/project-app-icp.png`,
            alt: 'App Casa do Pai',
            title: 'Aplicativo: Casa do Pai - Relatórios (2025)',
            languages: 'React Native, TypeScript, Firebase',
            description: 'Aplicativo responsável por gerenciar relatórios de células.',
            shadow: 'hover:shadow-yellow-300'
        },
        {
            key: 2,
            pathImage: `${pathConfig.basePath}/project-site-icp.png`,
            alt: 'Site Casa do Pai',
            title: 'Site: Igreja Evangélica Casa do Pai (2025)',
            languages: 'Next, TypeScript',
            description: 'Site com o objetivo de acolher visitantes e divulgar informações da igreja, como eventos, conferências...',
            shadow: 'hover:shadow-blue-300'
        },
        {
            key: 3,
            pathImage: `${pathConfig.basePath}/project-loan.png`,
            alt: 'Site Projeto Biblioteca',
            title: 'Site: Sistema de Biblioteca',
            languages: 'HTML, PHP, JS, MySQL',
            description: 'Sistema usando o DataTables para registrar os empréstimos de livros na biblioteca.',
            shadow: 'hover:shadow-white'
        }
    ]
    
    return projects;
}