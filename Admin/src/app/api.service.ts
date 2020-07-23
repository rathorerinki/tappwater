import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  get_language: any;

  constructor(private http:HttpClient) { }
  getData(url) {
        return this.http.get(url);
    }
    sendData(url,data){
      return this.http.post(url,data);
    }
  postData(url,id){
    return this.http.post(url,{r_id:id});
  }

// contributer
postDataid(url,id){
	return this.http.post(url,{id:id});
}

postDate(url,data){
	return this.http.post(url,data);
}

post_Date(url,from_date,to_date){
	return this.http.post(url,{from_date:from_date,to_date:to_date});
}
Deactivate(url,id){
	return this.http.post(url,{customer_id:id});
 }
 Activate(url,id){
	return this.http.post(url,{customer_id:id});
 }
 send_data(url,data){
  return this.http.post(url,data);

 }
 sendFile(formData: any){ 
    
    // let baseUrl = 'http://127.0.0.1:8000/api'; 
    let url = 'https://dev.krowdbox.com/api/uploadfile';     
    return this.http.post(url,formData)
  }
api(url,id){

	return this.http.post(url,{r_id:id})
}
language(value){
  this.get_language=value;
  console.log("api",this.get_language)
}


take_language(){
  return this.get_language;
}
}

        
