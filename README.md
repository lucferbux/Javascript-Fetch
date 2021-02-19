# Javascript Fetch

> Demo for request polling to generate video 


## Setup

1. Download node and run the following command

```
npm install
```

2. To start livewatch just run  the following command

```
npm run start:dev
```

## Deployment

There are two build configurations, you can [learn more here](https://webpack.js.org/configuration/mode/)

To create a production build:

```
npm run build-prod
```

To create a development build:

```
npm run build-dev
```

## Script

If you want to create a deployment zip file including a dockerized server that serves your webapp through the 443 and 80 ports just run the **deploy.sh** script.
The script accepts de following arguments

```
bash deploy.sh -u yourdomain.com -d NameOfFile
```

### Certificates
Right now the certificates are self firmed and invalid, just replace the old certificates inside *nginx/certificates* with the new ones and modify the *nginx.conf* file with the new name of the files.

### Nginx Configuration
This project uses nginx as a web server/reverese proxy, you can modify the properties inside *nginx/nginx.conf*
