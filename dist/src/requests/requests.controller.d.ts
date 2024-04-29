import { RequestService } from "./requests.service";
export declare class RequestController {
    private readonly requestsService;
    constructor(requestsService: RequestService);
    getAll(): Promise<{
        id: number;
        name: string;
        image: string;
        carId: number;
        partId: number;
        userId: number;
    }[]>;
    getById(id: number): Promise<{
        id: number;
        name: string;
        image: string;
        carId: number;
        partId: number;
        userId: number;
    }>;
    createRequest(requestBody: any, userId: string): Promise<any>;
}
