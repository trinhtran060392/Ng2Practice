import { SkyRecFrontEndNg2Page } from './app.po';

describe('sky-rec-front-end-ng2 App', function() {
  let page: SkyRecFrontEndNg2Page;

  beforeEach(() => {
    page = new SkyRecFrontEndNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
