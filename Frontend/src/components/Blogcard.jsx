import React from "react";

const BlogCard = ({ post, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition"
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-44 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
        <p className="text-gray-400 text-sm">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default React.memo(BlogCard);
