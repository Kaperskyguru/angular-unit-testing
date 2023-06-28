import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [BrowserModule, ContactRoutingModule],
  providers: [],
  bootstrap: [ContactComponent],
})
export class ContactModule {}
