import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SinglemovieComponent implements OnInit {

  public sMovie :any = {}
  public genres:any=[]
  public image:any;
  public image_1:any;
  public bckg_image:any;
  public profile_img:any =[];
  public castArray:any =[];
  public cast_imgs:any= []

  xyzz:any=[]
  
  constructor(private act:ActivatedRoute, 
    private service: MovieService){ }

  ngOnInit(): void {
    let id = this.act.snapshot.params.id;
    

    this.service.getMovieDetail(`${id}`).subscribe(
      (res:any) =>
      {
        this.sMovie = res;
        console.log(this.sMovie);
        this.image  = environment.img + this.sMovie.belongs_to_collection.poster_path
        this.image_1 = environment.img + this.sMovie.backdrop_path;
        this.bckg_image  = environment.img + this.sMovie.belongs_to_collection.backdrop_path    
        console.log(this.sMovie.genres);
        this.genres = this.sMovie.genres
        
        
        
      }
    )
     
  
    this.service.getMovieDetail(`${id}/credits`).subscribe(
      (res:any) => {
        
        console.log(res);
        this.castArray = res.cast;
        console.log("sjdfbsn", this.castArray);

        
        
        this.castArray.forEach(i => {
          console.log(this.cast_imgs.push(i.profile_path));                 
        });

        for(let i=0;i<this.cast_imgs.length;i++)
        {
          this.profile_img.push(`${environment.img}${this.cast_imgs[i]}`)
        }
        // console.log(this.p rofile_img);
        
        // this.xyzz=[10,20,30]
        // console.log(this.xyzz);
        
        
         
      }
    )
  }

}
