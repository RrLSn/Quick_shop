// import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/About_us.module.css";

const About_us = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <img src="" alt="" />
        <div className={styles.page_header}>
          <h1>About Us</h1>
          <span>
            <p>
              <Link to="/">Home</Link>
            </p>
            /
            <p>
              <Link to="/about_us">About us</Link>
            </p>
          </span>
        </div>
      </div>
      <span className={styles.about_text}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          officia quia animi quisquam, quas facere dolorum consequatur
          assumenda, accusamus vitae molestiae, error beatae harum deserunt
          cupiditate ut tempora itaque aut. Itaque consequuntur dolorum dicta
          quam temporibus, non magnam aut molestiae ea, delectus cumque tenetur
          esse, ab exercitationem consectetur. Ab similique totam dignissimos
          impedit molestiae placeat consequuntur cupiditate, fugiat non dolorem.
          Minima numquam consequatur, commodi, inventore eligendi a nesciunt
          molestiae voluptatem blanditiis officiis beatae quidem sit ut
          dignissimos consectetur tempore doloribus sed alias ea quam aspernatur
          voluptates. Veritatis delectus quae perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          mollitia neque nisi incidunt fugit optio tenetur voluptatibus, laborum
          harum, iure omnis ut eligendi ipsum dicta exercitationem vitae
          asperiores, velit animi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quidem minus, exercitationem recusandae rem iure non
          dignissimos quo numquam et voluptatum quia aliquam alias ab similique
          facere sequi at. Ipsum! In eum obcaecati commodi voluptatibus dolor et
          repudiandae debitis cum deleniti! Aut at, quas eligendi, magni nemo
          eveniet pariatur amet vel aliquam qui ratione? Corrupti temporibus
          ducimus repellat facilis? Laborum?
        </p>
      </span>
      <section className={styles.mission}>
        <img src="" alt="" />
        <div className={styles.mission_text}>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            sit vitae velit aut quaerat ex minima omnis iusto maiores facilis
            doloremque eius magni quidem blanditiis, ratione unde veniam
            praesentium consequuntur? Asperiores saepe ea numquam cumque
            corrupti soluta exercitationem, mollitia quidem facere cum ad totam
            laudantium quia quas? Laudantium quis iusto, rem eaque, vel
            repellendus deserunt autem inventore, facere provident velit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            itaque quaerat soluta error ducimus qui molestias expedita fugiat
            distinctio modi, dolores ipsa illum maxime quae nesciunt rerum
            dicta, repudiandae praesentium! Veritatis, suscipit ex, illo
            doloribus fuga similique, voluptates sunt natus magnam veniam dolor
            soluta! Voluptatem suscipit harum architecto aliquid nisi. Eum, illo
            doloremque dignissimos aspernatur quo quis excepturi eaque suscipit!
          </p>
        </div>
      </section>
      <section className={styles.vision}>
        <div className={styles.vision_text}>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            sit vitae velit aut quaerat ex minima omnis iusto maiores facilis
            doloremque eius magni quidem blanditiis, ratione unde veniam
            praesentium consequuntur? Asperiores saepe ea numquam cumque
            corrupti soluta exercitationem, mollitia quidem facere cum ad totam
            laudantium quia quas? Laudantium quis iusto, rem eaque, vel
            repellendus deserunt autem inventore, facere provident velit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            itaque quaerat soluta error ducimus qui molestias expedita fugiat
            distinctio modi, dolores ipsa illum maxime quae nesciunt rerum
            dicta, repudiandae praesentium! Veritatis, suscipit ex, illo
            doloribus fuga similique, voluptates sunt natus magnam veniam dolor
            soluta! Voluptatem suscipit harum architecto aliquid nisi. Eum, illo
            doloremque dignissimos aspernatur quo quis excepturi eaque suscipit!
          </p>
        </div>
        <img src="" alt="" />
      </section>
    </div>
  );
};

export default About_us;
