FROM node:14
ENV NODE_ENV=dev

WORKDIR /catalog

COPY ["package.json", "package-lock.json", "./"]

COPY .env ./

RUN npm install

COPY . .

CMD ["node", "catalog.js"]