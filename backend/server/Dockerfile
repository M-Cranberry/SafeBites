FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm install --production
COPY . .
COPY ./configA.env ./.env
EXPOSE 5000
CMD ["node", "server.cjs"]