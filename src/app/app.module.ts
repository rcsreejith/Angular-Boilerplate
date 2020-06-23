import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { httpInterceptorProviders } from './core/http-interceptors';
import { HttpErrorService } from './core/services/http-error.service';
import { AlertPopupComponent } from './shared/popups/alert-popup/alert-popup.component';
import { MasterHeaderComponent } from './core/components/master-header/master-header.component';
import { MasterFooterComponent } from './core/components/master-footer/master-footer.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        MasterHeaderComponent,
        MasterFooterComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
    ],
    providers: [
        httpInterceptorProviders,
        AuthService,
        HttpErrorService
    ],
    entryComponents: [AlertPopupComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
