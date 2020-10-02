import { IMeResponse } from './auth.types';
import RestService from '../rest/rest.service';

class AuthService extends RestService {
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
        const githubWindow = window.open('http://localhost:3001/api/v1/auth/github', 'Github OAUTH', 'width=500, height=500');
        const intervalID = setInterval(() => {
          try {
            if (githubWindow) {
              if (githubWindow.location.href === 'http://localhost:3000/#/github/success') {
                setTimeout(() => {
                  githubWindow.close();
                  close();
                }, 1000)
              }

              if (githubWindow.closed) {
                close();
              }
            }
          } catch (error) {
          }
        }, 500);

        const close = () => {
          clearInterval(intervalID)
          resolve()
        }

      } catch (error) {
        reject(error);
      }
    })
  }
}

export default AuthService;
