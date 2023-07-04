import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {

  public topratedmovies:any = [];
  public image:any = [];
  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getTopMovie("top_rated").subscribe(

      (res:any) =>
      {
        console.log(res);

        this.topratedmovies = res.results

        this.topratedmovies.forEach(element => 
          {
            this.image.push(`${environment.img}`+ element.poster_path)
          });
      }
        
      
    )
  }

}
