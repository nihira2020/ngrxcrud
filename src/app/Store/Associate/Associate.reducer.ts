import { createReducer, on } from "@ngrx/store"
import { AssociateModel } from "./Associates"
import { AssociateState } from "./Associate.state"
import { Openpopup, addassociatesuccess, deleteassociatesuccess, getassociatesuccess, loadassociate, loadassociatefail, loadassociatesuccess, updateassociatesuccess } from "./Associate.action"

const _AssociateReducer = createReducer(AssociateState,
    on(loadassociate, (state) => {
        return {
            ...state
        }
    }),
    on(loadassociatesuccess, (state, action) => {
        return {
            ...state,
            list: [...action.list],
            errormessage: ''
        }
    }),
    on(loadassociatefail, (state, action) => {
        return {
            ...state,
            list: [],
            errormessage: action.errormessage
        }
    }),
    on(getassociatesuccess, (state, action) => {
        return {
            ...state,
            associateobj: action.data
        }
    }),
    on(Openpopup, (state, action) => {
        return {
            ...state,
            associateobj: {
                id: 0,
                name: "",
                address: "",
                email: "",
                mobile: "",
                type: "MNC",
                customergroup: "level1",
                status: true
            }
        }
    }),
    on(addassociatesuccess, (state, action) => {
        const _maxid = Math.max(...state.list.map(o => o.id));
        const _newdata = { ...action.inputdata };
        _newdata.id = _maxid + 1;
        return {
            ...state,
            list: [...state.list, _newdata]
        }
    }),
    on(updateassociatesuccess, (state, action) => {
        const _newdata = state.list.map(o => {
            return o.id === action.inputdata.id ? action.inputdata : o
        })
        return {
            ...state,
            list: _newdata
        }
    }),
    on(deleteassociatesuccess, (state, action) => {
        const _newdata = state.list.filter(o=>o.id!==action.code)
        return {
            ...state,
            list: _newdata
        }
    })
)

export function AssociateReducer(state: any, action: any) {
    return _AssociateReducer(state, action)
}