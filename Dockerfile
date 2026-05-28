FROM node:18-alpine

WORKDIR /app

# copiar desde la raíz del proyecto
COPY package*.json ./

RUN npm install --omit=dev

COPY . .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000

CMD ["node", "main-vulnerable/src/app.js"]