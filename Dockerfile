FROM node:6.9
MAINTAINER Ian Patton <ian.patton@agcocorp.com>

RUN useradd -m -u 1006 -s /bin/bash node
RUN mkdir -p /usr/src/app
RUN chown -R node /usr/src/app

USER node
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/

EXPOSE 9000

CMD [ "npm", "start" ]
