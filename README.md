# Assignment 2 - Web API.
​
Name: Máté Domonics (20093156)
​
## Features.
​
[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 
​
+ Changed the TMDB API Calls in the React App to be calling from our own API (found in "movies-api"). This still calls TMDB, it just goes through our own API. (As seen in "movies-api/api/movies/index.js" and "movies-api/api/tmdb-api.js")
+ Implemented a Login and Register page, where users can make new accounts and then log into them, while also being able to log out of them on the Register page.
​
## Installation Requirements
​
Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 
​
Describe getting/installing the software, perhaps:
​
+ Install dependencies from the labs. No additional dependencies were installed for this assignment by me.
+ "npm start" on both "movies-api" and "moviesApp".
+ run "mongod" with "movies_db" present.

​
## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:
​
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
secret=YourJWTSecret
TMDB_KEY=YourTMDBKey
```
​
​
## API Design
Give an overview of your web API design, perhaps similar to the following: 
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A
| /api/movies/tmdb/upcoming | Get all upcoming movies | N/A | N/A | N/A
| /api/movies/tmdb/toprated | Get all top rated movies | N/A | N/A | N/A
| /api/movies/tmdb/tv | Get all TV Series | N/A | N/A | N/A
| /api/users?action=register | N/A | Register a new user into the API | N/A | N/A
| /api/users | Query the list of users | N/A | N/A | N/A
​
If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).
​
​
## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. **REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB**

+ Users get a token when they register, which they use to access the website.
​
## Integrating with React App
​
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

+ The React App can be found within this repo, along with our own API that I contined working on from the labs.
​
~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
        '/api/movies', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
};

export const getUpcomingMovies = () => {
    return fetch(
        '/api/movies/tmdb/upcoming', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
};

export const getTopRatedMovies = () => {
    return fetch(
        '/api/movies/tmdb/toprated', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
};

export const getTVSeries = () => {
    return fetch(
        '/api/movies/tmdb/tv', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
    }
    ).then(res => res.json());
};

~~~
​
## Extra features
​
. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

+ None.
​
## Independent learning.
​
. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  

+ None.