import { asFunction, Resolver } from "awilix";
import * as winston from "winston";
import { makeLogger } from "./logger";

export interface Dependencies {
	logger: winston.Logger;
}

export function makeInfrastructure(): { [dependency in keyof Dependencies]: Resolver<Dependencies[dependency]> } {
	return {
		logger: asFunction(makeLogger).singleton(),
	};
}
