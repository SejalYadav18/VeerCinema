import { Card } from "@/components/ui/card";
import { Film, BookOpen, Users, Video, Music, Wand2, Tv, Clapperboard } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Film Production",
    description: "Full-scale feature film production from concept to completion, with world-class production values and cinematic excellence.",
  },
  {
    icon: BookOpen,
    title: "Script Development",
    description: "Professional screenplay writing and story development services, transforming ideas into compelling narratives.",
  },
  {
    icon: Users,
    title: "Casting Services",
    description: "Comprehensive casting solutions to find the perfect talent for your project, from leads to supporting roles.",
  },
  {
    icon: Clapperboard,
    title: "Direction",
    description: "Expert directorial services bringing creative vision to life with precision and artistic flair.",
  },
  {
    icon: Video,
    title: "Post-Production",
    description: "State-of-the-art editing, color grading, and sound design to create polished cinematic masterpieces.",
  },
  {
    icon: Music,
    title: "Music Production",
    description: "Original score composition and soundtrack production that elevates your film's emotional impact.",
  },
  {
    icon: Wand2,
    title: "VFX & CGI",
    description: "Cutting-edge visual effects and computer-generated imagery to bring impossible worlds to reality.",
  },
  {
    icon: Tv,
    title: "Web Series Production",
    description: "Complete web series development and production for digital platforms, from pilot to season finale.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-6xl md:text-7xl text-foreground mb-4" data-testid="text-services-title">
            OUR SERVICES
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive production services to bring your cinematic vision to life with excellence and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover-elevate active-elevate-2 border-card-border group"
                data-testid={`card-service-${index}`}
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-md bg-primary/10 border-2 border-primary/20 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center p-12 rounded-md border-2 border-accent/30 bg-card">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to the big screen. Our team is ready to make your cinematic dreams a reality.
          </p>
          <a href="/contact" data-testid="link-contact-cta">
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold text-lg hover-elevate active-elevate-2" data-testid="button-contact-cta">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
