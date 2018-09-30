#Build con yarn
FROM node:8 as armacion

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=./src
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
ADD . /app

RUN yarn build

# Levantar el server con lo compilado
FROM nginx:1.15-alpine
COPY --from=armacion /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]