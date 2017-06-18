import { SassProjectPage } from './app.po';

describe('sass-project App', () => {
  let page: SassProjectPage;

  beforeEach(() => {
    page = new SassProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
