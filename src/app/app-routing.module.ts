import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart',        component: CartComponent },
  { path: 'dashboard',        component: DashboardComponent },
  { path: 'profile',        component: ProfileComponent },
  { path: 'dashboard/courseDetail',        component: CourseDetailComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
