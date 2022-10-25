import { Item } from "./Item";

export interface ContextProps {
    items: Array<Item>;
    wallet: Array<Item>;
    total: number;
    addItems?: (items: Array<Item>) => void;
    addItemToWallet?: (item: Item) => void;
    removeItemFromWallet?: (id: number) => void;
    retrievePersistedWallet?: (items: Array<Item>) => void;
    calculateTotal?: () => void;
}