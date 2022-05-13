# Cut String

## Description

This application accepts a `POST` request to the route `/test`, which accepts one argument: `"string_to_cut"`

Responses to `POST` requests will be a `JSON` object with the key `"return_string"` and a string containing every third letter from the submitted string.

- _(e.g.)_ If you `POST` `("string to cut": "lamyourlyftdriver")`, it will return: `("return string": "muydv")`


## To Get Started


1.) Clone or save this repository to your machine.

2.) Within your terminal, navigate to the root level of this repository. 

3.) Install packages by running the following command: `yarn install`

4.) Start the server locally by running: `yarn start` 

If setup was successful, the following should be printed to your console: `Server started at http://localhost...`  

To interact with this application from the command line after completing the above steps: 

5.) In a second terminal, format and run the following command: `curl -X POST http://localhost:8080/test --data '{"string_to_cut": "<< STRING_TO_BE_CUT >>"}' -H 'Content-Type: application/json'` where `<< STRING_TO_BE_CUT >>` is the string you'd like to recieve truncated. 


## Concerns

1.) I assume that all requests will be of the string type.

2.) `/test` also accepts GET requests to detail application instructions. 
    - To aid with navigation, any GET requests to endpoints within this domain will be redirected to the `/test` endpoint.
...
