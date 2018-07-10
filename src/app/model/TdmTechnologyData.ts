import { TdmTechnology } from "./TdmTechnology";
import { TdmComponent } from "./TdmComponent";

export class TdmTechnologyData {
    id: string
    name: string
    licenseFee: number
    productCode: number
    description: string
    createdAt: Date
    backgroundColor: string
    technology: TdmTechnology
    components: TdmComponent[]
}
