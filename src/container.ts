import { createContainer } from "awilix";
import { makeInfrastructure, Dependencies as InfrastructureDependencies } from "@infrastructure/di";

export type Dependencies = InfrastructureDependencies;

export function makeContainer(): Dependencies {
	const container = createContainer();

	container.register({
		...makeInfrastructure(),
	});

	return container.cradle as Dependencies;
}
