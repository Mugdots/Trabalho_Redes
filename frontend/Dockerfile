FROM node:lts-alpine

WORKDIR /app

COPY server.js .
COPY index.html .
COPY css ./css
COPY js ./js
COPY package.json .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js"]
