import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private hc:HttpClient) { }
  getData()
  {
    console.log("get data started");
    return this.hc.get("https://fakestoreapi.com/products");
  }
  getCategoryData(str:string)
  {
    return this.hc.get(`https://fakestoreapi.com/products/category/${str}`);
  }
}
