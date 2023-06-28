import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ContactModule } from './app/contact.module';

platformBrowserDynamic()
  .bootstrapModule(ContactModule)
  .catch((err) => console.error(err));
