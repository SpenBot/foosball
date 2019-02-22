
- Second try trying to get docker compose to work on an ec2
- the issue is trying to get the client app to try to talk to the server, but it doesn't know the port

- I'm also going to try to build the angular as well, and try host using nginX


- *- the point is to make a repeatable documentation (so do environments and shit) -*





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

- for now, only expose the API and the UI
  - the network only really needs to be the API and DB, UI is seperate
  - configure UI to make service calls to localhost


# FIRST EC2 INSTANCE

- copying steps from new-gen/notes/docker-kubernetes-aws/aws-ec2/aws-ec2.md
- log into AWS, click SERVICES > EC2 > Launch Instance > Ubuntu 16.04 > t2 micro
  - then do NEXT: Configure Instance Details
  - follow my steps
- for security group
  - Keep SSH Port 22 (suggests allowing only from specific IP addresses, but it should be protected by key)
  - Add HTTP Port 80
  - review and launch
  - create and download SSH key
  - go back to SERVICES > EC2 > Running Instances
  - now hit CONNECT, copy the string in the second part
  - replace the pem file with full path, and use *sudo* in your terminal to connect
    `"/home/spenser/Desktop/`

  - now you are connected
    - install docker and docker compose, check the commands shit
  - git clone my project (using HTTPS)
    - replace later with scp after zipping files


# DOCKER AND DOCKER-COMPOSE INSTALL





# NGINX TEST

on aws, open HTTP port 80 (default for nginx)

```
      $ sudo apt-get update
      $ sudo apt-get install nginx
      $ sudo service nginx start
      $ sudo systemctl status nginx
```

you should be able to go to port 80 on IP address and see default page


> okay didn't work
  > tried to do custom TCP with port 6000 and still didn't work.
  > solution may be to have multiple instances

> but I figured out how to stand up an EC2 I think (its not hard)
  > and ssh into it
> and I think I know how to configure docker compose to run so that it works

- wtf, this works from my local machine
```
          $ curl 35.174.11.70:6000/api/turtles
```

- well this is fucked up, I can curl into it from both my localmachine and from inside the server and it works ....
- it might be like ubuntu16 issue

https://forums.aws.amazon.com/thread.jspa?threadID=84344
https://github.com/Netflix-Skunkworks/Scumblr/issues/83





# SHIT TO LEARN:

- how to open other ports on a single instance
- how to create and transfer zip files using src
  - or maybe just transfer files one at a time
- how to nano files so I don't have to change shit remotely, and do it on the instance itself
  - also what are CURL commands?
- how do you SSH into something thats not an ec2
  - is it the same? like a raspberry pi
- how to serve an Angular dist folder on nginX
- can you just copy over built docker-images, and not transfer source code?
  - but I feel like the volumes for my db and stuff would not work
  - but since all the other commands happen when building the image ... I think it would mostly work ...
- do I need to do this HOST stuff for my api?
  - should probably do a deeper dive into docker itself
- should also probably learn how to do environment variables, and protecting passwords and IP's
- can you run multiple docker-compose on one instance?
- how do I build and run on nginx?
- how do I expose and protect ports on a raspberry pi or soemthing, something that doesnt have an ec2 wrapper on it



- creating zip files and using src
https://www.computerhope.com/unix/curl.htm
http://www.hypexr.org/linux_scp_help.php
https://www.wpoven.com/tutorials/server/how-to-zip-or-unzip-files-and-folders-using-command-line-on-ubuntu-server

- opening other ports on an EC2:
https://stackoverflow.com/questions/17161345/how-to-open-a-web-server-port-on-ec2-instance
https://stackoverflow.com/questions/5004159/opening-port-80-ec2-amazon-web-services/10454688#10454688
https://serverfault.com/questions/838393/aws-route-to-multiple-ports-on-a-single-instance
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html

- re-building only one docker-compose image
https://stackoverflow.com/questions/36884991/how-to-rebuild-docker-container-in-docker-compose-yml
https://blog.georgovassilis.com/2016/12/20/rebuilding-single-services-in-docker-compose/
https://stackoverflow.com/questions/35228970/docker-compose-build-single-container/35256698





>> END
