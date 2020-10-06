import { IMeResponse } from './auth.types';
import RestService from '../rest/rest.service';
import { GithubLoginError } from '../../shared/utils/error.util';

class AuthService extends RestService {

  private static _githubOauthUrl = `${RestService.baseApiUrl}/auth/github`;

  public static async getMe() {
    try {
      return await this.get<IMeResponse>({
        url: '/me'
      });
    } catch (error) {
      throw error;
    }
  }

  public static async githubLogin() {
    return new Promise((resolve, reject) => {
      try {

        const githubWindow = window.open(
          this._githubOauthUrl,
          'Github OAUTH',
          'width=500, height=500'
        );

        const successRoute = new RegExp('github/success');
        const errorRoute = new RegExp('github/error');
        const checkGithubWindowState = () => {
          try {
            if (githubWindow) {
              const windowLocation = githubWindow.location.href;

              if (successRoute.test(windowLocation)) {
                return onWindowFinalized();
              } else if (errorRoute.test(windowLocation)) {
                return onWindowFinalized(new GithubLoginError());
              }

              if (githubWindow.closed) {
                return onWindowFinalized(new GithubLoginError(), 0);
              }
            }
          } catch (error) {
            // Catching cross-origin frame while redirected on github.com
          }

          setTimeout(checkGithubWindowState, 500);
        }

        const onWindowFinalized = (error?: Error, displayApiMessageTime = 2000) => {
          if (!githubWindow) {
            return;
          }

          setTimeout(() => {
            githubWindow.close();

            if (error) {
              reject(error)
            } else {
              resolve()
            }
          }, displayApiMessageTime);
        }

        checkGithubWindowState();

      } catch (error) {
        reject(error);
      }
    })
  }
}

export default AuthService;
