FROM node:20-alpine as base
WORKDIR /app
COPY package.json package-lock.json ./

FROM base as dev
RUN npm ci
COPY . ./
RUN npm run build

FROM base as prod
RUN npm ci --omit=dev

FROM base 
COPY --from=dev /app/dist ./src
COPY --from=prod /app/node_modules ./node_modules
CMD node src
