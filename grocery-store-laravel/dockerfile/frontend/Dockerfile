FROM node:16-alpine 

WORKDIR /grocery-store-app-frontend

COPY ../../package* ./

RUN yarn

RUN chmod -R 777 node_modules

COPY ../../ .

EXPOSE 9000

# CMD ["yarn", "dev"]