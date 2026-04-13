import {
  Globe,
  ShoppingCart,
  Smartphone,
  Monitor,
  Code,
  Megaphone,
  TrendingUp,
  FileText,
  Mail,
  Search,
  Share2,
  Zap,
  Shield,
  BarChart2,
  Users,
  Clock,
  Settings,
  Target,
  Layers,
  RefreshCw,
  Lock,
  PenTool,
  Send,
  Eye,
  Star,
  Bell,
} from "lucide-react";

export const servicesData = [
  // ─────────────────────────────────────────────────────────────
  // SERVICE 1: Website Development
  // ─────────────────────────────────────────────────────────────
  {
    slug: "website-development",
    title: "Website Development",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "Professional Website Development Services | Custom & Responsive Design",
    seoDescription:
      "Build a powerful online presence with our custom website development services. We create high-performance, SEO-friendly, and fully responsive websites using Next.js & React.",
    seoKeywords:
      "website development, custom website design, responsive website, Next.js development, React website, professional web development, SEO-friendly website",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title:
        "Professional Website Development Services | Custom & Responsive Design",
      description:
        "Build a powerful online presence with our custom website development services. High-performance, SEO-friendly, fully responsive websites using Next.js & React.",
      url: "https://yourdomain.com/services/website-development",
      type: "website",
      image: "https://yourdomain.com/og/website-development.jpg", // 1200x630px recommended
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title:
        "Professional Website Development Services | Custom & Responsive Design",
      description:
        "High-performance, SEO-friendly, and fully responsive websites built with Next.js & React.",
      image: "https://yourdomain.com/og/website-development.jpg",
      site: "@YourTwitterHandle", // apna Twitter handle yahan daalo
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/website-development",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Professional Website Development Services",
      description:
        "Build a powerful online presence with our custom website development services. We create high-performance, SEO-friendly, and fully responsive websites using Next.js & React.",
      url: "https://yourdomain.com/services/website-development",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Development",
    tagline: "Build a Powerful Online Presence That Converts",
    heroDescription:
      "We design and develop custom, fully responsive websites that deliver seamless user experiences across all devices. From landing pages to full-scale corporate portals, every site is built with performance, speed, and SEO best practices in mind — helping your business build credibility, capture leads, and drive long-term growth.",
    color: "from-blue-400 to-[#49BCE3]",
    icon: "Globe",
    features: [
      {
        icon: "Zap",
        title: "Lightning Fast Performance",
        description:
          "Optimized code, lazy loading, and CDN integration ensure your website loads in under 2 seconds — reducing bounce rates and improving user satisfaction.",
      },
      {
        icon: "Smartphone",
        title: "Fully Responsive Design",
        description:
          "Pixel-perfect layouts that adapt flawlessly to every screen size — from mobile phones to 4K monitors — for a consistent brand experience everywhere.",
      },
      {
        icon: "Search",
        title: "SEO-Ready Architecture",
        description:
          "Every page is built with clean semantic HTML, optimized meta tags, schema markup, and Core Web Vitals in mind to rank higher on Google from day one.",
      },
      {
        icon: "Shield",
        title: "Secure & Reliable",
        description:
          "SSL encryption, secure coding practices, regular security audits, and 99.9% uptime hosting to keep your business running smoothly around the clock.",
      },
      {
        icon: "Settings",
        title: "Easy CMS Integration",
        description:
          "We integrate WordPress, Strapi, or custom CMS solutions so your team can update content effortlessly without any technical knowledge.",
      },
      {
        icon: "BarChart2",
        title: "Analytics & Tracking",
        description:
          "Google Analytics, Search Console, and conversion tracking setup included — giving you clear insights into visitor behavior and business performance.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description:
          "We understand your business goals, target audience, competitors, and content requirements before designing a single pixel.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "Our designers create wireframes and high-fidelity mockups aligned with your brand identity and optimized for user engagement.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Clean, scalable code using modern frameworks (Next.js, React, etc.) with full responsiveness and performance optimization.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        description:
          "Thorough cross-browser testing, speed audits, and SEO checks before a smooth, zero-downtime deployment.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "A standard business website takes 2–4 weeks. Complex portals or e-commerce sites may take 6–10 weeks depending on features and content.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely. Every website we build is fully responsive and tested across all major devices and browsers.",
      },
      {
        question: "Can I update the website myself after it's built?",
        answer:
          "Yes. We integrate a user-friendly CMS so you can easily update pages, blogs, images, and other content without technical knowledge.",
      },
      {
        question: "Do you provide website maintenance after launch?",
        answer:
          "Yes, we offer monthly maintenance packages covering updates, security patches, performance monitoring, and content changes.",
      },
    ],

    aboutSection: {
      // Block 1: Simple Full Width (Top)
      topSection: {
        sections: [
          {
            heading: "E-commerce website development",
            paragraph:
              "We at Kanak Drishti Infotech specialize in end-to-end e-commerce website development. We aim to develop a website that turns visitors into buyers. By leveraging state-of-the-art technologies, we build secure, user-friendly online stores.",
          },
          {
            heading: "B2B Portal Development",
            paragraph:
              "At Kanak Drishti Infotech, we build B2B portals that facilitate business connections in an easy and quick manner. Our team designs and develops platforms that enable companies to display products, manage leads, and communicate simply.",
          },
          {
            heading: "WordPress Website Development",
            paragraph:
              "Kanak Drishti Infotech designs and develops WordPress websites that look nice and are user-friendly. Whether you want a simple business website or a feature-packed platform, we tailor every pixel to fit your objectives.",
          },
          {
            heading: "Custom Web Application Development",
            paragraph:
              "We build powerful custom web applications tailored to your specific business needs. From SaaS platforms to internal tools, our solutions are scalable, secure, and designed for performance.",
          },
        ],
      },

      // Block 2: Article Style with Image (Bottom)
      bottomSection: {
        heading:
          "Build Powerful Digital Experiences with Our Custom IT Solutions",
        image:
          "https://w0.peakpx.com/wallpaper/601/873/HD-wallpaper-web-design-wordpress-designer-web-development.jpg",
        content: [
          "Are you looking for a reliable partner to develop a high-performance website or web application? At Kanak Drishti Infotech, we provide customized solutions designed to meet your specific business goals and challenges.",

          "We leverage the latest technologies and modern development frameworks to build fast, secure, and scalable digital platforms. Our approach ensures that your business stays competitive in an ever-evolving digital landscape.",

          "All our solutions are fully responsive and optimized for all devices. We also integrate advanced technologies such as AI-powered chatbots and automation tools to enhance user engagement, streamline processes, and drive business growth.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 2: E-Commerce Website
  // ─────────────────────────────────────────────────────────────
  {
    slug: "e-commerce-website",
    title: "E-Commerce Website",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle: "E-Commerce Website Development | Online Store Design & Build",
    seoDescription:
      "Launch a high-converting online store with secure payment gateways, smart inventory management, and mobile-first design. Shopify, WooCommerce & custom solutions available.",
    seoKeywords:
      "e-commerce website development, online store design, Shopify development, WooCommerce, Razorpay integration, custom e-commerce solution, online shopping website",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title: "E-Commerce Website Development | Online Store Design & Build",
      description:
        "Launch a high-converting online store with secure payment gateways, smart inventory management, and mobile-first design.",
      url: "https://yourdomain.com/services/e-commerce-website",
      type: "website",
      image: "https://yourdomain.com/og/e-commerce-website.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "E-Commerce Website Development | Online Store Design & Build",
      description:
        "High-converting online stores with secure payments, smart inventory, and conversion-optimized UX.",
      image: "https://yourdomain.com/og/e-commerce-website.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/e-commerce-website",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "E-Commerce Website Development Services",
      description:
        "Launch a high-converting online store with secure payment gateways, smart inventory management, and mobile-first design.",
      url: "https://yourdomain.com/services/e-commerce-website",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Development",
    tagline: "Sell More. Convert Better. Grow Faster.",
    heroDescription:
      "Launch powerful online stores with secure payment gateways, smart inventory systems, and conversion-focused design. We build feature-rich e-commerce platforms with smooth checkout flows, product filtering, cart management, and order tracking — everything you need to maximize sales and deliver outstanding customer satisfaction.",
    color: "from-violet-400 to-indigo-500",
    icon: ShoppingCart,
    features: [
      {
        icon: "Lock",
        title: "Secure Payment Gateways",
        description:
          "Integration with Razorpay, Stripe, PayPal, and UPI with PCI-DSS compliance for safe, frictionless transactions.",
      },
      {
        icon: "Layers",
        title: "Smart Product Management",
        description:
          "Manage thousands of products with variants, categories, filters, and bulk import/export tools from a single dashboard.",
      },
      {
        icon: "Zap",
        title: "Conversion-Optimized UX",
        description:
          "Strategically designed product pages, cart flows, and checkout processes to reduce drop-offs and maximize order completions.",
      },
      {
        icon: "BarChart2",
        title: "Sales Analytics Dashboard",
        description:
          "Real-time reports on revenue, best-selling products, customer behavior, and marketing performance to guide smart decisions.",
      },
      {
        icon: "RefreshCw",
        title: "Inventory & Order Management",
        description:
          "Automated stock alerts, order status updates, shipping integrations, and return management built right in.",
      },
      {
        icon: Users,
        title: "Customer Account System",
        description:
          "Wishlist, order history, saved addresses, loyalty points, and personalized recommendations for a premium shopping experience.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Business & Product Analysis",
        description:
          "Understanding your catalog, target market, pricing model, and logistics requirements to plan the ideal store architecture.",
      },
      {
        step: "02",
        title: "Store Design",
        description:
          "Custom storefront design with brand-consistent visuals, intuitive navigation, and mobile-first product pages.",
      },
      {
        step: "03",
        title: "Development & Integration",
        description:
          "Building the store with payment gateways, shipping APIs, inventory tools, and CMS for easy product management.",
      },
      {
        step: "04",
        title: "Launch & Optimize",
        description:
          "Full QA testing, speed optimization, SEO setup, and post-launch performance monitoring for maximum conversions.",
      },
    ],
    faqs: [
      {
        question: "Which platform do you use for e-commerce?",
        answer:
          "We build on Shopify, WooCommerce, or fully custom Next.js/React storefronts depending on your scale and requirements.",
      },
      {
        question: "Can you integrate Indian payment gateways like Razorpay?",
        answer:
          "Yes, we integrate Razorpay, PayU, Cashfree, PhonePe, and all major Indian payment providers along with UPI support.",
      },
      {
        question: "Can I manage products myself?",
        answer:
          "Absolutely. We provide an easy-to-use admin panel where you can add, edit, and remove products, update prices, and manage orders.",
      },
      {
        question: "Do you help with SEO for the store?",
        answer:
          "Yes. We set up product schema, meta tags, canonical URLs, sitemap, and Google Shopping feed to drive organic traffic.",
      },
    ],

    aboutSection: {
      // Block 1: Simple Full Width (Top) - Professional Intro
      topSection: {
        heading:
          "Leading E-commerce Development Company: Scaling Your Online Business",
        paragraphs: [
          "At Kanak Drishti Infotech, we specialize in building high-performance E-commerce platforms that turn visitors into loyal customers. With years of experience in the retail-tech landscape, we understand that an online store is more than just a website—it's a 24/7 revenue engine that needs to be fast, secure, and intuitive.",

          "We have successfully launched hundreds of E-commerce stores across various niches, from fashion and electronics to B2B industrial portals. Our team ensures that your store is equipped with a seamless checkout process, robust inventory management, and a user interface that drives maximum conversions.",

          "Our expert developers and UI/UX designers work together to create shopping experiences that are not only visually stunning but also technically superior. We focus on scalability, ensuring your platform can handle high traffic during peak sale seasons without any lag or downtime.",
        ],
         aboutSection: {
      // Block 1: Simple Full Width (Top)
      topSection: {
        sections: [
          {
            heading: "E-commerce website development",
            paragraph:
              "We at Kanak Drishti Infotech specialize in end-to-end e-commerce website development. We aim to develop a website that turns visitors into buyers. By leveraging state-of-the-art technologies, we build secure, user-friendly online stores.",
          },
          {
            heading: "B2B Portal Development",
            paragraph:
              "At Kanak Drishti Infotech, we build B2B portals that facilitate business connections in an easy and quick manner. Our team designs and develops platforms that enable companies to display products, manage leads, and communicate simply.",
          },
          {
            heading: "WordPress Website Development",
            paragraph:
              "Kanak Drishti Infotech designs and develops WordPress websites that look nice and are user-friendly. Whether you want a simple business website or a feature-packed platform, we tailor every pixel to fit your objectives.",
          },
          {
            heading: "Custom Web Application Development",
            paragraph:
              "We build powerful custom web applications tailored to your specific business needs. From SaaS platforms to internal tools, our solutions are scalable, secure, and designed for performance.",
          },
        ],
      },

      // Block 2: Article Style with Image (Bottom)
      bottomSection: {
        heading:
          "Build Powerful Digital Experiences with Our Custom IT Solutions",
        image:
          "https://w0.peakpx.com/wallpaper/601/873/HD-wallpaper-web-design-wordpress-designer-web-development.jpg",
        content: [
          "Are you looking for a reliable partner to develop a high-performance website or web application? At Kanak Drishti Infotech, we provide customized solutions designed to meet your specific business goals and challenges.",

          "We leverage the latest technologies and modern development frameworks to build fast, secure, and scalable digital platforms. Our approach ensures that your business stays competitive in an ever-evolving digital landscape.",

          "All our solutions are fully responsive and optimized for all devices. We also integrate advanced technologies such as AI-powered chatbots and automation tools to enhance user engagement, streamline processes, and drive business growth.",
        ],
      },
    },
      },

      // Block 2: Article Style with Image (Bottom) - Feature Focused
      bottomSection: {
        heading: "Future-Ready E-commerce Solutions Tailored for Your Brand",
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-ecommerce-website-with-shopping-cart-with-the-shopping-cart-on-a-image_2975658.jpg", // Make sure to add this image in your public folder
        content: [
          "Looking for a secure and scalable E-commerce solution to grow your brand? At Kanak Drishti Infotech, we provide end-to-end development services—from custom storefronts to complex multi-vendor marketplaces—tailored to your unique business model.",

          "We leverage cutting-edge technologies like Next.js, Shopify, Magento, and WooCommerce to build stores that are lightning-fast and mobile-first. Our solutions include integrated payment gateways, real-time shipping tracking, and advanced SEO architecture to ensure your products rank high on search engines.",

          "Every E-commerce site we build is fully responsive and optimized for the best mobile shopping experience. We also integrate AI-driven product recommendations and automated abandoned cart recovery tools to **boost your sales, enhance customer retention, and maximize ROI**.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 3: Mobile Application
  // ─────────────────────────────────────────────────────────────
  {
    slug: "mobile-application",
    title: "Mobile Application",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "Mobile App Development Services | Android & iOS Apps | React Native & Flutter",
    seoDescription:
      "Build high-performance mobile apps for Android & iOS with React Native and Flutter. From MVP to enterprise-grade apps — push notifications, offline support, and seamless API integrations.",
    seoKeywords:
      "mobile app development, Android app development, iOS app development, React Native, Flutter, cross-platform app, mobile application development company",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title: "Mobile App Development Services | Android & iOS Apps",
      description:
        "High-performance mobile apps for Android & iOS with React Native and Flutter. Push notifications, offline support, and seamless API integrations.",
      url: "https://yourdomain.com/services/mobile-application",
      type: "website",
      image: "https://yourdomain.com/og/mobile-application.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "Mobile App Development | Android & iOS | React Native & Flutter",
      description:
        "High-performance cross-platform mobile apps with push notifications, offline support, and seamless integrations.",
      image: "https://yourdomain.com/og/mobile-application.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/mobile-application",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Mobile App Development Services",
      description:
        "Build high-performance mobile apps for Android & iOS with React Native and Flutter. From MVP to enterprise-grade apps.",
      url: "https://yourdomain.com/services/mobile-application",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Development",
    tagline: "Put Your Business in Every Pocket",
    heroDescription:
      "We build high-performance mobile apps for Android and iOS using React Native and Flutter. From MVP to enterprise-grade applications, our apps offer intuitive UX, offline support, push notifications, and seamless API integrations — ensuring better engagement, higher retention, and streamlined business operations on the go.",
    color: "from-emerald-400 to-teal-500",
    icon: "Smartphone",
    features: [
      {
        icon: "Zap",
        title: "Cross-Platform Development",
        description:
          "One codebase for both Android and iOS using React Native or Flutter — saving time and cost without compromising on native-like performance.",
      },
      {
        icon: "Bell",
        title: "Push Notifications",
        description:
          "Targeted push notifications to re-engage users, announce offers, and deliver real-time updates that keep your audience connected.",
      },
      {
        icon: "Shield",
        title: "Offline Mode Support",
        description:
          "Local data caching and sync mechanisms ensure core app features work even without an internet connection.",
      },
      {
        icon: "Lock",
        title: "Secure Authentication",
        description:
          "Biometric login, OTP-based auth, JWT tokens, and OAuth2 integration for a safe and seamless user experience.",
      },
      {
        icon: "BarChart2",
        title: "In-App Analytics",
        description:
          "Track user journeys, feature adoption, crash reports, and engagement metrics to continuously improve your app.",
      },
      {
        icon: "RefreshCw",
        title: "API & Third-Party Integrations",
        description:
          "Seamless integration with payment gateways, maps, CRMs, social logins, and any REST or GraphQL API your business needs.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirement Gathering",
        description:
          "Deep-dive into your app idea, user personas, core features, and technical constraints to create a detailed project blueprint.",
      },
      {
        step: "02",
        title: "UX/UI Design",
        description:
          "Interactive prototypes and pixel-perfect UI screens designed for intuitive navigation and delightful user experience.",
      },
      {
        step: "03",
        title: "Development & Testing",
        description:
          "Agile development sprints with continuous QA, device testing, and performance benchmarking throughout the build.",
      },
      {
        step: "04",
        title: "App Store Launch",
        description:
          "End-to-end support for Play Store and App Store submission, review process, and post-launch monitoring.",
      },
    ],
    faqs: [
      {
        question: "Do you build apps for both Android and iOS?",
        answer:
          "Yes. We primarily use React Native and Flutter for cross-platform apps, or native Swift/Kotlin for platform-specific requirements.",
      },
      {
        question: "How much does it cost to build a mobile app?",
        answer:
          "Costs vary based on features, platforms, and complexity. A basic app starts around ₹80,000 while enterprise apps can go higher. We provide a detailed quote after discovery.",
      },
      {
        question: "How long does app development take?",
        answer:
          "A standard app with core features takes 8–14 weeks. Complex apps with advanced integrations may take 4–6 months.",
      },
      {
        question: "Will you help us publish the app on stores?",
        answer:
          "Yes, we handle the complete submission process for Google Play Store and Apple App Store including all compliance requirements.",
      },
    ],
    aboutSection: {
      // Block 1: Simple Full Width (Top) - Agency Expertise
      topSection: {
        heading:
          "Expert Mobile App Development: Turning Ideas into Digital Reality",
        paragraphs: [
          "At Kanak Drishti Infotech, we specialize in creating high-performance, feature-rich mobile applications that provide seamless user experiences. In an era where mobile-first is the standard, we help businesses reach their customers directly on their smartphones with intuitive and powerful apps.",

          "From conceptualization and UI/UX design to final deployment on the App Store and Google Play, we handle the entire development lifecycle. Our apps are built for speed, security, and scalability, ensuring they can grow alongside your business and handle increasing user demands effortlessly.",

          "Our team consists of expert developers who stay ahead of the curve with the latest mobile technologies. We don't just build apps; we build digital assets that enhance brand loyalty, improve customer engagement, and streamline business operations through smart mobile solutions.",
        ],
      },

      // Block 2: Article Style with Image (Bottom) - Tech & Innovation
      bottomSection: {
        heading: "Custom iOS & Android Solutions for a Competitive Edge",
        image:
          "https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?semt=ais_incoming&w=740&q=80", // Path: public/images/service-mobile-app.jpg
        content: [
          "Looking for a partner to build a native or cross-platform mobile app? Whether it's a startup MVP or a complex enterprise solution, Kanak Drishti Infotech delivers tailor-made mobile strategies that align perfectly with your business objectives.",

          "We specialize in modern frameworks like React Native, Flutter, and Swift/Kotlin to ensure your app is fast, responsive, and secure. Our development process focuses on clean architecture and rigorous testing to eliminate bugs and provide a crash-free experience for your users.",

          "All our mobile solutions come with advanced integrations such as real-time notifications, secure payment gateways, and cloud synchronization. We also implement AI-driven features and analytics to **track user behavior, automate tasks, and drive continuous business growth**.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 4: Web Application
  // ─────────────────────────────────────────────────────────────
  {
    slug: "web-application",
    title: "Web Application",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "Custom Web Application Development | Scalable SaaS & Enterprise Solutions",
    seoDescription:
      "Develop scalable and secure web applications with modern UI and robust backend architecture. SaaS dashboards, management tools, and customer portals built with Next.js, Node.js & PostgreSQL.",
    seoKeywords:
      "web application development, custom web app, SaaS development, enterprise web application, Next.js web app, Node.js backend, scalable web application",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title:
        "Custom Web Application Development | Scalable SaaS & Enterprise Solutions",
      description:
        "Scalable and secure web applications with modern UI and robust backend — SaaS dashboards, management tools, and portals.",
      url: "https://yourdomain.com/services/web-application",
      type: "website",
      image: "https://yourdomain.com/og/web-application.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "Custom Web Application Development | SaaS & Enterprise",
      description:
        "Scalable, secure web apps with real-time features, role-based access, and third-party integrations.",
      image: "https://yourdomain.com/og/web-application.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/web-application",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Custom Web Application Development Services",
      description:
        "Develop scalable and secure web applications with modern UI and robust backend architecture tailored for complex workflows.",
      url: "https://yourdomain.com/services/web-application",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Development",
    tagline: "Complex Workflows. Simple Interfaces. Scalable Systems.",
    heroDescription:
      "Develop scalable and secure web applications with modern UI and a robust backend architecture tailored for complex workflows. Whether it's a SaaS dashboard, internal management tool, or customer portal — we deliver high-performance solutions with real-time data, role-based access, and seamless third-party integrations.",
    color: "from-cyan-400 to-sky-500",
    icon: Monitor,
    features: [
      {
        icon: "Layers",
        title: "Scalable Architecture",
        description:
          "Built on microservices or modular monolith patterns that scale horizontally as your user base and data volume grows.",
      },
      {
        icon: Users,
        title: "Role-Based Access Control",
        description:
          "Granular permission management for admins, managers, and end-users — ensuring the right people see the right data.",
      },
      {
        icon: "Zap",
        title: "Real-Time Features",
        description:
          "Live dashboards, instant notifications, collaborative editing, and real-time data sync powered by WebSockets.",
      },
      {
        icon: "Shield",
        title: "Enterprise-Grade Security",
        description:
          "End-to-end encryption, OWASP-compliant code, regular security audits, and data backup strategies to protect your business.",
      },
      {
        icon: "RefreshCw",
        title: "Third-Party Integrations",
        description:
          "Connect with CRMs, ERPs, payment systems, communication tools, and any API to unify your entire business ecosystem.",
      },
      {
        icon: "BarChart2",
        title: "Advanced Reporting",
        description:
          "Custom dashboards with charts, filters, exports, and scheduled reports — giving stakeholders actionable insights instantly.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Workflow Analysis",
        description:
          "Understanding your business logic, user roles, data flows, and technical requirements to architect the right solution.",
      },
      {
        step: "02",
        title: "System Design",
        description:
          "Database schema, API architecture, and UI wireframes designed for performance, maintainability, and future scalability.",
      },
      {
        step: "03",
        title: "Agile Development",
        description:
          "Iterative sprints with regular demos, feedback loops, and CI/CD pipelines for fast and reliable feature delivery.",
      },
      {
        step: "04",
        title: "Deployment & Support",
        description:
          "Cloud deployment on AWS/GCP/Azure with monitoring, auto-scaling, and dedicated post-launch support.",
      },
    ],
    faqs: [
      {
        question: "What tech stack do you use for web applications?",
        answer:
          "We primarily use Next.js/React for frontend, Node.js or Python for backend, and PostgreSQL/MongoDB for databases — chosen based on project needs.",
      },
      {
        question: "Can you integrate our web app with existing tools?",
        answer:
          "Yes. We have experience integrating with Salesforce, HubSpot, Zoho, Slack, Google Workspace, and hundreds of other platforms via APIs.",
      },
      {
        question: "How do you handle data security?",
        answer:
          "We follow OWASP security guidelines, implement encrypted data storage, use secure authentication, and conduct regular vulnerability assessments.",
      },
      {
        question: "Do you offer cloud hosting and DevOps support?",
        answer:
          "Yes. We set up and manage cloud infrastructure on AWS, GCP, or Azure with CI/CD pipelines, monitoring, and auto-scaling configurations.",
      },
    ],
    aboutSection: {
      // Block 1: Simple Full Width (Top) - Enterprise Focus
      topSection: {
        heading:
          "Next-Gen Web Application Development: Scalable Solutions for Modern Enterprises",
        paragraphs: [
          "At Kanak Drishti Infotech, we specialize in building complex, high-performance web applications that solve real-world business challenges. Unlike static websites, our web apps are dynamic engines designed to handle intricate workflows, large datasets, and multi-user environments with ease.",

          "We focus on creating robust backend architectures and intuitive frontend interfaces that empower your team and your customers. Whether you need a custom ERP, a CRM system, or a data-heavy analytics dashboard, we ensure your application is secure, fast, and built to scale as your user base grows.",

          "Our development philosophy revolves around clean code and modular design. By leveraging modern API-first strategies and cloud-ready deployments, we build digital tools that not only automate your current processes but also provide a future-proof foundation for your business's digital transformation.",
        ],
      },

      // Block 2: Article Style with Image (Bottom) - SaaS & Cloud
      bottomSection: {
        heading: "Custom SaaS & Cloud-Native Apps Built for Performance",
        image:
          "https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?semt=ais_incoming&w=740&q=80", // Path: public/images/service-web-app.jpg
        content: [
          "Are you looking to launch a SaaS product or a custom internal tool? At Kanak Drishti Infotech, we provide end-to-end web application development—from wireframing and prototyping to cloud hosting and continuous integration.",

          "We utilize a powerful tech stack including React.js, Next.js, Node.js, and Python to deliver fast-loading, secure, and SEO-friendly web applications. Our focus on 'Progressive Web App' (PWA) features ensures that your users get a near-native experience directly through their web browsers.",

          "Security is at the heart of our development process. We implement advanced data encryption, secure authentication (OAuth/JWT), and real-time database management to **protect your sensitive data, streamline operations, and drive enterprise-level growth**.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 5: Customized Software
  // ─────────────────────────────────────────────────────────────
  {
    slug: "customized-software",
    title: "Customized Software",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "Custom Software Development Services | Tailor-Made Business Solutions",
    seoDescription:
      "Get tailor-made software solutions built for your exact business processes. We automate workflows, reduce manual errors, and improve operational efficiency with custom-built tools.",
    seoKeywords:
      "custom software development, tailor-made software, business process automation, bespoke software, enterprise software development, workflow automation software",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title:
        "Custom Software Development Services | Tailor-Made Business Solutions",
      description:
        "Tailor-made software built around your business processes — automate workflows, reduce errors, and boost operational efficiency.",
      url: "https://yourdomain.com/services/customized-software",
      type: "website",
      image: "https://yourdomain.com/og/customized-software.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "Custom Software Development | Built for Your Business",
      description:
        "Software built exactly for how you work — automate tasks, eliminate errors, and gain a competitive edge.",
      image: "https://yourdomain.com/og/customized-software.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/customized-software",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Custom Software Development Services",
      description:
        "Tailor-made software solutions designed specifically around your business processes to automate tasks and improve operational efficiency.",
      url: "https://yourdomain.com/services/customized-software",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Development",
    tagline: "Software Built Exactly for How You Work",
    heroDescription:
      "Get tailor-made software solutions designed specifically around your business processes. We analyze your workflows, identify bottlenecks, and build custom tools that automate repetitive tasks, reduce manual errors, and increase operational efficiency — giving you a competitive edge with technology built exclusively for you.",
    color: "from-indigo-400 to-purple-500",
    icon: Code,
    features: [
      {
        icon: "Target",
        title: "Business Process Automation",
        description:
          "Automate repetitive manual tasks, approvals, notifications, and data entry — saving hours of work every day and eliminating human errors.",
      },
      {
        icon: "Layers",
        title: "Modular & Extensible",
        description:
          "Software built with a modular architecture so new features can be added seamlessly as your business requirements evolve.",
      },
      {
        icon: "BarChart2",
        title: "Custom Reporting & Dashboards",
        description:
          "Real-time dashboards and reports tailored to your KPIs — giving decision-makers exactly the data they need, when they need it.",
      },
      {
        icon: "RefreshCw" ,
        title: "Legacy System Integration",
        description:
          "Seamlessly connect your new software with existing tools, databases, and legacy systems to ensure smooth data flow.",
      },
      {
        icon: "Shield",
        title: "Data Security & Compliance",
        description:
          "Built with industry-standard security practices and compliance requirements (GDPR, ISO, etc.) to protect sensitive business data.",
      },
      {
        icon: "Zap",
        title: "High Performance",
        description:
          "Optimized for speed and reliability under heavy load, ensuring your operations never slow down even at peak usage.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Business Analysis",
        description:
          "In-depth study of your workflows, pain points, team structure, and goals to define the exact scope of the solution.",
      },
      {
        step: "02",
        title: "Solution Architecture",
        description:
          "Technical blueprint covering system design, database models, API structure, and integration points.",
      },
      {
        step: "03",
        title: "Iterative Development",
        description:
          "Build in phases with regular demos and feedback to ensure the software matches real-world usage perfectly.",
      },
      {
        step: "04",
        title: "Training & Handover",
        description:
          "Comprehensive training for your team, full documentation, and ongoing support to ensure smooth adoption.",
      },
    ],
    faqs: [
      {
        question:
          "How is custom software different from off-the-shelf solutions?",
        answer:
          "Custom software is built specifically for your processes, giving you 100% fit without paying for unnecessary features or adapting your workflow to a generic tool.",
      },
      {
        question: "How long does custom software development take?",
        answer:
          "Timeline depends on complexity. Simple tools take 4–8 weeks; full enterprise systems may take 3–6 months with phased delivery.",
      },
      {
        question: "What if our requirements change during development?",
        answer:
          "We follow an agile approach with flexible scope management. Change requests are reviewed, estimated, and incorporated in upcoming sprints.",
      },
      {
        question: "Will we own the source code?",
        answer:
          "Yes. Upon full payment, you receive complete ownership of the source code, documentation, and all associated assets.",
      },
    ],
    aboutSection: {
      // Block 1: Simple Full Width (Top) - Business Transformation Focus
      topSection: {
        heading:
          "Bespoke Software Development: Tailored to Your Unique Business Needs",
        paragraphs: [
          "At Kanak Drishti Infotech, we believe that your business shouldn't have to adapt to a software; the software should adapt to your business. We specialize in building customized software solutions that align perfectly with your specific operational workflows, helping you eliminate inefficiencies and manual errors.",

          "Whether you are looking to automate internal processes, manage complex data, or integrate multiple business functions into a single platform, our team delivers robust and scalable software. We have experience in developing everything from custom ERP and CRM systems to specialized inventory and HR management tools.",

          "Our approach is centered around deep business analysis. We don't just write code; we study your business model to create a digital ecosystem that improves decision-making, enhances productivity, and provides a clear competitive advantage in your industry.",
        ],
      },

      // Block 2: Article Style with Image (Bottom) - Process & Scalability
      bottomSection: {
        heading: "Scalable Enterprise Solutions for Seamless Business Growth",
        image:
          "https://kmteq.com/wp-content/uploads/2022/06/Custom-Software-Development.png", // Path: public/images/service-custom-software.jpg
        content: [
          "Are you tired of limited features in ready-made software? At Kanak Drishti Infotech, we build custom software from scratch, ensuring every feature is designed to solve a specific problem for your organization, regardless of its size or complexity.",

          "We use a combination of modern technologies and agile development methodologies to ensure your software is fast, secure, and easy to maintain. Our solutions are built with a modular architecture, allowing you to add new functionalities as your business evolves and expands over time.",

          "Every software we develop undergoes rigorous quality assurance and security audits. We also provide seamless third-party API integrations and cloud-based deployments to **centralize your operations, enhance data security, and drive long-term business efficiency**.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 6: 360° Digital Marketing
  // ─────────────────────────────────────────────────────────────
  {
    slug: "360-digital-marketing",
    title: "360° Digital Marketing",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "360° Digital Marketing Services | Full-Circle Online Growth Strategy",
    seoDescription:
      "Complete digital marketing — SEO, social media, paid ads, content strategy, and email campaigns. We build integrated funnels that attract, engage, and convert your target audience.",
    seoKeywords:
      "360 digital marketing, full-service digital marketing, online marketing agency, SEO social media paid ads, integrated marketing strategy, digital marketing company India",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title: "360° Digital Marketing Services | Full-Circle Online Growth",
      description:
        "SEO, social media, paid ads, content marketing, and email campaigns — all managed as a unified strategy for maximum online visibility.",
      url: "https://yourdomain.com/services/360-digital-marketing",
      type: "website",
      image: "https://yourdomain.com/og/360-digital-marketing.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "360° Digital Marketing | Complete Online Growth Strategy",
      description:
        "SEO, paid ads, social media, content & email — all channels, one unified strategy.",
      image: "https://yourdomain.com/og/360-digital-marketing.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/360-digital-marketing",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "360° Digital Marketing Services",
      description:
        "A full-circle digital marketing approach covering SEO, social media, paid advertising, content strategy, and email campaigns for sustainable business growth.",
      url: "https://yourdomain.com/services/360-digital-marketing",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Marketing",
    tagline: "Complete Online Visibility. Consistent Growth. Every Channel.",
    heroDescription:
      "A full-circle digital marketing approach covering SEO, social media, paid advertising, content strategy, and email campaigns. We build integrated marketing funnels that attract, engage, and convert your target audience — ensuring maximum online visibility, consistent lead flow, and sustainable business growth across all channels.",
    color: "from-orange-400 to-rose-500",
    icon: Megaphone,
    features: [
      {
        icon: "Search",
        title: "Search Engine Optimization",
        description:
          "Keyword research, on-page optimization, technical SEO, and link building to rank higher and drive quality organic traffic.",
      },
      {
        icon: "Share2",
        title: "Social Media Marketing",
        description:
          "Platform-specific strategies for Instagram, Facebook, LinkedIn, and YouTube to build communities and drive engagement.",
      },
      {
        icon: "Target",
        title: "Paid Advertising (PPC)",
        description:
          "Google Ads, Meta Ads, and display campaigns with precise targeting and continuous optimization for maximum ROAS.",
      },
      {
        icon: "FileText",
        title: "Content Marketing",
        description:
          "Blog posts, videos, infographics, and social content that educates your audience and builds long-term brand authority.",
      },
      {
        icon: "Mail",
        title: "Email Campaigns",
        description:
          "Automated drip campaigns, newsletters, and promotional emails that nurture leads and drive repeat conversions.",
      },
      {
        icon: "BarChart2",
        title: "Unified Analytics & Reporting",
        description:
          "Monthly performance reports covering all channels — traffic, leads, conversions, and ROI — in one clear dashboard.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description:
          "Complete audit of your current digital presence, competitor analysis, and a custom multi-channel growth strategy.",
      },
      {
        step: "02",
        title: "Campaign Setup",
        description:
          "Setting up all channels — SEO, paid ads, social media, and email — with tracking pixels and analytics in place.",
      },
      {
        step: "03",
        title: "Execute & Optimize",
        description:
          "Launch campaigns, monitor performance daily, A/B test creatives, and optimize for lower CAC and higher conversions.",
      },
      {
        step: "04",
        title: "Report & Scale",
        description:
          "Monthly reviews with clear insights, ROI breakdowns, and scaling recommendations for the best-performing channels.",
      },
    ],
    faqs: [
      {
        question: "What does 360° digital marketing include?",
        answer:
          "It covers SEO, social media management, paid ads (Google/Meta), content marketing, email marketing, and performance reporting — all managed as a unified strategy.",
      },
      {
        question: "How soon can I expect results?",
        answer:
          "Paid campaigns can show results within days. SEO and organic growth typically show significant impact in 3–6 months.",
      },
      {
        question: "Do you work with a fixed monthly budget?",
        answer:
          "Yes. We can work within your defined ad spend budget and allocate it across channels based on what drives the best results for your business.",
      },
      {
        question: "Will I get reports on campaign performance?",
        answer:
          "Yes. We provide detailed monthly reports covering all key metrics — impressions, clicks, leads, cost per lead, and ROI across every channel.",
      },
    ],
    aboutSection: {
      // Block 1: Simple Full Width (Top) - Brand Authority & Strategy
      topSection: {
        heading:
          "Mastering the Digital Landscape: Your 360° Strategic Marketing Partner",
        paragraphs: [
          "At Kanak Drishti Infotech, we believe that a fragmented marketing approach is a thing of the past. Our 360° Digital Marketing strategy is designed to create a cohesive and powerful brand presence across all digital touchpoints. We don't just run ads; we build comprehensive ecosystems that nurture leads and convert them into loyal brand advocates.",

          "We combine data-driven insights with creative storytelling to ensure your message reaches the right audience at the right time. From Search Engine Optimization (SEO) and Pay-Per-Click (PPC) to Content Marketing and Email Automation, we synchronize every channel to work towards a single goal: your business growth.",

          "Our team of digital strategists, data analysts, and creative thinkers work in synergy to monitor market trends and consumer behavior. We focus on building a sustainable digital footprint for your brand that not only delivers immediate results but also ensures long-term market leadership and authority.",
        ],
      },

      // Block 2: Article Style with Image (Bottom) - Performance & ROI
      bottomSection: {
        heading: "Data-Driven Marketing That Delivers Measurable ROI",
        image:
          "https://ecliqs.com/wp-content/uploads/2020/11/360-degree-2-1200x1174-1.png", // Path: public/images/service-digital-marketing.jpg
        content: [
          "Are you tired of marketing campaigns that don't reflect in your revenue? At Kanak Drishti Infotech, we eliminate guesswork by utilizing advanced analytics and performance tracking. Our 360° approach ensures that every penny of your marketing budget is optimized for the highest possible return on investment.",

          "We specialize in Social Media Marketing (SMM), Influencer collaborations, and Video Marketing to engage users where they spend most of their time. By creating personalized customer journeys, we reduce acquisition costs and significantly improve conversion rates across all platforms.",

          "Our reporting is transparent and result-oriented. We provide real-time dashboards and deep-dive audits to **amplify your brand reach, dominate search rankings, and drive exponential business revenue** through integrated digital excellence.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 7: Performance Marketing
  // ─────────────────────────────────────────────────────────────
  {
    slug: "performance-marketing",
    title: "Performance Marketing",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "Performance Marketing Services | Google Ads, Meta Ads & ROI-Driven Campaigns",
    seoDescription:
      "Results-first marketing with Google Ads, Meta Ads, and programmatic campaigns. Laser-focused targeting, A/B testing, and real-time optimization for measurable ROI and quality leads.",
    seoKeywords:
      "performance marketing, Google Ads management, Meta Ads agency, Facebook advertising, ROI-driven marketing, PPC management, paid advertising India, ROAS optimization",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title:
        "Performance Marketing | Google Ads, Meta Ads & ROI-Driven Campaigns",
      description:
        "Results-first paid marketing with laser-focused targeting, A/B testing, and continuous optimization for maximum ROI.",
      url: "https://yourdomain.com/services/performance-marketing",
      type: "website",
      image: "https://yourdomain.com/og/performance-marketing.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "Performance Marketing | Pay for Results, Not Impressions",
      description:
        "Google Ads, Meta Ads & programmatic campaigns optimized for real ROI and quality leads.",
      image: "https://yourdomain.com/og/performance-marketing.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/performance-marketing",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Performance Marketing Services",
      description:
        "Results-first marketing campaigns powered by data and real-time analytics across Google Ads, Meta Ads, and programmatic channels.",
      url: "https://yourdomain.com/services/performance-marketing",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Marketing",
    tagline: "Pay for Results. Not Just Impressions.",
    heroDescription:
      "Results-first marketing campaigns powered by data and real-time analytics. We manage Google Ads, Meta Ads, and programmatic campaigns with laser-focused targeting, A/B testing, and continuous optimization — ensuring every rupee you spend delivers measurable ROI, quality leads, and scalable customer acquisition.",
    color: "from-amber-400 to-orange-500",
    icon: TrendingUp,
    features: [
      {
        icon:"Target",
        title: "Precision Audience Targeting",
        description:
          "Demographic, interest, behavioral, and lookalike audience targeting to reach people most likely to convert into paying customers.",
      },
      {
        icon: "Zap",
        title: "Google Ads Management",
        description:
          "Search, Display, Shopping, and YouTube campaigns with smart bidding strategies and negative keyword optimization for maximum efficiency.",
      },
      {
        icon: "Share2",
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "Creative-led campaigns across Facebook, Instagram, and Reels with full funnel coverage from awareness to conversion.",
      },
      {
        icon: "RefreshCw",
        title: "Continuous A/B Testing",
        description:
          "Systematic testing of ad creatives, headlines, landing pages, and CTAs to consistently improve click-through and conversion rates.",
      },
      {
        icon: "BarChart2",
        title: "Real-Time Performance Tracking",
        description:
          "Live dashboards showing spend, impressions, clicks, conversions, CAC, and ROAS so you always know exactly what's working.",
      },
      {
        icon: "TrendingUp",
        title: "Retargeting Campaigns",
        description:
          "Re-engage warm audiences who visited your site or engaged with your content but didn't convert — recovering lost revenue.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Goal & Funnel Mapping",
        description:
          "Define conversion goals, map the buyer journey, and identify the highest-impact touchpoints for paid campaigns.",
      },
      {
        step: "02",
        title: "Campaign Architecture",
        description:
          "Structure campaigns by objective, audience segment, and budget allocation across platforms for maximum coverage.",
      },
      {
        step: "03",
        title: "Launch & Optimize Daily",
        description:
          "Monitor performance metrics daily, pause underperforming ads, scale winners, and adjust bids in real time.",
      },
      {
        step: "04",
        title: "Report & Scale",
        description:
          "Weekly performance snapshots and monthly deep-dive reports with clear ROAS analysis and scaling recommendations.",
      },
    ],
    faqs: [
      {
        question: "What platforms do you run performance campaigns on?",
        answer:
          "We manage campaigns on Google Ads (Search, Display, YouTube, Shopping), Meta Ads (Facebook & Instagram), and LinkedIn Ads for B2B.",
      },
      {
        question: "What is a good ROAS to expect?",
        answer:
          "ROAS varies by industry and product margin. We typically target a minimum 3x ROAS for e-commerce and focus on CPL for lead generation businesses.",
      },
      {
        question: "Is there a minimum ad budget required?",
        answer:
          "We recommend a minimum monthly ad spend of ₹30,000–₹50,000 to gather enough data for meaningful optimization.",
      },
      {
        question: "How do you prevent ad budget wastage?",
        answer:
          "Through negative keyword lists, audience exclusions, placement controls, dayparting, and daily budget monitoring to ensure every rupee is spent efficiently.",
      },
    ],
    aboutSection: {
      // Block 1: Simple Full Width (Top) - Results-Oriented Strategy
      topSection: {
        heading:
          "ROI-Driven Performance Marketing: Scaling Your Business with Precision",
        paragraphs: [
          "At Kanak Drishti Infotech, we understand that every marketing rupee counts. Our Performance Marketing services are designed to move beyond brand awareness and focus strictly on measurable outcomes—whether it's leads, sales, or app installs. We don't just run campaigns; we engineer growth engines that scale with your business goals.",

          "We utilize a data-first approach to identify high-converting audiences across multiple digital channels. By combining advanced tracking, A/B testing, and real-time optimization, we ensure that your advertising budget is always working hard to deliver the lowest possible Cost Per Acquisition (CPA) and the highest Return on Ad Spend (ROAS).",

          "Our team of performance experts specializes in navigating complex ad algorithms and consumer behavior patterns. We focus on transparency and accountability, providing you with clear, bottom-line results that show exactly how our marketing efforts are contributing to your company’s monthly revenue and long-term scalability.",
        ],
      },

      // Block 2: Article Style with Image (Bottom) - Execution & Optimization
      bottomSection: {
        heading: "High-Impact Campaigns Built on Analytics and Attribution",
        image:
          "https://anirup.com/wp-content/uploads/2025/05/Performance-Marketing-Agency.jpeg", // Path: public/images/service-performance-marketing.jpg
        content: [
          "Are you looking to scale your sales or capture high-quality leads consistently? At Kanak Drishti Infotech, we provide end-to-end performance marketing management—from creative ad design and copywriting to technical pixel setup and funnel optimization.",

          "We dominate platforms like Google Ads (SEM), Meta Ads (Facebook/Instagram), LinkedIn, and Programmatic advertising to put your brand in front of ready-to-buy customers. Our strategies involve deep-funnel tracking, ensuring we optimize for the actions that actually impact your profit margins, not just vanity metrics like clicks or likes.",

          "We continuously refine your campaigns through rigorous data analysis and remarketing strategies. Our goal is to **maximize your conversion rates, dominate your market niche, and drive exponential growth** through aggressive, numbers-backed digital advertising.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 8: Content Marketing
  // ─────────────────────────────────────────────────────────────
  {
    slug: "content-marketing",
    title: "Content Marketing",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "Content Marketing Services | SEO Blogs, Case Studies & Brand Authority",
    seoDescription:
      "High-value content — blogs, case studies, infographics, and videos — that builds brand authority, drives organic traffic, and nurtures prospects through every funnel stage.",
    seoKeywords:
      "content marketing services, SEO blog writing, content strategy, brand authority, case study writing, infographic design, content marketing agency India",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title: "Content Marketing Services | Educate, Engage & Convert",
      description:
        "SEO blogs, case studies, infographics, and videos that build brand authority and drive consistent organic traffic.",
      url: "https://yourdomain.com/services/content-marketing",
      type: "website",
      image: "https://yourdomain.com/og/content-marketing.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "Content Marketing | Blogs, Case Studies & Brand Authority",
      description:
        "Content that educates, engages, and converts — built on search intent and audience psychology.",
      image: "https://yourdomain.com/og/content-marketing.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/content-marketing",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Content Marketing Services",
      description:
        "High-value content including blogs, case studies, infographics, and videos that establishes brand authority and drives organic traffic.",
      url: "https://yourdomain.com/services/content-marketing",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Marketing",
    tagline: "Content That Educates, Engages & Converts",
    heroDescription:
      "We create high-value content — blogs, case studies, infographics, videos, and whitepapers — that establishes your brand as an industry authority. Our content strategy is built around search intent and audience psychology, driving consistent organic traffic, improving engagement, and nurturing prospects through every stage of the funnel.",
    color: "from-lime-400 to-green-500",
    icon: "FileText",
    features: [
      {
        icon: "PenTool",
        title: "SEO Blog Writing",
        description:
          "In-depth, keyword-optimized blog posts that rank on Google, answer your audience's questions, and drive consistent organic traffic.",
      },
      {
        icon: "Eye",
        title: "Visual Content Creation",
        description:
          "Infographics, social media graphics, and branded visuals that simplify complex ideas and stop the scroll.",
      },
      {
        icon: "FileText",
        title: "Case Studies & Whitepapers",
        description:
          "Trust-building long-form content that showcases your expertise, results, and solutions to high-intent B2B prospects.",
      },
      {
        icon: "Share2",
        title: "Social Media Content",
        description:
          "Platform-native content calendars with engaging posts, reels scripts, and carousels tailored to each social channel.",
      },
      {
        icon: "Target",
        title: "Content Strategy & Planning",
        description:
          "A full-funnel content roadmap covering topics, formats, publishing frequency, and distribution channels aligned with your goals.",
      },
      {
        icon: "BarChart2",
        title: "Content Performance Tracking",
        description:
          "Monthly reports tracking organic traffic, time on page, bounce rate, social shares, and lead attribution from content.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audience & Keyword Research",
        description:
          "Identify your ideal reader personas, map their questions, and find high-intent keywords they search for.",
      },
      {
        step: "02",
        title: "Content Calendar",
        description:
          "Build a structured monthly content plan covering topics, formats, channels, and publishing schedule.",
      },
      {
        step: "03",
        title: "Create & Publish",
        description:
          "Expert writers and designers produce content optimized for both search engines and human readers.",
      },
      {
        step: "04",
        title: "Distribute & Analyze",
        description:
          "Promote content across channels and analyze performance to refine the strategy for compounding results.",
      },
    ],
    faqs: [
      {
        question: "How many blog posts do you publish per month?",
        answer:
          "Our standard packages include 4–8 SEO blogs per month. We can scale up based on your budget and growth targets.",
      },
      {
        question: "Do you handle content for social media too?",
        answer:
          "Yes. We create social media content calendars including post copy, graphic briefs, and reel scripts as part of our content packages.",
      },
      {
        question: "How long before content starts driving traffic?",
        answer:
          "SEO content typically takes 2–4 months to gain traction. With a consistent strategy, organic traffic compounds significantly over 6–12 months.",
      },
      {
        question: "Do you write content for all industries?",
        answer:
          "Yes. Our team researches your industry thoroughly and we also work with subject matter experts when needed for highly technical niches.",
      },
    ],
    aboutSection: {
      // Block 1: Simple Full Width (Top) - Brand Voice & Trust
      topSection: {
        heading:
          "Strategic Content Marketing: Building Authority Through Storytelling",
        paragraphs: [
          "At Kanak Drishti Infotech, we believe that content is the bridge between a brand and its audience. Our Content Marketing services are not just about publishing articles; they are about creating valuable, relevant, and consistent experiences that resonate with your target customers and establish your brand as a thought leader in the industry.",

          "We focus on understanding your audience's pain points and providing them with the answers they are searching for. By crafting a unique brand voice and a well-defined content strategy, we help you build long-term trust, increase organic engagement, and nurture leads through the entire marketing funnel without being 'salesy'.",

          "Our team of creative writers and strategists ensures that every piece of content—be it a blog post, a whitepaper, or a video script—is aligned with your business goals. We don't just create noise; we create high-impact assets that drive traffic, enhance SEO rankings, and position your brand as the go-to resource in your niche.",
        ],
      },

      // Block 2: Article Style with Image (Bottom) - Distribution & Engagement
      bottomSection: {
        heading: "Multi-Channel Content Strategies That Drive Conversions",
        image:
          "https://www.mbaskool.com/2019_images/stories/mar_images/content-marketing.jpg", // Path: public/images/service-content-marketing.jpg
        content: [
          "Are you looking to boost your organic reach and customer loyalty? At Kanak Drishti Infotech, we provide end-to-end content lifecycle management—from research and ideation to high-quality production and strategic distribution across all digital platforms.",

          "We specialize in creating diverse content formats including SEO-optimized blogs, engaging newsletters, interactive infographics, and compelling social media copies. Our approach ensures that your content is discoverable on search engines while remaining shareable on social networks, maximizing your brand's visibility.",

          "We use advanced content analytics to track performance and refine our strategy based on real user interactions. Our goal is to **amplify your brand message, improve customer retention, and drive sustainable business growth** through the power of high-value digital content.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 9: Email Marketing
  // ─────────────────────────────────────────────────────────────
  {
    slug: "email-marketing",
    title: "Email Marketing",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "Email Marketing Services | Automated Campaigns, Drip Flows & High ROI",
    seoDescription:
      "Personalized, automated email journeys — welcome sequences, drip campaigns, cart abandonment, and re-engagement flows. Improve open rates, nurture leads, and drive repeat purchases.",
    seoKeywords:
      "email marketing services, email automation, drip campaigns, Mailchimp, Klaviyo, email marketing agency, newsletter marketing, email ROI",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title: "Email Marketing Services | Automated Campaigns & High ROI",
      description:
        "Personalized email journeys — welcome flows, drip campaigns, cart abandonment, and re-engagement sequences that convert.",
      url: "https://yourdomain.com/services/email-marketing",
      type: "website",
      image: "https://yourdomain.com/og/email-marketing.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "Email Marketing | The Highest ROI Channel, Done Right",
      description:
        "Automated email sequences, segmentation, A/B testing, and deliverability optimization for maximum open rates.",
      image: "https://yourdomain.com/og/email-marketing.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/email-marketing",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Email Marketing Services",
      description:
        "Personalized, automated email journeys that improve open rates, nurture relationships, drive repeat purchases, and turn buyers into loyal customers.",
      url: "https://yourdomain.com/services/email-marketing",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Marketing",
    tagline: "The Highest ROI Channel. Done Right.",
    heroDescription:
      "Craft personalized, automated email journeys that speak directly to your audience. From welcome sequences and drip campaigns to promotional blasts and re-engagement flows — we design, write, and optimize emails that improve open rates, nurture relationships, drive repeat purchases, and turn one-time buyers into loyal customers.",
    color: "from-pink-400 to-rose-400",
    icon: "Mail",
    features: [
      {
        icon: Send,
        title: "Automated Email Sequences",
        description:
          "Welcome flows, onboarding journeys, cart abandonment, and post-purchase sequences that run 24/7 to nurture leads automatically.",
      },
      {
        icon: "Target",
        title: "Advanced Segmentation",
        description:
          "Segment your audience by behavior, purchase history, location, and engagement to send hyper-relevant messages that convert.",
      },
      {
        icon: "PenTool",
        title: "Custom Email Design",
        description:
          "On-brand, mobile-responsive email templates designed for high readability and click-through — crafted to match your visual identity.",
      },
      {
        icon: "RefreshCw",
        title: "A/B Testing",
        description:
          "Systematically test subject lines, CTAs, send times, and email copy to continuously improve open rates and conversions.",
      },
      {
        icon: "BarChart2",
        title: "Deliverability Optimization",
        description:
          "Domain warm-up, SPF/DKIM/DMARC setup, list hygiene, and spam score monitoring to ensure emails land in the inbox.",
      },
      {
        icon: "TrendingUp",
        title: "Performance Analytics",
        description:
          "Detailed reports on open rate, CTR, unsubscribes, revenue per email, and list growth to measure and improve every campaign.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Strategy & Segmentation",
        description:
          "Map your email goals, audience segments, and automation triggers for a structured email marketing plan.",
      },
      {
        step: "02",
        title: "Design & Copywriting",
        description:
          "Create compelling email templates and persuasive copy tailored to each audience segment and funnel stage.",
      },
      {
        step: "03",
        title: "Setup & Automate",
        description:
          "Configure automation workflows, triggers, delays, and conditions in your ESP (Mailchimp, Klaviyo, etc.).",
      },
      {
        step: "04",
        title: "Monitor & Improve",
        description:
          "Track campaign performance weekly, run A/B tests, clean the list, and optimize flows for better results month over month.",
      },
    ],
    faqs: [
      {
        question: "Which email platforms do you work with?",
        answer:
          "We work with Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Zoho Campaigns, and most major email service providers.",
      },
      {
        question: "Can you help grow our email list?",
        answer:
          "Yes. We design opt-in forms, lead magnets, and landing pages to attract quality subscribers who are genuinely interested in your offers.",
      },
      {
        question: "What open rates can we expect?",
        answer:
          "Industry average is 20–25%. With proper segmentation, personalization, and clean lists, we typically achieve 30–40% open rates for our clients.",
      },
      {
        question: "Is email marketing still effective in 2024?",
        answer:
          "Absolutely. Email delivers an average ROI of ₹36 for every ₹1 spent — making it the highest-ROI digital marketing channel available.",
      },
    ],
    aboutSection: {
      // Block 1: Simple Full Width (Top) - Direct Communication & Retention
      topSection: {
        heading:
          "Strategic Email Marketing: Building Profitable Relationships in the Inbox",
        paragraphs: [
          "At Kanak Drishti Infotech, we believe that your email list is your most valuable digital asset. Our Email Marketing services are designed to cut through the noise and deliver personalized messages that resonate with your subscribers, turning passive readers into active customers and long-term brand loyalists.",

          "We focus on creating data-driven campaigns that go beyond simple newsletters. By utilizing advanced segmentation and behavioral triggers, we ensure that every email sent is relevant to the recipient's interests and stage in the buying journey—maximizing open rates, click-through rates, and overall engagement.",

          "Our team of copywriters and strategists works to craft compelling subject lines and high-converting content. We don't just send emails; we build automated communication funnels that consistently nurture your leads, recover abandoned carts, and drive repeat business with minimal manual effort.",
        ],
      },

      // Block 2: Article Style with Image (Bottom) - Automation & ROI
      bottomSection: {
        heading: "High-Converting Automation & Lifecycle Marketing Strategies",
        image:
          "https://img.freepik.com/free-vector/email-promotion-digital-marketing-online-promo-concept-flat-line-art-icons_126523-2186.jpg?semt=ais_incoming&w=740&q=80", // Path: public/images/service-email-marketing.jpg
        content: [
          "Are you looking to automate your sales process and improve customer retention? At Kanak Drishti Infotech, we provide end-to-end email marketing management—including list building, template design, A/B testing, and advanced workflow automation.",

          "We specialize in creating 'Drip Campaigns' and 'Welcome Sequences' that introduce your brand to new prospects and guide them toward their first purchase. Our approach ensures high deliverability, keeping your messages out of the spam folder and right where they belong—in front of your customers.",

          "We provide detailed analytics on every campaign, tracking conversions and revenue impact. Our goal is to **personalize your customer experience, boost your lifetime customer value (LTV), and drive consistent ROI** through the power of strategic inbox marketing.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 10: Search Engine Optimization (SEO)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "SEO Services | Rank Higher on Google with Expert Search Engine Optimization",
    seoDescription:
      "Dominate search rankings with technical audits, keyword research, on-page optimization, content strategy, and white-hat link building. Drive long-term organic traffic and visibility.",
    seoKeywords:
      "SEO services, search engine optimization, keyword research, on-page SEO, link building, technical SEO, local SEO, Google ranking, SEO agency India",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title: "SEO Services | Rank Higher on Google | Expert SEO Agency",
      description:
        "Technical SEO audits, keyword research, on-page optimization, and white-hat link building for sustainable Google rankings.",
      url: "https://yourdomain.com/services/search-engine-optimization",
      type: "website",
      image: "https://yourdomain.com/og/search-engine-optimization.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "SEO Services | Rank Higher. Get Found. Grow Organically.",
      description:
        "Comprehensive SEO — technical audits, keyword research, on-page fixes, and link building for long-term Google visibility.",
      image: "https://yourdomain.com/og/search-engine-optimization.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/search-engine-optimization",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Search Engine Optimization Services",
      description:
        "Comprehensive SEO services including technical audits, keyword research, on-page optimization, content strategy, and white-hat link building.",
      url: "https://yourdomain.com/services/search-engine-optimization",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Marketing",
    tagline: "Rank Higher. Get Found. Grow Organically.",
    heroDescription:
      "Dominate search rankings with our comprehensive SEO services — technical audits, keyword research, on-page optimization, content strategy, and high-authority link building. We focus on sustainable, white-hat strategies that improve your domain authority, increase organic traffic, and ensure long-term visibility on Google and Bing.",
    color: "from-yellow-400 to-amber-500",
    icon: Search,
    features: [
      {
        icon: "Search",
        title: "In-Depth Keyword Research",
        description:
          "Identify high-intent, low-competition keywords your target audience uses — building a strategy around terms that drive qualified traffic.",
      },
      {
        icon: "Settings",
        title: "Technical SEO Audit",
        description:
          "Fix crawl errors, improve site speed, optimize Core Web Vitals, set up schema markup, and ensure perfect indexability.",
      },
      {
        icon: "PenTool",
        title: "On-Page Optimization",
        description:
          "Optimize title tags, meta descriptions, heading hierarchy, internal linking, and content structure for every key page.",
      },
      {
        icon: "Globe",
        title: "Link Building",
        description:
          "High-authority, relevant backlinks through guest posting, digital PR, and niche outreach to boost domain authority sustainably.",
      },
      {
        icon: "FileText",
        title: "SEO Content Strategy",
        description:
          "Topical authority-building content clusters, pillar pages, and FAQ content designed to rank and convert for target keywords.",
      },
      {
        icon: "BarChart2",
        title: "Rank Tracking & Reporting",
        description:
          "Monthly keyword ranking reports, organic traffic analysis, and competitor benchmarking to measure real progress.",
      },
    ],
    process: [
      {
        step: "01",
        title: "SEO Audit",
        description:
          "Complete technical, on-page, and off-page audit to identify all issues and opportunities holding your site back.",
      },
      {
        step: "02",
        title: "Keyword & Competitor Analysis",
        description:
          "Map your target keywords, analyze competitor rankings, and build a content and link strategy to outperform them.",
      },
      {
        step: "03",
        title: "On-Page & Technical Fixes",
        description:
          "Implement all optimizations — meta tags, speed improvements, schema, internal links, and content updates.",
      },
      {
        step: "04",
        title: "Off-Page & Reporting",
        description:
          "Execute link building campaigns and deliver monthly reports with ranking progress, traffic growth, and next steps.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most clients see measurable improvements in 3–4 months. Significant organic growth typically builds over 6–12 months with consistent effort.",
      },
      {
        question: "Do you use white-hat SEO practices?",
        answer:
          "Yes. We strictly follow Google's Webmaster Guidelines and only use ethical, sustainable SEO practices that deliver long-term results.",
      },
      {
        question: "Will you work on local SEO too?",
        answer:
          "Yes. We optimize Google Business Profiles, local citations, and location-specific landing pages to help you rank in local search results.",
      },
      {
        question: "What reports will I receive?",
        answer:
          "Monthly reports covering keyword rankings, organic traffic, backlinks acquired, technical health score, and action items for the next month.",
      },
    ],
    aboutSection: {
      // Block 1: Simple Full Width (Top) - Authority & Visibility
      topSection: {
        heading:
          "Strategic Search Engine Optimization: Dominate the First Page of Google",
        paragraphs: [
          "At Kanak Drishti Infotech, we understand that being online is not enough; you need to be discoverable. Our SEO services are designed to catapult your website to the top of search engine results, ensuring that your business is the first thing potential customers see when they search for services in your industry.",

          "We move beyond simple keyword stuffing to a sophisticated, data-driven SEO strategy. By focusing on intent-based search analysis and high-authority link building, we help you build a sustainable organic presence that continues to drive high-quality traffic and leads to your website long after the initial optimization.",

          "Our team of SEO specialists stays ahead of the ever-changing search algorithms. We combine creative content strategies with deep technical expertise to ensure your brand not only ranks higher but also maintains its authority, outperforming competitors and capturing the lion's share of your market’s search volume.",
        ],
      },

      // Block 2: Article Style with Image (Bottom) - Technical & On-Page
      bottomSection: {
        heading: "Comprehensive SEO Solutions for Sustainable Organic Growth",
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/029/154/584/small/seo-search-engine-optimization-seo-on-wooden-cubes-website-internet-business-technology-concept-photo.jpg", // Path: public/images/service-seo.jpg
        content: [
          "Are you struggling to get organic traffic or falling behind your competitors? At Kanak Drishti Infotech, we provide end-to-end SEO management—including technical audits, on-page optimization, and strategic off-page growth to improve your domain authority.",

          "We utilize advanced tools to perform deep competitor analysis and identify 'low-hanging fruit' keywords that can deliver immediate ranking boosts. Our technical SEO focus ensures your site is lightning-fast, mobile-friendly, and perfectly indexed, meeting all of Google’s Core Web Vitals for a superior user experience.",

          "All our strategies are white-hat and focused on long-term success. We provide transparent monthly reporting and real-time tracking to **boost your search rankings, increase organic conversions, and drive consistent business revenue** through the power of search excellence.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICE 11: Social Media Optimization (SMO)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "social-media-optimization",
    title: "Social Media Optimization",

    // ── SEO Meta Tags ──────────────────────────────────────────
    seoTitle:
      "Social Media Optimization Services | SMO for Instagram, Facebook & LinkedIn",
    seoDescription:
      "Build a powerful social media presence with profile optimization, content calendar management, creative post design, hashtag strategy, and community engagement for real follower growth.",
    seoKeywords:
      "social media optimization, SMO services, Instagram marketing, Facebook page management, LinkedIn optimization, social media agency India, social media content creation",

    // ── Open Graph (Facebook / LinkedIn) ──────────────────────
    openGraph: {
      title: "Social Media Optimization Services | SMO Agency",
      description:
        "Profile optimization, content calendars, creative designs, hashtag strategy, and community management for consistent social media growth.",
      url: "https://yourdomain.com/services/social-media-optimization",
      type: "website",
      image: "https://yourdomain.com/og/social-media-optimization.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ──────────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "SMO Services | Build a Brand People Follow, Trust & Buy From",
      description:
        "Instagram, Facebook, LinkedIn — profile optimization, content strategy, and community management for real growth.",
      image: "https://yourdomain.com/og/social-media-optimization.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ─────────────────────────────────────────
    canonical: "https://yourdomain.com/services/social-media-optimization",

    // ── WebPage Schema (JSON-LD) ──────────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Social Media Optimization Services",
      description:
        "Build a powerful, consistent brand presence across social platforms with profile optimization, content management, and community engagement.",
      url: "https://yourdomain.com/services/social-media-optimization",
      provider: {
        "@type": "Organization",
        name: "YourBrandName",
        url: "https://yourdomain.com",
      },
    },
    // ── SEO Fields End ────────────────────────────────────────

    tag: "Marketing",
    tagline: "Build a Brand People Follow, Trust & Buy From",
    heroDescription:
      "Build a powerful, consistent brand presence across Instagram, Facebook, LinkedIn, and more. Our SMO services include profile optimization, content calendar management, creative post design, hashtag strategy, and community engagement — driving follower growth, boosting brand awareness, and converting social audiences into paying customers.",
    color: "from-fuchsia-400 to-purple-500",
    icon: Share2,
    features: [
      {
        icon: "Star",
        title: "Profile Optimization",
        description:
          "Complete optimization of bios, profile images, highlights, keywords, and links across all platforms for maximum discoverability.",
      },
      {
        icon: "PenTool",
        title: "Creative Content Design",
        description:
          "Scroll-stopping post graphics, carousel designs, and reel concepts crafted to reflect your brand identity and drive engagement.",
      },
      {
        icon: "Target",
        title: "Hashtag & SEO Strategy",
        description:
          "Research-backed hashtag sets and platform-specific SEO tactics to increase organic reach and attract the right followers.",
      },
      {
        icon: "Users",
        title: "Community Management",
        description:
          "Timely responses to comments and DMs, proactive engagement with your audience, and reputation management to build trust.",
      },
      {
        icon: "Clock",
        title: "Content Calendar Management",
        description:
          "Planned, consistent posting schedules with the right content mix — educational, promotional, and entertaining — for each platform.",
      },
      {
        icon: "BarChart2",
        title: "Analytics & Insights",
        description:
          "Monthly performance reports covering reach, impressions, follower growth, engagement rate, and top-performing content.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description:
          "Audit existing profiles, analyze competitors, identify content gaps, and define a platform-specific growth strategy.",
      },
      {
        step: "02",
        title: "Profile & Brand Setup",
        description:
          "Optimize all profiles, create a visual brand kit, and establish content pillars aligned with your audience's interests.",
      },
      {
        step: "03",
        title: "Content Creation & Posting",
        description:
          "Design and schedule posts, reels, and stories on a consistent calendar with full caption and hashtag optimization.",
      },
      {
        step: "04",
        title: "Engage & Grow",
        description:
          "Active community management, follower engagement, influencer outreach, and monthly analytics to drive ongoing growth.",
      },
    ],
    faqs: [
      {
        question: "Which social media platforms do you manage?",
        answer:
          "We manage Instagram, Facebook, LinkedIn, Twitter/X, YouTube, and Pinterest — with platform selection based on where your audience is most active.",
      },
      {
        question: "How many posts per week do you create?",
        answer:
          "Standard packages include 3–5 posts per week per platform. We can customize frequency based on your goals and budget.",
      },
      {
        question: "Do you create video content too?",
        answer:
          "Yes. We create reel scripts, short-form video concepts, and can produce edited videos with provided footage or motion graphics.",
      },
      {
        question: "How do you measure social media success?",
        answer:
          "We track follower growth, reach, impressions, engagement rate, profile visits, link clicks, and conversion events tied to your business goals.",
      },
    ],
    aboutSection: {
      // Block 1: Simple Full Width (Top) - Engagement & Brand Presence
      topSection: {
        heading:
          "Strategic Social Media Optimization: Building a Loyal Digital Community",
        paragraphs: [
          "At Kanak Drishti Infotech, we understand that Social Media is the heartbeat of modern brand communication. Our SMO services are designed to transform your social profiles from static pages into vibrant, engaging communities that foster trust and encourage direct interaction with your target audience.",

          "We focus on creating a consistent brand identity across all platforms, ensuring that your voice, visuals, and values resonate with your followers. By optimizing your profiles and posting strategies, we help you increase your organic reach, improve brand recall, and stay at the top of your customers' minds in an increasingly crowded digital space.",

          "Our team of social media strategists doesn't just post content; we engineer engagement. We analyze peak activity times, trending topics, and audience demographics to ensure that every update contributes to building a strong, authentic relationship between your brand and its community.",
        ],
      },

      // Block 2: Article Style with Image (Bottom) - Virality & Growth
      bottomSection: {
        heading:
          "Maximize Your Viral Potential with Data-Driven Social Strategies",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2021/11/MG/HK/LV/140174074/social-media-optimization-smo-500x500.jpg", // Path: public/images/service-smo.jpg
        content: [
          "Are you struggling to get likes, shares, or meaningful comments on your posts? At Kanak Drishti Infotech, we provide comprehensive SMO management—including profile auditing, hashtag strategy, and interactive content creation to boost your social authority.",

          "We specialize in optimizing your presence on Facebook, Instagram, LinkedIn, and Twitter to drive high-quality referral traffic back to your website. Our approach focuses on 'Shareability'—creating content that users feel compelled to interact with, thereby expanding your reach exponentially through their personal networks.",

          "We continuously monitor social metrics and sentiment to refine our approach. Our goal is to **amplify your social footprint, enhance brand credibility, and drive consistent user engagement** through creative excellence and strategic social optimization.",
        ],
      },
    },
  },
];

export function getServiceBySlug(slug) {
  return servicesData.find((s) => s.slug === slug);
}
