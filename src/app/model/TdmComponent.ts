import { TdmTechnology } from "./TdmTechnology";
import { TdmAttribute } from "./TdmAttribute";

export class TdmComponent {
    id: string
    name: string
    color: string
    attributes: TdmAttribute[]
    technoligies: TdmTechnology[]
}
