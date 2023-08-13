import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AssociateModel } from "./Associates";

const getassociatestate = createFeatureSelector<AssociateModel>('associate');

export const getassociatelist = createSelector(getassociatestate, (state) => {
    return state.list;
})

export const getassociateobj= createSelector(getassociatestate, (state) => {
    return state.associateobj;
})