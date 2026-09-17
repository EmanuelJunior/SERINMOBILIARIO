"use client";

import React, { useState } from "react";
import { Plus, Edit2, Trash2, ArrowUp, ArrowDown, MapPin, TrendingUp, Check, X } from "lucide-react";
import { Sector } from "@/features/sectors/types";
import { SectorService } from "@/features/sectors/services/sectorService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/feedback/toast";
import { formatCurrency } from "@/utils/format";

export const SectorManager: React.FC = () => {
  const { toast } = useToast();
  const [sectors, setSectors] = useState<Sector[]>(() => SectorService.getAll());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [appreciationRate, setAppreciationRate] = useState("+12% anual");
  const [averageM2Price, setAverageM2Price] = useState(7500000);
  const [featuredImage, setFeaturedImage] = useState(
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  );

  const startEdit = (sector: Sector) => {
    setEditingId(sector.id);
    setName(sector.name);
    setSlug(sector.slug);
    setTagline(sector.tagline);
    setDescription(sector.description);
    setAppreciationRate(sector.appreciationRate);
    setAverageM2Price(sector.averageM2Price);
    setFeaturedImage(sector.featuredImage);
    setIsCreating(false);
  };

  const cancelForm = () => {
    setEditingId(null);
    setIsCreating(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !slug) {
      toast({ type: "error", title: "Campos requeridos", description: "Nombre y slug son requeridos." });
      return;
    }

    if (editingId) {
      SectorService.update(editingId, {
        name,
        slug,
        tagline,
        description,
        appreciationRate,
        averageM2Price: Number(averageM2Price),
        featuredImage,
      });
      toast({ type: "success", title: "Sector actualizado", description: `El sector ${name} fue actualizado.` });
    } else {
      SectorService.create({
        name,
        slug,
        tagline,
        description,
        highlights: ["Zona de alta plusvalía", "Frente al mar Caribe"],
        lifestyle: "Exclusivo y vacacional",
        appreciationRate,
        averageM2Price: Number(averageM2Price),
        propertiesCount: 0,
        featuredImage,
        gallery: [featuredImage],
        coordinates: { lat: 11.134, lng: -74.228 },
        order: sectors.length + 1,
      });
      toast({ type: "success", title: "Sector creado", description: `El sector ${name} fue creado.` });
    }

    setSectors(SectorService.getAll());
    cancelForm();
  };

  const handleDelete = (id: string, sectorName: string) => {
    if (confirm(`¿Estás seguro de eliminar el sector "${sectorName}"?`)) {
      SectorService.delete(id);
      setSectors(SectorService.getAll());
      toast({ type: "info", title: "Sector eliminado", description: `Sector ${sectorName} eliminado.` });
    }
  };

  const moveOrder = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= sectors.length) return;

    const newSectors = [...sectors];
    const temp = newSectors[index].order;
    newSectors[index].order = newSectors[targetIndex].order;
    newSectors[targetIndex].order = temp;

    SectorService.update(newSectors[index].id, { order: newSectors[index].order });
    SectorService.update(newSectors[targetIndex].id, { order: newSectors[targetIndex].order });

    setSectors(SectorService.getAll());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-forest-950">
            Gestión de Sectores de Santa Marta
          </h2>
          <p className="text-xs text-sand-500 mt-0.5">
            Administra los polos urbanos y de inversión inmobiliaria de la ciudad.
          </p>
        </div>

        {!isCreating && !editingId && (
          <Button
            variant="gold"
            size="sm"
            onClick={() => {
              setIsCreating(true);
              setName("");
              setSlug("");
              setTagline("");
              setDescription("");
            }}
          >
            <Plus className="w-4 h-4 mr-1.5" />
            Nuevo Sector
          </Button>
        )}
      </div>

      {/* Editor Form Modal or inline */}
      {(isCreating || editingId) && (
        <form
          onSubmit={handleSave}
          className="p-6 bg-cream-50 border border-gold-300/80 rounded-xs shadow-sm space-y-4 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-2 border-b border-sand-200">
            <h3 className="font-serif text-lg font-bold text-forest-950">
              {editingId ? "Editar Sector" : "Crear Nuevo Sector"}
            </h3>
            <button
              type="button"
              onClick={cancelForm}
              className="text-sand-400 hover:text-forest-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Nombre del Sector"
              placeholder="Ej. Playa Salguero"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (!editingId) {
                  setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"));
                }
              }}
              required
            />
            <Input
              label="Slug de URL"
              placeholder="playa-salguero"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </div>

          <Input
            label="Lema / Tagline"
            placeholder="Arquitectura de vanguardia y privacidad..."
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-1.5">
              Descripción Editorial
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white text-xs p-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Tasa de Valorización (ej. +12.4% anual)"
              value={appreciationRate}
              onChange={(e) => setAppreciationRate(e.target.value)}
            />
            <Input
              label="Precio Promedio m² (COP)"
              type="number"
              value={averageM2Price}
              onChange={(e) => setAverageM2Price(Number(e.target.value))}
            />
          </div>

          <Input
            label="URL de Imagen Destacada"
            value={featuredImage}
            onChange={(e) => setFeaturedImage(e.target.value)}
          />

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" size="sm" onClick={cancelForm}>
              Cancelar
            </Button>
            <Button type="submit" variant="gold" size="sm">
              Guardar Sector
            </Button>
          </div>
        </form>
      )}

      {/* Sector Table */}
      <div className="bg-white border border-sand-200 rounded-xs overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-cream-100 text-[11px] font-bold uppercase tracking-wider text-forest-900 border-b border-sand-200">
              <th className="p-4">Orden</th>
              <th className="p-4">Sector</th>
              <th className="p-4">Plusvalía</th>
              <th className="p-4">Promedio m²</th>
              <th className="p-4">Inmuebles</th>
              <th className="p-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand-100 text-xs text-forest-900">
            {sectors.map((sector, idx) => (
              <tr key={sector.id} className="hover:bg-cream-50/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-sand-400 w-4">{idx + 1}</span>
                    <button
                      disabled={idx === 0}
                      onClick={() => moveOrder(idx, "up")}
                      className="p-1 text-sand-400 hover:text-forest-900 disabled:opacity-20"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      disabled={idx === sectors.length - 1}
                      onClick={() => moveOrder(idx, "down")}
                      className="p-1 text-sand-400 hover:text-forest-900 disabled:opacity-20"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={sector.featuredImage}
                      alt={sector.name}
                      className="w-12 h-10 object-cover rounded-xs border border-sand-200"
                    />
                    <div>
                      <strong className="block text-sm text-forest-950 font-serif">
                        {sector.name}
                      </strong>
                      <span className="text-[11px] text-sand-500 font-mono">
                        /{sector.slug}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1 font-semibold text-gold-700">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {sector.appreciationRate}
                  </span>
                </td>
                <td className="p-4 font-mono">{formatCurrency(sector.averageM2Price)}</td>
                <td className="p-4 font-medium">{sector.propertiesCount} unidades</td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => startEdit(sector)}
                      className="p-1.5 text-sand-500 hover:text-gold-600 rounded"
                      title="Editar"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(sector.id, sector.name)}
                      className="p-1.5 text-sand-500 hover:text-red-600 rounded"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
