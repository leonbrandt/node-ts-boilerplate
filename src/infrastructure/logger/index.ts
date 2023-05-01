import * as winston from "winston";

export function makeLogger(): winston.Logger {
	return winston.createLogger({
		level: process.env.LOGLEVEL,
		transports: [
			new winston.transports.Console({
				format: winston.format.simple(),
			}),
		],
	});
}
