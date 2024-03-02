export interface familyPackageDTO {
    id: number,
    discount: number,
    paymentMode: string,
    amountToDebit: number,
    frequency: string,
    momoNetwork: string,
    momoNumber: string,
    createdBy: string,
    updateBy: string | null,
    createdAt: string | null,
    updatedAt: string | null
}