# WetubeChallengeDay2526
Created with CodeSandbox

## Nomad Academy YouTube clone coding challenge Day 23
### criteria

Build a simple API that I can use to check if a website is down.
- When I go to the URL /?url=nomadcoders.co, check if the 'url' query CONTAINS http and if it does not, add it.
- Using request make a GET request to the website and if the response.statusCode is less or equals than 445 return a "Up!"
- If the website is down, return a JSON "Down!"
