import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { aboutRoutes } from './about.routing';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild(aboutRoutes), SharedModule],
})
export class AboutModule {}
