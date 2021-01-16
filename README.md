# Assignment 2 - Web API.

Name: Zhiling Chen

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - .... a statement of its purpose/objective ..... 
 + Feature 2 - .......
 + Feature 3 = ......
 + etc
 + etc

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
| /api/tvs/:id/ratings             | get the specific tv's ratings                  | N/A                           | N/A                           | N/A                     |
| /api/tvs/:id/similar             | get the similar TVs          | N/A                           | N/A                           | N/A                     |
| /api/tvs/search/:page            | search the tvs by keyword with page parameters | N/A                           | N/A                           | N/A                     |
| /api/genres                      | get all the genres                             | N/A                           | N/A                           | N/A                     |

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

**protect routes:**

- /api/users/:username/favourites POST
- /api/users/:username/favourites GET

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

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

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
