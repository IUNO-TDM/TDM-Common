import { TdmTechnology } from "./TdmTechnology";
import { TdmAttribute } from "./TdmAttribute";

export class TdmComponent {
    id: string
    parentId: string
    name: string
    description: string
    displayColor: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: Date
    attributes: TdmAttribute[]
    technoligies: TdmTechnology[]
}
