FROM node:12.20.1-alpine
ENV APP_ROOT /web
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm install -g pm2
RUN npm ci
RUN npm run build
CMD ["npm", "run", "demon"]
