import { waitForAngular } from 'testcafe-angular-selectors';
import { LoginPage, FindBookPage, BookDetailPage, MyCollectionPage } from './page-model';

const loginPage        = new LoginPage();
const findBookPage     = new FindBookPage();
const bookDetailPage   = new BookDetailPage();
const myCollectionPage = new MyCollectionPage();

fixture `Book Collection`
    .page('http://localhost:8080')
    .beforeEach(async t => {
        await waitForAngular();

        await t
            .typeText(loginPage.username, 'test')
            .typeText(loginPage.password, 'test')
            .click(loginPage.loginBtn);
    });

test("find a book and add it to the 'My Collection'", async t => {
    await findBookPage.navigateToBrowseBooksPage();

    await t
        .typeText(findBookPage.searchInput, 'The Hanger Games')
        .expect(findBookPage.bookPreviews.count).gt(0)
        .click(findBookPage.bookPreviews.nth(0));

    await t.click(bookDetailPage.actions.addToCollection);
    await findBookPage.navigateToMyCollectionPage();
    await t.expect(myCollectionPage.bookPreviews.count).eql(1);
});