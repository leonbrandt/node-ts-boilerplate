import * as dotenv from "dotenv";
dotenv.config();

import { Dependencies, makeContainer } from "./container";

const dependencies: Dependencies = makeContainer();

dependencies.logger.info("Hello World");
