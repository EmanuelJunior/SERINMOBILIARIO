"use client";

import React, { useState } from "react";
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const displayImages = images.length > 0 ? images : ["/logo.jpg"];

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <div className="space-y-3">
      {/* Main Mosaic View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 h-[420px] sm:h-[500px] lg:h-[560px]">
        {/* Main Large Photo */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="lg:col-span-8 relative rounded-xs overflow-hidden cursor-pointer group bg-forest-950"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${displayImages[0]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          <button
            type="button"
            className="absolute bottom-4 right-4 bg-forest-950/80 hover:bg-gold-500 hover:text-forest-950 text-cream-50 text-xs px-3.5 py-2 rounded-xs backdrop-blur-md border border-white/20 flex items-center gap-2 transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Ver galería completa ({displayImages.length} fotos)</span>
          </button>
        </div>

        {/* Secondary Photos Stack */}
        <div className="hidden lg:grid lg:col-span-4 grid-rows-2 gap-3">
          {displayImages.slice(1, 3).map((img, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedImageIndex(idx + 1);
                setIsLightboxOpen(true);
              }}
              className="relative rounded-xs overflow-hidden cursor-pointer group bg-forest-950"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${img})` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails Row */}
      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSelectedImageIndex(idx);
                setIsLightboxOpen(true);
              }}
              className="relative w-20 h-14 sm:w-24 sm:h-16 shrink-0 rounded-xs overflow-hidden border border-sand-300 hover:border-gold-500 transition-all opacity-80 hover:opacity-100"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-cream-100 z-10">
            <div>
              <h4 className="font-serif text-sm sm:text-base font-semibold">{title}</h4>
              <p className="text-xs text-gold-400">
                Fotografía {selectedImageIndex + 1} de {displayImages.length}
              </p>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Active Image with Navigation */}
          <div className="relative flex-1 flex items-center justify-center my-4">
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-6 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-gold-500 hover:text-forest-950 text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={displayImages[selectedImageIndex]}
              alt={`${title} - Foto ${selectedImageIndex + 1}`}
              className="max-h-[75vh] max-w-full object-contain rounded-xs shadow-2xl"
            />

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-6 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-gold-500 hover:text-forest-950 text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Thumbnails */}
          <div className="flex justify-center gap-2 overflow-x-auto py-2 z-10">
            {displayImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-14 h-10 rounded-xs overflow-hidden border transition-all ${
                  idx === selectedImageIndex
                    ? "border-gold-400 scale-105"
                    : "border-white/20 opacity-50 hover:opacity-80"
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
