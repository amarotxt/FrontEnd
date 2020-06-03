FROM node:13.12.0-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /FrontEnd/medicar/node_modules/.bin:$PATH

COPY ./FrontEnd/medicar/ /app

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
