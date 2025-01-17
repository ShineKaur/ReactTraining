import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState([]);

    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const json = await data.json();
        const filteredArray = json?.data?.cards?.filter((itemWithInfo) => itemWithInfo?.card?.card?.hasOwnProperty('info'));
        setlistOfRestaurants(filteredArray);
        setfilteredListOfRestaurants(filteredArray);
        console.log(filteredArray);
    };

    if (listOfRestaurants.length == 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <input className="search-text" onChange={(e) => {
                    setsearchText(e.target.value);
                }}></input>
                <button className="search-button" onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter((e) => e.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredListOfRestaurants(filteredRestaurants);
                }}>
                    Search
                </button>
                <button className="filter" onClick={() => {
                    const topRatedListOfRestaurants = listOfRestaurants.filter((res) => res.card.card.info.avgRating > 4)
                    setfilteredListOfRestaurants(topRatedListOfRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="restaurant-container">
                {
                    filteredListOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    );
};

export default Body;