"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md py-8">
     
      <div className="container mx-auto px-2 flex items-center justify-between">
       <div className="logo-pic">
        <Image 
          src="/logo.ico" 
          alt="Logo" 
          width={100}
          height={50}
          style={{
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,1)',
            objectFit: 'contain',
          }}
        />
       </div>
        <div className="flex items-start">
          <Link href="/" className="text-4xl font-bold text-blue-500">
            Real Estate
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLink href="/" label="Home" current={pathname === "/"} />
          <NavLink
            href="/properties"
            label="Properties"
            current={pathname === "/properties"}
          />
          <NavLink
            href="/about"
            label="About"
            current={pathname === "/about"}
          />
        </div>

        <div className="md:hidden">
          <button className="p-2 rounded-md text-gray-500 hover:text-blue-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
  current,
}: {
  href: string;
  label: string;
  current: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-lg font-medium transition-colors duration-200 ${
        current
          ? "text-blue-500 border-b-2 border-blue-500"
          : "text-gray-600 hover:text-blue-500"
      }`}
    >
      {label}
    </Link>
  );
}
