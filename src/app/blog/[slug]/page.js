import { notFound } from "next/navigation";
import { getBlogBySlug, getAllSlugs, getRecentBlogs, blogs } from "../blogData";
import BlogClient from "./BlogClient";

// ── Generate all static slugs for SSG ─────────────────────────
export async function generateStaticParams() {
  return getAllSlugs();
}

// ── Dynamic SEO Metadata ──────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const pageUrl = `https://yourdomain.com/blog/${blog.slug}`;
  const ogImage = blog.introImage || blog.image;

  return {
    title: blog.title,
    description: blog.description || blog.introContent?.slice(0, 160),
    keywords: blog.tags?.join(", ") || "",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.description || blog.introContent?.slice(0, 160),
      url: pageUrl,
      type: "article",
      siteName: "Kanak Drishti Infotech",
      publishedTime: blog.date,
      authors: [blog.author?.name],
      tags: blog.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description || blog.introContent?.slice(0, 160),
      images: [ogImage],
      site: "@YourTwitterHandle",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ── JSON-LD Schema (BlogPosting) ─────────────────────────────
function BlogSchema({ blog }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description || blog.introContent?.slice(0, 160),
    image: blog.introImage || blog.image,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: blog.author.name,
      jobTitle: blog.author.role,
      image: blog.author.avatar,
    },
    publisher: {
      "@type": "Organization",
      name: "Kanak Drishti Infotech",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blog/${blog.slug}`,
    },
    keywords: blog.tags?.join(", "),
    articleSection: blog.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Main Page Component ───────────────────────────────────────
export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs (same category, exclude current)
  const relatedBlogs = blogs
    .filter((b) => b.slug !== slug && b.category === blog.category)
    .slice(0, 2);

  // ✅ Recent blogs — latest 4, current blog ko exclude karo
  const recentBlogs = getRecentBlogs(4).filter((b) => b.slug !== slug);

  return (
    <>
      <BlogSchema blog={blog} />
      <BlogClient
        blog={blog}
        relatedBlogs={relatedBlogs}
        recentBlogs={recentBlogs}
      />
    </>
  );
}
