import {scrollHotelTabs} from "./hotel_tabs_logic/hotel_tabs_scroll.js";
import {resetListHotels} from "./hotel_tabs_logic/resetListHotels.js";
import {sticky_button_back} from "./hotel_tabs_logic/sticky_button_back.js";

export default function init() {
    sticky_button_back();
    scrollHotelTabs();
    resetListHotels();
}
