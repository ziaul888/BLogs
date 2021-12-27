import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
//import { Categories } from ".";
import { getRecentPosts } from "../services";
import { getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPost(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPost(result));
    }
  }, [slug]);
  // console.log("rel", relatedPost);
  return (
    <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recents Posts"}
      </h3>
      {relatedPost?.map((post) => (
        <div key={post.tilte} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.tilte}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.featureImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createAt).format("MMM,DD,YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.tilte} className>
              {post.tilte}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
