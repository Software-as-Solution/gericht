import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => {
  return (
    <div className="specialMenu flex-center section-padding" id="menu">
      <div className="specialMenu-title">
        <SubHeading title="Menu that fits your Palatte" />
        <h1 className="headtext-cormorant">Today's special</h1>
      </div>
      <div className="specialMenu-menu">
        <div className="specialMenu-menu-wine flex-center">
          <p className="specialMenu-menu-heading">Wine & Beer</p>
          <div className="specialMnu-menu-items">
            {data.wines.map((wine) => (
              <MenuItem
                key={wine.title}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className="specialMenu-menu-img">
          <img src={images.menu} alt="menu image" />
        </div>
        <div className="specialMenu-menu-cocktails flex-center">
          <p className="specialMenu-menu-heading">Cocktails</p>
          <div className="specialMnu-menu-items">
            {data.cocktails.map((cocktail) => (
              <MenuItem
                key={cocktail.title}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom-button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
