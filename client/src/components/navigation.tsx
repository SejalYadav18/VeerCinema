import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Films", path: "/films" },
  { name: "About", path: "/about" },
  { name: "Talent", path: "/talent" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
        data-testid="nav-header"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <div className="cursor-pointer" data-testid="link-logo">
                <h1 className="font-heading text-2xl md:text-3xl text-foreground tracking-wider">
                  VEER
                </h1>
                <p className="text-xs text-accent font-medium tracking-widest">
                  CINEMA WORLD
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <button
                    className={`text-sm font-medium transition-colors relative group ${
                      location === link.path
                        ? "text-accent"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    data-testid={`link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all ${
                        location === link.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md lg:hidden"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <button
                  className={`font-heading text-3xl transition-colors ${
                    location === link.path
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
}
