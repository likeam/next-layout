import Link from "next/link";
import React from "react";
import "../globals.css";

const BlogLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <header className=" bg-gray-900 text-white p-6">
        <h1 className=" text-3xl ">{title} </h1>
      </header>
      {/* Blog Content  */}
      <div className=" flex-1 flex">
        {/* Sodebar  */}
        <aside className=" w-64 bg-gray-200 p-4 text-black ">
          <ul>
            <li>
              <Link href="/blog/1" className=" block py-2 hover:bg-gray-400">
                Blog Post 1
              </Link>
            </li>
            <li>
              <Link href="/blog/2" className=" block py-3 hover:bg-gray-400">
                {" "}
                Blog Post 2
              </Link>
            </li>
            <li>
              <Link href="/blog/3" className=" block py-2 hover:bg-gray-400">
                Blog Post 3
              </Link>
            </li>
          </ul>
        </aside>
        <main className=" flex-1 p-6 bg-white text-black ">{children}</main>
      </div>
    </div>
  );
};

export default BlogLayout;
