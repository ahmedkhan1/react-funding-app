#STAGE-1 BUILD Dependencies
FROM node:latest as build-deps
WORKDIR app/
COPY package.json /app
COPY yarn.lock /app
RUN npm install
COPY . app/

RUN npm run build
COPY ./node_modules app/


#STAGE-2 NGNIX
FROM nginx:stable-alpine
# FROM python:latest
# ENV PYTHONPATH "${PYTHONPATH}:/app"
# RUN apk add --update python make g++\
#    && rm -rf /var/cache/apk/*
COPY --from=build-deps app/build /usr/share/nginx/html
EXPOSE 80
CMD ['ngnix', "-g", "daemon off;"]
