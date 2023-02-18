import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Router } from "@angular/router";

import { AuthService } from "@shomas/services";
import { AuthActions } from '@shomas/state';

@Injectable()
export class AuthEffects {

  readonly login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    mergeMap(({ loginCredentials }) => this.authService.login(loginCredentials).pipe(
      map(user => AuthActions.loginSuccessful({ user })),
      tap(() => this.router.navigate(['content/dashboard/profile'])),
      catchError((error: Error) => of(AuthActions.loginFailed({ error }))
    ))),
  ));

  readonly register$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.register),
    mergeMap(({ registerCredentials }) => this.authService.register(registerCredentials)),
    map(user => AuthActions.registerSuccessful({ user })),
    tap(() => this.router.navigate(['content/dashboard/profile'])),
    catchError((error: Error) => of(AuthActions.registerFailed({ error }))
  )));

  readonly logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    mergeMap(() => this.authService.logout()),
    map(() => AuthActions.logoutSuccessful()),
    tap(() => this.router.navigate(['auth'])),
    catchError((error: Error) => of(AuthActions.logoutFailed({ error }))
  )));

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}
}
