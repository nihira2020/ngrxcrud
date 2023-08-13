import { Associates } from "src/app/Model/AssociateModel";

export interface AssociateModel{
    list:Associates[],
    errormessage:string,
    associateobj:Associates
}