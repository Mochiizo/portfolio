'use client';
import "./globals.css";
import Footer from "@/components/footer";
import LenisWrapper from "@/components/LenisWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className="bg-[#FDFFF4] text-body selection:bg-primary selection:text-hoverColor mx-auto my-8 max-w-[600px] px-4 md:my-16 md:max-w-[900px]">
        <LenisWrapper>{children}</LenisWrapper>
        <Footer />
      </body>
    </html>
    
  );
}
function useLenis() {
  throw new Error("Function not implemented.");
}

