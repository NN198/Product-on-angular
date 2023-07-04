import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  public upcomingmovies:any = [];
  public image:any = [];
  constructor(private service: MovieService) { }

  ngOnInit(): void {

    
    this.service.getUpcomingMovie("/upcoming").subscribe(
      (res:any) =>{
        console.log(res);
        this.upcomingmovies = res.results

        this.upcomingmovies.forEach(element => 
          {
            this.image.push(`${environment.img}`+ element.poster_path)
          });
      }
    )
  }

}
