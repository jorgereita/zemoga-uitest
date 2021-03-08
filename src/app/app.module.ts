/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CardVoteComponent } from './components/card-vote/card-vote.component';
import { StoreModule } from '@ngrx/store';
import { miReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { fromRoot } from './index.votes';
import { EffectsModule } from '@ngrx/effects';
import { OtherLinksComponent } from './components/other-links/other-links.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
// eslint-disable-next-line @typescript-eslint/naming-convention
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardVoteComponent,
    OtherLinksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({
      voteState: miReducer
    }),
    RouterTestingModule,
    RouterModule.forRoot([]),
    EffectsModule.forRoot([fromRoot.VoteEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
