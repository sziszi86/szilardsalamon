import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { worksRoutes } from './works.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(worksRoutes), SharedModule],
})
export class WorksModule {}
