import styles from "../styles/Offers.module.css";

const Offers = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src="" alt="" />
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
