import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import heroAction from "@assets/generated_images/Action_spy_thriller_hero_banner_fd0db068.png";
import heroRomance from "@assets/generated_images/Romantic_film_hero_banner_2afea242.png";
import heroCrime from "@assets/generated_images/Crime_thriller_hero_banner_8cf4cab3.png";
import heroFamily from "@assets/generated_images/Family_drama_hero_banner_840e5ca5.png";
import posterShadows from "@assets/generated_images/The_Rising_Shadows_poster_d7ecb704.png";
import posterBloom from "@assets/generated_images/Eternal_Bloom_poster_f0413118.png";
import posterWolves from "@assets/generated_images/City_of_Wolves_poster_3810bbbf.png";
import posterVeer from "@assets/generated_images/Veer_Legend_Within_poster_c8d4b7b8.png";
import posterHunt from "@assets/generated_images/The_Crimson_Hunt_poster_18a2fa67.png";
import posterSky from "@assets/generated_images/Saffron_Sky_poster_a00da230.png";
import btsProduction from "@assets/generated_images/Behind_scenes_production_c6e208ce.png";
import btsCandid from "@assets/generated_images/Filming_candid_moment_ef773bec.png";
import btsDance from "@assets/generated_images/Dance_filming_BTS_afbd7d8d.png";
import btsPost from "@assets/generated_images/Post_production_scene_3f8c2b66.png";
import leadActorImg from "@assets/generated_images/Lead_actor_portrait_90a633b0.png";
import leadActressImg from "@assets/generated_images/Lead_actress_portrait_85f74da0.png";
import supportingActorImg from "@assets/generated_images/Supporting_actor_portrait_005d4f23.png";
import supportingActressImg from "@assets/generated_images/Supporting_actress_portrait_58b15dcf.png";

const heroImages = [
  { src: heroAction, title: "Where Stories Turn Into Legend", subtitle: "Cinematic Excellence Since 2025" },
  { src: heroRomance, title: "Crafting Emotions That Last Forever", subtitle: "Love. Drama. Legacy." },
  { src: heroCrime, title: "Unveiling Stories That Captivate", subtitle: "Mystery. Suspense. Brilliance." },
  { src: heroFamily, title: "Celebrating Life's Beautiful Moments", subtitle: "Heart. Heritage. Home." },
];

const films = [
  {
    id: 1,
    title: "The Rising Shadows",
    genre: "Action/Spy",
    year: "2025",
    poster: posterShadows,
    synopsis: "A master spy must navigate the treacherous world of international espionage when a shadowy organization threatens global security. With time running out, he must use all his skills to uncover the truth and save millions.",
    cast: [
      { name: "Arjun Malhotra", role: "Lead Spy", img: leadActorImg },
      { name: "Priya Sharma", role: "Intelligence Officer", img: leadActressImg },
      { name: "Vikram Singh", role: "Mentor", img: supportingActorImg },
      { name: "Meera Kapoor", role: "Tech Expert", img: supportingActressImg },
    ],
    gallery: [btsProduction, btsCandid, btsDance, btsPost],
  },
  {
    id: 2,
    title: "Eternal Bloom",
    genre: "Romance",
    year: "2025",
    poster: posterBloom,
    synopsis: "Two souls from different worlds find love amidst the chaos of modern life. As they navigate family expectations and personal dreams, they discover that true love transcends all boundaries.",
    cast: [
      { name: "Rahul Khanna", role: "Romantic Lead", img: leadActorImg },
      { name: "Aisha Patel", role: "Love Interest", img: leadActressImg },
      { name: "Rajesh Kumar", role: "Father Figure", img: supportingActorImg },
      { name: "Simran Kaur", role: "Best Friend", img: supportingActressImg },
    ],
    gallery: [btsCandid, btsProduction, btsDance, btsPost],
  },
  {
    id: 3,
    title: "City of Wolves",
    genre: "Crime/Thriller",
    year: "2025",
    poster: posterWolves,
    synopsis: "In the dark underbelly of the city, a determined detective hunts a ruthless criminal mastermind. As the chase intensifies, the line between hunter and hunted begins to blur.",
    cast: [
      { name: "Kabir Rao", role: "Detective", img: leadActorImg },
      { name: "Nisha Verma", role: "Criminal Psychologist", img: leadActressImg },
      { name: "Suresh Reddy", role: "Crime Lord", img: supportingActorImg },
      { name: "Kavya Desai", role: "Journalist", img: supportingActressImg },
    ],
    gallery: [btsDance, btsProduction, btsCandid, btsPost],
  },
  {
    id: 4,
    title: "Veer: The Legend Within",
    genre: "Biopic",
    year: "2025",
    poster: posterVeer,
    synopsis: "The inspiring true story of a legendary warrior who rose from humble beginnings to become a symbol of courage and honor. His journey changed the course of history.",
    cast: [
      { name: "Veer Pratap", role: "Legendary Warrior", img: leadActorImg },
      { name: "Ananya Iyer", role: "Queen", img: leadActressImg },
      { name: "Ranjit Singh", role: "Mentor", img: supportingActorImg },
      { name: "Lakshmi Nair", role: "Mother", img: supportingActressImg },
    ],
    gallery: [btsPost, btsProduction, btsCandid, btsDance],
  },
  {
    id: 5,
    title: "The Crimson Hunt",
    genre: "Mystery",
    year: "2025",
    poster: posterHunt,
    synopsis: "When a series of mysterious disappearances rocks a peaceful town, a brilliant investigator must solve the puzzle before it's too late. Every clue leads deeper into darkness.",
    cast: [
      { name: "Sameer Joshi", role: "Investigator", img: leadActorImg },
      { name: "Diya Menon", role: "Witness", img: leadActressImg },
      { name: "Amit Bose", role: "Inspector", img: supportingActorImg },
      { name: "Rina Das", role: "Forensic Expert", img: supportingActressImg },
    ],
    gallery: [btsProduction, btsPost, btsCandid, btsDance],
  },
  {
    id: 6,
    title: "Saffron Sky",
    genre: "Family Drama",
    year: "2025",
    poster: posterSky,
    synopsis: "A multi-generational family saga exploring love, sacrifice, and tradition. As old wounds resurface, the family must come together to preserve their legacy and find healing.",
    cast: [
      { name: "Aditya Sharma", role: "Eldest Son", img: leadActorImg },
      { name: "Pooja Gupta", role: "Daughter-in-law", img: leadActressImg },
      { name: "Mohan Pillai", role: "Patriarch", img: supportingActorImg },
      { name: "Kamala Devi", role: "Matriarch", img: supportingActressImg },
    ],
    gallery: [btsCandid, btsDance, btsProduction, btsPost],
  },
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [selectedFilm, setSelectedFilm] = useState<typeof films[0] | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextHero = () => setCurrentHero((prev) => (prev + 1) % heroImages.length);
  const prevHero = () => setCurrentHero((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const scrollFilms = (direction: "left" | "right") => {
    const container = document.getElementById("films-slider");
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden" data-testid="section-hero">
        <div 
          className="absolute inset-0 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
        >
          {heroImages.map((hero, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHero ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={hero.src}
                alt={hero.title}
                className="w-full h-full object-cover filter blur-sm brightness-110 contrast-105 saturate-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-red-900/30 to-transparent" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-primary mb-4 tracking-wider" data-testid="text-hero-title">
            VEER CINEMA WORLD
          </h1>
          <p className="text-xl md:text-3xl text-foreground/90 mb-3 font-light">
            {heroImages[currentHero].title}
          </p>
          <p className="text-lg md:text-xl text-accent mb-12 font-medium">
            {heroImages[currentHero].subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/films">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-semibold"
                data-testid="button-explore-films"
              >
                Explore Films
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent/50 text-foreground backdrop-blur-sm bg-background/20 px-8 py-6 text-lg"
                data-testid="button-about-us"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>

        <button
          onClick={prevHero}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-md bg-background/20 backdrop-blur-sm border border-accent/30 text-foreground hover-elevate active-elevate-2"
          data-testid="button-hero-prev"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextHero}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-md bg-background/20 backdrop-blur-sm border border-accent/30 text-foreground hover-elevate active-elevate-2"
          data-testid="button-hero-next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`h-2 rounded-md transition-all ${
                index === currentHero ? "w-12 bg-accent" : "w-2 bg-foreground/30"
              }`}
              data-testid={`button-hero-indicator-${index}`}
            />
          ))}
        </div>
      </section>

      {/* Latest Films Slider */}
      <section className="py-20 px-6 bg-card" data-testid="section-latest-films">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-4" data-testid="text-latest-films-title">
              LATEST FILMS
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="relative">
            <button
              onClick={() => scrollFilms("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-md bg-card border border-accent/30 text-foreground hover-elevate active-elevate-2"
              data-testid="button-films-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              id="films-slider"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {films.map((film) => (
                <Card
                  key={film.id}
                  className="flex-shrink-0 w-64 overflow-hidden cursor-pointer group hover-elevate active-elevate-2 border-card-border"
                  onClick={() => setSelectedFilm(film)}
                  data-testid={`card-film-${film.id}`}
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <img
                      src={film.poster}
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <h3 className="font-heading text-2xl text-foreground mb-1">{film.title}</h3>
                        <p className="text-accent text-sm font-medium">{film.genre}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <button
              onClick={() => scrollFilms("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-md bg-card border border-accent/30 text-foreground hover-elevate active-elevate-2"
              data-testid="button-films-next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mt-12">
            <Link href="/films">
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent/50 text-foreground"
                data-testid="button-view-all-films"
              >
                View All Films
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Film Detail Modal */}
      <Dialog open={!!selectedFilm} onOpenChange={() => setSelectedFilm(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-accent/20" data-testid="modal-film-detail">
          {selectedFilm && (
            <div>
              <DialogHeader>
                <DialogTitle className="font-heading text-4xl text-foreground" data-testid="text-modal-title">
                  {selectedFilm.title}
                </DialogTitle>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <img
                    src={selectedFilm.poster}
                    alt={selectedFilm.title}
                    className="w-full rounded-md"
                  />
                  <div className="mt-4 flex items-center gap-4">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-md text-sm font-medium border border-primary/20">
                      {selectedFilm.genre}
                    </span>
                    <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-md text-sm font-medium border border-accent/20">
                      {selectedFilm.year}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Synopsis</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedFilm.synopsis}
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Cast</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {selectedFilm.cast.map((actor, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <img
                          src={actor.img}
                          alt={actor.name}
                          className="w-12 h-12 rounded-md object-cover border border-accent/20"
                        />
                        <div>
                          <p className="text-sm font-medium text-foreground">{actor.name}</p>
                          <p className="text-xs text-muted-foreground">{actor.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground" data-testid="button-watch-trailer">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Trailer
                  </Button>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Behind the Scenes</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedFilm.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Behind the scenes ${index + 1}`}
                      className="w-full aspect-[3/4] object-cover rounded-md border border-accent/10"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
