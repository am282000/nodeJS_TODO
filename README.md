# NODEJS TODO Backend

It consist of various CRUD operaions.

1. Users
   Access all the usr API by prefixing this **/api/v1/users**

| API TYPE | ENDPOINT  | DESCRIPTION         | PARAMETERS |
| -------- | --------- | ------------------- | ---------- |
| GET      | /all      | Retrieve all users  |            |
| POST     | /register | Register a new user |

```json
{
  "name": "Ashish",
  "email": "ashish@gmail2.com",
  "password": "Ashish@123"
}
```

|

````|
| POST     | /login    | Login a new user | ```json
{
	"email": "ashish@gmail2.com",
    "password": "Ashish@123"
}
``` |
| GET      | /me       | Get user profile data | |
| GET      | /logout   | Logout user | |


2) Tasks
````
