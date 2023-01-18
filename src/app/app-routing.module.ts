import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'/products', pathMatch:'full'},
{path:'products', component: ProductsComponent},
{path:'details/:prod_Id',component:DetailsComponent},
{path:'info/:prod_Id/:sub_id',component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
