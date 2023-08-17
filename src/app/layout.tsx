import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { HeaderComponent } from "@/components/common/HeaderComponent";
import StyledComponentsRegistry from "./registry";

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
        <StyledComponentsRegistry>
          <Providers>
            <HeaderComponent
              logo="/luccid_logo.png"
              title="Set up your business account"
            />

            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
