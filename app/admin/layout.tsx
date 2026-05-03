import React, { ReactNode } from "react";
import "../globals.css";
import Link from "next/link";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" min-h-screen flex flex-col">
      {/* Admin Header */}
      <header className="bg-blue-800 text-white p-4">
        <h1 className=" text-2xl">Admin Panel</h1>
        <nav className="">
          <ul className=" flex space-x-4">
            <li>
              <Link href="/admin/dashboard" className=" hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className=" hover:underline">
                Users
              </Link>
            </li>
            <li>
              <Link href="/admin/settings" className=" hover:underline">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Main Content */}
      <div className=" flex flex-1">
        <aside className=" w-64 bg-gray-200 text-blue-900">
          <ul>
            <li>
              <Link
                href="/admin/dashboard"
                className=" hover:underline py-2 block"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className=" hover:underline py-2 block">
                Manage Users
              </Link>
            </li>
            <li>
              <Link
                href="/admin/settings"
                className=" hover:underline py-2 block"
              >
                Settings
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default AdminLayout;
