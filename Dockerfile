FROM node:12-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /scr/app

RUN npm install
RUN npm run seed
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]