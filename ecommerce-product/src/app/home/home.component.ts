import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { environment } from 'src/environments/environment';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  public star:any="";
  private checked:any;
   unchecked:any;
  public movies:any =[]
  public image:any = []
  constructor(private service: MovieService, private el: ElementRef) {
    
   }


  ngOnInit(): void {

    
    
    console.log(this.el.nativeElement.innerHTML);
    
    let score=7;
    this.service.getMovie(`popular`).subscribe(
      (res:any) => {
        this.movies = res;
        console.log(res);
        
        
        this.movies.results.forEach(element => 
        {
          this.image.push(`${environment.img}`+ element.poster_path)
          this.checked = Math.floor(element.vote_average / 2);
          console.log(this.checked);
          
          this.unchecked = 5 - this.checked;
        });
        // console.log(this.image);
        
              
        
        for (let i = 0; i < this.checked; i++) {
          
          this.star += `<i class="fa fa-star checked"></i>`
        }
        
        for (let i = 0; i < this.unchecked; i++) {
          this.star+= `<i class="far fa-star "></i>`
        }
        
       // console.log(document.getElementById("rate"))
      }
    )


    

    

  }

  
    fun(ev:any)
    {
      console.log("clicked here");

      console.log(ev)
    }
}


