import { createAction, props } from "@ngrx/store"
import { Associates } from "src/app/Model/AssociateModel"

export const LOAD_ASSOCIATE = '[associate] load all'
export const LOAD_ASSOCIATE_SUCCESS = '[associate] load all success'
export const LOAD_ASSOCIATE_FAIL = '[associate] load all fail'

export const ADD_ASSOCIATE = '[associate] add'
export const ADD_ASSOCIATE_SUCCESS = '[associate] add success'

export const UPDATE_ASSOCIATE = '[associate] update'
export const UPDATE_ASSOCIATE_SUCCESS = '[associate] update success'

export const DELETE_ASSOCIATE = '[associate] delete'
export const DELETE_ASSOCIATE_SUCCESS = '[associate] delete success'

export const GET_ASSOCIATE = '[associate] get all'
export const GET_ASSOCIATE_SUCCESS = '[associate] get all success'

export const OPEN_POPUP = '[associate] open popup'


export const loadassociate = createAction(LOAD_ASSOCIATE);
export const loadassociatesuccess = createAction(LOAD_ASSOCIATE_SUCCESS, props<{ list: Associates[] }>())
export const loadassociatefail = createAction(LOAD_ASSOCIATE_FAIL, props<{ errormessage: string }>())

export const addassociate = createAction(ADD_ASSOCIATE,props<{inputdata:Associates}>());
export const addassociatesuccess = createAction(ADD_ASSOCIATE_SUCCESS,props<{inputdata:Associates}>());

export const getassociate = createAction(GET_ASSOCIATE,props<{code:number}>());
export const getassociatesuccess = createAction(GET_ASSOCIATE_SUCCESS,props<{data:Associates}>());

export const Openpopup = createAction(OPEN_POPUP);

export const updateassociate = createAction(UPDATE_ASSOCIATE,props<{inputdata:Associates}>());
export const updateassociatesuccess = createAction(UPDATE_ASSOCIATE_SUCCESS,props<{inputdata:Associates}>());

export const deleteassociate = createAction(DELETE_ASSOCIATE,props<{code:number}>());
export const deleteassociatesuccess = createAction(DELETE_ASSOCIATE_SUCCESS,props<{code:number}>());