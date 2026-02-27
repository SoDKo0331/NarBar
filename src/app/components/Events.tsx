import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Music2, Ticket } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  artist: string;
  genre: string;
  image: string;
  price: string;
}

export default function Events() {
  const events: Event[] = [
    {
      id: 1,
      title: "Friday Night Sessions",
      date: "Feb 28, 2026",
      time: "10:00 PM - 4:00 AM",
      artist: "DJ Stellar",
      genre: "House / Techno",
      image: "https://images.unsplash.com/photo-1764510383709-14be6ec28548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHBlcmZvcm1pbmclMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzcyMTkyMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$25",
    },
    {
      id: 2,
      title: "Saturday Spectacular",
      date: "Mar 1, 2026",
      time: "10:00 PM - 4:00 AM",
      artist: "DJ Noir",
      genre: "Hip Hop / R&B",
      image: "https://images.unsplash.com/photo-1744314080490-ed41f6319475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBwYXJ0eSUyMGxpZ2h0cyUyMGNyb3dkfGVufDF8fHx8MTc3MjE5MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$30",
    },
    {
      id: 3,
      title: "Thursday Deep Dive",
      date: "Mar 6, 2026",
      time: "10:00 PM - 3:00 AM",
      artist: "DJ Aurora",
      genre: "Deep House / Progressive",
      image: "https://images.unsplash.com/photo-1643981693404-d76e58594bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuaWdodGNsdWIlMjBpbnRlcmlvciUyMGRhcmt8ZW58MXx8fHwxNzcyMTkyMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$20",
    },
    {
      id: 4,
      title: "Weekend Warriors",
      date: "Mar 7, 2026",
      time: "10:00 PM - 4:00 AM",
      artist: "DJ Pulse & MC Flow",
      genre: "EDM / Bass",
      image: "https://images.unsplash.com/photo-1760598742492-7ad941e658e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjB2aXAlMjBsb3VuZ2UlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMTkyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$35",
    },
    {
      id: 5,
      title: "Late Night Groove",
      date: "Mar 8, 2026",
      time: "10:00 PM - 4:00 AM",
      artist: "DJ Vibe",
      genre: "Funk / Soul",
      image: "https://images.unsplash.com/photo-1695606392688-3e3a9b70498c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cHNjYWxlJTIwYmFyJTIwY29ja3RhaWxzJTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzIxOTIxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$25",
    },
    {
      id: 6,
      title: "VIP Saturday Experience",
      date: "Mar 15, 2026",
      time: "9:00 PM - 4:00 AM",
      artist: "DJ Eclipse (International)",
      genre: "Techno / Trance",
      image: "https://images.unsplash.com/photo-1763196080531-f282d0d4e6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmFyJTIwY291bnRlciUyMGJvdHRsZXN8ZW58MXx8fHwxNzcyMTkyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$45",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-[8rem] md:text-[14rem] leading-[0.85] uppercase tracking-tighter font-black mb-8">
            Events
          </h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Don't miss out on the hottest nights in the city.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group overflow-hidden"
              style={{
                transform: index % 3 === 1 ? 'rotate(2deg)' : index % 3 === 2 ? 'rotate(-1deg)' : 'none'
              }}
            >
              <div className="relative h-80 overflow-hidden mb-4">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 text-xs uppercase tracking-wider">
                  {event.price}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl uppercase tracking-wide">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-white/50 text-sm uppercase tracking-wider">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Music2 size={14} />
                  <span>{event.artist}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/40 uppercase tracking-wider pt-2">
                  <span>{event.genre}</span>
                </div>
                <button className="w-full bg-transparent border border-white/30 text-white py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all">
                  <Ticket size={14} />
                  Reserve
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-4 text-white/40">
              Venue Info
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              123 Downtown Street<br />
              City, State 12345<br />
              Thursday - Saturday<br />
              10:00 PM - 4:00 AM
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-4 text-white/40">
              Reservations
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              VIP table reservations available<br />
              Contact us for pricing<br />
              vip@narbar.com<br />
              +1 (555) 123-4567
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-4 text-white/40">
              Entry Policy
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Must be 21+ with valid ID<br />
              Dress code: Smart casual<br />
              No outside food/beverages<br />
              Subject to capacity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}