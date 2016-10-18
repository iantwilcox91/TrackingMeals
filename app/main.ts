import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);



// Note that the word bootstrap used here does not refer to the Bootstrap CSS framework we've been using since Intro to Programming. Angular contains a bootstrap method of the same name used to initialize applications.
