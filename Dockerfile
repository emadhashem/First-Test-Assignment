    FROM node:22-slim AS build

    WORKDIR /app
    
    COPY package.json yarn.lock ./
    
    RUN yarn install --frozen-lockfile
    
    COPY . .
    
    RUN yarn build
    
    FROM node:22-slim AS production
    
    WORKDIR /app
    
    COPY --from=build /app/package.json /app/yarn.lock ./
    COPY --from=build /app/dist ./dist
    COPY --from=build /app/node_modules ./node_modules
    
    RUN yarn install --frozen-lockfile --production
    
    ENV NODE_ENV production
    
    EXPOSE 5173
    
    CMD ["yarn", "preview"]
    