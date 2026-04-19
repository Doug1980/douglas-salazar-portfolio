import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from "@/components/shared/SocialIcons";

const EMAIL = "douglassalazar1980@gmail.com";
const PHONE_DISPLAY = "(11) 98506-2356";
const EMAIL_HREF = "mailto:douglassalazar1980@gmail.com";
const WHATSAPP_HREF = "https://wa.me/5511985062356";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
];

const SOCIAL_LINKS = [
  {
    Icon: GithubIcon,
    href: "https://github.com/Doug1980",
    label: "GitHub",
    external: true,
  },
  {
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/douglas-salazar80/",
    label: "LinkedIn",
    external: true,
  },
  {
    Icon: WhatsappIcon,
    href: WHATSAPP_HREF,
    label: "WhatsApp",
    external: true,
  },
  {
    Icon: MailIcon,
    href: EMAIL_HREF,
    label: "E-mail",
    external: false,
  },
];

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-border/40">
      {/* SEÇÃO 1: CTA "Vamos conversar?" */}
      <div className="container mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Vamos <span className="text-primary">conversar?</span>
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full mx-auto mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Aberto a oportunidades full stack, colaborações e novos projetos
          desafiadores. Por favor, entre em contato nos canais abaixo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.Icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                aria-label={`Acessar ${social.label} de Douglas Salazar`}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border/40 bg-card/40 p-6 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-semibold">{social.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* SEÇÃO 2: 3 Colunas (DS Logo / Contato / Navegação) */}
      <div className="border-t border-border/40">
        <div className="container mx-auto max-w-5xl px-6 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/5">
                  <span className="font-bold text-xs">
                    <span className="text-foreground">D</span>
                    <span className="text-primary">S</span>
                  </span>
                </div>
                <span className="font-bold">Douglas Salazar</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full Stack Developer em São Paulo, Brasil. Transformando
                experiência em código.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Contato
              </h3>
              <div className="space-y-2 text-sm">
                <Link
                  href={EMAIL_HREF}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MailIcon className="h-3.5 w-3.5" />
                  <span>{EMAIL}</span>
                </Link>
                <Link
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{PHONE_DISPLAY}</span>
                </Link>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>São Paulo, SP — Brasil</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Navegação
              </h3>
              <ul className="space-y-2 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO 3: Faixa final do copyright — largura total com bg-background */}
      <div className="bg-background border-t border-border/40">
        <div className="container mx-auto max-w-5xl px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Douglas Salazar. Todos os direitos
              reservados.
            </p>
            <p className="italic">Construído com Next.js e TypeScript.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
