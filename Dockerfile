FROM node:12.18.3

RUN mkdir -p /src/app

COPY . /src/app

WORKDIR /src/app

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]