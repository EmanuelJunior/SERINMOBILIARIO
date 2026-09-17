"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Save,
  ArrowLeft,
  Building,
  DollarSign,
  Layers,
  FileText,
  Image as ImageIcon,
  MapPin,
  Search,
  Settings,
  Calendar,
  Plus,
  Trash2,
  Sparkles,
} from "lucide-react";
import { Property, OperationType, PropertyType, PropertyStatus } from "@/features/properties/types";
import { PropertyService } from "@/features/properties/services/propertyService";
import { SectorService } from "@/features/sectors/services/sectorService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/feedback/toast";

interface PropertyFormProps {
  initialProperty?: Property;
  isEdit?: boolean;
}

export const PropertyForm: React.FC<PropertyFormProps> = ({
  initialProperty,
  isEdit = false,
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isSaving, setIsSaving] = useState(false);

  const sectors = SectorService.getAll();

  // Estado unificado de los 9 bloques
  const [formData, setFormData] = useState({
    // Bloque 1: Información Básica
    title: initialProperty?.title || "",
    code: initialProperty?.code || `SER-${Math.floor(100 + Math.random() * 900)}`,
    tagline: initialProperty?.tagline || "",
    operation: (initialProperty?.operation || "venta") as OperationType,
    propertyType: (initialProperty?.propertyType || "apartamento") as PropertyType,

    // Bloque 2: Precio y Costos
    price: initialProperty?.price || 1200000000,
    currency: initialProperty?.currency || "COP",
    adminFee: initialProperty?.adminFee || 650000,

    // Bloque 3: Características cuantitativas y cualitativas
    bedrooms: initialProperty?.bedrooms || 3,
    bathrooms: initialProperty?.bathrooms || 3,
    parkingSpaces: initialProperty?.parkingSpaces || 2,
    builtArea: initialProperty?.builtArea || 140,
    privateArea: initialProperty?.privateArea || 130,
    floorNumber: initialProperty?.floorNumber || 8,
    yearBuilt: initialProperty?.yearBuilt || 2024,
    estrato: initialProperty?.estrato || 6,
    seaView: initialProperty?.seaView ?? true,
    pool: initialProperty?.pool ?? true,
    balcony: initialProperty?.balcony ?? true,
    elevator: initialProperty?.elevator ?? true,
    gym: initialProperty?.gym ?? true,
    furnished: initialProperty?.furnished ?? false,
    beachfront: initialProperty?.beachfront ?? true,
    amenities: initialProperty?.amenities || [
      "Vista directa al mar",
      "Piscina panorámica",
      "Balcón terraza",
      "Ascensor principal",
    ],

    // Bloque 4: Descripción
    description:
      initialProperty?.description ||
      "Exclusivo inmueble de lujo en Santa Marta con vista despejada al mar Caribe y los más altos estándares de diseño y acabados.",

    // Bloque 5: Galería Multimedia
    featuredImage:
      initialProperty?.featuredImage ||
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    images: initialProperty?.images || [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    ],

    // Bloque 6: Ubicación
    sectorId: initialProperty?.sectorId || "sec-bello-horizonte",
    sectorName: initialProperty?.sectorName || "Bello Horizonte",
    address: initialProperty?.address || "Av. Principal frente al Mar",
    lat: initialProperty?.coordinates?.lat || 11.1345,
    lng: initialProperty?.coordinates?.lng || -74.2285,

    // Bloque 7: SEO
    metaTitle:
      initialProperty?.metaTitle || "Inmueble de Lujo en Santa Marta | SERINMOBILIARIO",
    metaDescription:
      initialProperty?.metaDescription ||
      "Propiedad inmobiliaria premium en Santa Marta frente al mar.",

    // Bloque 8: Configuración Web
    slug:
      initialProperty?.slug ||
      "inmueble-exclusivo-santa-marta-" + Math.floor(1000 + Math.random() * 9000),
    status: (initialProperty?.status || "publicada") as PropertyStatus,
    isFeatured: initialProperty?.isFeatured ?? true,

    // Bloque 9: Calendario Clientify
    clientifyTag: initialProperty?.clientifyTag || "LEAD_WEB_SANTA_MARTA",
  });

  const [newImageInput, setNewImageInput] = useState("");
  const [newAmenityInput, setNewAmenityInput] = useState("");

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSectorChange = (secId: string) => {
    const found = sectors.find((s) => s.id === secId);
    setFormData((prev) => ({
      ...prev,
      sectorId: secId,
      sectorName: found ? found.name : prev.sectorName,
    }));
  };

  const addImage = () => {
    if (!newImageInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, newImageInput.trim()],
    }));
    setNewImageInput("");
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const addAmenity = () => {
    if (!newAmenityInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      amenities: [...prev.amenities, newAmenityInput.trim()],
    }));
    setNewAmenityInput("");
  };

  const removeAmenity = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug) {
      toast({
        type: "error",
        title: "Campos obligatorios",
        description: "El título y el slug son requeridos.",
      });
      return;
    }

    setIsSaving(true);
    try {
      const payload: Omit<Property, "id" | "createdAt" | "updatedAt"> = {
        title: formData.title,
        code: formData.code,
        tagline: formData.tagline,
        operation: formData.operation,
        propertyType: formData.propertyType,
        price: Number(formData.price),
        currency: "COP",
        adminFee: Number(formData.adminFee),
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        parkingSpaces: Number(formData.parkingSpaces),
        builtArea: Number(formData.builtArea),
        privateArea: Number(formData.privateArea),
        floorNumber: Number(formData.floorNumber),
        yearBuilt: Number(formData.yearBuilt),
        estrato: Number(formData.estrato),
        seaView: formData.seaView,
        pool: formData.pool,
        balcony: formData.balcony,
        elevator: formData.elevator,
        gym: formData.gym,
        furnished: formData.furnished,
        beachfront: formData.beachfront,
        terrace: formData.balcony,
        airConditioning: true,
        privateSecurity: true,
        amenities: formData.amenities,
        description: formData.description,
        featuredImage: formData.featuredImage,
        images: formData.images,
        sectorId: formData.sectorId,
        sectorName: formData.sectorName,
        address: formData.address,
        zone: "Santa Marta",
        coordinates: { lat: Number(formData.lat), lng: Number(formData.lng) },
        metaTitle: formData.metaTitle,
        metaDescription: formData.metaDescription,
        slug: formData.slug,
        status: formData.status,
        isFeatured: formData.isFeatured,
        clientifyTag: formData.clientifyTag,
      };

      if (isEdit && initialProperty) {
        PropertyService.update(initialProperty.id, payload);
        toast({
          type: "success",
          title: "Propiedad actualizada",
          description: "Los cambios han sido guardados en el catálogo web.",
        });
      } else {
        PropertyService.create(payload);
        toast({
          type: "success",
          title: "Propiedad creada con éxito",
          description: "La nueva propiedad ya está disponible en el catálogo.",
        });
      }

      router.push("/admin/propiedades");
    } catch (err: any) {
      toast({
        type: "error",
        title: "Error al guardar",
        description: err.message || "No se pudo guardar la propiedad.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Pestañas de los 9 bloques requeridos
  const tabs = [
    { id: 1, label: "1. Info Básica", icon: Building },
    { id: 2, label: "2. Precio", icon: DollarSign },
    { id: 3, label: "3. Características", icon: Layers },
    { id: 4, label: "4. Descripción", icon: FileText },
    { id: 5, label: "5. Galería", icon: ImageIcon },
    { id: 6, label: "6. Ubicación", icon: MapPin },
    { id: 7, label: "7. SEO", icon: Search },
    { id: 8, label: "8. Config Web", icon: Settings },
    { id: 9, label: "9. Clientify", icon: Calendar },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xs border border-sand-200">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-sand-500 hover:text-forest-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Propiedades
        </button>

        <div className="flex items-center gap-3">
          <Button
            type="submit"
            variant="gold"
            size="md"
            isLoading={isSaving}
            className="gap-2"
          >
            <Save className="w-4 h-4" />
            {isEdit ? "Actualizar Inmueble" : "Publicar Inmueble"}
          </Button>
        </div>
      </div>

      {/* Tabs Navigation (9 Blocks) */}
      <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-none border-b border-sand-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold whitespace-nowrap rounded-t-xs border-b-2 transition-all ${
                isActive
                  ? "border-gold-500 text-forest-900 bg-cream-50 font-bold"
                  : "border-transparent text-sand-500 hover:text-forest-900 hover:bg-white"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-gold-600" : "text-sand-400"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="bg-white border border-sand-200 rounded-xs p-6 sm:p-8 shadow-sm">
        {/* BLOQUE 1: Información básica */}
        {activeTab === 1 && (
          <div className="space-y-5 max-w-3xl">
            <h3 className="font-serif text-lg font-bold text-forest-950 pb-2 border-b border-sand-200">
              Bloque 1: Información Básica del Inmueble
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Código Referencia (ej. SER-101)"
                value={formData.code}
                onChange={(e) => updateField("code", e.target.value)}
                required
              />

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-1.5">
                  Tipo de Operación
                </label>
                <select
                  value={formData.operation}
                  onChange={(e) => updateField("operation", e.target.value)}
                  className="w-full bg-cream-50/70 text-forest-950 text-xs px-3.5 py-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
                >
                  <option value="venta">Venta</option>
                  <option value="arriendo">Arriendo</option>
                  <option value="inversion">Inversión turística</option>
                </select>
              </div>
            </div>

            <Input
              label="Título de la Propiedad"
              placeholder="Ej. Penthouse Duplex con Vista Panorámica en Bello Horizonte"
              value={formData.title}
              onChange={(e) => updateField("title", e.target.value)}
              required
            />

            <Input
              label="Lema o Subtítulo Destacado"
              placeholder="Ej. Vistas 360 al mar Caribe y la Sierra Nevada"
              value={formData.tagline}
              onChange={(e) => updateField("tagline", e.target.value)}
            />

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-1.5">
                Tipo de Inmueble
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => updateField("propertyType", e.target.value)}
                className="w-full bg-cream-50/70 text-forest-950 text-xs px-3.5 py-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
              >
                <option value="apartamento">Apartamento</option>
                <option value="penthouse">Penthouse</option>
                <option value="casa-playa">Casa de Playa / Villa</option>
                <option value="condohotel">Condo-Hotel de Inversión</option>
              </select>
            </div>
          </div>
        )}

        {/* BLOQUE 2: Precio */}
        {activeTab === 2 && (
          <div className="space-y-5 max-w-3xl">
            <h3 className="font-serif text-lg font-bold text-forest-950 pb-2 border-b border-sand-200">
              Bloque 2: Precio y Obligaciones Mensuales
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Precio Principal (COP)"
                type="number"
                value={formData.price}
                onChange={(e) => updateField("price", Number(e.target.value))}
                required
              />

              <Input
                label="Cuota Mensual de Administración (COP)"
                type="number"
                value={formData.adminFee}
                onChange={(e) => updateField("adminFee", Number(e.target.value))}
              />
            </div>
          </div>
        )}

        {/* BLOQUE 3: Características */}
        {activeTab === 3 && (
          <div className="space-y-6 max-w-4xl">
            <h3 className="font-serif text-lg font-bold text-forest-950 pb-2 border-b border-sand-200">
              Bloque 3: Características y Amenidades
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Input
                label="Habitaciones"
                type="number"
                value={formData.bedrooms}
                onChange={(e) => updateField("bedrooms", Number(e.target.value))}
              />
              <Input
                label="Baños"
                type="number"
                value={formData.bathrooms}
                onChange={(e) => updateField("bathrooms", Number(e.target.value))}
              />
              <Input
                label="Garajes"
                type="number"
                value={formData.parkingSpaces}
                onChange={(e) => updateField("parkingSpaces", Number(e.target.value))}
              />
              <Input
                label="Estrato"
                type="number"
                value={formData.estrato}
                onChange={(e) => updateField("estrato", Number(e.target.value))}
              />
              <Input
                label="Área Construida (m²)"
                type="number"
                value={formData.builtArea}
                onChange={(e) => updateField("builtArea", Number(e.target.value))}
              />
              <Input
                label="Área Privada (m²)"
                type="number"
                value={formData.privateArea}
                onChange={(e) => updateField("privateArea", Number(e.target.value))}
              />
              <Input
                label="Número de Piso"
                type="number"
                value={formData.floorNumber}
                onChange={(e) => updateField("floorNumber", Number(e.target.value))}
              />
              <Input
                label="Año de Construcción"
                type="number"
                value={formData.yearBuilt}
                onChange={(e) => updateField("yearBuilt", Number(e.target.value))}
              />
            </div>

            {/* Checkboxes de Lujo */}
            <div className="pt-4 border-t border-sand-200">
              <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-3">
                Filtros Primarios
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { key: "seaView", label: "Vista al Mar" },
                  { key: "beachfront", label: "Frente a la Playa" },
                  { key: "pool", label: "Piscina" },
                  { key: "balcony", label: "Balcón / Terraza" },
                  { key: "elevator", label: "Ascensor" },
                  { key: "gym", label: "Gimnasio" },
                  { key: "furnished", label: "Amoblado" },
                ].map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex items-center gap-2 p-2.5 rounded-xs border border-sand-200 bg-cream-50/50 cursor-pointer text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={Boolean((formData as any)[key])}
                      onChange={(e) => updateField(key, e.target.checked)}
                      className="rounded border-sand-300 text-forest-900 focus:ring-gold-500"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Lista personalizada de amenidades */}
            <div className="pt-4 border-t border-sand-200">
              <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-2">
                Lista de Amenidades y Equipamiento
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Ej. Jacuzzi privado, Helipuerto..."
                  value={newAmenityInput}
                  onChange={(e) => setNewAmenityInput(e.target.value)}
                  className="flex-1 bg-cream-50/70 text-xs px-3 py-2 rounded-xs border border-sand-300"
                />
                <Button type="button" variant="primary" size="sm" onClick={addAmenity}>
                  <Plus className="w-3.5 h-3.5 mr-1" />
                  Agregar
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {formData.amenities.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-cream-100 text-forest-900 border border-sand-300 text-xs"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={() => removeAmenity(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BLOQUE 4: Descripción */}
        {activeTab === 4 && (
          <div className="space-y-4 max-w-3xl">
            <h3 className="font-serif text-lg font-bold text-forest-950 pb-2 border-b border-sand-200">
              Bloque 4: Descripción Editorial de la Propiedad
            </h3>
            <textarea
              rows={8}
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              className="w-full bg-cream-50/70 text-forest-950 text-xs p-4 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500 leading-relaxed font-sans"
              placeholder="Detalla los acabados, la vista, la distribución y la experiencia residencial..."
            />
          </div>
        )}

        {/* BLOQUE 5: Galería */}
        {activeTab === 5 && (
          <div className="space-y-6 max-w-4xl">
            <h3 className="font-serif text-lg font-bold text-forest-950 pb-2 border-b border-sand-200">
              Bloque 5: Galería Multimedia y Fotografía
            </h3>

            <Input
              label="URL de Fotografía Principal (Hero / Portada)"
              value={formData.featuredImage}
              onChange={(e) => updateField("featuredImage", e.target.value)}
            />

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-2">
                Agregar más fotografías (URLs)
              </label>
              <div className="flex gap-2 mb-4">
                <input
                  type="url"
                  placeholder="https://..."
                  value={newImageInput}
                  onChange={(e) => setNewImageInput(e.target.value)}
                  className="flex-1 bg-cream-50/70 text-xs px-3 py-2 rounded-xs border border-sand-300"
                />
                <Button type="button" variant="primary" size="sm" onClick={addImage}>
                  <Plus className="w-3.5 h-3.5 mr-1" />
                  Añadir Foto
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {formData.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video rounded-xs overflow-hidden border border-sand-300 group"
                  >
                    <img src={img} alt="preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute top-1.5 right-1.5 p-1 rounded bg-black/70 text-white hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BLOQUE 6: Ubicación */}
        {activeTab === 6 && (
          <div className="space-y-5 max-w-3xl">
            <h3 className="font-serif text-lg font-bold text-forest-950 pb-2 border-b border-sand-200">
              Bloque 6: Ubicación en Santa Marta
            </h3>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-1.5">
                Sector de Santa Marta
              </label>
              <select
                value={formData.sectorId}
                onChange={(e) => handleSectorChange(e.target.value)}
                className="w-full bg-cream-50/70 text-forest-950 text-xs px-3.5 py-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
              >
                {sectors.map((sec) => (
                  <option key={sec.id} value={sec.id}>
                    {sec.name}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Dirección o Punto de Referencia"
              value={formData.address}
              onChange={(e) => updateField("address", e.target.value)}
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Latitud"
                type="number"
                step="any"
                value={formData.lat}
                onChange={(e) => updateField("lat", Number(e.target.value))}
              />
              <Input
                label="Longitud"
                type="number"
                step="any"
                value={formData.lng}
                onChange={(e) => updateField("lng", Number(e.target.value))}
              />
            </div>
          </div>
        )}

        {/* BLOQUE 7: SEO */}
        {activeTab === 7 && (
          <div className="space-y-5 max-w-3xl">
            <h3 className="font-serif text-lg font-bold text-forest-950 pb-2 border-b border-sand-200">
              Bloque 7: Posicionamiento Web & Metadatos (SEO)
            </h3>
            <Input
              label="Meta Título (Título para Google)"
              value={formData.metaTitle}
              onChange={(e) => updateField("metaTitle", e.target.value)}
            />
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-1.5">
                Meta Descripción
              </label>
              <textarea
                rows={3}
                value={formData.metaDescription}
                onChange={(e) => updateField("metaDescription", e.target.value)}
                className="w-full bg-cream-50/70 text-forest-950 text-xs p-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
              />
            </div>
          </div>
        )}

        {/* BLOQUE 8: Configuración web */}
        {activeTab === 8 && (
          <div className="space-y-5 max-w-3xl">
            <h3 className="font-serif text-lg font-bold text-forest-950 pb-2 border-b border-sand-200">
              Bloque 8: Configuración y Publicación Web
            </h3>

            <Input
              label="Slug de URL (ej. penthouse-mar-bello-horizonte)"
              value={formData.slug}
              onChange={(e) => updateField("slug", e.target.value)}
              required
            />

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-1.5">
                Estado de la Propiedad en Web
              </label>
              <select
                value={formData.status}
                onChange={(e) => updateField("status", e.target.value)}
                className="w-full bg-cream-50/70 text-forest-950 text-xs px-3.5 py-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
              >
                <option value="publicada">Publicada (Visible en catálogo)</option>
                <option value="destacada">Destacada (Home y Cabeceras)</option>
                <option value="borrador">Borrador (Oculta para el público)</option>
                <option value="vendida">Vendida (Sello de éxito comercial)</option>
                <option value="arrendada">Arrendada</option>
              </select>
            </div>

            <label className="flex items-center gap-2 p-3 bg-cream-50 rounded-xs border border-sand-200 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={formData.isFeatured}
                onChange={(e) => updateField("isFeatured", e.target.checked)}
                className="rounded border-sand-300 text-forest-900 focus:ring-gold-500"
              />
              <span className="font-semibold text-forest-900">
                Marcar como Propiedad Destacada en la Landing Page Principal
              </span>
            </label>
          </div>
        )}

        {/* BLOQUE 9: Calendario Clientify */}
        {activeTab === 9 && (
          <div className="space-y-5 max-w-3xl">
            <h3 className="font-serif text-lg font-bold text-forest-950 pb-2 border-b border-sand-200">
              Bloque 9: Asignación y Calendario Clientify CRM
            </h3>

            <div className="p-4 bg-forest-950 text-cream-50 rounded-xs border border-gold-500/30 text-xs space-y-2">
              <div className="flex items-center gap-2 text-gold-400 font-semibold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Configuración de Enrutamiento Comercial</span>
              </div>
              <p className="text-cream-200/80 leading-relaxed">
                Cuando un usuario agenda visita en esta ficha, los leads ingresarán automáticamente al CRM Clientify etiquetados con el tag configurado a continuación:
              </p>
            </div>

            <Input
              label="Tag o Etiqueta Comercial de Clientify"
              placeholder="Ej. LEAD_BELLO_HORIZONTE_PENTHOUSE"
              value={formData.clientifyTag}
              onChange={(e) => updateField("clientifyTag", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Bottom Save Bar */}
      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={() => router.push("/admin/propiedades")}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          variant="gold"
          size="md"
          isLoading={isSaving}
          className="gap-2"
        >
          <Save className="w-4 h-4" />
          {isEdit ? "Guardar Cambios" : "Guardar y Publicar Inmueble"}
        </Button>
      </div>
    </form>
  );
};
