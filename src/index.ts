import { Dependencies, makeContainer } from "./container";

const dependencies: Dependencies = makeContainer();

dependencies.logger.info("Hello World");
