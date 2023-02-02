import { Inter, Poppins, Montserrat } from "@next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
});
