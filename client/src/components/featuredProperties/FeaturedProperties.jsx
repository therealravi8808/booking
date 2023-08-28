import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?feature=true&limit=4");


  return (
    // <div className="fp">
    //   {loading ? (
    //     "Loading"
    //   ) : (
    //     <>
    //       {data.map((item) => (
    //         <div className="fpItem" key={item._id}>
    //           <img
    //             src={item.photos[0]}
    //             alt=""
    //             className="fpImg"
    //           />
    //           <span className="fpName">{item.name}</span>
    //           <span className="fpCity">{item.city}</span>
    //           <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
    //           {item.rating && <div className="fpRating">
    //             <button>{item.rating}</button>
    //             <span>Excellent</span>
    //           </div>}
    //         </div>
    //       ))}
    //     </>
    //   )}
    //   <>
   

    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.hilton.com/im/en/BERHITW/4589384/listo-7.jpg?impolicy=crop&cw=3000&ch=1687&gravity=NorthWest&xposition=0&yposition=156&rw=1440&rh=810"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.hilton.com/im/en/BERHITW/15333165/berhitw-corner-suite-living-k1krp1.jpg?impolicy=crop&cw=4500&ch=2402&gravity=NorthWest&xposition=0&yposition=298&rw=768&rh=410"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>




  );
};

export default FeaturedProperties;