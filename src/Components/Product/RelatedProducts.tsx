import vincent from "../../Assets/3005.jpg";

export default function RelatedProducts() {
  return (
    <>
      <div>
        Related Products
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <div
              className="card card-side w-80 bg-base-100 shadow-xl"
              key={index}
            >
              <figure>
                <img src={vincent} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Category</h2>
                <p>Prodcut Name</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
