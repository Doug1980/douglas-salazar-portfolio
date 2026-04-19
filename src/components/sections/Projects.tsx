import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiCloudinary,
  SiDocker,
  SiExpress,
  SiFastify,
  SiFirebase,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { GithubIcon } from "@/components/shared/SocialIcons";

type Tech = {
  name: string;
  Icon: IconType;
  color: string;
};

type Project = {
  title: string;
  preview: string;
  subtitle: string[];
  description: string;
  meta: {
    year: string;
    status: string;
    type: string;
    env: string;
  };
  techs: string[];
  demo: string;
  frontend: string;
  backend: string;
};

const TECHS: Record<string, Tech> = {
  React: { name: "React", Icon: SiReact, color: "#61DAFB" },
  "Node.js": { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  PostgreSQL: { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  Stripe: { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
  Cloudinary: { name: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" },
  JWT: { name: "JWT", Icon: SiJsonwebtokens, color: "#D63AFF" },
  Docker: { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  JavaScript: { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#06B6D4",
  },
  Fastify: { name: "Fastify", Icon: SiFastify, color: "#FFFFFF" },
  Prisma: { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  Firebase: { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  Zod: { name: "Zod", Icon: SiZod, color: "#3E67B1" },
};

const PROJECTS: Project[] = [
  {
    title: "DevBurger 2.0",
    preview: "/devburguer-preview.png",
    subtitle: [
      "E-commerce completo com pagamento real via Stripe",
      "Gestão completa de acompanhamento de pedidos",
    ],
    description:
      "Aplicação full-stack com autenticação JWT, upload de imagens via Cloudinary, pagamentos reais com Stripe, painel administrativo com auto-refresh e notificação em tempo real de novos pedidos. Persistência híbrida PostgreSQL + MongoDB Atlas.",
    meta: {
      year: "2026",
      status: "Em produção",
      type: "Full-stack",
      env: "Production",
    },
    techs: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Stripe",
      "Cloudinary",
      "JWT",
      "Docker",
    ],
    demo: "https://devburguer-v2.vercel.app",
    frontend: "https://github.com/Doug1980/dev-burger-frontend",
    backend: "https://github.com/Doug1980/dev-burger-backend",
  },
  {
    title: "DevBills Pro",
    preview: "/devbills-preview.png",
    subtitle: [
      "Controle financeiro pessoal com dashboards interativos",
      "Exportação de relatórios completos em PDF e Excel",
    ],
    description:
      "Aplicação full-stack TypeScript para gestão de finanças pessoais. Backend em Fastify com Prisma + MongoDB, autenticação via Firebase Admin e validação com Zod. Frontend com dashboards interativos e UX moderna.",
    meta: {
      year: "2026",
      status: "Em produção",
      type: "Full-stack",
      env: "Production",
    },
    techs: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "Prisma",
      "MongoDB",
      "Firebase",
      "Zod",
    ],
    demo: "https://devbillspro.vercel.app",
    frontend: "https://github.com/Doug1980/devbills-frontend",
    backend: "https://github.com/Doug1980/devbills-api",
  },
];

export function Projects() {
  return (
    <section
      id="projetos"
      className="relative py-24 px-6 border-t border-border/40"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 space-y-3 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground pt-2 max-w-xl mx-auto">
            Aplicações full-stack construídas do zero e em produção
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-border/40 bg-card/60 overflow-hidden hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/40 bg-background/40">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <Link
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    Front
                  </Link>
                  <Link
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    Back
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
                  >
                    Visitar
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-5 gap-6 p-6">
                <div className="md:col-span-2">
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-background group-hover:border-primary/40 transition-all"
                  >
                    <Image
                      src={project.preview}
                      alt={`Preview ${project.title}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                </div>

                <div className="md:col-span-3 space-y-5">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div>
                      <div className="text-muted-foreground mb-1">Ano</div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                          DS
                        </div>
                        <span className="font-medium">{project.meta.year}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Status</div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-medium">
                          {project.meta.status}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Tipo</div>
                      <div className="font-medium">{project.meta.type}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Ambiente</div>
                      <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
                        {project.meta.env}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-primary text-sm font-semibold space-y-1">
                      {project.subtitle.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((techName) => {
                      const tech = TECHS[techName];
                      if (!tech) return null;
                      const TechIcon = tech.Icon;
                      return (
                        <div
                          key={techName}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-background/60 border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                        >
                          <TechIcon
                            className="h-3.5 w-3.5"
                            style={{ color: tech.color }}
                          />
                          {techName}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
