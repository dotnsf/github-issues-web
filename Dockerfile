ARG APP_HOME=/home/node/app

# build stage
FROM node:14-alpine as build
WORKDIR ${APP_HOME}

COPY . ${APP_HOME}
RUN npm install
RUN npm build

# deploy stage
FROM nginx:alpine
COPY --from=build ${APP_HOME}/build /var/www
COPY ./nginx /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]
