# Assignment 2 - Web API.

Name: Zhiling Chen

## Features.
 
 + Feature 1 - Get the movies by page for the react app's pagination functionality. 
 + Feature 2 - Get the upcoming movies by page for the react app's pagination functionality.
 + Feature 3 = Get the now playing movies by page for the react app's pagination functionality.
 + Feature 4 = Get the popular movies by page for the react app's pagination functionality.
 + Feature 5 = Get the top rated movies by page for the react app's pagination functionality.
 + Feature 6 = Get the trending movies by page for the react app's pagination functionality.
 + Feature 7 = Get the recommended movies of a particular movie.
 + Feature 8 = Search movies with keywords.
 + Feature 9 = Get the today's TVs by page for the react app's pagination functionality.
 + Feature 10 = Get the popular TVs by page for the react app's pagination functionality.
 + Feature 11 = Get the top rated TVs by page for the react app's pagination functionality.
 + Feature 12 = Get the hot TVs by page for the react app's pagination functionality.
 + Feature 13 = Get the today's TVs by page for the react app's pagination functionality.
 + Feature 14 = Get the similar TVs of a particular tv.
 + Feature 15 = Search TVs with keywords.
 
## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

- Need to be run on the node 12, latest npm version, and cloud mongdb. 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/waduhex/wad_api_assignment.git
```

followed by installation

```bat
npm install
npm start -- start for the app with port 8080
```

## API Configuration
```bat
NODE_ENV=development
PORT=8080
HOST=
TMDB_KEY=
mongoDB=YourCloudMongoURL
seedDb=true
secret=YourJWTSecret
```


## API Design
| Name                             | GET                                            | POST                          | PUT                           | DELETE                  |
| -------------------------------- | ---------------------------------------------- | ----------------------------- | ----------------------------- | ----------------------- |
| /api/movies                      | Gets a list of movies                          | N/A                           | N/A                           | N/A                     |
| /api/movies/page/:page           | Get movies by page                             | N/A                           | N/A                           | N/A                     |
| /api/movies/:id                  | Get specific movie by id                       | N/A                           | N/A                           | N/A                     |
| /api/movies/upcoming/:page       | Get upcoming movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/nowplaying/:page       | Get nowplaying movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/popular/:page       | Get popular movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/toprated/:page       | Get top rated movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/trending/:page       | Get trending movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/:id/recommend      | Get recommend movies of a particular movie                   | N/A                           | N/A                           | N/A                     |
| /api/movies/search/:query        | Search the movies by query parameter           | N/A                           | N/A                           | N/A                     |
| /api/users                       | Get all the users                              | Login in the system  | N/A                           | N/A                     |
| /api/users/:username             | N/A                                            | N/A                           | N/A                           | delete user by username |
| /api/users/:id                   | N/A                                            | N/A                           | update user information by id | N/A                     |
| /api/users/:userName/favorites   | get users' favorites movies                    | add favorite movies to user   | N/A                           | N/A                     |
| /api/tvs/todaytv/page/:page      | get today tvs by page                          | N/A                           | N/A                           | N/A                     |
| /api/tvs/populartv/page/:page    | get popular tvs by page                        | N/A                           | N/A                           | N/A                     |
| /api/tvs/topratedtv/page/:page   | get toprated tvs by page                       | N/A                           | N/A                           | N/A                     |
| /api/tvs/hottv                   | get hot tvs by page                            | N/A                           | N/A                           | N/A                     |
| /api/tvs/:id                     | get the detailed tv information                | N/A                           | N/A                           | N/A                     |
| /api/tvs/:id/similar             | get the similar TVs          | N/A                           | N/A                           | N/A                     |
| /api/tvs/search/:page            | search the tvs with keywords | N/A                           | N/A                           | N/A                     |
| /api/genres                      | get all the genres                             | N/A                           | N/A                           | N/A                     |

swagger

![][swagger1]

![][swagger2]

![][swagger3]

Link:https://app.swaggerhub.com/apis-docs/waduhex/wad-api-assignment/1.0.0#/

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

**protect routes:**

- /api/users/:username/favourites POST
- /api/users/:username/favourites GET

## Integrating with React App

I used to use Antd UI to implement the login part, and now I use my own API router to implement the login method .

```js
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};
```

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

The moviesApp url is shown below:

https://github.com/waduhex/wad2-moviesApp

## Independent learning.

- swagger ui

I build the swagger documentation in the swaggerhub. I implement it with swagger.json.

- helmet

I used the third-party package helmet to help secure my Express app by setting various HTTP headers.


# Assignment 2 - Agile Software Practice.

Name: Zhiling Chen

## Target Web API.

| Name                             | GET                                            | POST                          | PUT                           | DELETE                  |
| -------------------------------- | ---------------------------------------------- | ----------------------------- | ----------------------------- | ----------------------- |
| /api/movies                      | Gets a list of movies                          | N/A                           | N/A                           | N/A                     |
| /api/movies/page/:page           | Get movies by page                             | N/A                           | N/A                           | N/A                     |
| /api/movies/:id                  | Get specific movie by id                       | N/A                           | N/A                           | N/A                     |
| /api/movies/upcoming/:page       | Get upcoming movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/nowplaying/:page       | Get nowplaying movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/popular/:page       | Get popular movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/toprated/:page       | Get top rated movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/trending/:page       | Get trending movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/:id/recommend      | Get recommend movies of a particular movie                   | N/A                           | N/A                           | N/A                     |
| /api/movies/search/:query        | Search the movies by query parameter           | N/A                           | N/A                           | N/A                     |
| /api/users                       | Get all the users                              | Login in the system  | N/A                           | N/A                     |
| /api/users/:username             | N/A                                            | N/A                           | N/A                           | delete user by username |
| /api/users/:id                   | N/A                                            | N/A                           | update user information by id | N/A                     |
| /api/users/:userName/favorites   | get users' favorites movies                    | add favorite movies to user   | N/A                           | N/A                     |
| /api/tvs/todaytv/page/:page      | get today tvs by page                          | N/A                           | N/A                           | N/A                     |
| /api/tvs/populartv/page/:page    | get popular tvs by page                        | N/A                           | N/A                           | N/A                     |
| /api/tvs/topratedtv/page/:page   | get toprated tvs by page                       | N/A                           | N/A                           | N/A                     |
| /api/tvs/hottv                   | get hot tvs by page                            | N/A                           | N/A                           | N/A                     |
| /api/tvs/:id                     | get the detailed tv information                | N/A                           | N/A                           | N/A                     |
| /api/tvs/:id/similar             | get the similar TVs          | N/A                           | N/A                           | N/A                     |
| /api/tvs/search/:page            | search the tvs with keywords | N/A                           | N/A                           | N/A                     |
| /api/genres                      | get all the genres                             | N/A                           | N/A                           | N/A                     |

## Error/Exception Testing.

.... From the list of endpoints above, specify those that have error/exceptional test cases in your test code, the relevant test file and the nature of the test case(s), e.g.

+ Post /api/movies - test when the new movie has no title, invalid release date, empty genre list. Test adding a movie without prior authentication. See tests/functional/api/movies/index.js 

## Continuous Delivery/Deployment.

..... Specify the URLs for the staging and production deployments of your web API, e.g.

+ https://movies-api-trial-staging.herokuapp.com/ - Staging deployment
+ https://movies-api-production.herokuapp.com/ - Production

.... Show a screenshots from the overview page for the two Heroku apps e,g,

+ Staging app overview 

![][stagingapp]

+ Production app overview 

[ , , , screenshot here . . . ]

[If an alternative platform to Heroku was used then show the relevant page from that platform's UI.]

## Feature Flags (If relevant)

... Specify the feature(s) in your web API that is/are controlled by a feature flag(s). Mention the source code files that contain the Optimizerly code that implement the flags. Show screenshots (with appropriate captions) from your Optimizely account that prove you successfully configured the flags.

[swagger1]: ./public/swagger1.png
[swagger2]: ./public/swagger2.png
[swagger3]: ./public/swagger3.png