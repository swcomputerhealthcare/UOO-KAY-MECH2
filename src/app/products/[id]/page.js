import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ArrowLeft, Send } from "lucide-react";

// Generate static routes at build time for all 41 products
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

// Generate dynamic meta tags for search engine bots
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return {};

  const title = `${product.name} | Precision Machined Components | UK MECH Industries`;
  const description = `${product.desc} Precision machined to tolerances of ${product.specs.tolerances} in ${product.specs.materials}. Custom orders welcome.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://uookaymechindustries.com/products/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://uookaymechindustries.com/products/${id}`,
      siteName: "UK MECH Industries",
      type: "website",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Generate structured product data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://uookaymechindustries.com${product.image}`,
    "description": product.desc,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "UK MECH Industries"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "price": "Contact for pricing",
      "priceValuedAssociated": "Contact for pricing"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Tolerances",
        "value": product.specs.tolerances
      },
      {
        "@type": "PropertyValue",
        "name": "Materials",
        "value": product.specs.materials
      },
      {
        "@type": "PropertyValue",
        "name": "Operations",
        "value": product.specs.operations
      },
      {
        "@type": "PropertyValue",
        "name": "Hardness/Finish",
        "value": product.specs.hardness
      }
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://uookaymechindustries.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://uookaymechindustries.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://uookaymechindustries.com/products/${id}`
      }
    ]
  };

  return (
    <div className="bg-brand-bg min-h-screen py-32 border-b border-[#D7DDE5]">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#09285F] hover:text-[#EC6713] transition-colors mb-12 uppercase tracking-wider group"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          [ Back to Catalog ]
        </Link>

        {/* Two-Column Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Image wrapper */}
          <div className="lg:col-span-6 w-full">
            <div className="w-full h-[320px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden bg-[#F6F7F8] border border-[#D7DDE5] flex items-center justify-center p-8 relative shadow-sm">
              <Image
                src={product.image}
                alt={`Precision engineered ${product.name} machined by UK MECH Industries`}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Right Column: Specifications & Content */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#EC6713] tracking-[0.2em] uppercase block mb-3">
                [ {product.category} ]
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-[#09285F] tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-sm text-[#5E6673] leading-relaxed font-sans font-medium">
              {product.desc}
            </p>

            {/* Technical Specification Bento Cards */}
            <div className="border-t border-[#D7DDE5] pt-8">
              <h2 className="font-mono text-xs font-bold text-[#09285F] uppercase tracking-wider mb-6">
                [ Technical Specifications Sheet ]
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#5E6673] tracking-wider uppercase block">
                    Manufacturing Tolerances
                  </span>
                  <span className="text-sm font-bold text-[#09285F] block">
                    {product.specs.tolerances}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#5E6673] tracking-wider uppercase block">
                    Materials Used
                  </span>
                  <span className="text-sm font-bold text-[#09285F] block">
                    {product.specs.materials}
                  </span>
                </div>

                <div className="space-y-1 border-t border-[#D7DDE5]/40 pt-4">
                  <span className="text-[9px] font-mono text-[#5E6673] tracking-wider uppercase block">
                    Machining Operations
                  </span>
                  <span className="text-sm font-bold text-[#09285F] block">
                    {product.specs.operations}
                  </span>
                </div>

                <div className="space-y-1 border-t border-[#D7DDE5]/40 pt-4">
                  <span className="text-[9px] font-mono text-[#5E6673] tracking-wider uppercase block">
                    Hardness & Surface Finish
                  </span>
                  <span className="text-sm font-bold text-[#09285F] block">
                    {product.specs.hardness}
                  </span>
                </div>

                <div className="space-y-1 border-t border-[#D7DDE5]/40 pt-4 sm:col-span-2">
                  <span className="text-[9px] font-mono text-[#5E6673] tracking-wider uppercase block">
                    Industrial Applications
                  </span>
                  <span className="text-sm font-bold text-[#09285F] block">
                    {product.specs.applications}
                  </span>
                </div>

                <div className="space-y-1 border-t border-[#D7DDE5]/40 pt-4 sm:col-span-2">
                  <span className="text-[9px] font-mono text-[#5E6673] tracking-wider uppercase block">
                    Sectors Served
                  </span>
                  <span className="text-sm font-bold text-[#09285F] block">
                    {product.specs.industries}
                  </span>
                </div>
              </div>
            </div>

            {/* B2B Call-To-Action (RFQ Link) */}
            <div className="pt-4">
              <Link
                href={`/contact?interest=${encodeURIComponent(product.name)}&material=${encodeURIComponent(product.specs.materials)}&tolerance=${encodeURIComponent(product.specs.tolerances)}&treatment=${encodeURIComponent(product.specs.hardness)}#contact-form`}
                className="connectBtn"
              >
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
