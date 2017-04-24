import { ANGULARPage } from './app.po';

describe('angular App', () => {
  let page: ANGULARPage;

  beforeEach(() => {
    page = new ANGULARPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
