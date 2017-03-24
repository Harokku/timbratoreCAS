import { TimbratorePage } from './app.po';

describe('timbratore App', () => {
  let page: TimbratorePage;

  beforeEach(() => {
    page = new TimbratorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
