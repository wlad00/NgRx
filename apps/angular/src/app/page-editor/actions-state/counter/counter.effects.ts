import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {changeUpdatedAt, clear, decrease, getData, getDateSuccess, increase} from "./counter.actions";
import {MyService} from "../../services/myService";

// import {EMPTY} from 'rxjs';

@Injectable()
export class CounterEffects {

  updatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increase, decrease, clear),
      map(() =>
        changeUpdatedAt({updatedAt: Date.now()}))
    ));

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(getData),
    /* отменит все следующие пока не выполнится текущий*/

    mergeMap(() => this.myService.getSomeStuff()
      .pipe(
        map(data => {
          return getDateSuccess({data});

        })
      )
    )
    /* будет каждый раз заново делать*/
    /*switchMap(() =>  this.myService.getSomeStuff()
      .pipe(
        map(data => {
         return getDateSuccess({data});

        })
      )
    )*/
  ));


  constructor(
    private actions$: Actions,
    private myService: MyService
  ) {
  }


}
