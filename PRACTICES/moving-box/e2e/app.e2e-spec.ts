import { MovingBoxPage } from './app.po';

describe('moving-box App', () => {
  let page: MovingBoxPage;

  beforeEach(() => {
    page = new MovingBoxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
