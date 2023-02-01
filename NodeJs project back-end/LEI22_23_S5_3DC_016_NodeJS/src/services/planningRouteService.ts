import {Inject, Service} from "typedi";
import IPlanningRouteService from "./IServices/IPlanningRouteService";
import config from "../../config";
import {Result} from "../core/logic/Result";
import IPlanningRouteRepo from "../repos/IRepos/IPlanningRouteRepo";

@Service()
export default class PlanningRouteService implements IPlanningRouteService {
    constructor(@Inject(config.repos.planningRoute.name) private planningRouteRepo: IPlanningRouteRepo) {}

    public async getBestRoute(date: string, truckId: string): Promise<Result<{viagemR: string[]}>> {
        try {
            const bestRoute = await this.planningRouteRepo.getBestRoute(date, truckId);

            return Result.ok<{viagemR: string[]}>(bestRoute);
        } catch (e) {
            throw e;
        }
    }

    public async getHDist(date: string, truckId: string): Promise<Result<{viagemR: string[]}>> {
        try {
            const hdist = await this.planningRouteRepo.getHDist(date, truckId);

            return Result.ok<{viagemR: string[]}>(hdist);
        } catch (e) {
            throw e;
        }
    }

    public async getHMassa(date: string, truckId: string): Promise<Result<{viagemR: string[]}>> {
        try {
            const hmassa = await this.planningRouteRepo.getHMassa(date, truckId);

            return Result.ok<{viagemR: string[]}>(hmassa);
        } catch (e) {
            throw e;
        }
    }

    public async getHMassaTempo(date: string, truckId: string): Promise<Result<{viagemR: string[]}>> {
        try {
            const hmassatempo = await this.planningRouteRepo.getHMassaTempo(date, truckId);

            return Result.ok<{viagemR: string[]}>(hmassatempo);
        } catch (e) {
            throw e;
        }
    }

}