FROM nginx:1.29-alpine

COPY site/nginx.conf /etc/nginx/conf.d/default.conf
COPY site/index.html site/tokens.css site/robots.txt site/sitemap.xml /usr/share/nginx/html/
COPY site/fonts /usr/share/nginx/html/fonts
COPY site/assets /usr/share/nginx/html/assets/

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
