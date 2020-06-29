import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { BookeditComponent } from './bookedit/bookedit.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'create',
    component:BookcreateComponent,
  },
  {
    path: 'edit',
    component:BookeditComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
