import { Ng2Toa2Page } from './app.po';

describe('ng2-toa2 App', function() {
  let page: Ng2Toa2Page;

  beforeEach(() => {
    page = new Ng2Toa2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
