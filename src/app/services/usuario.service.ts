import { Usuario } from 'src/app/interfaces/usuario';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuario: BehaviorSubject<Usuario>;
  public readonly usuario$: Observable<Usuario>;
  constructor() { }
}
