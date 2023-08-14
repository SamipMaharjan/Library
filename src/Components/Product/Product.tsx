import Camera from "../../Assets/Cam.png";
import RelatedProducts from "./RelatedProducts";
export default function Product() {
  return (
    <>
      <div className="flex justify-around">
        <div>
          <img src={Camera} alt="" />
        </div>

        <div className="card w-[60%] bg-primary text-primary-content">
          <div className="card-body">
            <p>Product category</p>
            <h2 className="card-title">Product Name</h2>
            <p>Just some description about the product</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RelatedProducts />
      </div>
    </>
  );
}
