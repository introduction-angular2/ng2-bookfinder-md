import { Ng2BookfinderMdPage } from './app.po';

describe('ng2-bookfinder-md App', function() {
  let page: Ng2BookfinderMdPage;

  beforeEach(() => {
    page = new Ng2BookfinderMdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
