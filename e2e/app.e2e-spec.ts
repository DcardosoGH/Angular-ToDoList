import { QuickAppPage } from './app.po';

describe('quick-app App', () => {
  let page: QuickAppPage;

  beforeEach(() => {
    page = new QuickAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
