import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AssociateService } from "src/app/service/associate.service";
import { addassociate, addassociatesuccess, deleteassociate, deleteassociatesuccess, getassociate, getassociatesuccess, loadassociate, loadassociatefail, loadassociatesuccess, updateassociate, updateassociatesuccess } from "./Associate.action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { ShowAlert } from "../Global/App.Action";

@Injectable()
export class AssociateEffect {

    constructor(private action$: Actions, private service: AssociateService) {

    }

    _loadassociate = createEffect(() =>
        this.action$.pipe(
            ofType(loadassociate),
            exhaustMap((action) => {
                return this.service.GetAll().pipe(
                    map((data) => {
                        return loadassociatesuccess({ list: data })
                    }),
                    catchError((_error) => of(loadassociatefail({ errormessage: _error.message })))
                )
            })
        )
    )

    _addassociate = createEffect(() =>
        this.action$.pipe(
            ofType(addassociate),
            switchMap((action) => {
                return this.service.Create(action.inputdata).pipe(
                    switchMap(() => {
                        return of(addassociatesuccess({ inputdata: action.inputdata }), ShowAlert({ message: 'saved successfully.', actionresult: 'pass' }))
                    }),
                    catchError((_error) => of(ShowAlert({ message: 'Failed to save', actionresult: 'fail' })))
                )
            })
        )
    )

    _updateassociate = createEffect(() =>
        this.action$.pipe(
            ofType(updateassociate),
            switchMap((action) => {
                return this.service.Update(action.inputdata).pipe(
                    switchMap(() => {
                        return of(updateassociatesuccess({ inputdata: action.inputdata }), ShowAlert({ message: 'Updated successfully.', actionresult: 'pass' }))
                    }),
                    catchError((_error) => of(ShowAlert({ message: 'Failed to save', actionresult: 'fail' })))
                )
            })
        )
    )

    _deleteassociate = createEffect(() =>
    this.action$.pipe(
        ofType(deleteassociate),
        switchMap((action) => {
            return this.service.Delete(action.code).pipe(
                switchMap(() => {
                    return of(deleteassociatesuccess({ code: action.code }), ShowAlert({ message: 'Removed successfully.', actionresult: 'pass' }))
                }),
                catchError((_error) => of(ShowAlert({ message: 'Failed to Remove'+ _error.message, actionresult: 'fail' })))
            )
        })
    )
)


    _getassociate = createEffect(() =>
        this.action$.pipe(
            ofType(getassociate),
            exhaustMap((action) => {
                return this.service.GetAllbyCode(action.code).pipe(
                    map((_data) => {
                        return getassociatesuccess({ data: _data })
                    }),
                    catchError((_error) => of(ShowAlert({ message: 'Failed to fetch data', actionresult: 'fail' })))
                )
            })
        )
    )

}