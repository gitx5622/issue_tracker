# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm cache clean --force
RUN npm install
COPY . ./
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve","-s","build"]