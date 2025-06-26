FROM node:18
WORKDIR /app
COPY index.html .
COPY server.js .
COPY package.json .
RUN npm install

CMD ["node", "server.js"]
EXPOSE 3000 
