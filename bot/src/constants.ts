export const enum LobbyRegion {
    ASIA = "Asia",
    NORTH_AMERICA = "North America",
    EUROPE = "Europe",
}

export const enum SessionState {
    LOBBY = "lobby",
    PLAYING = "playing",
    DISCUSSING = "discussing",
}

export const SERVER_IPS = {
    [LobbyRegion.EUROPE]: "172.105.251.170",
    [LobbyRegion.NORTH_AMERICA]: "198.58.99.71",
    [LobbyRegion.ASIA]: "139.162.111.196",
};

export const SHORT_REGION_NAMES = {
    [LobbyRegion.EUROPE]: "EU",
    [LobbyRegion.NORTH_AMERICA]: "NA",
    [LobbyRegion.ASIA]: "AS",
};

export const COLOR_EMOTES: { [key: number]: string } = {
    [0]: "crewmate_red:766504140472844291",
    [1]: "crewmate_blue:766504140922290176",
    [2]: "crewmate_green:766504980387201074",
    [3]: "crewmate_pink:766504140775620618",
    [4]: "crewmate_orange:766504140812845086",
    [5]: "crewmate_yellow:766504140792528906",
    [6]: "crewmate_black:766504140880609290",
    [7]: "crewmate_white:766504140754386944",
    [8]: "crewmate_purple:766504140762251294",
    [9]: "crewmate_brown:766504140511379468",
    [10]: "crewmate_cyan:766504140506660885",
    [11]: "crewmate_lime:766504140749668362",
};

export const DEAD_COLOR_EMOTES: { [key: number]: string } = {
    [0]: "crewmate_red_dead:766504140389875733",
    [1]: "crewmate_blue_dead:766504140443615233",
    [2]: "crewmate_green_dead:766504140729221120",
    [3]: "crewmate_pink_dead:766504140913639434",
    [4]: "crewmate_orange_dead:766504139793760270",
    [5]: "crewmate_yellow_dead:766504139546034177",
    [6]: "crewmate_black_dead:766504139819450368",
    [7]: "crewmate_white_dead:766504139819450398",
    [8]: "crewmate_purple_dead:766504139748147220",
    [9]: "crewmate_brown_dead:766504139513266197",
    [10]: "crewmate_cyan_dead:766504139731370034",
    [11]: "crewmate_lime_dead:766504139542233088",
};

export const COLOR_EMOTE_IDS = Object.values(COLOR_EMOTES).map(x => x.split(":")[1]);

export const EMOTE_IDS_TO_COLOR: { [key: string]: number } = {};
Object.entries(COLOR_EMOTES).forEach(x => (EMOTE_IDS_TO_COLOR[x[1].split(":")[1]] = +x[0]));

export const GROUPING_DISABLED_EMOJI = "<:imposter_grouping_disabled:766504139458609162>";
export const GROUPING_ENABLED_EMOJI = "<:imposter_grouping_enabled:766504139270127617>";
export const GROUPING_TOGGLE_EMOJI = "toggle_imposter_grouping:766504139139055657";
export const LEAVE_EMOJI = "leave_lobby:766504139139186699";
export const LOADING_EMOJI = "<a:loading:766508779155619852>";
export const CATEGORY_ID = "766538069473755146";
export const AMONG_US_ROLE_ID = "750829341587537954";
export const AMONG_US_LOBBY_ID = "755996863152521318";