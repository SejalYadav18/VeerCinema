import { Card } from "@/components/ui/card";
import leadActorImg from "@assets/generated_images/lead_actor_portrait_headshot.png";
import leadActressImg from "@assets/generated_images/lead_actress_portrait_headshot.png";
import supportingActorImg from "@assets/generated_images/supporting_actor_portrait_headshot.png";
import supportingActressImg from "@assets/generated_images/supporting_actress_portrait_headshot.png";
import directorImg from "@assets/generated_images/film_director_portrait_headshot.png";
import cinematographerImg from "@assets/generated_images/cinematographer_portrait_headshot.png";
import scriptWriterImg from "@assets/generated_images/script_writer_portrait_headshot.png";
import musicDirectorImg from "@assets/generated_images/music_director_portrait_headshot.png";

const talents = [
  {
    name: "Arjun Malhotra",
    role: "Lead Actor",
    image: leadActorImg,
    description: "Award-winning actor known for intense performances and versatility",
  },
  {
    name: "Priya Sharma",
    role: "Lead Actress",
    image: leadActressImg,
    description: "Critically acclaimed actress bringing depth and grace to every role",
  },
  {
    name: "Vikram Singh",
    role: "Supporting Actor",
    image: supportingActorImg,
    description: "Veteran performer with decades of cinematic excellence",
  },
  {
    name: "Meera Kapoor",
    role: "Supporting Actress",
    image: supportingActressImg,
    description: "Rising star captivating audiences with powerful performances",
  },
  {
    name: "Rajesh Kumar",
    role: "Director",
    image: directorImg,
    description: "Visionary director crafting compelling narratives",
  },
  {
    name: "Sameer Joshi",
    role: "Cinematographer",
    image: cinematographerImg,
    description: "Master of visual storytelling and cinematic composition",
  },
  {
    name: "Kavya Desai",
    role: "Script Writer",
    image: scriptWriterImg,
    description: "Creative wordsmith weaving stories that touch hearts",
  },
  {
    name: "Aditya Sharma",
    role: "Music Director",
    image: musicDirectorImg,
    description: "Composer creating melodies that define our films",
  },
];

export default function Talent() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-6xl md:text-7xl text-foreground mb-4" data-testid="text-talent-title">
            OUR TALENT
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the exceptional artists and creators who bring our cinematic visions to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {talents.map((talent, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover-elevate active-elevate-2 border-card-border"
              data-testid={`card-talent-${index}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-4 border-accent/0 group-hover:border-accent/60 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {talent.description}
                  </p>
                </div>
              </div>
              <div className="p-6 text-center bg-card">
                <h3 className="font-heading text-2xl text-foreground mb-1">
                  {talent.name}
                </h3>
                <p className="text-accent text-sm font-medium">
                  {talent.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
