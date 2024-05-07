import { CartService } from "./cart.service";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getAll(userId: string): Promise<({
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
        }[];
    } & {
        id: number;
        price: number;
        count: number;
        userId: number;
    })[]>;
    getById(id: string): Promise<{
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
        }[];
    } & {
        id: number;
        price: number;
        count: number;
        userId: number;
    }>;
    createCart(body: any, userId: string): Promise<{
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
        }[];
    } & {
        id: number;
        price: number;
        count: number;
        userId: number;
    }>;
}
