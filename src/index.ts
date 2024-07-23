import express from "express";
import cors from "cors";
import logger from "./common/logger";

const PORT = 5837;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  logger.info("server is running on port " + PORT);
});
