import { CDN_URL } from '../utils/constants.js';

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.card.card.info;
    return (
        <div className="restaurant-card" style={{ background: "#f0f0f0" }}>
            <img
                className="restaurant-logo"
                alt="res-image"
                src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwo}</h3>
            <h3>{avgRating}</h3>
        </div>
    );
};

export default RestaurantCard;