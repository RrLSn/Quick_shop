import styles from "../styles/Offers.module.css";
import { offerImages } from "../data.js";
import { useEffect, useState } from "react";

const Offers = () => {
  const [image, setImage] = useState(offerImages[0]);

  useEffect(() => {
    const internalId = setInterval(() => {
      const rndIndex = Math.floor(Math.random() * offerImages.length);
      setImage(offerImages[rndIndex]);
    }, 10000);
    return () => clearInterval(internalId);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <img src={image} alt="" />
      </div>
      <div className={styles.offer_desc}>
        <span>
          <p>Limited Offer</p>
          <p>Get 35% off only this friday + a special gift</p>
          <button>
            Grab offer <img src="/svg/nav_right.svg" alt="" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Offers;
