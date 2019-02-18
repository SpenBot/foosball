
- Second try trying to get docker compose to work on an ec2
- the issue is trying to get the client app to try to talk to the server, but it doesn't know the port

- I'm also going to try to build the angular as well, and try host using nginX

# DATABASE SETUP

- create the sql file
  - also inserts data

- no schemas for now
- serial ID's for now

```
        $ sudo -u postgres psql postgres

        # \i ....<full-path>/tmnt_db.sql;
        # \q
```



# EXPRESS SETUP

```
        $ npm init -y

        $ npm install express --save
        $ npm install body-parser --save
        $ npm install cors --save
        $ npm install pg --save
        $ npm install pg-hstore --save
        $ npm install sequelize --save

```


- make index.js file

- no config for now
- no swagger for now
- using a short hand for app.listen()
- do I need host?

- test to make sure it runs
```js
        app.get('/', (req, res) => res.send('Hello World!'))
```
```
        $ node index.js
```

- make ./db_connection/seq_connection.js
  - take out configs again
  - try localhost for now, to check docker-compose on local machine first

- make ./models/turtles_model.js
  - take out schema
  - no UUID for now, just INTEGER, no auto increment

- no models_index.js for now

- make ./routes/turtles_routes.js
  - import directly from models
  - get all for now

- test the get all route again for server



# ANGULAR SETUP

```
        $ ng new client

        $ npm install --save bootstrap
        $ npm install --save ag-grid-community ag-grid-angular

```

  - no router or anything for now

  - put the styles in the angular.json for now
    - (might have to change this if it doesn't work during build)

```

        $ ng generate component components/turtles-grid
        $ ng generate service services/turtles

```

  - import httpClient, forms
  - import ag-grid into app.module

  - clean up app.component ts and html files
  - instantiate the grid component from app.html

  - try the app

```
        $ ng serve
```

**- got a weird rxjs compile error, had to change the package.json to v 6.2.2 and remove carrot -**

  - add in the ag-grid
    - nothing fancy, no sorting
    - just autoHeight

  - create columns and add in some dummy data
  - add dark theme (obviously), and style the width

  - write model
    - went with turtle.model.ts
    - (instead of turtle-model.ts)
    - no constructor for now

  - write service call
    - just get all for now
    - catchError, and throwError

  - update component to call the service and save response to its own property
    - no unsubscribe for now


# DOCKER SETUP

- docker files

- docker-compose yml file

```
      $ systemctl start docker
      $ cd ./ec2-docker-test-TMNT
      $ docker-compose up

      CTRL-C (to stop containers)
      $ systemctl stop docker
```




>> END
