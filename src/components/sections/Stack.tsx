import { Code2, Database, Wrench } from "lucide-react";
import {
  SiCloudinary,
  SiDocker,
  SiExpress,
  SiGit,
  SiInsomnia,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactquery,
  SiRender,
  SiSequelize,
  SiStripe,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiYamahamotorcorporation,
} from "react-icons/si";

const STACK_GROUPS = [
  {
    icon: Code2,
    title: "Frontend",
    techs: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Styled", Icon: SiStyledcomponents, color: "#DB7093" },
      { name: "React Query", Icon: SiReactquery, color: "#FF4154" },
      { name: "Material UI", Icon: SiMui, color: "#007FFF" },
    ],
  },
  {
    icon: Wrench,
    title: "Backend",
    techs: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", Icon: SiPostman, color: "#FF6C37" },
      { name: "JWT", Icon: SiJsonwebtokens, color: "#D63AFF" },
      { name: "Yup", Icon: SiYamahamotorcorporation, color: "#11B5E4" },
      { name: "Multer", Icon: SiNpm, color: "#CB3837" },
      { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
      { name: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" },
      { name: "Insomnia", Icon: SiInsomnia, color: "#4000BF" },
    ],
  },
  {
    icon: Database,
    title: "Banco & DevOps",
    techs: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Sequelize", Icon: SiSequelize, color: "#52B0E7" },
      { name: "Mongoose", Icon: SiMongoose, color: "#880000" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
      { name: "Render", Icon: SiRender, color: "#46E3B7" },
    ],
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="relative py-24 px-6 border-t border-border/40 bg-card/20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 space-y-3 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Stack <span className="text-primary">Técnica</span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground pt-2 max-w-xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções modernas e
            escaláveis
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {STACK_GROUPS.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.title}
                className="rounded-xl border border-border/40 bg-card/40 p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/40">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                    <GroupIcon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {group.techs.map((tech) => {
                    const TechIcon = tech.Icon;
                    return (
                      <div
                        key={tech.name}
                        className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-border/40 bg-gradient-to-br from-background via-card/60 to-background/80 p-3 hover:border-primary/50 hover:from-primary/5 hover:via-card hover:to-primary/5 hover:scale-105 transition-all shadow-md"
                      >
                        <TechIcon
                          className="h-7 w-7 transition-transform group-hover:scale-110"
                          style={{ color: tech.color }}
                        />
                        <span className="text-[10px] text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground italic mt-12">
          Sempre aprendendo. Próximos passos: Fastify, testes automatizados,
          TypeScript avançado.
        </p>
      </div>
    </section>
  );
}
