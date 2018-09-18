import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { Board } from './model/board';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardUriCreateAndFindAll = 'localhost:8080/boardDetails';

  constructor(
    private http: HttpClient
  ) { }

  getBoardDetails(): Observable<Board[]>{
    return this.http.get<Board[]>(this.boardUriCreateAndFindAll);
  }
}
