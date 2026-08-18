# Basic Express Server

A basic Express server built using modular server architecture, middleware, error handlers, and automated testing.

## Features

- Express server
- `/person` GET route
- Query string validation
- Logger middleware
- 404 error handler
- 500 error handler
- Jest and Supertest testing

## Testing

The server includes tests for:

- 404 on a bad route
- 404 on a bad method
- 500 when no name is provided
- 200 when a name is provided
- Correct JSON response when a name is provided

## Pull Request

[View Pull Request #1](https://github.com/metswin17/basic-express-server/pull/1)

## Deployment

[Deployed Server](https://server-deployment-practice-llvk.onrender.com)

Test endpoint: `/person?name=fred`

## UML / Process Flow

```mermaid
flowchart TD
    A[User / REST Client] -->|GET /person?name=fred| B[Express Server]
    B --> C[Logger Middleware]
    C --> D["/person Route"]
    D --> E[Validator Middleware]

    E -->|Name present| F[200 OK]
    F --> G[JSON Response: name = fred]

    E -->|Name missing| H[500 Error Handler]

    B -->|Bad route or method| I[404 Not Found Handler]
    ```