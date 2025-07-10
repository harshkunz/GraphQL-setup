### 🛠 GraphQL Workflow
``` pgsql
            Client
              ↓
            GraphQL Query
              ↓
            GraphQL Server (Express + Apollo)
              ↓
            Schema Validation
              ↓
            Resolver Logic
              ↓
            Database / API
              ↓
            Response
              ↓
            Client
```


### Client Send a Request
``` java
          query {
            getUser(id: "123") {
              name
              email
            }
          }
```


###  Response Sent to Client
```java
        {
          "data": {
            "getUser": {
              "name": "doe",
              "email": "doe@example.com"
            }
          }
        }
```
