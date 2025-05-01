FROM node:23 AS build
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
ARG VITE_BACKEND_URL
COPY . .
RUN npm run build

FROM nginx AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist .
