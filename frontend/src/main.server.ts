import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import {
  ɵSERVER_CONTEXT as SERVER_CONTEXT,
  type BootstrapContext,
} from '@angular/platform-server';

/**
 * Server-side bootstrap entry point.
 * Angular SSR will call this automatically for each request.
 */
export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, {
    ...config,
    providers: [
      ...(config.providers ?? []),
      { provide: SERVER_CONTEXT, useValue: context },
    ],
  });
}
