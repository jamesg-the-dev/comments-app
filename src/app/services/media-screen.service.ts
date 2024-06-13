import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaScreenService {
  private _isSmallScreen = false;
  constructor(private breakPointObserver: BreakpointObserver) {
    this._isSmallScreen = this.breakPointObserver.isMatched(Breakpoints.XSmall);
  }

  get isSmallScreen() {
    return this._isSmallScreen;
  }
}
