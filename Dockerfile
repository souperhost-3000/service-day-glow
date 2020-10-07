FROM node:12-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /scr/app

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]