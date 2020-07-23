import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="http://18.191.230.23:3000/"
  data: any;
  constructor(private http:HttpClient) { }


  postdata(url,data){

    console.log(data)
    return this.http.post(this.url+url,data)

  }
  newmethod(url,data){
    console.log(data)
    
  }
  testing(data){
    this.data=data
  }
  testing2(){
  return this.data
  }
}
