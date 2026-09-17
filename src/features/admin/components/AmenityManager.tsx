"use client";

import React, { useState } from "react";
import { Plus, Trash2, CheckCircle2, Sliders } from "lucide-react";
import { AmenityService } from "../services/amenityService";
import { AmenityItem } from "../types";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/feedback/toast";

export const AmenityManager: React.FC = () => {
  const { toast } = useToast();
  const [amenities, setAmenities] = useState<AmenityItem[]>(() => AmenityService.getAll());
  const [name, setName] = useState("");
  const [category, setCategory] = useState<AmenityItem["category"]>("bienestar");

  const handleToggle = (id: string) => {
    AmenityService.toggleActive(id);
    setAmenities(AmenityService.getAll());
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    AmenityService.add(name.trim(), category);
    setAmenities(AmenityService.getAll());
    setName("");
    toast({
      type: "success",
      title: "Característica agregada",
      description: `Se incorporó "${name}" a los filtros del catálogo.`,
    });
  };

  const handleDelete = (id: string, amenityName: string) => {
    AmenityService.delete(id);
    setAmenities(AmenityService.getAll());
    toast({
      type: "info",
      title: "Característica eliminada",
      description: `Se removió "${amenityName}".`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-forest-950">
          Gestión de Características y Filtros Web
        </h2>
        <p className="text-xs text-sand-500 mt-0.5">
          Administra las amenidades, comodidades y etiquetas de búsqueda del ecosistema inmobiliario.
        </p>
      </div>

      {/* Add form */}
      <form
        onSubmit={handleAdd}
        className="p-5 bg-white border border-sand-200 rounded-xs shadow-sm flex flex-wrap gap-3 items-end"
      >
        <div className="flex-1 min-w-[240px]">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-1.5">
            Nombre de la Amenidad / Característica
          </label>
          <input
            type="text"
            placeholder="Ej. Jacuzzi privado climatizado..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-cream-50/70 text-xs px-3.5 py-2.5 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
            required
          />
        </div>

        <div className="w-48">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-1.5">
            Categoría
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as any)}
            className="w-full bg-cream-50/70 text-xs px-3 py-2.5 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
          >
            <option value="vistas">Vistas y Entorno</option>
            <option value="bienestar">Bienestar y Ocio</option>
            <option value="servicios">Servicios y Confort</option>
            <option value="seguridad">Seguridad y Control</option>
          </select>
        </div>

        <Button type="submit" variant="gold" size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Añadir a Filtros
        </Button>
      </form>

      {/* Amenity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {amenities.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-xs border flex items-center justify-between transition-all ${
              item.active
                ? "bg-white border-sand-200 shadow-xs"
                : "bg-sand-100/50 border-sand-200 opacity-60"
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                className={`w-5 h-5 rounded-xs border flex items-center justify-center transition-colors ${
                  item.active
                    ? "bg-forest-900 border-forest-900 text-gold-400"
                    : "border-sand-400 bg-white"
                }`}
              >
                {item.active && <CheckCircle2 className="w-3.5 h-3.5" />}
              </button>
              <div>
                <strong className="block text-xs text-forest-950 font-medium">
                  {item.name}
                </strong>
                <span className="text-[10px] text-sand-500 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleDelete(item.id, item.name)}
              className="text-sand-400 hover:text-red-600 p-1 transition-colors"
              title="Eliminar"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
