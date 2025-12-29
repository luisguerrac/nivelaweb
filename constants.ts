
export const APP_URL = "https://nivel1git-07676624-d1f7b.web.app/";

export interface NavLink {
  name: string;
  href: string;
}

// Menu options kept minimal as per previous structure, but can be expanded if needed.
export const NAV_LINKS: NavLink[] = [
  { name: "Características", href: "#features" },
  { name: "Cómo Funciona", href: "#use-cases" },
  { name: "Testimonios", href: "#testimonials" }
];
