"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/shared/SocialIcons";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Coluna esquerda — Foto */}
        <div className="hidden lg:flex justify-center items-center order-2 lg:order-1">
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden border-4 border-primary/50 bg-card shadow-2xl ring-4 ring-primary/10 ring-offset-4 ring-offset-background">
            <Image
              src="/douglas.jpg"
              alt="Douglas Salazar"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/40 rounded-2xl pointer-events-none" />
          </div>
        </div>

        {/* Coluna direita — Texto */}
        <div className="flex flex-col gap-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-primary/50 bg-primary/10 shadow-lg shadow-primary/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-sm font-semibold text-primary tracking-wide">
              Disponível para novas oportunidades
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-xl text-muted-foreground">Olá, eu sou</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Douglas <span className="text-primary">Salazar</span>
            </h1>
          </div>

          <h2 className="text-xl md:text-3xl text-muted-foreground font-light">
            Full Stack Developer
          </h2>

          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Construo aplicações web completas com{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Node.js</span> e{" "}
            <span className="text-foreground font-medium">TypeScript</span>.
            Mais de 16 anos em tecnologia, agora transformando experiência em
            código.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="#projetos">Ver Projetos</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contato">Entrar em Contato</Link>
            </Button>
          </div>

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
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
}
