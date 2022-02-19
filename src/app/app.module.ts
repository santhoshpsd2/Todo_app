import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
