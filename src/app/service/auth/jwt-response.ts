export class JwtResponse {
  token: string;
  username: string;
  roles: string[];

  constructor(token: string, type: string, username: string) {
    this.token = token;
    this.username = username;
    this.roles = ['user'];
  }
}