import { TdmTechnology } from "./TdmTechnology";
import { TdmComponent } from "./TdmComponent";

export class TdmTechnologyData {
    id: string
    name: string
    technology: TdmTechnology
    data: any
    licenseFee: number
    productCode: number
    description: string
    thumbnail: any
    imageRef: string    
    createdAt: Date
    createdBy: string
    backgroundColor: string
    components: TdmComponent[]
}
