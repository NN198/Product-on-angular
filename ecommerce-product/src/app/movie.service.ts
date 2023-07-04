import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private Api_key:string;
  private api_path:any;
  private api_paths_array:any=[];
  constructor(private http: HttpClient) {
    this.Api_key = environment.apiKey
    

    this.api_path = `?api_key=${this.Api_key}&language=en-US&page=1`
   }

  getMovie(routerPath:string){

    let path = environment.apiUrl+ routerPath + this.api_path;
    console.log(path);
    
    return this.http.get(path);
    
  }

  moviePagination(path1:any){

    return this.http.get(path1);
    
  }

  getMovieDetail(routerPath:string){

    let path = environment.apiUrl+ routerPath + this.api_path;

    console.log(path);
    
    return this.http.get(path);
    
  }


  getUpcomingMovie(routerName:string)
  {
    let path = environment.apiUrl + routerName + this.api_path;
    
    // console.log(path);
    
    return this.http.get(path)
  }
  
  getTopMovie(routerName:string){
    let path = environment.apiUrl + routerName + this.api_path;
    
    console.log(path);
    
    return this.http.get(path)
  }

  searchMovie(movieName:string)
  {
    let path = environment.apiSearchUrl + `?api_key=${this.Api_key}&language=en-US&query=${movieName}&page=1`

    console.log(path);

    return this.http.get(path)
    
  }
}
