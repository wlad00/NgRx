import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {CounterActions} from "@editor-actions";
import {CounterService} from "./Workers/ConterService";

// import {EMPTY} from 'rxjs';

@Injectable()
export class CounterEffects {

  updatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CounterActions.increase,
        CounterActions.decrease,
        CounterActions.clear),
      map(() =>
        CounterActions.changeUpdatedAt({updatedAt: Date.now()}))
    ));


  /*loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CounterActions.getData),

      mergeMap(() =>
        this.counterService
          .getSomeStuff()
          .pipe(map(data =>

            CounterActions.getDateSuccess({data})
          )))
    ));*/


  constructor(
    private actions$: Actions,
    private counterService: CounterService
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

