import React from "react";
import BlogLayout from "../layout";
import Image from "next/image";

const BlogPost = () => {
  return (
    <BlogLayout title="Blog Post 2">
      <h1>Blog Post 2 Content</h1>
      <p>This is the content for Blog Post 2.</p>
      <Image
        src="https://images.pexels.com/photos/36703945/pexels-photo-36703945.jpeg"
        alt="Blog Post 2 Image"
        width={600}
        height={400}
      />
    </BlogLayout>
  );
};

export default BlogPost;
