import { AngularSelector } from 'testcafe-angular-selectors';
import { t } from 'testcafe';

export class LoginPage {
    constructor () {
        const loginForm = AngularSelector('bc-login-form');

        this.username = loginForm.find('#md-input-1');
        this.password = loginForm.find('#md-input-3');
        this.loginBtn = loginForm.find('.mat-button');
    }
}

class BasePage {
    constructor () {
        const navigationItem = AngularSelector('bc-nav-item');

        this.toolbar = AngularSelector('bc-toolbar');
        this.sidenav = {
            myCollectionNavItem: navigationItem.find('a').withText('My Collection'),
            browseBooksNavItem:  navigationItem.find('a').withText('Browse Books')
        };

        this.openToolbarBtn = this.toolbar.find('button');
    }

    async navigateToBrowseBooksPage () {
        await t
            .click(this.openToolbarBtn)
            .click(this.sidenav.browseBooksNavItem);
    }
}

export class FindBookPage extends BasePage {
    constructor () {
        super();

        this.searchInput  = AngularSelector('bc-book-search').find('input');
        this.bookPreviews = AngularSelector('bc-book-preview');
    }
}
