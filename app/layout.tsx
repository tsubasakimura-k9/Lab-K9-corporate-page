import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Lab K9 - テクノロジーとビジネスの力で、しあわせをつくる。',
    template: '%s | Lab K9'
  },
  description: '株式会社Lab K9の公式企業サイトです。AI/DXソリューションからD2Cブランドまで、領域を越えて本質的な価値創造に挑みます。',
  keywords: ['K9', 'Corporation', '企業', '会社', 'コーポレート', 'サービス'],
  authors: [{ name: 'Lab K9' }],
  creator: 'Lab K9',
  publisher: 'Lab K9',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lab-k9.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Lab K9 - テクノロジーとビジネスの力で、しあわせをつくる。',
    description: 'Lab K9の公式企業サイトです。AI/DXソリューションからD2Cブランドまで、領域を越えて本質的な価値創造に挑みます。',
    url: 'https://lab-k9.com',
    siteName: 'Lab K9',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab K9 - テクノロジーとビジネスの力で、しあわせをつくる。',
    description: 'Lab K9の公式企業サイトです。',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
