#Author: Kampanart.K

FROM alpine:3.5

RUN apk add --no-cache nodejs

RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install pm2 -g

EXPOSE 5000

CMD ["pm2-docker", "main.js"]
