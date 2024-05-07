import { CarsService } from "./cars.service";
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAll(userId: string): Promise<any>;
    createCar(body: any, userId: string): Promise<any>;
    getById(id: string): Promise<any>;
    deleteCar(body: any): Promise<any>;
    1: any;
}
