import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaScreenService {
  private _breakPointObserver = inject(BreakpointObserver);

  readonly isSmallScreen$: Observable<boolean>;

  constructor() {
    this.isSmallScreen$ = this._breakPointObserver
      .observe(Breakpoints.XSmall)
      .pipe(map((obs) => obs.matches));
  }
}
