import { PartService } from "./part.service";
export declare class PartController {
    private readonly partService;
    constructor(partService: PartService);
    getAll(body: any): Promise<{
        id: number;
        manufacturer: string;
        state: string;
        numberOrName: string;
        price: number;
        image: string;
        cartId: number;
        sellerId: number;
        carId: number;
    }[]>;
    getById(body: any): Promise<{
        id: number;
        manufacturer: string;
        state: string;
        numberOrName: string;
        price: number;
        image: string;
        cartId: number;
        sellerId: number;
        carId: number;
    }>;
    createPart(body: any): Promise<{
        id: number;
        manufacturer: string;
        state: string;
        numberOrName: string;
        price: number;
        image: string;
        cartId: number;
        sellerId: number;
        carId: number;
    }>;
}
