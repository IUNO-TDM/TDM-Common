import { TdmPaymentInvoice } from "./TdmPaymentInvoice";

export class TdmPaymentOffer {
    id: string
    invoice: TdmPaymentInvoice
    bip21: string
}