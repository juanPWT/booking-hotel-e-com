import React from "react";

const Comment = () => {
  const comment = 4;
  const commentArray = Array.from({ length: comment });
  return commentArray.map((_, i) => {
    return (
      <div key={i} className="flex flex-col gap-5 bg-white rounded-xl p-4">
        <div className="flex gap-5">
          <img
            src="../img/dev/pp.png"
            alt="profil"
            className="w-10 h-10 rounded-full bg-cover"
          />
          <span className="text-lg my-auto font-semibold">Juan Pratama</span>
        </div>
        <hr className=" border-t-2 " />
        <div className="w-full">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, molestiae?
          </p>
        </div>
      </div>
    );
  });
};

export default Comment;
