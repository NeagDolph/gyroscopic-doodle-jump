import { debugContent } from "../../store/debugStore";
export class DebugDisplay {
    static content = new Map();
    static setup() {
        window.displayDebugDisplay = () => {
            const obj = {};
            this.content.forEach((val, key) => {
                obj[key] = typeof val === "object" ? String(val) : val;
            });
            console.table(obj);
        };
    }
    static update(key, value) {
        this.content.set(key, value);
        let text = "";
        this.content.forEach((value, key) => {
            text += `${key}=${typeof value === "object" ? JSON.stringify(value) : value}\n`;
        });
        debugContent.set(text);
    }
    static clear() {
        this.content.clear();
    }
    static delete(key) {
        this.content.delete(key);
    }
}
//# sourceMappingURL=DebugDisplay.js.map