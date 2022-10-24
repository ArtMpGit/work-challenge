import { Item } from "../interfaces/Item";

export const getAllItems = async (): Promise<Array<Item>> => {
    const response = await fetch('http://localhost:4000/nfts');
    return response.json();
}