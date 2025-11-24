import { Card } from "@/components/ui/card";
import founderImg from "@assets/generated_images/founder_producer_ceo_headshot.png";
import productionHeadImg from "@assets/generated_images/head_production_producer_headshot.png";
import castingDirectorImg from "@assets/generated_images/casting_director_portrait_headshot.png";
import scriptLeadImg from "@assets/generated_images/script_writer_portrait_headshot.png";
import cinematographerImg from "@assets/generated_images/cinematographer_portrait_headshot.png";
import vfxSupervisorImg from "@assets/generated_images/vfx_supervisor_portrait_headshot.png";
import musicDirectorImg from "@assets/generated_images/music_director_portrait_headshot.png";

const founder = {
  name: "Veer Pratap Singh",
  title: "Founder, Producer & Creative Director",
  image: founderImg,
  bio: "Visionary leader with a passion for storytelling and cinematic excellence. Veer founded VEER Cinema World with a mission to create films that inspire and entertain audiences worldwide.",
};

const teamMembers = [
  {
    name: "Rajesh Kumar",
    title: "Head of Production",
    image: productionHeadImg,
  },
  {
    name: "Simran Kaur",
    title: "Casting Director",
    image: castingDirectorImg,
  },
  {
    name: "Amit Bose",
    title: "Script Lead",
    image: scriptLeadImg,
  },
  {
    name: "Sameer Joshi",
    title: "Cinematographer",
    image: cinematographerImg,
  },
  {
    name: "Nisha Verma",
    title: "VFX Supervisor",
    image: vfxSupervisorImg,
  },
  {
    name: "Aditya Sharma",
    title: "Music Director",
    image: musicDirectorImg,
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-6xl md:text-7xl text-foreground mb-4" data-testid="text-team-title">
            MEET OUR TEAM
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The creative minds and passionate professionals behind VEER Cinema World's success
          </p>
        </div>

        {/* Founder Section */}
        <div className="max-w-4xl mx-auto mb-20" data-testid="section-founder">
          <Card className="overflow-hidden border-2 border-accent/30">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-md border-4 border-accent/40">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-2">
                  {founder.name}
                </h2>
                <p className="text-accent text-lg font-medium mb-6">
                  {founder.title}
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {founder.bio}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Team Grid */}
        <div>
          <h2 className="font-heading text-4xl text-center text-foreground mb-12">
            CORE TEAM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover-elevate active-elevate-2 border-card-border"
                data-testid={`card-team-${index}`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 border-4 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
                </div>
                <div className="p-6 text-center bg-card">
                  <h3 className="font-heading text-2xl text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium">
                    {member.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center p-12 rounded-md border-2 border-primary/30 bg-card">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for cinema. If you're ready to be part of something extraordinary, we'd love to hear from you.
          </p>
          <a href="/contact" data-testid="link-careers-cta">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold text-lg hover-elevate active-elevate-2" data-testid="button-careers-cta">
              View Career Opportunities
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
