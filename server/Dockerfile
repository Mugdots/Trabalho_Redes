FROM node:lts-alpine

WORKDIR /app

COPY config.env .
COPY server.js .
COPY routes/record.js routes/
COPY db/connection.js db/
COPY package.json .
RUN npm install 
RUN npm install mongodb express cors
EXPOSE 5000
CMD ["node", "--env-file=config.env", "server"]
