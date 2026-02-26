import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Lab K9 | エンタープライズAI支援 — 戦略からシステム構築まで",
    template: "%s | Lab K9",
  },
  description:
    "AI戦略コンサルティング、LLMチャットボット開発、業務自動化、生成AI研修を提供。NTTデータ・トヨタ自動車をはじめとする大手企業のAI推進を、戦略立案からシステム構築・組織定着まで一気通貫で支援します。",
  keywords: [
    "AI戦略コンサルティング",
    "生成AI研修",
    "LLM開発",
    "AI導入支援",
    "エンタープライズAI",
    "Lab K9",
  ],
  authors: [{ name: "Lab K9" }],
  creator: "Lab K9",
  publisher: "Lab K9",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lab-k9.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Lab K9 | エンタープライズAI支援 — 戦略からシステム構築まで",
    description:
      "AI戦略コンサルティング、LLM開発、生成AI研修を提供。大手企業のAI推進を一気通貫で支援します。",
    url: "https://lab-k9.com",
    siteName: "Lab K9",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lab K9 | エンタープライズAI支援 — 戦略からシステム構築まで",
    description:
      "AI戦略コンサルティング、LLM開発、生成AI研修を提供。大手企業のAI推進を一気通貫で支援します。",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "株式会社Lab K9",
              url: "https://lab-k9.com",
              logo: "https://lab-k9.com/images/logo.png",
              description:
                "AI戦略コンサルティング、LLM開発、生成AI研修を提供するエンタープライズAI支援企業",
              address: {
                "@type": "PostalAddress",
                streetAddress: "梅田1-1-3 大阪駅前第3ビル 29階",
                addressLocality: "大阪市北区",
                addressRegion: "大阪府",
                postalCode: "530-0001",
                addressCountry: "JP",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@lab-k9.com",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
