import {ConfigIniParser} from "config-ini-parser";

let parser;

export function loadGameConfig(content: string) {
    parser = new ConfigIniParser();

    parser.parse(content);
}

export function getGameConfig<
    N extends boolean,
>(name: string, isNumber: N): N extends true ? number : string {
    const section = name.split(".")[0].toLowerCase();
    const val = parser.get(section, name, null);
    return isNumber ? parseFloat(val) : String(val) as any;
}
