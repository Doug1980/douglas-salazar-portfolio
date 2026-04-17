"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/shared/SocialIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Coluna esquerda — Texto */}
        <div className="flex flex-col gap-6">
          {/* Badge de disponibilidade */}
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-medium text-primary">
              Disponível para novas oportunidades
            </span>
          </div>

          {/* Título principal */}
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">Olá, eu sou</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Douglas
             
              <span className="text-primary"> Salazar</span>
            </h1>
          </div>

          {/* Subtítulo */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
            Full Stack Developer
          </h2>

          {/* Descrição */}
          <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
            Construo aplicações web completas com{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Node.js</span> e{" "}
            <span className="text-foreground font-medium">TypeScript</span>.
            Mais de 16 anos em tecnologia, agora transformando experiência em
            código.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="#projetos">Ver Projetos</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contato">Entrar em Contato</Link>
            </Button>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center gap-4 pt-4">
            <Link
              href="https://github.com/Doug1980"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/douglassalazar80"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:douglassalazar1980@gmail.com"
              aria-label="E-mail"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MailIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Coluna direita — Card de código */}
        <div className="hidden lg:block">
          <div className="relative rounded-xl border border-primary/20 bg-card shadow-2xl overflow-hidden">
            {/* Barra superior do "terminal" */}
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

            {/* Conteúdo do código */}
            <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                <span className="text-foreground">=</span>{" "}
                <span className="text-foreground">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-cyan-300">name</span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-primary">{'"Douglas Salazar"'}</span>
                <span className="text-foreground">,</span>
                {"\n"}
                {"  "}
                <span className="text-cyan-300">role</span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-primary">{'"Full Stack Developer"'}</span>
                <span className="text-foreground">,</span>
                {"\n"}
                {"  "}
                <span className="text-cyan-300">stack</span>
                <span className="text-foreground">: [</span>
                <span className="text-primary">{'"React"'}</span>
                <span className="text-foreground">, </span>
                <span className="text-primary">{'"Node.js"'}</span>
                <span className="text-foreground">, </span>
                <span className="text-primary">{'"TypeScript"'}</span>
                <span className="text-foreground">],</span>
                {"\n"}
                {"  "}
                <span className="text-cyan-300">location</span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-primary">{'"São Paulo, BR"'}</span>
                <span className="text-foreground">,</span>
                {"\n"}
                {"  "}
                <span className="text-cyan-300">available</span>
                <span className="text-foreground">:</span>{" "}
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

      {/* Seta de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
}