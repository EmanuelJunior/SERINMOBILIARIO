"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  FileEdit,
  CheckCircle,
  KeyRound,
  Sparkles,
  Plus,
  ArrowUpRight,
  Eye,
  TrendingUp,
} from "lucide-react";
import { PropertyService } from "@/features/properties/services/propertyService";
import { Property } from "@/features/properties/types";
import { formatCurrency } from "@/utils/format";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
    sold: 0,
    rented: 0,
    featured: 0,
  });
  const [recentProperties, setRecentProperties] = useState<Property[]>([]);

  useEffect(() => {
    setStats(PropertyService.getStats());
    setRecentProperties(PropertyService.getAll().slice(0, 5));
  }, []);

  const kpis = [
    {
      title: "Publicadas",
      count: stats.published,
      description: "Visibles en catálogo público",
      icon: Eye,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    {
      title: "Borradores",
      count: stats.draft,
      description: "Pendientes de aprobación",
      icon: FileEdit,
      color: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      title: "Vendidas",
      count: stats.sold,
      description: "Cierres exitosos en Santa Marta",
      icon: CheckCircle,
      color: "text-blue-700 bg-blue-50 border-blue-200",
    },
    {
      title: "Arrendadas",
      count: stats.rented,
      description: "Contratos vigentes activos",
      icon: KeyRound,
      color: "text-purple-700 bg-purple-50 border-purple-200",
    },
    {
      title: "Destacadas",
      count: stats.featured,
      description: "En portada principal / Hero",
      icon: Sparkles,
      color: "text-gold-700 bg-cream-50 border-gold-300",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-xs border border-sand-200 shadow-sm">
        <div>
          <span className="text-[10px] uppercase tracking-luxury text-gold-700 font-semibold block">
            Panel de Control Web
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
            Resumen de Inventario Inmobiliario
          </h1>
          <p className="text-xs text-sand-500 mt-1">
            Gestión centralizada del catálogo y contenidos del ecosistema SERINMOBILIARIO.
          </p>
        </div>

        <Link href="/admin/propiedades/nueva">
          <Button variant="gold" size="md" className="gap-2 shadow-gold-glow">
            <Plus className="w-4 h-4" />
            <span>Crear Nueva Propiedad</span>
          </Button>
        </Link>
      </div>

      {/* 5 KPIs as strictly requested: Publicadas, Borradores, Vendidas, Arrendadas, Destacadas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div
              key={index}
              className={`p-5 rounded-xs border shadow-xs bg-white flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-forest-900/80">
                  {kpi.title}
                </span>
                <div className={`p-2 rounded-xs border ${kpi.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <span className="font-serif text-3xl font-bold text-forest-950">
                  {kpi.count}
                </span>
                <span className="block text-[11px] text-sand-500 mt-1">
                  {kpi.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Properties Table */}
      <div className="bg-white border border-sand-200 rounded-xs shadow-sm overflow-hidden">
        <div className="p-5 border-b border-sand-200 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-forest-950">
              Propiedades Recientes en Catálogo
            </h3>
            <p className="text-xs text-sand-500">Últimos inmuebles ingresados o editados</p>
          </div>

          <Link
            href="/admin/propiedades"
            className="text-xs font-semibold text-gold-700 hover:text-forest-900 flex items-center gap-1 uppercase tracking-wider"
          >
            <span>Ver todas</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cream-50 text-[11px] font-bold uppercase tracking-wider text-forest-900 border-b border-sand-200">
                <th className="p-4">Propiedad</th>
                <th className="p-4">Sector</th>
                <th className="p-4">Operación</th>
                <th className="p-4">Precio</th>
                <th className="p-4">Estado</th>
                <th className="p-4 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-100 text-xs">
              {recentProperties.map((prop) => (
                <tr key={prop.id} className="hover:bg-cream-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={prop.featuredImage}
                        alt={prop.title}
                        className="w-12 h-10 object-cover rounded-xs border border-sand-200"
                      />
                      <div>
                        <strong className="block text-forest-950 font-serif line-clamp-1">
                          {prop.title}
                        </strong>
                        <span className="font-mono text-[10px] text-sand-400">
                          {prop.code}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sand-500 font-medium">{prop.sectorName}</td>
                  <td className="p-4 capitalize">
                    <Badge variant="outline" size="sm" className="border-sand-300">
                      {prop.operation}
                    </Badge>
                  </td>
                  <td className="p-4 font-mono font-semibold text-forest-900">
                    {formatCurrency(prop.price)}
                  </td>
                  <td className="p-4">
                    <Badge
                      variant={
                        prop.status === "destacada"
                          ? "gold"
                          : prop.status === "publicada"
                          ? "forest"
                          : "cream"
                      }
                      size="sm"
                    >
                      {prop.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      href={`/admin/propiedades/${prop.id}`}
                      className="text-xs font-semibold text-gold-700 hover:underline"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
