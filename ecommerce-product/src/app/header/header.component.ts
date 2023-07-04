import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchResult: any =[]
  constructor(private service:MovieService,
    private activeRoute: ActivatedRoute,
    private route: Router) 
    { }

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('moviename');
    console.warn(query);
   
  }
  searchMovies(query:KeyboardEvent){
      if(query){
        const ele = query.target as HTMLInputElement;
        this.service.searchMovie(ele.value).subscribe((res)=>{
          this.searchResult = res;
        })
      }
    }
    submitSearch(val:any){
      this.route.navigate([`search/${val}`])
    }

}
