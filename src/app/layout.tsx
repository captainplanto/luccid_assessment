import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { HeaderComponent } from "@/components/common/HeaderComponent";

export const metadata: Metadata = {
  title: "Luccid App",
  description: "Business Login Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Providers>
          <HeaderComponent
            logo={`${process.env.PUBLIC_URL}/my-image.jpg`}
            title="Set up your business account"
          />

          {children}
        </Providers>
      </body>
    </html>
  );
}
