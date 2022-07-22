import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {CounterService} from "./Workers/ConterService";
import {CounterActions} from "@editor-actions";




@Injectable()
export class CounterEffects {

  /* increase, decrease, clear */

  changeUpdatedAt = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        CounterActions.increase,
        CounterActions.decrease,
        CounterActions.clear),

      map(() =>
        CounterActions.changeUpdatedAt({updatedAt: Date.now()}))
    );
  });


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

