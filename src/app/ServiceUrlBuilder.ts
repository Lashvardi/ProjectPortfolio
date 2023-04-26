export class ServiceUrlBuilder {
  private static DOMAIN_URL = 'https://gitconnected.com/v1/';
  private static API_POSTFIX = 'portfolio/';

  public static buildUrl(url: string) {
    return this.DOMAIN_URL + this.API_POSTFIX + url;
  }
}
