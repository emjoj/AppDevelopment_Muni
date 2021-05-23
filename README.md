# Seminar Project

In this iteration, we extend messenger to have a proper API. To serve data from the database in JSON format and parsing, validating data, and saving them in the database.

First, start by installing express. Express is a Node framework that will help you create APIs faster.

```
npm i express
npm i @types/express -D
```

Then continue by creating routes. Take a look on [Express Guide](https://expressjs.com/en/guide/routing.html) for more info or the Prisma site.

Define the following routes:

| Method | Route                                                    | Description                                                   |
|--------|----------------------------------------------------------|---------------------------------------------------------------|
| GET    | /conversation/{id}/messages?author={userId}              | Return all messages from DB by user id (this is just a filter)|
| GET    | /conversation/{id}/messages                              | Return all messages from DB                                   |
| GET    | /conversation?sort=-updated_at or /conversation/recent   | Return 10 conversations with last message ordered by date     |
| POST   | /conversation/{id}/message                               | Send message to conversation                                  |
| PUT    | /conversation/{id}/message/{id}                          | Edit the message and mark it as edited                        |
| DELETE | /conversation/{id}/message/{id}                          | Delete specified message (set hidden attribute or deleted_at) |
| POST   | /conversation                                            | Create new conversation with users defined in request         |
| POST   | /conversation/{id}                                       | Get information about conversation, participants, last message|

To show conversations that are related only to that user, we are going to use a header `X-User`. To obtain a header in `expressjs` simply
use `req.header('X-User')`. In a real-world projects `Authorization` header is often used for this purpose.
See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization.
The frontend application will use this header and send a request with a user id in X-User.

Additional task: Use middleware to check whether the user exists in a database and send [401 Response](https://http.cat/) or [Dog version](https://httpstatusdogs.com/).


Test API from Postman or Insomnia by hitting the messenger API URL.

To avoid restarting of express, we can use `ts-node-dev`.

```
npm i ts-node-dev -D
```

Followed by script in `package.json`:
```
    "start:dev": "ts-node-dev --respawn -- src/index.ts",
```
