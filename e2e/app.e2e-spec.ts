import { EpicodusLearnToLoveAngularPage } from './app.po';

describe('epicodus-learn-to-love-angular App', () => {
  let page: EpicodusLearnToLoveAngularPage;

  beforeEach(() => {
    page = new EpicodusLearnToLoveAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
