# Angular2NodeJsExample (ContactList) (MEAN)

### 1. You can clone it from github by running following command

```
  $ git clone https://github.com/niteshsinghrajput/Angular2NodeJsExample.git
```

### 2. Move to ContactList directory
```
  $ cd ContactList/client
```
### 3. Run npm install in terminal in mac and *nix operating system or command prompt in windows to install dependencies 
```
  $ npm install 
```
### 4. Run npm serve command 
```
  $ ng serve
```
### 5. Access following url in browser
`http://localhost:4200/`

 
## To Setup Server Side API which is NodeJs, please follow these steps

### 1. Move to ContactList folder
```
  $ cd ContactList
```
### 2. Run following command to install NodeJs dependecies 
```
  $ npm install
```
### 3. Keep your mongo db credential in app.js file at line no 11.
```
  mongoose.connect('mongodb://<username>:<password>@<mongo db host>/<database name>');
```
### 4. Run Following command to start Node Server
```
  $ Node app
```
### 5. To test Node API independently without UI(Angular2) Code you can use postman
### To get list of contacts from mongo db use `GET` type request in postmand and use following url
```
  http://localhost:3000/api/contacts
```
### 6. To create Contact into mongo db use `POST` type request in postman and use following url
```
  http://localhost:3000/api/contacts
```
### set content type as in header as `application/json`
### set request body as raw with JSON payload
```
  {
      "first_name":"Nitesh",
      "last_name":"Rajput",
      "phone":"9898989898"
  }
```
### 7. To get a particular contact detail from mongo db database by using following url with `GET` request type in postman
```
  http://localhost:3000/api/contacts/<id>
```
### 8. To delete a particular contact from mongo db database by using following url with `DELETE` request type in postman
```
  http://localhost:3000/api/contacts/<id>
```
