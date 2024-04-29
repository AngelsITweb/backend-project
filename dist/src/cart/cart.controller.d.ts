import { CartService } from "./cart.service";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getAll(userId: string): Promise<{
        id: number;
        price: number;
        count: number;
        userId: number;
    }[]>;
    getById(id: number): Promise<{
        id: number;
        price: number;
        count: number;
        userId: number;
    }>;
    createCart(body: any, userId: string): Promise<{
        parts: {
            id: number;
            manufacturer: string;
            state: string;
            numberOrName: string;
            price: number;
            image: string;
            cartId: number;
            sellerId: number;
            carId: number;
        }[];
    } & {
        id: number;
        price: number;
        count: number;
        userId: number;
    }>;
}
