FROM node:24-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173

# note we need to expose 0.0.0.0 for external access
#CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# FROM node:24-alpine

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . .

# EXPOSE 5173

# CMD ["npm", "run", "dev"]

# splitting inti build and serve
# Error: Cannot find module '../lightningcss.linux-x64-musl.node' -> happenning in Alpine
# https://github.com/tailwindlabs/tailwindcss/issues/17958

# # build stage
# FROM node:24-bookworm-slim as builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# # serve stage
# FROM nginx:alpine
# COPY --from=builder /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


