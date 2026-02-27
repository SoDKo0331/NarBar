import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Heart, Music, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Music size={32} />,
      title: "Music First",
      description: "We curate the finest musical experiences with world-class artists and cutting-edge sound systems.",
    },
    {
      icon: <Users size={32} />,
      title: "Community",
      description: "Building a diverse, inclusive community of music lovers and nightlife enthusiasts.",
    },
    {
      icon: <Heart size={32} />,
      title: "Passion",
      description: "Every detail is crafted with care, from our signature cocktails to the atmosphere we create.",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "Recognized as one of the city's premier nightlife destinations for five years running.",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl tracking-wider uppercase mb-6">
            About narbar
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            More than a nightclub – a cultural institution where music, art, and community converge
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-96 md:h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1643981693404-d76e58594bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuaWdodGNsdWIlMjBpbnRlcmlvciUyMGRhcmt8ZW58MXx8fHwxNzcyMTkyMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="narbar interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl tracking-wide uppercase mb-6">Our Story</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Founded in 2021, narbar emerged from a simple vision: to create a space where music transcends boundaries and brings people together. What started as an intimate underground venue has evolved into one of the city's most celebrated nightlife destinations.
              </p>
              <p>
                Our 10,000 square foot venue features state-of-the-art sound and lighting systems, multiple bars, VIP lounges, and an open-air rooftop terrace. But what truly sets us apart is our commitment to curating unforgettable experiences.
              </p>
              <p>
                From emerging local talent to internationally renowned DJs, we've hosted hundreds of events that have become legendary nights. Our award-winning mixology program and carefully crafted atmosphere make every visit to narbar a journey into the extraordinary.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-4xl tracking-wide uppercase mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-center mb-4 text-white/80">
                  {value.icon}
                </div>
                <h3 className="text-xl uppercase tracking-wide mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-4xl tracking-wide uppercase mb-12 text-center">
            The Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-72 group overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764510383709-14be6ec28548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHBlcmZvcm1pbmclMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzcyMTkyMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Live performances"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl uppercase tracking-wide mb-2">
                    Live Performances
                  </h3>
                  <p className="text-white/70 text-sm">
                    World-class artists every weekend
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-72 group overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695606392688-3e3a9b70498c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cHNjYWxlJTIwYmFyJTIwY29ja3RhaWxzJTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzIxOTIxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Craft cocktails"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl uppercase tracking-wide mb-2">
                    Craft Cocktails
                  </h3>
                  <p className="text-white/70 text-sm">
                    Award-winning mixology program
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-72 group overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760598742492-7ad941e658e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjB2aXAlMjBsb3VuZ2UlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMTkyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="VIP experience"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl uppercase tracking-wide mb-2">
                    VIP Experience
                  </h3>
                  <p className="text-white/70 text-sm">
                    Exclusive lounges and bottle service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-white text-black py-16 px-8 text-center">
          <h2 className="text-3xl tracking-wide uppercase mb-8">
            Recognition & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="uppercase tracking-wide mb-2">Best Nightclub</h3>
              <p className="text-black/60 text-sm">City Awards 2024-2025</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🍸</div>
              <h3 className="uppercase tracking-wide mb-2">Top Bar Program</h3>
              <p className="text-black/60 text-sm">Mixology Excellence 2024</p>
            </div>
            <div>
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="uppercase tracking-wide mb-2">5-Star Rated</h3>
              <p className="text-black/60 text-sm">Customer Choice Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
