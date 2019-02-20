# Docker Commands

```
      $ sudo docker-compose up                             [start docker-compose]

      $ sudo docker-compose up --build                     [rebuild images, then start docker-compose]

      $ sudo docker-compose up -d                          [run in detached mode, meaning you can use terminal window]
      $ sudo docker-compose logs -f                        [show container logs, for when running detached]
      $ sudo docker-compose down                           [stop docker-compose containers and networks]

      $ sudo docker images                                 [list all images on your machine]
      $ sudo docker rmi $(sudo docker images -a -q)             [delete all images]
      $ sudo docker rmi <image-id>                         [delete images by id]

      $ sudo docker ps                                     [list running containers]
      $ sudo docker ps -a                                  [list all containers]   

      $ sudo docker stop $(sudo docker ps -a -q)           [stop all containers]
      $ sudo docker rm $(sudo docker ps -a -q)             [delete all stopped containers]

      $ sudo docker network ls                             [list all docker networks]
      $ sudo docker network inspect <net-id>               [inspect a network by id]
      $ sudo docker network rm <net-id>                    [remove a network by id]

      $ sudo systemctl stop docker                         [stop docker daemon]
```

## REBUILDING ONE IMAGE

https://stackoverflow.com/questions/35228970/docker-compose-build-single-container/35256698
https://stackoverflow.com/questions/36884991/how-to-rebuild-docker-container-in-docker-compose-yml
https://blog.georgovassilis.com/2016/12/20/rebuilding-single-services-in-docker-compose/



#### DOCKER

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04


#### DOCKER-COMPOSE STARTUP :
Docker Compose is not included with Docker. Use the following commands to install the latest from their Github
```sh
$ sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```
```sh
$ sudo chmod +x /usr/local/bin/docker-compose
```
Confirm docker-compose was installed correctly
```sh
$ docker-compose --version
```
Make sure your docker daemon is running, then run docker-compose from the root directory of PIT, and close it when you are finished
```sh
$ systemctl status docker
```
If Docker is not running
```sh
$ systemctl start docker
```
```sh

```
```sh
$ docker-compose up --build
```
This will not rebuild your images, so is faster
```sh
$ docker-compose up
```
CTRL-C (to stop your containers)
```sh
$ systemctl stop docker
```
NOTE:
  - This will take like 5 minutes. Angular in particular takes a while to build.
  - If you update code or git pull changes, you need to `REBUILD YOUR IMAGES` or you won't see you changes with docker-compose. this means deleting your images, not just stopping the containers.
  - It is highly recommended you stop your docker daemon once you're done using it. Its very RAM intensive.
