import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { SinglemovieComponent } from './singlemovie/singlemovie.component';
import { TopratedComponent } from './genre/toprated/toprated.component';
import { UpcomingComponent } from './genre/upcoming/upcoming.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"main", component: MainComponent},
  {path:"singlemovie/:id", component: SinglemovieComponent},
  {path:"top", component: TopratedComponent},
  {path:"upcoming", component: UpcomingComponent},
  {path:"search/:moviename", component: SearchComponent},
  {path:"page", component: PaginationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
