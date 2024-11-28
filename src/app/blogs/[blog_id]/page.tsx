import Wrapper from "@/components/shared/Wrapper";

import { blogsData } from "@/data/blogsData";
import { IBlogPost } from "@/types/types";
import Image from "next/image";
export const generateStaticParams = () => {
  return blogsData.map((blog: IBlogPost) => ({
    blog_id: blog.id.toString(),
  }));
};

const BlogPostPage = ({ params }: { params: { blog_id: string } }) => {
  const { blog_id } = params;

  const blog = blogsData.find((blog: IBlogPost) => blog.id === blog_id);

  return (
    <Wrapper>
      <div className="py-16">
        <div className="my-8 w-[90%] mx-auto">
          <div>
            <Image
              src={blog ? blog.detailImageURL : ""}
              alt="image"
              className="rounded-lg w-full"
            />
          </div>
          <div className="mt-4 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold mt-8 text-emerald-300">
              {blog?.title}
            </h1>
            <h1 className="text-2xl">{blog?.date}</h1>
            <p className="text-xl">{blog?.content}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogPostPage;
