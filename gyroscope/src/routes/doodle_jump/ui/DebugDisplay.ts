import {debugContent} from "../../store/debugStore";

export class DebugDisplay {
    private static content: Map<string, any> = new Map();

    public static setup() {
        (window as any).displayDebugDisplay = () => {
            const obj: { [ key: string ]: any; } = {};
            this.content.forEach((val, key) => {
                obj[ key ] = typeof val === "object" ? String(val) : val;
            });
            console.table(obj);
        };
    }

    public static update(key: string, value: any) {
        this.content.set(key, value);

        let text: string = "";
        this.content.forEach((value, key) => {
            text += `${ key }=${ typeof value === "object" ? JSON.stringify(value) : value }\n`;
        });

        debugContent.set(text)
    }

    public static clear() {
        this.content.clear();
    }

    public static delete(key: string) {
        this.content.delete(key);
    }
}
