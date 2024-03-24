import React from "react";
import "./Menu.scss";
import Star from "./Group85.png";

export default function Menu() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();

      if (data) {
        setUser(data.slice(0, 6));
      }
    })();
  }, []);

  return (
    <section className="menu">
      <div className="container">
        <p className="menu__text">Menu</p>
        <h3 className="menu__title">Food Full of treaty Love</h3>
        <p className="menu__text2">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls <br /> with Persons but also
          specialized equipment, Skills to manage Customers,
        </p>

        <ul className="menu__flex">
          {user.length > 0 &&
            user.map((user) => (
              <li key={user.id} className="menu__item">
                <img className="menu__img" src={user.url} alt={user.title} />
                <div className="menu__head">
                  <h3 className="menu__heading">{user.title}</h3>
                  <p className="head__text">16$</p>
                </div>
                <p className="menu__flex__text">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="menu__mark">
                  <p className="mark__text">+</p>
                  <img src={Star} alt="img" width={88} height={16} />
                </div>
              </li>
            ))}
        </ul>
        <div className="menu__button">
          <button className="menu__btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}
