import React from "react";
import "./globals.css";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className="bg-gray-100">
        <div className=" min-h-screen flex flex-col">
          <header className=" bg-purple-800 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className=" hover:text-purple-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className=" hover:text-purple-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className=" hover:text-purple-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className="flex flex-1 bg-gray-400">
            <aside className=" w-64 bg-purple-300 p-4">
              <ul>
                <li>
                  <Link
                    href="/category/technology    "
                    className=" block hover:text-purple-400 p-4"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/fashion    "
                    className=" block hover:text-purple-400 p-4"
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/design    "
                    className=" block hover:text-purple-400 p-4"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/business    "
                    className=" block hover:text-purple-400 p-4"
                  >
                    Business
                  </Link>
                </li>
              </ul>
            </aside>
            <main className=" flex-1 ">{children}</main>
          </div>
          <footer className=" bg-purple-800 text-white p-4 text-center">
            <p>&copy; 2023 HB Digital. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
