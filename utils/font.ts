import { Poppins, Roboto_Mono } from "next/font/google";

// google doesnt have SF Pro Text, so i'm using my favorite font

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
