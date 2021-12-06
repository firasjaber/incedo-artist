# **INCEDO Artists**
This is a Node.js REST API application that has the following features:
- Searching for an artist by name from a third party api.
- Writing the result to a user-supplied CSV filename.
- Retrieveing random artists from a JSON file if no results are found from the third party api.
- A Swagger documentation.

You can view [the deployed version here.](http://139.162.186.236:9000/api-docs/#/Artists)

---
### To run locally, the fastest way is using docker.

## **0. Prerequisites**
- docker* (version 20 minimum)
- make (optional)

If make is not installed, you can check the `./Makefile` for the needed commands. 

You can run the following commans to check if docker is installed:
- docker -v


## **1.a Running the app**
```BASH
make start
```

## **1.a Stopping the app**
```BASH
make stop
```