import { IBlogPost } from "@/types/types";
import blogOne1 from "@/assets/images/blog-one-1.jpg";
import blogOne2 from "@/assets/images/blog-one-2.jpg";
import blogTwo1 from "@/assets/images/blog-two-1.jpg";
import blogTwo2 from "@/assets/images/blog-two-2.jpg";
import blogThree1 from "@/assets/images/blog-three-1.jpg";
import blogThree2 from "@/assets/images/blog-three-2.jpg";
export const blogsData: IBlogPost[] = [
  {
    id: "1",
    title: "Leveraging Next.js for Enhanced E-Commerce Performance",
    date: "August 21, 2024",
    imageURL: blogOne1,
    detailImageURL: blogOne2,
    content:
      "Next.js is a powerful framework for building fast, SEO-friendly e-commerce sites. With its server-side rendering (SSR) capabilities and static site generation (SSG), Next.js enhances page load times and improves overall site performance. By leveraging Next.js, we can create dynamic and engaging product pages with improved SEO and faster user interactions. This blog explores the benefits of using Next.js in an e-commerce setting and how it contributes to a better user experience. The framework's flexibility in handling both static and dynamic content makes it an ideal choice for modern e-commerce platforms.",
    comments: [
      {
        id: "c1",
        author: "Alice",
        date: "August 22, 2024",
        content:
          "This is a very informative article! I've been considering using Next.js for my e-commerce site, and this gave me the confidence to go for it.",
      },
      {
        id: "c2",
        author: "Bob",
        date: "August 23, 2024",
        content:
          "Great insights on Next.js! I appreciate the focus on SEO and performance. Looking forward to more content like this.",
      },
    ],
  },
  {
    id: "3",
    title: "Harnessing the Power of ChatGPT for E-Commerce Customer Support",
    date: "August 22, 2024",
    imageURL: blogTwo1,
    detailImageURL: blogTwo2,
    content:
      "Integrating ChatGPT into our e-commerce platform has revolutionized customer support. This blog explores how leveraging AI technology enhances customer interactions, providing instant responses and personalized assistance. Learn how ChatGPT helps in resolving queries, guiding users through the shopping process, and improving overall customer satisfaction. ChatGPT's natural language processing capabilities allow it to understand and respond to a wide range of customer questions. From answering product inquiries to assisting with order tracking and returns, ChatGPT streamlines customer support and reduces the workload on human agents.",
    comments: [
      {
        id: "c3",
        author: "Charlie",
        date: "August 23, 2024",
        content:
          "The integration of AI like ChatGPT is a game changer for customer support! It's fascinating to see how it can handle complex queries with ease.",
      },
      {
        id: "c4",
        author: "Diana",
        date: "August 24, 2024",
        content:
          "I've had experience using ChatGPT for customer support, and it's been a huge time saver. Great to see this technology being embraced in e-commerce.",
      },
    ],
  },
  {
    id: "2",
    title: "The Role of Dynamic Routing in Modern E-Commerce Platforms",
    date: "August 18, 2024",
    imageURL: blogThree1,
    detailImageURL: blogThree2,
    content:
      "Dynamic routing in our Next.js-powered e-commerce site enhances the shopping experience by providing seamless navigation and personalized product pages. This approach allows users to access relevant product information efficiently and ensures that they have a smooth browsing experience. Discover the benefits and implementation of dynamic routing in e-commerce. With dynamic routing, users can navigate directly to specific product pages or categories without needing to reload the entire application. This improves performance and user experience by delivering content quickly and efficiently.",
    comments: [
      {
        id: "c5",
        author: "Eve",
        date: "August 19, 2024",
        content:
          "Dynamic routing has been a game-changer for our e-commerce site. This blog does a great job explaining its benefits and implementation.",
      },
      {
        id: "c6",
        author: "Frank",
        date: "August 20, 2024",
        content:
          "Thanks for the detailed explanation of dynamic routing. It's impressive how it can improve the user experience on e-commerce platforms.",
      },
    ],
  },
];
