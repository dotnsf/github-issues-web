# React.JS sample to handle GitHub Issues


## Setup

- Setup `github-issues-api` first.

  - https://github.com/dotnsf/git-issues-api.git

- Git clone this repository: 

  - `$ git clone https://github.com/dotnsf/git-issues-web.git`

- Generate `.env` file in base folder:

  - `$ cd git-issues-web`

  - `$ touch .env`

- Set environment variable `REACT_APP_APP_SERVER` as `github-issues-api` server in `.env` file:

  - ```
  REACT_APP_APP_SERVER=http://localhost:8080
  ```

- Run `github-issues-api` first with environment variable `CORS` as this app server:

  - `$ cd ./github-issues-api`

  - `$ CORS=http://localhost:3000 npm start`

- Then run `github-issues-web`:

  - `$ npm start`


## Build

- Build your web app in `github-issues-web`:

  - `$ npm run build`

- Run `github-issues-api` first with environment variable `CORS` as this app server:

  - `$ cd ./github-issues-api`

  - `$ CORS=http://localhost:8000 npm start`

- Then run `github-issues-web` as static http server:

  - `$ node app`
 


## Licensing

This code is licensed under MIT.


## Copyright

2022 K.Kimura @ Juge.Me all rights reserved.

