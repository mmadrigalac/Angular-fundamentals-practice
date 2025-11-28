import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { UserService } from '../user/user.service';
import { map, Observable, take } from 'rxjs';
import { inject } from '@angular/core';

export const logInGuard: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const userSrv = inject(UserService);
  const router = inject(Router);

  return userSrv.getUser().pipe(
    take(1),
    map((islogedIn) => {
      if (islogedIn) return true;
      return router.createUrlTree(['/signIn']);
    })
  );
};
