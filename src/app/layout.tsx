import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Radix UI Dashboard Template",
    description: "This is a simple template with: Dashboard layout, menu sidebar. This was included RadixUI library as the util components, and Tailwindcss. This build was created with one sole purpose: to save time creating a dashboard project with the most basic layout",
    authors: {url: 'https://khuong-pham.vercel.app/', name: 'Khuong Pham'},
    keywords: ['radix', 'dashboard', 'template', 'radix template', 'radix dashboard template', 'radix ui dashboard template'],
    icons: 'https://khuong-pham.vercel.app/images/avatar.png',
    appLinks: {
        web: {
            url: 'https://khuong-pham.vercel.app/'
        }
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <MainLayout> {children}</MainLayout>
        </body>
        </html>
    );
}


