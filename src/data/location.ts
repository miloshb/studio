// src/data/location.ts
/**
 * Define Map, GeoLocation, and Address interfaces and functions.
 */

export const MAP_URL_BASE =
  "https://www.google.com/maps/search/?api=1&query=";

export function getMapUrl(location: GeoLocation): string | undefined {
  if (location.coordinates) {
    const { latitude, longitude } = location.coordinates;

    return `${MAP_URL_BASE}${latitude},${longitude}`;
  }

  const parts = [
    location.street,
    location.unit,
    location.city,
    location.province,
    location.postalCode,
    location.country,
  ]
    .filter(Boolean)
    .join(", ");

  if (!parts) {
    return undefined;
  }

  return `${MAP_URL_BASE}${encodeURIComponent(parts)}`;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface GeoLocation {
  street?: string;
  unit?: number;
  postalCode?: string;
  city?: string;
  province: string;
  country: string;

  coordinates?: GeoCoordinates;
};
