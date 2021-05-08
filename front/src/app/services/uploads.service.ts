import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UploadsService {
  private fileData$ = new Subject<[]>();
  fileCarga: any = [];
  constructor(private http: HttpClient) {}
  //SUBIDA DE ARCHIVO
  uploadFiles(formData) {
    let urlapi = 'http://localhost:3000/api/uploads';
    return this.http.post(urlapi, formData);
  }
  getDataFile$(): Observable<[]> {
    return this.fileData$.asObservable();
  }
  setDataFile$(fileData) {
    this.fileCarga.push(fileData);
    this.fileData$.next(this.fileCarga);
  }
}
