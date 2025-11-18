import { Link } from "wouter";
import { SiInstagram, SiYoutube, SiFacebook, SiImdb } from "react-icons/si";

const footerLinks = [
  { name: "Films", path: "/films", id: "films" },
  { name: "About", path: "/about", id: "about" },
  { name: "Services", path: "/services", id: "services" },
  { name: "Talent", path: "/talent", id: "talent" },
  { name: "Careers", path: "/contact", id: "careers" },
  { name: "Contact", path: "/contact", id: "contact" },
];

const socialLinks = [
  { icon: SiInstagram, label: "Instagram", url: "#" },
  { icon: SiYoutube, label: "YouTube", url: "#" },
  { icon: SiFacebook, label: "Facebook", url: "#" },
  { icon: SiImdb, label: "IMDb", url: "#" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h2 className="font-heading text-3xl text-foreground mb-3">
              VEER CINEMA WORLD
            </h2>
            <p className="text-accent text-sm font-medium mb-4 tracking-wider">
              Cinema. Courage. Creativity.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating cinematic masterpieces that inspire, entertain, and celebrate the art of storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-foreground mb-4">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  <button
                    className="text-sm text-muted-foreground hover:text-accent transition-colors text-left"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-xl text-foreground mb-4">
              CONNECT WITH US
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover-elevate active-elevate-2 transition-colors"
                    aria-label={social.label}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">
                <a
                  href="mailto:contact@veercinemaworld.com"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-email"
                >
                  contact@veercinemaworld.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground" data-testid="text-footer-phone">
                +91 (022) 1234-5678
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2025 VEER Cinema World. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button 
                className="hover:text-accent transition-colors"
                data-testid="button-privacy-policy"
              >
                Privacy Policy
              </button>
              <button 
                className="hover:text-accent transition-colors"
                data-testid="button-terms-of-service"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
