import { pathConfig } from "@/lib/settings.config";

export default function getProjects() {
    const projects = [
        {
            key: 1,
            pathImage: `${pathConfig.basePath}/project-app-icp.png`,
            alt: 'App Casa do Pai',
            title: 'Aplicativo: Casa do Pai - Relatórios (2025)',
            languages: 'React Native, TypeScript, Firebase',
            description: 'Aplicativo responsável por gerenciar relatórios de células, com o objetivo principal de identificar como estão os membros.',
            shadow: 'hover:shadow-yellow-300',
            linguagens: [
                { url: 'https://skillicons.dev/icons?i=nodejs' },
                { url: 'https://skillicons.dev/icons?i=typescript' },
                { url: 'https://skillicons.dev/icons?i=react' },
                { url: 'https://skillicons.dev/icons?i=figma' },
                { url: 'https://skillicons.dev/icons?i=firebase' },
            ],
        },
        {
            key: 2,
            pathImage: `${pathConfig.basePath}/project-site-icp.png`,
            alt: 'Site Casa do Pai',
            title: 'Site: Igreja Evangélica Casa do Pai (2025)',
            languages: 'Next, TypeScript',
            description: 'Site com o objetivo de acolher visitantes e divulgar informações da igreja, como eventos e conferências.',
            shadow: 'hover:shadow-blue-300',
            linguagens: [
                { url: 'https://skillicons.dev/icons?i=nodejs' },
                { url: 'https://skillicons.dev/icons?i=nextjs' },
                { url: 'https://skillicons.dev/icons?i=typescript' },
            ],
        },
        {
            key: 3,
            pathImage: `${pathConfig.basePath}/project-loan.png`,
            alt: 'Site Projeto Biblioteca',
            title: 'Site: Sistema de Biblioteca',
            languages: 'HTML, PHP, JS, MySQL',
            description: 'Sistema usando o DataTables para servir como uma biblioteca online, com o empréstimo de livros.',
            shadow: 'hover:shadow-white',
            linguagens: [
                { url: 'https://skillicons.dev/icons?i=javascript' },
                { url: 'https://skillicons.dev/icons?i=mysql' },
                { url: 'https://skillicons.dev/icons?i=html' },
                { url: 'https://skillicons.dev/icons?i=css' },
                { url: 'https://skillicons.dev/icons?i=php' },
            ],
        }
    ]
    
    return projects;
}