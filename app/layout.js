import Header from "@/components/ui/Header";
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "WebLab | Software Development Agency",
  description:
    "We are a software development agency that creates web and mobile applications for businesses and startups.",
};

const Konnect = localFont({
  src: [
    {
      path: "fonts/Konnect-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Konnect-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/Konnect-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Konnect-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={Konnect.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
