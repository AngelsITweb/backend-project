import { PartService } from "./part.service";
export declare class PartController {
    private readonly partService;
    constructor(partService: PartService);
    getAll(body: any): Promise<{
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
    }[]>;
    getById(body: any): Promise<{
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
    }>;
    createPart(body: any, userId: string): Promise<{
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
    }>;
}
