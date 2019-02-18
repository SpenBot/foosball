# Docker Commands

```
      $ docker-compose up                             [start docker-compose]

      $ docker-compose up --build                     [rebuild images, then start docker-compose]

      $ docker-compose up -d                          [run in detached mode, meaning you can use terminal window]
      $ docker-compose logs -f                        [show container logs, for when running detached]
      $ docker-compose down                           [stop docker-compose containers and networks]

      $ docker images                                 [list all images on your machine]
      $ docker rmi $(docker images -a -q)             [delete all images]
      $ docker rmi <image-id>                         [delete images by id]

      $ docker ps                                     [list running containers]
      $ docker ps -a                                  [list all containers]   

      $ docker stop $(docker ps -a -q)                [stop all containers]
      $ docker rm $(docker ps -a -q)                  [delete all stopped containers]

      $ docker network ls                             [list all docker networks]
      $ docker network inspect <net-id>               [inspect a network by id]
      $ docker network rm <net-id>                    [remove a network by id]

      $ systemctl stop docker                         [stop docker daemon]
```
