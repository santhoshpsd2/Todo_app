import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
