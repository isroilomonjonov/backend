import {
  createRequestListener,
  createRouter,
  listen,
  sendJson,
} from "@ravshansbox/mini-app";
import { createServer } from "node:http";

const router = createRouter();

router.get("/", ({ response }) => {
  sendJson(response, { message: "helloo" });
});

const server = createServer(createRequestListener(router.routes));
listen(server, 3000, "127.0.0.1").then(addressInfo=> {
    console.log(`Listening on port ${addressInfo.port}`)
});
