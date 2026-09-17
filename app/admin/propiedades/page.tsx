"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Eye,
  EyeOff,
  Edit2,
  Trash2,
  Sparkles,
  ExternalLink,
  Filter,
} from "lucide-react";
import { PropertyService } from "@/features/properties/services/propertyService";
import { Property, PropertyStatus } from "@/features/properties/types";
import { formatCurrency } from "@/utils/format";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/feedback/toast";

export default function AdminPropiedadesPage() {
  const { toast } = useToast();
  const [properties, setProperties] = useState<Property[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("todos");

  const loadProperties = () => {
    setProperties(PropertyService.getAll());
  };

  useEffect(() => {
    loadProperties();
  }, []);

  const handleDelete = (id: string, title: string) => {
    if (confirm(`¿Estás seguro de eliminar el inmueble "${title}"?`)) {
      PropertyService.delete(id);
      loadProperties();
      toast({
        type: "info",
        title: "Propiedad eliminada",
        description: `Se ha retirado "${title}" del catálogo web.`,
      });
    }
  };

  const handleToggleStatus = (property: Property) => {
    const nextStatus: PropertyStatus =
      property.status === "publicada" || property.status === "destacada"
        ? "borrador"
        : "publicada";

    PropertyService.update(property.id, { status: nextStatus });
    loadProperties();
    toast({
      type: "success",
      title: "Estado actualizado",
      description: `Propiedad ahora en estado: ${nextStatus.toUpperCase()}`,
    });
  };

  const handleToggleFeatured = (property: Property) => {
    const newFeatured = !property.isFeatured;
    PropertyService.update(property.id, {
      isFeatured: newFeatured,
      status: newFeatured ? "destacada" : "publicada",
    });
    loadProperties();
    toast({
      type: "success",
      title: newFeatured ? "Propiedad destacada" : "Removida de destacados",
      description: `Actualizado para portada y cabeceras.`,
    });
  };

  // Filtrado en memoria
  const filtered = properties.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.code.toLowerCase().includes(search.toLowerCase()) ||
      p.sectorName.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "todos" ? true : p.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
            Gestión de Propiedades Web
          </h1>
          <p className="text-xs text-sand-500 mt-0.5">
            CRUD completo: crear, editar, eliminar, publicar y ocultar propiedades en el catálogo.
          </p>
        </div>

        <Link href="/admin/propiedades/nueva">
          <Button variant="gold" size="sm" className="gap-2 shadow-gold-glow">
            <Plus className="w-4 h-4" />
            <span>Crear Propiedad</span>
          </Button>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 bg-white border border-sand-200 rounded-xs shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-sand-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por título, código o sector..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-cream-50/70 text-xs pl-9 pr-4 py-2.5 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-[11px] uppercase tracking-wider text-sand-400 font-semibold shrink-0">
            Filtrar estado:
          </span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-cream-50/70 text-xs px-3 py-2 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
          >
            <option value="todos">Todos los estados</option>
            <option value="publicada">Publicadas</option>
            <option value="destacada">Destacadas</option>
            <option value="borrador">Borradores (Ocultas)</option>
            <option value="vendida">Vendidas</option>
            <option value="arrendada">Arrendadas</option>
          </select>
        </div>
      </div>

      {/* Properties Table */}
      <div className="bg-white border border-sand-200 rounded-xs shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cream-50 text-[11px] font-bold uppercase tracking-wider text-forest-900 border-b border-sand-200">
                <th className="p-4">Inmueble</th>
                <th className="p-4">Sector</th>
                <th className="p-4">Operación</th>
                <th className="p-4">Precio</th>
                <th className="p-4">Estado Web</th>
                <th className="p-4">Destacada</th>
                <th className="p-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-100 text-xs">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-sand-500">
                    No se encontraron propiedades con los filtros seleccionados.
                  </td>
                </tr>
              ) : (
                filtered.map((prop) => (
                  <tr key={prop.id} className="hover:bg-cream-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={prop.featuredImage}
                          alt={prop.title}
                          className="w-14 h-11 object-cover rounded-xs border border-sand-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <strong className="block text-forest-950 font-serif line-clamp-1">
                            {prop.title}
                          </strong>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="font-mono text-[10px] text-sand-400">
                              {prop.code}
                            </span>
                            <span className="text-sand-300">•</span>
                            <span className="text-[11px] text-sand-500 capitalize">
                              {prop.propertyType}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 text-sand-500 font-medium whitespace-nowrap">
                      {prop.sectorName}
                    </td>

                    <td className="p-4 whitespace-nowrap">
                      <Badge variant="outline" size="sm" className="border-sand-300">
                        {prop.operation}
                      </Badge>
                    </td>

                    <td className="p-4 font-mono font-semibold text-forest-900 whitespace-nowrap">
                      {formatCurrency(prop.price)}
                    </td>

                    {/* Publicar / Ocultar Toggle */}
                    <td className="p-4 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(prop)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-[11px] font-semibold border transition-all"
                        style={{
                          backgroundColor:
                            prop.status === "publicada" || prop.status === "destacada"
                              ? "#F0FDF4"
                              : "#FEF2F2",
                          borderColor:
                            prop.status === "publicada" || prop.status === "destacada"
                              ? "#86EFAC"
                              : "#FECACA",
                          color:
                            prop.status === "publicada" || prop.status === "destacada"
                              ? "#15803D"
                              : "#B91C1C",
                        }}
                        title="Clic para cambiar entre Publicar u Ocultar"
                      >
                        {prop.status === "publicada" || prop.status === "destacada" ? (
                          <>
                            <Eye className="w-3.5 h-3.5" />
                            <span>Publicada</span>
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3.5 h-3.5" />
                            <span>Oculta / Borrador</span>
                          </>
                        )}
                      </button>
                    </td>

                    {/* Toggle Destacada */}
                    <td className="p-4 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => handleToggleFeatured(prop)}
                        className={`p-1.5 rounded-xs border transition-colors ${
                          prop.isFeatured
                            ? "bg-gold-500 text-forest-950 border-gold-500"
                            : "text-sand-400 border-sand-300 hover:text-gold-600"
                        }`}
                        title={prop.isFeatured ? "Destacada activa" : "Marcar como destacada"}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                      </button>
                    </td>

                    {/* Acciones */}
                    <td className="p-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/propiedades/${prop.slug}`}
                          target="_blank"
                          className="p-1.5 text-sand-500 hover:text-forest-900 rounded"
                          title="Ver en portal público"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/propiedades/${prop.id}`}
                          className="p-1.5 text-sand-500 hover:text-gold-600 rounded"
                          title="Editar"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(prop.id, prop.title)}
                          className="p-1.5 text-sand-500 hover:text-red-600 rounded"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
