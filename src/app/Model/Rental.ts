import { UserInfo } from "./userInfo"
import { PMReport } from "./PMReport"
export interface Rental {
    id : number
    room: string
    classification: string
    tenantName: string
    areaMeter: number
    areaTsubo: number
    rentTsubo: number
    totalRent: number
    serviceFeesTsubo: number
    serviceFeesTotal: number
    deposit: number
    toalDeposit: number
    contractStartDate: string
    contractEndDate: string
    renewalFees: number
    totalRental: number
    rentalRemarks : string
    owner : UserInfo
    pmReport : PMReport
}