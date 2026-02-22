import Header from "@/components/header/Header";
import "../globals.css";
import Footer from "@/components/footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
