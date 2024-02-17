import { Component } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products:any;
  isDark=false;
  change()
  {
    if(this.isDark)
    {
      this.isDark=false;
    }
    else{
      this.isDark=true;
    }
  }
  constructor(private fs:FetchService)
  {
    this.fs.getData().subscribe((data)=>{
    this.products=data;
    console.log(this.products)
    })

  }
  fun(e:any)
  {
    console.log(e.target.textContent)
    console.log(this.products)
    this.fs.getCategoryData(e.target.textContent).subscribe((data)=>this.products=data)
  }

}
