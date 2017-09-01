import { RentalAppPage } from './app.po';

describe('rental-app App', () => {
  let page: RentalAppPage;

  beforeEach(() => {
    page = new RentalAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
