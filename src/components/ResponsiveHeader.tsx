import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Agentes", href: "/#agentes" },
  { label: "Modos", href: "/#modos" },
  { label: "Recompensas", href: "/#recompensas" },
  { label: "FAQ", href: "/#faq" },
];

export default function ResponsiveHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="/#inicio"
          onClick={closeMenu}
          className="text-xl font-black tracking-widest"
        >
          VOID{" "}
          <span className="text-green-400">
            ASCENDANT
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-zinc-400 transition hover:text-green-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/#preregistro"
            className="rounded-md bg-green-400 px-5 py-2 text-sm font-bold text-black transition hover:bg-green-300"
          >
            PRERREGISTRO
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-2xl transition hover:border-green-400 hover:text-green-400 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-green-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/#preregistro"
            onClick={closeMenu}
            className="mt-5 block rounded-lg bg-green-400 px-5 py-3 text-center font-black text-black transition hover:bg-green-300"
          >
            PRERREGISTRO
          </a>
        </div>
      )}
    </header>
  );
}