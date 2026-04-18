import { GraduationCap, Mail, MapPin } from "lucide-react";

const STATS = [
  { value: "16+", label: "Anos em tecnologia" },
  { value: "2", label: "Projetos em produção" },
  { value: "3", label: "Idiomas no portfólio" },
];

const EMAIL = "douglassalazar1980@gmail.com";

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 px-6 border-t border-border/40"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Sobre <span className="text-primary">mim</span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna esquerda — Texto */}
          <div className="text-xl space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Sou <span className="text-foreground font-medium">Douglas</span>,
              desenvolvedor Full Stack com uma jornada de{" "}
              <span className="text-primary font-medium">
                mais de 16 anos no mercado de tecnologia
              </span>
              . Comecei no suporte técnico e evoluí passando por análise de
              telecomunicações, gestão de produtos digitais e liderança de
              equipes técnicas.
            </p>
            <p>
              Hoje uso toda essa bagagem para construir aplicações web completas
              com <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">Node.js</span> e{" "}
              <span className="text-foreground font-medium">TypeScript</span> —
              unindo minha experiência de TI com desenvolvimento moderno.
            </p>
            <p>
              O que me move é{" "}
              <span className="text-foreground">resolver problemas</span>,{" "}
              <span className="text-foreground">
                construir soluções e seguir desenvolvendo projetos reais
              </span>{" "}
              para empresas e evoluir constantemente.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border/40 bg-card/40 p-4 text-center"
                >
                  <div className="font-serif text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>ASD — Estácio</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>{EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Coluna direita — Card de código */}
          <div className="hidden lg:block">
            <div className="relative rounded-xl border border-primary/20 bg-card shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-background/40">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground font-mono">
                  ~/douglas-salazar
                </span>
              </div>
              <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-foreground">= {"{"}</span>
                  {"\n  "}
                  <span className="text-cyan-300">name</span>
                  <span className="text-foreground">: </span>
                  <span className="text-primary">{'"Douglas Salazar"'}</span>
                  <span className="text-foreground">,</span>
                  {"\n  "}
                  <span className="text-cyan-300">role</span>
                  <span className="text-foreground">: </span>
                  <span className="text-primary">
                    {'"Full Stack Developer"'}
                  </span>
                  <span className="text-foreground">,</span>
                  {"\n  "}
                  <span className="text-cyan-300">stack</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-primary">{'"React"'}</span>
                  <span className="text-foreground">, </span>
                  <span className="text-primary">{'"Node.js"'}</span>
                  <span className="text-foreground">, </span>
                  <span className="text-primary">{'"TypeScript"'}</span>
                  <span className="text-foreground">],</span>
                  {"\n  "}
                  <span className="text-cyan-300">location</span>
                  <span className="text-foreground">: </span>
                  <span className="text-primary">{'"São Paulo, BR"'}</span>
                  <span className="text-foreground">,</span>
                  {"\n  "}
                  <span className="text-cyan-300">available</span>
                  <span className="text-foreground">: </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-foreground">,</span>
                  {"\n"}
                  <span className="text-foreground">{"}"}</span>
                  <span className="animate-pulse">|</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
