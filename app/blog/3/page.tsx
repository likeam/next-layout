import React from "react";
import BlogLayout from "../layout";
import Image from "next/image";
import C9 from "..//../../public/C9.jpg";

const BlogPost = () => {
  return (
    <BlogLayout title="Blog Post 3">
      <h1>Blog Post 3 Content</h1>
      <p>This is the content for Blog Post 3.</p>
      <Image src={C9} alt="Blog Post 3 Image" width={600} height={400} />
    </BlogLayout>
  );
};

export default BlogPost;
