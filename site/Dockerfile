FROM node:22-alpine AS build

WORKDIR /app

COPY site/package.json site/package-lock.json* ./
RUN npm ci

COPY site/ .
RUN npx vite build

FROM nginx:1.29-alpine

COPY site/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/tokens.css /usr/share/nginx/html/tokens.css
COPY --from=build /app/fonts /usr/share/nginx/html/fonts
COPY site/robots.txt site/sitemap.xml /usr/share/nginx/html/

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
