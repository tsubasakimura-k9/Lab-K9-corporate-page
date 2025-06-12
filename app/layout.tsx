import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Lab K9 - テクノロジーとビジネスの力で、しあわせをつくる。',
    template: '%s | Lab K9'
  },
  description: 'Lab K9の公式企業サイトです。会社情報、サービス案内、採用情報など、企業に関する最新情報をお届けします。',
  keywords: ['K9', 'Corporation', '企業', '会社', 'コーポレート', 'サービス'],
  authors: [{ name: 'Lab K9' }],
  creator: 'Lab K9',
  publisher: 'Lab K9',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tsubasakimura.github.io'),
  alternates: {
    canonical: '/lab-k9-corporate-page',
  },
  icons: {
    icon: '/lab-k9-corporate-page/favicon.ico',
    shortcut: '/lab-k9-corporate-page/favicon.ico',
    apple: '/lab-k9-corporate-page/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Lab K9 - 企業公式サイト',
    description: 'Lab K9の公式企業サイトです。会社情報、サービス案内、採用情報など、企業に関する最新情報をお届けします。',
    url: 'https://tsubasakimura.github.io/lab-k9-corporate-page',
    siteName: 'Lab K9',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab K9 - 企業公式サイト',
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
