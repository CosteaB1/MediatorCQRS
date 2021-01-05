import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IUser, IUserUpdate } from 'src/app/interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) {

    }
    addUser(user: IUser): Observable<IUser> {
        return this.http.post<IUser>('https://localhost:44312/api/User', user);
    }
    fetchUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>('https://localhost:44312/api/User')
            .pipe(delay(500));
    }
    removeUser(id: number): Observable<any> {
        return this.http.delete(`https://localhost:44312/api/User/${id}`);
    }
    updateUser(id: number, user: IUserUpdate): Observable<IUserUpdate> {
        return this.http.patch<IUser>(`https://localhost:44312/api/User/${id}`, user);
    }
    getById(id: number): Observable<IUser> {
        return this.http.get<IUser>(`https://localhost:44312/api/User/${id}`);
    }
}
