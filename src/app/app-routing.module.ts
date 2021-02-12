import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { DisplayPostsComponent } from './components/display-posts/display-posts.component';

const routes: Routes = [
  // { path: 'display-posts', component: DisplayPostsComponent },
  // { path: 'add-post', component: AddPostsComponent },
  // { path: '**', component: DisplayPostsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
