# React + Redux + Express Starter Kit

## Setup Instructions

### Requirements

* Gulp (`npm install -g gulp`)
* Node.js 6.0+ (https://nodejs.org)
* Webpack (`npm install -g webpack webpack-dev-server`)
* Bower (`npm install -g bower`)
* Yarn (`npm install -g yarn`)

### Installation

* Clone the repository:

```
git@github.com:MilkZoft/react-redux-express-starter-kit.git
```

* Install the NPM dependencies with yarn.

```
yarn
```

* Install the Bower dependencies

```
bower install
```

* Add to your hosts:

```
127.0.0.1 local.myreactapp.com
```

* Includes the proxy file to our vhost file (/private/etc/apache2/extra/httpd-vhosts.conf):

```
Include /Users/<Your Mac User>/<Your Path to the Project>/react-redux-express-starter-kit/001-MyReactApp-proxy.conf
```

* Restart Apache

```
sudo apachectl restart
```

* Start the application server

```
gulp
```

* Run the application at [http://local.myreactapp.com](http://local.myreactapp.com)

### Tasks

- `gulp` Start server in development mode (executes `start-dev` task)
- `gulp p` Start server in production mode
- `gulp analyze` Eslint validator
- `gulp test` Run unit tests

### Libraries Used

- [babeljs](https://babeljs.io/)
- [bluebird](https://github.com/petkaantonov/bluebird)
- [eslint](http://eslint.org/)
- [express-js](http://expressjs.com/)
- [handlebars](handlebarsjs.com)
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
- [jest](https://github.com/facebook/jest) 
- [mocha](https://mochajs.org) 
- [mysql](http://mysql.com)
- [nodemon](http://nodemon.io)
- [react-helmet](https://github.com/nfl/react-helmet)
- [react-router-redux](https://github.com/reactjs/react-router-redux)
- [react-router](https://github.com/rackt/react-router)
- [react](http://facebook.github.io/react/)
- [redux](http://rackt.github.io/redux/)
- [stylus](http://stylus-lang.com)
- [user-agent-is-browser](https://github.com/stuartpb/user-agent-is-browser)
- [useragent](https://github.com/3rd-Eden/useragent)
- [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools)
- [webpack](http://webpack.github.io/)
