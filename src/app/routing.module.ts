import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainviewComponent } from "./mainview/mainview.component";

@NgModule({
  imports:[RouterModule.forRoot([
    {
    path:'',component:MainviewComponent
  }])],
  exports:[RouterModule]
})

export class RoutingModule {}
