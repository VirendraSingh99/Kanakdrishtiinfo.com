export const CITIES = [
  { slug: "noida",     name: "Noida" },
  { slug: "gurugram",  name: "Gurugram" },
  { slug: "ghaziabad", name: "Ghaziabad" },
  { slug: "delhi",     name: "Delhi" },
  { slug: "faridabad", name: "Faridabad" },
];

export function getCityBySlug(slug) {
  return CITIES.find((c) => c.slug === slug);
}