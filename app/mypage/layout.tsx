import "./globals.css";
import SideMenubar from "../src/views/SideMenubar";

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideMenubar />
      {children}
    </div>
  );
}
