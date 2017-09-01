FROM alpine:3.5

RUN apk add --no-cache nodejs

RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install pm2 -g

EXPOSE 4200

CMD ["pm2-docker", "server-compiled.js"]