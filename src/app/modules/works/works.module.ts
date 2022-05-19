import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { worksRoutes } from './works.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorksComponent } from './works.component';

@NgModule({
  declarations: [WorksComponent],
  imports: [CommonModule, RouterModule.forChild(worksRoutes), SharedModule],
})
export class WorksModule {}
