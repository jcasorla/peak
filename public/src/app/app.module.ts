import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { WriteComponent } from './write/write.component';


// import { CakeComponent } from './cake/cake.component'; // <-- import FormsModule.


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ListComponent,
    ViewComponent,
    WriteComponent,
    // CakeComponent
  ],
  providers: [
    HttpService
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- register FormsModule with our app.
    HttpClientModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
