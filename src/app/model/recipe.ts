import { CocktailComponent } from "./cocktail";

export class Recipe {
    id: string;
    title: string;
    description: string;
    licenseFee: number;
    program: string;
    backgroundColor: string;
    components: CocktailComponent[];

    constructor() {
    }
}

