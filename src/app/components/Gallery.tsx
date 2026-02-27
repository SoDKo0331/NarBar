import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1643981693404-d76e58594bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuaWdodGNsdWIlMjBpbnRlcmlvciUyMGRhcmt8ZW58MXx8fHwxNzcyMTkyMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Club interior",
      category: "venue",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1744314080490-ed41f6319475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBwYXJ0eSUyMGxpZ2h0cyUyMGNyb3dkfGVufDF8fHx8MTc3MjE5MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Party crowd",
      category: "events",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1764510383709-14be6ec28548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHBlcmZvcm1pbmclMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzcyMTkyMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "DJ performance",
      category: "events",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1763196080531-f282d0d4e6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmFyJTIwY291bnRlciUyMGJvdHRsZXN8ZW58MXx8fHwxNzcyMTkyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Bar counter",
      category: "venue",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1760598742492-7ad941e658e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjB2aXAlMjBsb3VuZ2UlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMTkyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "VIP lounge",
      category: "venue",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1695606392688-3e3a9b70498c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cHNjYWxlJTIwYmFyJTIwY29ja3RhaWxzJTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzIxOTIxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Cocktails",
      category: "drinks",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1729863254208-2fdc172a0bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBtaXhpbmclMjBjb2NrdGFpbCUyMGRhcmt8ZW58MXx8fHwxNzcyMTkyODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Bartender",
      category: "drinks",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1630533659209-d90d6d106a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBzY2VuZSUyMHBlb3BsZSUyMGRhbmNpbmd8ZW58MXx8fHwxNzcyMTkyODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Dancing",
      category: "events",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1636336085666-3c8bb49b5819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwYWJzdHJhY3QlMjBuaWdodGxpZmV8ZW58MXx8fHwxNzcyMTkyODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Neon",
      category: "venue",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "venue", label: "Venue" },
    { id: "events", label: "Events" },
    { id: "drinks", label: "Drinks" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-[8rem] md:text-[14rem] leading-[0.85] uppercase tracking-tighter font-black mb-8">
            Gallery
          </h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Moments captured in time
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
                activeFilter === filter.id
                  ? "bg-white text-black"
                  : "bg-transparent border border-white/30 text-white/60 hover:border-white/60 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer overflow-hidden"
              style={{
                transform: index % 5 === 0 ? 'rotate(-2deg)' : index % 4 === 0 ? 'rotate(1deg)' : 'none',
              }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white uppercase tracking-[0.2em] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="mt-32 text-center border-t border-white/10 pt-24">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
            Follow the journey
          </p>
          <h3 className="text-[4rem] md:text-[6rem] leading-[0.9] font-serif italic mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            @narbar
          </h3>
          <p className="text-white/60 text-sm uppercase tracking-wider">
            Tag us in your photos for a chance to be featured
          </p>
        </div>
      </div>
    </div>
  );
}