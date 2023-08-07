import React from "react";

export default function Home() {
  return (
    <>
      <div className="w-56">
        <h1 className="text-xl text-center bg-orange-600">Genres</h1>
        <ul className="">
          <li className="py-1">Fiction</li>
          <li className="py-1">Non-Fiction</li>
          <li className="py-1">Fantasy</li>
          <li className="py-1">Romance</li>
          <li className="py-1">Comics</li>
          <li className="py-1">Classic Literature</li>
          <li className="py-1">Poetry</li>
        </ul>
      </div>
    </>
  );
}
