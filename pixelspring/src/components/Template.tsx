"use client";

import { useAuth } from "@/resources";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

interface TemplateProps {
  children: React.ReactNode;
  loading?: boolean;
}

const logo = "/img/logo-pixelspring.svg";

export const Template: React.FC<TemplateProps> = ({
  children,
  loading,
}: TemplateProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      <div className="flex-grow container mx-auto mt-8 px-4">
        <RenderIf condition={loading}>
          <div className="text-center">
            <Loading />
          </div>
        </RenderIf>
        {children}
      </div>

      {/* FOOTER */}
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        draggable={false}
        closeOnClick={true}
        pauseOnHover={true}
      />
    </div>
  );
};

const Header: React.FC = () => {
  const auth = useAuth();
  const user = auth.getUserSession();
  const router = useRouter();

  function logout() {
    auth.invalidateSession();
    router.push("/login");
  }

  return (
    <header className="bg-zinc-200 text-black py-3">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <Link href="/galeria">
            <img
              src={logo}
              alt="PixelSpring Logo"
              width={"150px"}
              className="mx-auto sm:mx-0"
            />
          </Link>
        </div>

        <RenderIf condition={!!user}>
          <div className="flex flex-col items-end text-right mt-4 sm:mt-0 w-full sm:w-auto">
            <span className="text-lg">Hello, {user?.name}</span>
            <a
              href="#"
              onClick={logout}
              className="border-b border-transparent hover:border-black text-black mt-1"
            >
              Logout
            </a>
          </div>
        </RenderIf>
      </div>
    </header>
  );
};

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-gray-500 border-solid mr-3" />
      <span className="text-gray-600 font-semibold">Loading...</span>
    </div>
  );
};

interface RenderIfProps {
  condition?: boolean;
  children: React.ReactNode;
}

export const RenderIf: React.FC<RenderIfProps> = ({
  condition = false,
  children,
}) => {
  if (condition) {
    return children;
  }

  return false;
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-200 text-black py-4 mt-8">
      <div className="container mx-auto text-center">
        Developed by Louise Carnevali
      </div>
    </footer>
  );
};
