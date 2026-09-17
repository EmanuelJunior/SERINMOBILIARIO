"use client";

import { useState, useEffect, useCallback } from "react";
import { Property, PropertyFilters } from "../types";
import { PropertyService } from "../services/propertyService";

export function useProperties(initialFilters?: PropertyFilters) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<PropertyFilters>(initialFilters || {});
  const [isLoading, setIsLoading] = useState(true);

  const fetchProperties = useCallback(() => {
    setIsLoading(true);
    try {
      const data = PropertyService.filter(filters);
      setProperties(data);
    } catch (e) {
      console.error("Error cargando propiedades:", e);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  const updateFilter = (key: keyof PropertyFilters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({});
  };

  return {
    properties,
    filters,
    isLoading,
    updateFilter,
    setFilters,
    resetFilters,
    refetch: fetchProperties,
    totalCount: properties.length,
  };
}
