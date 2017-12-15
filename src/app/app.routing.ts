import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VocabularyDetailComponent } from './vocabulary-detail/vocabulary-detail.component';
import { EditVocabularyComponent } from './edit-vocabulary/edit-vocabulary.component';
import { ResourcesComponent } from './resources/resources.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'vocabulary',
    component: VocabularyComponent
  },
  {
    path: 'terms/:id',
    component: VocabularyDetailComponent
  },
  // this will work after creating variable terms in terms.service.ts
  {
    path: 'resources',
    component: ResourcesComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
