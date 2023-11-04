import React, { useState } from "react";
import * as fetch from "../../../api/index";
import { commentAndRateProps, userProps } from "../../../api/interface/index";
import { toast } from "react-hot-toast";

interface childSendCommentProps {
  user: userProps;
}

const SendComment: React.FC<childSendCommentProps> = ({ user }) => {
  const [dataCommentAndRate, setCommentAndRate] = useState<commentAndRateProps>(
    {
      userId: Number(user.id),
      rate: 0,
      comment: "",
    }
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandleRate = (e: any) => {
    setCommentAndRate((prev) => ({ ...prev, rate: parseInt(e.target.value) }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandleComment = (e: any) => {
    setCommentAndRate((prev) => ({ ...prev, comment: e.target.value }));
  };

  const getTypeId = location.pathname.split("/");
  const typeId = Number(getTypeId[2]);

  const handleClickPost = async () => {
    const post = await fetch.postCommentAndRate(typeId, dataCommentAndRate);
    toast.success("berhasil kirim ulasan");

    setTimeout(() => {
      window.location.reload();
    }, 1000);

    console.log(post);
  };

  return (
    <div className="flex  flex-col gap-1 bg-white rounded-xl p-2 ">
      <h1 className="font-semibold text-xl mx-auto mb-2">
        Berikan ulasan dan rating{" "}
      </h1>
      <div className="flex flex-col gap-1 w-full mb-2 justify-center items-center">
        <div className="rating rating-lg mt-2">
          <input
            type="radio"
            name="rating-9"
            value={1}
            onChange={(e) => onChangeHandleRate(e)}
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-9"
            value={2}
            onChange={(e) => onChangeHandleRate(e)}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-9"
            value={3}
            onChange={(e) => onChangeHandleRate(e)}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-9"
            value={4}
            onChange={(e) => onChangeHandleRate(e)}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-9"
            value={5}
            onChange={(e) => onChangeHandleRate(e)}
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <textarea
          placeholder="ketikan comment disini"
          onChange={(e) => onChangeHandleComment(e)}
          className="textarea textarea-bordered textarea-lg w-full max-w-xs ml-3 mt-2"
        ></textarea>
        <button
          onClick={() => handleClickPost()}
          className="btn btn-square w-full mt-2 bg-fuchsia-300 text-xl font-bold text-white"
        >
          kirim
        </button>
      </div>
    </div>
  );
};

export default SendComment;
