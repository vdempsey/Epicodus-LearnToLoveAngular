import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { EditVocabularyComponent } from './edit-vocabulary/edit-vocabulary.component';
import { VocabularyDetailComponent } from './vocabulary-detail/vocabulary-detail.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VocabularyComponent,
    EditVocabularyComponent,
    VocabularyDetailComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
