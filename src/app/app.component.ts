import { Component, OnInit } from '@angular/core';
import { TestService } from './core/services/test.service';
import { HttpErrorService } from './core/services/http-error.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    httpError: any;

    isUserLogged: boolean;

    constructor(
        private authService: AuthService,
        private test: TestService,
        private translate: TranslateService,
    ) {
    }

    ngOnInit() {
        this.translate.setDefaultLang('en');
        this.isUserLogged = this.authService.isAuthenticated();
    }

    fetch() {
        this.test.fetch()
            .subscribe(data => console.log(data));
    }
}
