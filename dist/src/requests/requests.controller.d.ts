import { RequestService } from "./requests.service";
export declare class RequestController {
    private readonly requestsService;
    constructor(requestsService: RequestService);
    getAll(id: string): Promise<({
        parts: {
            id: number;
            manufacturer: string;
            numberOrName: string;
            price: number;
            new: boolean;
            original: boolean;
            name: string;
            image: string;
            cartId: number;
            sellerId: number;
            carId: number;
            requestId: number;
            orderId: number;
        }[];
    } & {
        id: number;
        name: string;
        image: string;
        carId: number;
        userId: number;
        sellerId: number;
        isResponseSent: boolean;
    })[]>;
    getById(id: string): Promise<{
        car: {
            id: number;
            image: string;
            brand: import(".prisma/client").$Enums.Brands;
            model: string;
            number: string;
            ownerId: number;
        };
    } & {
        id: number;
        name: string;
        image: string;
        carId: number;
        userId: number;
        sellerId: number;
        isResponseSent: boolean;
    }>;
    createRequest(body: any, userId: string): Promise<any>;
    getByNotifications(userId: string): Promise<({
        car: {
            id: number;
            image: string;
            brand: import(".prisma/client").$Enums.Brands;
            model: string;
            number: string;
            ownerId: number;
        };
    } & {
        id: number;
        name: string;
        image: string;
        carId: number;
        userId: number;
        sellerId: number;
        isResponseSent: boolean;
    })[][]>;
    respondRequest(id: string): Promise<{
        id: number;
        name: string;
        image: string;
        carId: number;
        userId: number;
        sellerId: number;
        isResponseSent: boolean;
    }>;
}
