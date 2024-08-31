# Stage 1: Build
FROM node:18-alpine AS builder

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json/yarn.lock dosyalarını kopyala
COPY package*.json ./
# Eğer yarn kullanıyorsanız, aşağıdaki satırı kullanın:
# COPY yarn.lock ./

# Bağımlılıkları yükle
RUN npm install
# Yarn kullanıyorsanız:
# RUN yarn install

# Tüm kaynak kodunu kopyala
COPY . .

# Next.js uygulamasını üretim için build et
RUN npm run build
# Yarn kullanıyorsanız:
# RUN yarn build

# Stage 2: Production
FROM node:18-alpine AS runner

# Uygulama için kullanıcı oluştur
RUN addgroup -S app && adduser -S -G app app

# Çalışma dizinini ayarla
WORKDIR /app

# Sadece production bağımlılıklarını yüklemek için
COPY package*.json ./
# Eğer yarn kullanıyorsanız:
# COPY yarn.lock ./

RUN npm install --only=production
# Yarn kullanıyorsanız:
# RUN yarn install --production

# Build aşamasından sadece gerekli dosyaları kopyala
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
# Eğer gerekli başka dosyalar varsa, buraya ekleyin

# Uygulamayı çalıştırmak için gerekli ortam değişkenlerini ayarla
ENV NODE_ENV=production
ENV PORT=3000

# Uygulamanın çalışacağı portu aç
EXPOSE 3000

# Uygulamayı non-root kullanıcı olarak çalıştır
USER app

# Uygulamayı başlat
CMD ["npm", "start"]
# Yarn kullanıyorsanız:
# CMD ["yarn", "start"]
