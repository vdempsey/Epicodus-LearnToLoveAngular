import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { ResourcesComponent } from './resources/resources.component';
import { MeComponent } from './me/me.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'entries',
    component: EntriesComponent
  },
  {
    path: 'entry/:id',
    component: EntryDetailComponent
  },
  // this will work after creating variable terms in terms.service.ts
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'me',
    component: MeComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
