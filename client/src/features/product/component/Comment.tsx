import React, { useState } from "react";
import SendComment from "./SendComment";
import { userProps } from "../../../api/interface";

interface childCommentProps {
  comment: { name: string; comment: string; rating: number }[];
  user: userProps;
}

const Comment: React.FC<childCommentProps> = ({ comment, user }) => {
  const [expanded, setExpanded] = useState(false);

  const displayLimit = 4;

  return Array.isArray(comment) ? (
    <div className="flex flex-col gap-3 ">
      {comment
        .slice(0, expanded ? comment.length : displayLimit)
        .map((data, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-5 bg-white rounded-xl p-4"
            >
              <div className="flex gap-5">
                <img
                  src="../img/dev/pp.png"
                  alt="profil"
                  className="w-10 h-10 rounded-full bg-cover"
                />
                <span className="text-lg my-auto font-semibold">
                  {data.name}
                </span>
              </div>
              <hr className=" border-t-2 " />
              <div className="w-full">
                <p>{data.comment}</p>
              </div>
            </div>
          );
        })}
      {comment.length > displayLimit && !expanded && (
        <div className="flex justify-center items-center bg-white/60 rounded-lg p-2  ">
          <button
            onClick={() => setExpanded(true)}
            className="text-lg font-semibold text-gray-600"
          >
            Tampilkan lebih banyak
          </button>
        </div>
      )}

      {expanded && (
        <div className="flex justify-center items-center bg-white/60 rounded-lg p-2 ">
          <button
            onClick={() => setExpanded(false)}
            className="text-lg font-semibold text-gray-600"
          >
            Tampilkan lebih sedikit
          </button>
        </div>
      )}
      {user.id === 0 ? "" : <SendComment user={user} />}
    </div>
  ) : (
    <div className="flex flex-col gap-5 bg-white rounded-xl p-4">
      <div className="flex gap-5">
        <span className="text-lg my-auto font-semibold">Belum Ada</span>
      </div>
      <hr className=" border-t-2 " />
      <div className="w-full">
        <p>Tidak ada comment untuk sekarang</p>
      </div>
    </div>
  );
};

export default Comment;
