import { TdmComponent } from "../TdmComponent";

export class TdmCocktailComponent extends TdmComponent {
    constructor(id: string, name: string, color: string) {
        super()
        this.id = id;
        this.name = name;
        this.displayColor = color;
    }
}
