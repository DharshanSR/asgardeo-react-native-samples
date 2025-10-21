import { ASGARDEO_ISSUER, ASGARDEO_CLIENT_ID, ASGARDEO_REDIRECT_URL, ASGARDEO_POST_LOGOUT_REDIRECT_URL } from '@env';

export const config = {
  issuer: ASGARDEO_ISSUER,
  clientId: ASGARDEO_CLIENT_ID,
  redirectUrl: ASGARDEO_REDIRECT_URL,
  scopes: ['openid', 'profile'],
  postLogoutRedirectUrl: ASGARDEO_POST_LOGOUT_REDIRECT_URL,
};
