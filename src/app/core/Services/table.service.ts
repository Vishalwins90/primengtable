import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  private apiUrl = 'http://localhost:3000/posts';
  constructor(public http: HttpClient) {}


  get() {
    return this.http.get(this.apiUrl);
  }
  private subject = new Subject<any>();

  sendMessage(message: string) {
      this.subject.next({ text: message });
  }
  patchdata(id:any,data:any){
    debugger
     return this.http.patch(this.apiUrl+"/"+id, data);
  }
  // patchdata(id: number,data:any): Observable<any> {
  //   debugger
  //   const url = `${this.apiUrl}/your-endpoint/${id}`;
  //   return this.http.patch(url);
  // }

}
