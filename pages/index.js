import Head from "next/head";
import { PostCart, Categories, PostWidget } from "../components";
import { getPost } from "../services";
import MessengerCustomerChat from "react-messenger-customer-chat";
import {FeaturedPosts} from "../sections/index"

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>My Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCart post={post.node} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
            <MessengerCustomerChat
              pageId="725647540795503"
              appId="643663956977293"
              htmlRef="<REF_STRING>"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPost()) || [];
  return {
    props: { posts },
  };
}
