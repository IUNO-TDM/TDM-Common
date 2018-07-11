import { TdmPaymentTransfer } from "./TdmPaymentTransfer";

export class TdmPaymentInvoice {
    id: string
    expiration: Date
    transfers: TdmPaymentTransfer[]
}
