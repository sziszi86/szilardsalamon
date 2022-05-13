import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideContactComponent } from './components/slide-contact/slide-contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SlideContactComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, SlideContactComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('A CoreModule-t csak az AppModule-ba importáld!');
    }
  }
}
