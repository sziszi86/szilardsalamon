import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideContactComponent } from './components/slide-contact/slide-contact.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Error404Component } from './components/error-pages/404/404.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SlideContactComponent, Error404Component],
  imports: [CommonModule, RouterModule, MatDialogModule, MatButtonModule],
  exports: [HeaderComponent, FooterComponent, SlideContactComponent, Error404Component],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('A CoreModule-t csak az AppModule-ba importáld!');
    }
  }
}
