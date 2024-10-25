
import "./globals.css";

export const metadata = {
  title: "iplay music App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-[100vh]" >
        {children}
      </body>
    </html>
  );
}
