import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play } from "lucide-react";
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
    awards: ["Best Action Film 2025", "Best Cinematography"],
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
    awards: ["Best Romance Film", "Audience Choice Award"],
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
    awards: ["Best Thriller", "Best Director"],
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
    awards: ["Best Biopic", "Best Actor", "National Film Award"],
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
    awards: ["Best Mystery Film", "Best Screenplay"],
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
    awards: ["Best Family Film", "Critics Choice"],
    gallery: [btsCandid, btsDance, btsProduction, btsPost],
  },
];

const genres = ["All", "Action/Spy", "Romance", "Crime/Thriller", "Biopic", "Mystery", "Family Drama"];
const years = ["All", "2025"];

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState<typeof films[0] | null>(null);
  const [genreFilter, setGenreFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");

  const filteredFilms = films.filter((film) => {
    const matchesGenre = genreFilter === "All" || film.genre === genreFilter;
    const matchesYear = yearFilter === "All" || film.year === yearFilter;
    return matchesGenre && matchesYear;
  });

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading text-6xl md:text-7xl text-foreground mb-4" data-testid="text-films-title">
            FILM LIBRARY
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of cinematic masterpieces that have captivated audiences worldwide
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-2xl mx-auto mb-12 p-6 bg-card rounded-lg border border-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-heading text-accent mb-3" data-testid="label-films">
                FILMS
              </label>
              <Select value={genreFilter} onValueChange={setGenreFilter}>
                <SelectTrigger className="w-full" data-testid="select-genre">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre} data-testid={`option-genre-${genre.toLowerCase().replace(/\//g, '-')}`}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-lg font-heading text-accent mb-3" data-testid="label-years">
                YEARS
              </label>
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-full" data-testid="select-year">
                  <SelectValue placeholder="Select a year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year} data-testid={`option-year-${year.toLowerCase()}`}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Films Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFilms.map((film) => (
            <Card
              key={film.id}
              className="overflow-hidden cursor-pointer group hover-elevate active-elevate-2 border-card-border"
              onClick={() => setSelectedFilm(film)}
              data-testid={`card-film-${film.id}`}
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={film.poster}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-2xl text-foreground mb-1">{film.title}</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-md border border-primary/30">
                      {film.genre}
                    </span>
                    <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-md border border-accent/30">
                      {film.year}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredFilms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No films found matching your filters</p>
          </div>
        )}
      </div>

      {/* Film Detail Modal */}
      <Dialog open={!!selectedFilm} onOpenChange={() => setSelectedFilm(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-card border-accent/20" data-testid="modal-film-detail">
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
                    className="w-full rounded-md border border-accent/10"
                  />
                  <div className="mt-4 flex flex-wrap items-center gap-3">
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

                  <h3 className="text-xl font-semibold text-foreground mb-4">Cast & Crew</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {selectedFilm.cast.map((actor, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <img
                          src={actor.img}
                          alt={actor.name}
                          className="w-14 h-14 rounded-md object-cover border border-accent/20"
                        />
                        <div>
                          <p className="text-sm font-medium text-foreground">{actor.name}</p>
                          <p className="text-xs text-muted-foreground">{actor.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">Awards & Recognition</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedFilm.awards.map((award, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-md text-sm border border-accent/20"
                      >
                        {award}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground" data-testid="button-watch-trailer">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Trailer
                  </Button>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Behind the Scenes Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedFilm.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Behind the scenes ${index + 1}`}
                      className="w-full aspect-[3/4] object-cover rounded-md border border-accent/10 hover-elevate cursor-pointer"
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
