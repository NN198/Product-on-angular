import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchResults:any =[]
  public query:any;
  public image: any =[]
  constructor(private service: MovieService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.query = this.activeRoute.snapshot.paramMap.get('moviename');
    console.warn(this.query);

    this.query && this.service.searchMovie(this.query).subscribe((res) =>{
      this.searchResults = res;
      console.log(this.searchResults);
      
      this.searchResults.results.forEach(ele => {
        this.image.push(`${environment.img}` + ele.poster_path)
      })
    })
    
    

  }

}
