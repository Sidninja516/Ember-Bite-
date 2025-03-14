export class SmartPantryIntegration {
    private pantryItems: { [key: string]: number } = {};

    addItem(item: string, quantity: number): void {
        if (this.pantryItems[item]) {
            this.pantryItems[item] += quantity;
        } else {
            this.pantryItems[item] = quantity;
        }
    }

    removeItem(item: string, quantity: number): void {
        if (this.pantryItems[item]) {
            this.pantryItems[item] -= quantity;
            if (this.pantryItems[item] <= 0) {
                delete this.pantryItems[item];
            }
        }
    }

    checkInventory(): { [key: string]: number } {
        return this.pantryItems;
    }
}