import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { DashboardComponent } from './dashboard//dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseCardComponent,
    CourseDetailComponent,
    DashboardComponent,
    WishlistComponent,
    ProfileComponent,
    CartComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
