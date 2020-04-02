import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }

  getCorona():Observable<any>{
    return this.http.get("https://coronavirus-19-api.herokuapp.com/countries?fbclid=IwAR0YzIxVuyPO8UZFhPyXTLVPhDWK-6_fIhocTsIgmVYH7zUd3Xn5RDA_pMU");
  }
}
