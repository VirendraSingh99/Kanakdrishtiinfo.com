// import { notFound } from "next/navigation";
// import { servicesData } from "../../servicesData/page";
// import { CITIES, getCityBySlug } from "../../citydata/citiesData";
// import ServiceDetailClient from "../ServiceDetailClient";

// export async function generateStaticParams() {
//   const params = [];
//   for (const service of servicesData) {
//     for (const city of CITIES) {
//       params.push({ slug: service.slug, city: city.slug });
//     }
//   }
//   return params;
// }

// export async function generateMetadata({ params }) {
//   const { slug, city } = await params;
//   const service = servicesData.find((s) => s.slug === slug);
//   const cityData = getCityBySlug(city);

//   if (!service || !cityData) return {};

//   return {
//     title: `${service.title} in ${cityData.name} | Kanak Drishti Infotech`,
//     description: `Looking for ${service.title} in ${cityData.name}? Kanak Drishti Infotech provides professional ${service.title} services in ${cityData.name}. Get a free consultation today.`,
//     keywords: `${service.title} ${cityData.name}, ${service.seoKeywords}, ${cityData.name}`,
//     alternates: {
//       canonical: `https://kanakdrishtiinfo.com/services/${slug}/${city}`,
//     },
//     openGraph: {
//       title: `${service.title} in ${cityData.name} | Kanak Drishti Infotech`,
//       description: `Professional ${service.title} services in ${cityData.name}.`,
//       url: `https://kanakdrishtiinfo.com/services/${slug}/${city}`,
//       type: "website",
//     },
//   };
// }

// export default async function CityServicePage({ params }) {
//   const { slug, city } = await params;
//   const service = servicesData.find((s) => s.slug === slug);
//   const cityData = getCityBySlug(city);

//   if (!service || !cityData) notFound();

//   const { icon, ...serviceData } = service;

//   return <ServiceDetailClient service={serviceData} city={cityData} />;
// }


import { notFound } from "next/navigation";
import { servicesData } from "../../serviceData";
import { CITIES, getCityBySlug } from "../../citydata/citiesData";
import ServiceDetailClient from "../ServiceDetailClient";

export async function generateStaticParams() {
  const params = [];
  for (const service of servicesData) {
    for (const city of CITIES) {
      params.push({ slug: service.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug, city } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  const cityData = getCityBySlug(city);

  if (!service || !cityData) return {};

  return {
    title: `${service.title} in ${cityData.name} | Kanak Drishti Infotech`,
    description: `Looking for ${service.title} in ${cityData.name}? Kanak Drishti Infotech provides professional ${service.title} services in ${cityData.name}. Get a free consultation today.`,
    keywords: `${service.title} ${cityData.name}, ${service.seoKeywords}, ${cityData.name}`,
    alternates: {
      canonical: `https://kanakdrishtiinfo.com/services/${slug}/${city}`,
    },
    openGraph: {
      title: `${service.title} in ${cityData.name} | Kanak Drishti Infotech`,
      description: `Professional ${service.title} services in ${cityData.name}.`,
      url: `https://kanakdrishtiinfo.com/services/${slug}/${city}`,
      type: "website",
    },
  };
}

export default async function CityServicePage({ params }) {
  const { slug, city } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  const cityData = getCityBySlug(city);

  if (!service || !cityData) notFound();

  // JSON parse/stringify removes all functions, React components, undefined values
  // so only plain serializable data reaches the Client Component
  const serviceData = JSON.parse(
    JSON.stringify(service, (key, value) => {
      // Drop any function or React element/component
      if (typeof value === "function") return undefined;
      if (value && typeof value === "object" && value.$$typeof) return undefined;
      return value;
    })
  );

  return <ServiceDetailClient service={serviceData} city={cityData} />;
}