import React from "react";
import Image from "next/image";

function Author({ author }) {
  return (
    <div className="text-center mt-20 mb-8 relative rounded-lg bg-black p-12 bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          alt="author.name"
          unoptimized
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-blod">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
}

export default Author;
