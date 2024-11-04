import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
    className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-cover bg-center ${styles.noramlFlex}`}
          style={{
        backgroundImage:
          "url(https://i.postimg.cc/SxYh7s39/Untitled-design.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Find Best Seller <br /> Connect Longer
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Discover trusted and top-rated sellers offering the highest quality goods.<br />  Whether you're looking for unique products or reliable partners, we bring you closer to the best in the business.
        {" "}
          <br />
          Connect now and unlock great deals from sellers you can trust! 
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Find Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
