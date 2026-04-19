import {
  Award,
  CalendarDays,
  Clock,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

type Certification = {
  title: string;
  institution: string;
  hours: string;
  completionDate: string;
  description: string;
  technologies: string[];
  verifyUrl?: string;
  status?: "pending_mec";
  featured?: boolean;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: "Devclub FullStack PRO",
    institution: "Faculdade UnyPublica",
    hours: "140 horas",
    completionDate: "Janeiro de 2026",
    description:
      "Formação completa em desenvolvimento web full stack, com foco em desenvolvimento de aplicações reais com as tecnologias mais demandadas do mercado.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "Git",
    ],
    status: "pending_mec",
    featured: true,
  },
  {
    title: "JavaScript - A Nova Ordem de Dados",
    institution: "Devclub",
    hours: "Módulo V",
    completionDate: "Setembro de 2025",
    description:
      "Aprofundamento em estruturas de dados, manipulação avançada de arrays, objetos, closures e programação assíncrona com JavaScript moderno.",
    technologies: ["JavaScript", "ES6+", "Async/Await", "Arrays", "Objetos"],
    verifyUrl:
      "http://formacoes.devclub.com.br/verify/917a396cf0370227862749d643be3cfbc83128bf",
  },
  {
    title: "Git & GitHub",
    institution: "Devclub",
    hours: "Módulo completo",
    completionDate: "Agosto de 2025",
    description:
      "Controle de versão profissional com Git e colaboração em projetos usando GitHub, incluindo branches, pull requests e fluxo de trabalho em equipe.",
    technologies: ["Git", "GitHub", "Branches", "Pull Requests"],
    verifyUrl:
      "http://formacoes.devclub.com.br/verify/ebaf83b931d1ace9d856fb2451bd5cb175d06c26",
  },
  {
    title: "CSS Intermediário",
    institution: "Devclub",
    hours: "Módulo completo",
    completionDate: "Agosto de 2025",
    description:
      "Estilização avançada com CSS, incluindo Flexbox, Grid Layout, responsividade, animações e técnicas modernas de design web.",
    technologies: ["CSS", "Flexbox", "Grid", "Responsivo", "Animações"],
    verifyUrl:
      "http://formacoes.devclub.com.br/verify/0c05b0a296647a89f385be71202d1ef2e05273aa",
  },
  {
    title: "HTML",
    institution: "Devclub",
    hours: "Módulo completo",
    completionDate: "Agosto de 2025",
    description:
      "Fundamentos de HTML semântico para construção de páginas web acessíveis, incluindo estruturação correta de conteúdo e boas práticas.",
    technologies: ["HTML5", "Semântica", "Acessibilidade", "SEO"],
    verifyUrl:
      "http://formacoes.devclub.com.br/verify/c395afa81ed65d3ecb0764e9d9d1158fdda7230a",
  },
];

export function Certifications() {
  return (
    <section
      id="certificacoes"
      className="relative py-24 border-t border-border/40"
    >
      <div className="container mx-auto max-w-5xl px-6">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <Award className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Formação
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Certificações
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Formação técnica e qualificações que sustentam minha atuação como
            desenvolvedor full stack.
          </p>
        </div>

        {/* Grid de certificações */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <article
              key={cert.title}
              className="group relative rounded-2xl border border-border/40 bg-card/40 p-8 hover:border-primary/50 hover:bg-card/80 transition-all"
            >
              {/* Badge de destaque */}
              {cert.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1">
                  <span className="text-xs font-bold text-primary-foreground tracking-wider uppercase">
                    Destaque
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Ícone */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Award className="h-8 w-8 text-primary" />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.institution}
                    </p>
                  </div>

                  {/* Metadados */}
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {cert.hours}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Concluído em {cert.completionDate}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2">
                    {cert.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/40 bg-background/50 px-2.5 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA ou Status */}
                  <div className="pt-2">
                    {cert.verifyUrl ? (
                      <Link
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verificar certificado de ${cert.title}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20 hover:border-primary transition-all"
                      >
                        Verificar Certificado
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    ) : cert.status === "pending_mec" ? (
                      <div className="inline-flex items-center gap-2 rounded-lg border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-500">
                        <ShieldCheck className="h-4 w-4" />
                        Certificação em validação no MEC
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
