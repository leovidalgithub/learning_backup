import { HostListenerEventsPage } from './app.po';

describe('host-listener-events App', () => {
  let page: HostListenerEventsPage;

  beforeEach(() => {
    page = new HostListenerEventsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
