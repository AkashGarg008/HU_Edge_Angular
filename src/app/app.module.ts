import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseCardComponent,
    CourseDetailComponent,
    DashboardComponent,
    WishlistComponent,
    ProfileComponent
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
