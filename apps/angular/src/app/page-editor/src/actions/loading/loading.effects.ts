import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {LoadingActions} from "@page-editor";
import {LoadingService} from "./Workers/LoadingService";

// import {EMPTY} from 'rxjs';

@Injectable()
export class LoadingEffects {

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        LoadingActions.getData),

      mergeMap(() =>
        this.loadingService
          .getSomeStuff()
          .pipe(map(data =>

            LoadingActions.getDateSuccess({data})
          )))
    ));


  constructor(
    private actions$: Actions,
    private loadingService: LoadingService
  ) {
  }


}

/* mergeMap отменит все следующие пока не выполнится текущий*/

/* будет каждый раз заново делать*/
/*switchMap(() =>  this.myService.getSomeStuff()
  .pipe(
    map(data => {
     return getDateSuccess({data});

    })
  )
)*/

