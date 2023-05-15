import React from "react";
import css from "./info.module.css";
import vector from "./Vector1.png";
import clock from "./Icon Clock.png";
import tv from "./Icon3.png";
import hat from "./Icon4.png";
import ads from "./Icon5.png";
const InfoCard = () => {
  return (
    <>
      <div className={css.main}>
        <p>
          Access curated courses worth
          <br />₹ <span>18500</span> at just <span>₹ 99</span> per year!
        </p>
        <nav className={css.listGrop}>
          <div className={css.listGrop2}>
            <section className={css.list}>
              <img src={vector} alt="" />
              <p>
                <span>100+</span> Job relevant courses{" "}
              </p>
            </section>

            <section className={css.list}>
              <img src={clock} alt="" />
              <p>
                <span>20,000+</span> Hours of content{" "}
              </p>
            </section>

            <section className={css.list}>
              <img src={tv} alt="" />
              <p>
                <span>Exclusive</span> Webinar access
              </p>
            </section>

            <section className={css.list}>
              <img src={hat} alt="" />
              <p>
                Scholership worth <span>₹94,500</span>
              </p>
            </section>

            <section className={css.list}>
              <img src={ads} alt="" />
              <p>
                <span>Ad Free</span> learning experience
              </p>
            </section>
          </div>
        </nav>
      </div>
    </>
  );
};

export default InfoCard;
