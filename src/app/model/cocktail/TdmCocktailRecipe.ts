import { TdmTechnologyData } from "../TdmTechnologyData";
import { TdmCocktailComponent } from "./TdmCocktailComponent";

export class TdmCocktailRecipe extends TdmTechnologyData {
    program: {};
    components: TdmCocktailComponent[];
    imageRef: string;
}
