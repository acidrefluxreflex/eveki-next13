"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "../../lib/Firebase/context/Auth";
import SideMenubar from "../src/views/SideMenubar";

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const router = useRouter();
    const { login } = useAuthContext();
    const loginWithGoogle = async () => {
      try {
        await login();
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    };
    

  return (
    <div className="flex">
      <SideMenubar />
      <button
        type="button"
        className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        onClick={loginWithGoogle}
      ></button>
      {children}
    </div>
  );
}
