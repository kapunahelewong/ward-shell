import { WardShellPage } from './app.po';

describe('ward-shell App', function() {
  let page: WardShellPage;

  beforeEach(() => {
    page = new WardShellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
