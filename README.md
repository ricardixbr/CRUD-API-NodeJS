# Head-Cobranca

## Some codes for application

### Install application
> $ npm install

### Initialize application
> $ npm run dev

## Some codes for docker

### Get image
> $ docker pull mongo

### Create container
> $ docker run --name *name-image* -p 27017:27017 -d *name-container*

> Ex.: $ docker run --name mongodb -p 27017:27017 -d mongo

### Verify images started
> $ docker ps

### Verify all images
> $ docker ps -a

### Start container
> $ docker run *name-container*

> $ docker run mongodb
