import {init_embla_dots} from "./card_bf2026_logic/init_embla_dots.js";
import {filter_block} from "./card_bf2026_logic/filter_block.js";

export default function init() {
    init_embla_dots();
    filter_block();
}
