import { NgSeoPage } from './app.po';

describe('ng-seo App', () => {
  let page: NgSeoPage;

  beforeEach(() => {
    page = new NgSeoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
