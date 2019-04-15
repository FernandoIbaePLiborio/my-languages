import { UsuarioService } from './usuario.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _autencitado: BehaviorSubject<boolean>;
  public readonly autenticado$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private UsuarioService: UsuarioService
  ) {
    this._autencitado = new BehaviorSubject(false);
    this.autenticado$ = this._autencitado.asObservable();
   }
}
