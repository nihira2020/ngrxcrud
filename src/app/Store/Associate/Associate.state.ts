import { AssociateModel } from "./Associates";

export const AssociateState:AssociateModel={
  associateobj:{
      id: 0,
      name: "",
      address: "",
      email: "",
      mobile: "",
      type: "",
      customergroup: "",
      status: false
  },
  list:[],
  errormessage:''
}