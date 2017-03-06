const socket = require("./socket");
const Path = require("path");
import { debug } from "./configs";

require("./db")(models => {
  const { session, start, Router, ...rest } = socket;
  start({
    port: 80,
    router: require("./router")(Object.assign({ session, Router }, models)),
    publicPath: Path.resolve(
      __dirname,
      "../../client/" + (debug ? "dev" : "dist")
    )
  });
});
