const Body = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="shopping">
          <button>Shop Now</button>
          <button className="sec-btn">Category</button>
        </div>
        <div className="avilable">
          <p>Also Avilable On</p>
          <div className="avilable-image">
            <img src="./images/flipkart.png" alt="flipkart" />
            <img src="./images/amazon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/shoe_image.png" alt="shoe image" />
      </div>
    </div>
  );
};
export default Body;
