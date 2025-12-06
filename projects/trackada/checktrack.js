import {readFileSync, existsSync} from "fs";
import {join} from "path";
import {homedir} from "os";

const track = JSON.parse(readFileSync("./track.json"));
const root = track.root.replace("~", homedir());

for (const {name, required} of track.projects) {
    const projectExists = existsSync(join(root, name));
    console.log(projectExists ? "✅" : "❌", join(root, name), required.length);
}
