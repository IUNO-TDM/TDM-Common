export class CocktailComponent {
    id: string;
    name: string;
    color: string;

    constructor(id: string, name: string, color: string) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}

export class Cocktail {
    name = "unnamed";
    amount = 240;
    layers: CocktailLayer[] = [];

    getFragmentsCount(): number {
        // total fragments
        var total = 0;
        this.layers.forEach(layer => {
            total += layer.components.length;
        })
        return total;
    }

    public getIngredients() {
        var ingredients: {[name: string]: number} = {};
        this.layers.forEach(layer => {
            layer.components.forEach(component => {
                if (ingredients[component.id]) {
                    ingredients[component.id] = ingredients[component.id] + 1;
                } else {
                    ingredients[component.id] = 1;
                }
            });
        });
        return ingredients;
    }

    public getMachineProgram() {
        var lines: any[] = []
        // total fragments
        var fragmentsCount = this.getFragmentsCount()

        this.layers.reverse().forEach(layer => {
            var programComponents: any[] = []
            layer.components.forEach(component => {
                var addNewComponent = true;
                programComponents.forEach(pc => {
                    if (pc["ingredient"] == component.id) {
                        addNewComponent = false
                        var amount = pc["amount"] + this.amount / fragmentsCount
                        pc["amount"] = amount;
                    }
                });
                if (addNewComponent) {
                    programComponents.push({
                        "ingredient": component.id,
                        "amount": this.amount / fragmentsCount
                    });
                }
            });

            // Round all component amount to integers
            programComponents.forEach(pc => {
                pc["amount"] = Math.round(pc["amount"])
            });
            
            lines.push({
                "components": programComponents,
                "timing": 2,
                "sleep": 0
            });
        }
        )
        var program = {
            "recipe": {
                "lines": lines
            }
        }
        return program
    }

    public addComponent(component: CocktailComponent, layerIndex: number) {
        this.layers[layerIndex].components.push(component);
    }

    public removeComponent(layerIndex: number, componentIndex: number) {
        this.layers[layerIndex].components.splice(componentIndex, 1);
    }

    public addLayer(layer: CocktailLayer, layerIndex: number) {
        this.layers.splice(layerIndex, 0, layer);
    }

    public removeLayer(layerIndex: number) {
        this.layers.splice(layerIndex, 1);
    }
}

export class CocktailLayer {
    components: CocktailComponent[] = [];
}
