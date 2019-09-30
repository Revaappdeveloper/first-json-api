import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials = {
    username:"Revathy",
    password: "abcd1234"
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
enterData(){
  console.log(this.loginCredentials);
  let headers = new HttpHeaders({'Content-Type': 'application/json', 'secret-key': '$2a$10$MhenZ/mVISY1mAPk7.doo.Ue/FcGXA9fKwAW/gPYmkTnyUedDrFhq'})
  let  httpRequest = this.httpClient.get('https://api.jsonbin.io/b/5d331ecec55c97707db4cce4', {headers: headers});
    console.log(this);
    httpRequest.subscribe((data)=>{
      console.log(data);    
    }, (err:any)=>{
      console.error(err);
    });

    // let headers = new HttpHeaders({'Content-Type': 'application/json'});
  let  httpRequest1 = this.httpClient.put('https://api.jsonbin.io/b/5d331ecec55c97707db4cce4', this.loginCredentials, {headers: headers});
    console.log(this);
    httpRequest1.subscribe((data)=>{
      console.log(data);    
    }, (err:any)=>{
      console.error(err);
    });


    let  httpRequest2 = this.httpClient.delete('https://api.jsonbin.io/b/5d331ecec55c97707db4cce4', {headers: headers});
    console.log(this);
    httpRequest2.subscribe((data)=>{
      console.log(data);    
    }, (err:any)=>{
      console.error(err);
    });
//     let  httpRequest = this.httpClient.get('https://api.myjson.com/bins/cp3fd');
//   console.log(this);
//   httpRequest.subscribe((data)=>{
//     console.log(data);    
//   }, (err:any)=>{
//     console.error(err);
//   });

// let httpRequest1 = this.httpClient.put('https://api.myjson.com/bins/cp3fd', this.loginCredentials);
// console.log(this);
// httpRequest1.subscribe((data)=>{
//   console.log(data);
// }, (err:any)=>{
//   console.error(err);
// });

}


}




