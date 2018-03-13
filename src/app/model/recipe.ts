import { CocktailComponent } from "./cocktail";

export class Recipe {
    id: string;
    title: string;
    description: string;
    licenseFee: number;
    program: {};
    backgroundColor: string;
    components: CocktailComponent[];

    constructor() {
    }
}

