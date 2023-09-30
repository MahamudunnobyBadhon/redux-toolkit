"use client";
import { useState } from "react";
import { addPost, deleteAll, deletePost } from "@/redux/slices/postSlices";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [text, setText] = useState("");
  const data = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  console.log(data.posts);
  const addPostHandler = () => {
    dispatch(addPost({ name: text }));
    setText("");
  };

  const deletePostHandler = (id) => {
    dispatch(deletePost(id));
  };

  const deleteAllHandler = () => {
    dispatch(deleteAll());
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[40vw] mx-auto  text-red-600 font-3xl font-bold mt-5 mb-5">
        {data?.posts?.map((d, i) => (
          <div
            className=" grid grid-cols-2 bg-yellow-200 p-4 m-2 rounded-md"
            key={i}
          >
            <p>{d?.name}</p>{" "}
            <div className="flex justify-end">
              <button className="ms-8" onClick={() => deletePostHandler(i)}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          className="border-2 p-3"
          onChange={(e) => setText(e.target.value)}
          placeholder="type anything"
          value={text}
        ></input>
        <button
          disabled={text ? false : true}
          onClick={() => {
            addPostHandler();
          }}
          className={`${
            text
              ? "bg-blue-400 cursor-pointer"
              : "bg-gray-100 opacity-70 text-gray-700 border-gray-300"
          } border-2 px-8 py-3 rounded-lg ms-4 text-black`}
        >
          Add
        </button>
      </div>

      <button
        onClick={() => {
          deleteAllHandler();
        }}
        className={`bg-red-600 cursor-pointer border-2 px-8 py-3 rounded-lg ms-4 text-white`}
      >
        Delete All
      </button>
    </main>
  );
}
