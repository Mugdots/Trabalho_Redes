FROM node

COPY package.json .
COPY config.env .
COPY server.js .
COPY routes/record.js routes/
COPY db/connection.js db/
RUN npm install mongodb express cors
CMD ["node", "--env-file=config.env", "server"]
EXPOSE 5050
