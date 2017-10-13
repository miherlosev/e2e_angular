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
        this.toolbar = AngularSelector('bc-toolbar');
        this.sidenav = {
            myCollectionNavItem: AngularSelector('bc-nav-item').find('a').withText('My Collection'),
            browseBooksNavItem:  AngularSelector('bc-nav-item').find('a').withText('Browse Books')
        };

        this.openToolbarBtn = this.toolbar.find('button');
    }

    async _openToolbar () {
        await t.click(this.openToolbarBtn);
    }

    async navigateToBrowseBooksPage () {
        await this._openToolbar();
        await t.click(this.sidenav.browseBooksNavItem);
    }

    async navigateToMyCollectionPage () {
        await this._openToolbar();
        await t.click(this.sidenav.myCollectionNavItem);
    }
}

export class FindBookPage extends BasePage {
    constructor () {
        super();

        this.searchInput  = AngularSelector('bc-book-search').find('input');
        this.bookPreviews = AngularSelector('bc-book-preview');
    }
}

export class BookDetailPage extends BasePage {
    constructor () {
        super();

        this.title = AngularSelector('md-card-title');

        const bookActionsContainer = AngularSelector('md-card-actions');

        this.actions = {
            addToCollection:      bookActionsContainer.find('button').withText('Add Book to Collection'),
            removeFromCollection: bookActionsContainer.find('button').withText('Remove Book from Collection')
        };
    }
}

export class MyCollectionPage extends BasePage {
    constructor () {
        super();

        this.bookPreviews = AngularSelector('bc-book-preview');
    }
}

