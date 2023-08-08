import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="navbar bg-neutral flex justify-between px-[10%]">
        <div className="">
          <a className="btn btn-ghost normal-case text-xl">Library</a>
        </div>

        <div className="w-96">
          <input
            placeholder="Search for a product"
            className="input input-bordered w-auto flex-1"
          ></input>
        </div>

        <div className="text-3xl">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </>
  );
}
