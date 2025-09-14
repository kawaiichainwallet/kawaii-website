import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KawaiiChain Wallet | 区块链数字钱包",
    template: "%s | KawaiiChain Wallet"
  },
  description: "KawaiiChain Wallet 是一个基于区块链技术的数字钱包项目，提供安全的密钥管理、多币种支持、转账功能和商户支付解决方案。",
  keywords: ["区块链", "数字钱包", "加密货币", "比特币", "以太坊", "DeFi", "Web3"],
  authors: [{ name: "KawaiiChain Team" }],
  creator: "KawaiiChain Team",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://kawaiichainwallet.com",
    siteName: "KawaiiChain Wallet",
    title: "KawaiiChain Wallet | 区块链数字钱包",
    description: "安全、便捷的区块链数字钱包解决方案",
  },
  twitter: {
    card: "summary_large_image",
    title: "KawaiiChain Wallet | 区块链数字钱包",
    description: "安全、便捷的区块链数字钱包解决方案",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
