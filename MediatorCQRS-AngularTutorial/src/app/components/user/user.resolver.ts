import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from '../http-client/user.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<IUser> {
    constructor(private userService: UserService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
        return this.userService.getById(+route.params.id);
    }

}
