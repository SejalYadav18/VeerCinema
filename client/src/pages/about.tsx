import filmSetBg from "@assets/generated_images/Film_set_background_dff6f877.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <section 
        className="relative py-32 px-6"
        style={{
          backgroundImage: `url(${filmSetBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(1.3) contrast(1.2) saturate(1.3)',
        }}
        data-testid="section-about-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-red-900/20 to-black/50" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="border-t-2 border-b-2 border-yellow-400 py-8 mb-8">
            <h1 className="font-heading text-6xl md:text-7xl text-white drop-shadow-2xl" data-testid="text-about-title">
              VEER CINEMA WORLD
            </h1>
          </div>
          
          <div className="space-y-6 text-lg text-white/95 leading-relaxed">
            <p className="text-xl md:text-2xl font-light text-yellow-300 drop-shadow-lg">
              Cinema. Courage. Creativity.
            </p>
            
            <p className="drop-shadow-lg">
              VEER Cinema World is a modern Indian production house creating films, web series, music videos, and digital cinema. Inspired by the legacy of Bollywood, VEER combines storytelling, innovation, and cinematic passion.
            </p>
            
            <p className="drop-shadow-lg">
              Founded with a vision to revolutionize Indian cinema, we believe in the power of stories to inspire, entertain, and transform. Our team of dedicated filmmakers, writers, and artists work tirelessly to bring compelling narratives to life.
            </p>
            
            <p className="drop-shadow-lg">
              From heart-warming family dramas to edge-of-your-seat thrillers, from grand historical epics to intimate character studies – we craft films that resonate across generations and cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left" data-testid="section-mission">
              <div className="inline-block mb-4">
                <h2 className="font-heading text-4xl md:text-5xl text-foreground border-b-4 border-accent pb-2">
                  OUR MISSION
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To create world-class cinematic experiences that celebrate Indian culture, values, and storytelling traditions while pushing the boundaries of creative excellence. We are committed to discovering new talent, nurturing artistic vision, and producing content that stands the test of time.
              </p>
            </div>

            <div className="text-center md:text-left" data-testid="section-vision">
              <div className="inline-block mb-4">
                <h2 className="font-heading text-4xl md:text-5xl text-foreground border-b-4 border-primary pb-2">
                  OUR VISION
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be recognized as a leading production house that bridges tradition and innovation, bringing Indian stories to global audiences. We envision a future where our films inspire millions, our artists flourish, and our legacy continues to shape the future of cinema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-4" data-testid="text-values-title">
              OUR VALUES
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We pursue perfection in every frame, every performance, every story. Our commitment to quality is unwavering.",
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and fresh perspectives while honoring the timeless art of storytelling.",
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and respect for our craft, our collaborators, and our audience.",
              },
              {
                title: "Passion",
                description: "Cinema is not just our profession – it's our calling. We pour our hearts into every project.",
              },
              {
                title: "Diversity",
                description: "We celebrate diverse voices, stories, and perspectives, creating a cinema that reflects our vibrant nation.",
              },
              {
                title: "Legacy",
                description: "We create films that transcend time, building a body of work that will inspire future generations.",
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="p-6 rounded-md border border-accent/20 bg-card hover-elevate"
                data-testid={`card-value-${index}`}
              >
                <h3 className="font-heading text-2xl text-accent mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "6+", label: "Films Produced" },
              { number: "25+", label: "Awards Won" },
              { number: "50M+", label: "Box Office" },
              { number: "100+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} data-testid={`stat-${index}`}>
                <div className="font-heading text-5xl md:text-6xl text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
