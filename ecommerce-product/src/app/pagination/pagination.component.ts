import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { forkJoin } from "rxjs";


@Component({
    selector: 'app-page',
    templateUrl: 'pagination.component.html'
})

export class PaginationComponent implements OnInit{

    public urlArray:any=[]
    urlMovie:any ="";
    movieResults:any=[]
    public arrlength:any=[]
    public moviesPageArray:any = []
    array_dumdum:any = []
    status = false;
    arr1:[][] =[];
    arr2:[][] =[];
    arr3:[][] =[];
    constructor(private service:MovieService){

    
    }

    ngOnInit(){
        
        let total_count = 10500;
        let perpage = 20; //420 pages     
        let p = total_count/perpage

        

        for( let i = 1; i <= 4; i++ )
        {
            this.service.moviePagination(i).subscribe((item) => {
                
                
                this.moviesPageArray.push(item)
                
                this.arrlength.push(i)
                
                
            })
        }

        

    //     this.urlArray = ["https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1", 
    //     "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=2",
    //     "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=3",
    // "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=4"]
        // console.log(this.moviesPageArray);
        
        // console.log(this.arrlength);
        
        this.array_dumdum=[["Lorem ", "Ipsum ",
        "simply ", "dummy ", "text ", "of the printing "], 
        [" and typesetting industry.",
        "Lorem Ipsum ", "has been the industry's"],
        [ "standard dummy text ever since the 1500s"]]
    

        console.log(...this.urlArray);
        

        console.log(this.array_dumdum);
        
        
        let no_of_pages = 500;
        let to_show_pages = 2
        let show = Math.round(no_of_pages/to_show_pages)
        
        
        for(let i = 1; i <= show; i++)
        {
                             
            this.urlMovie = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${i}`
            this.urlArray.push(this.urlMovie)
        }
        
        
       console.log(this.urlArray);
       
        console.log(this.arr2);


    }
    pageClicked(p:any)        
    {
        p.preventDefault();
        console.log(p.target.innerText);
        
        this.arr1 = [this.array_dumdum[p.target.innerText]]
        console.log(this.arr1);
        console.log(this.urlArray[p.target.innerText])
 
        
        if(this.arr1!== null)
        {
            this.status = true
        }

        this.service.moviePagination(this.urlArray[p.target.innerText]).subscribe((res) =>{
            console.log(res);
            this.movieResults = res;
            
            
            
        })
        
        
    }
    
    

}