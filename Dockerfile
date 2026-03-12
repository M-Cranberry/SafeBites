FROM node:22.11

COPY ./frontend/SafeBitesReactApp /frontend/SafeBitesReactApp
RUN rm -rf /frontend/SafeBitesReactApp/node_modules

WORKDIR /frontend/SafeBitesReactApp
RUN npm install

CMD ["npx", "expo", "start"]