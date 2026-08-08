# 🚀 Black-Matrix - دليل الإعداد الكامل

مرحباً بك في **Black-Matrix** - منصة تطوير المشاريع المتقدمة!

---

## 📋 المتطلبات الأساسية

### للتطوير المحلي
- **Docker** و **Docker Compose**
- **Git**
- **Node.js** 18+ (اختياري للتطوير المباشر)
- **Rust** (للـ WASM - اختياري)

### للإنتاج
- **Docker** و **Docker Compose**
- **خادم متقدم** (CPU, RAM كافي)
- **HTTPS/SSL Certificate**

---

## ⚡ البدء السريع (3 خطوات)

### 1️⃣ الاستنساخ والإعداد

```bash
git clone https://github.com/dilrsex2015sex-ship-it/Black-matrix.git
cd Black-matrix
cp .env.example .env
chmod +x scripts/*.sh
```

### 2️⃣ بدء الخدمات

```bash
./scripts/start.sh
```

### 3️⃣ التحقق من الحالة

```bash
./scripts/status.sh
```

**هذا كل شيء! ✨**

---

## 🗺️ الخريطة السريعة

| ما تريده؟ | الأمر |
|--------|------|
| **بدء الخدمات** | `./scripts/start.sh` |
| **إيقاف الخدمات** | `./scripts/stop.sh` |
| **عرض السجلات** | `./scripts/logs.sh` |
| **حالة الخدمات** | `./scripts/status.sh` |
| **إعادة تشغيل** | `./scripts/restart.sh` |
| **تنظيف شامل** | `./scripts/clean.sh` |

---

## 📍 روابط الخدمات

بعد البدء:

```
🌐 Frontend:     http://localhost:3000
🔌 Backend API:  http://localhost:4000
⛓️  Hardhat RPC:  http://localhost:8545
📦 IPFS API:     http://localhost:5001
🌍 IPFS Gateway: http://localhost:8080
```

---

## 🏗️ بنية المشروع

```
Black-matrix/
├── frontend/              # Next.js UI (منفذ 3000)
├── backend/               # Node.js API (منفذ 4000)
├── smart-contracts/       # Solidity + Hardhat (منفذ 8545)
├── wasm-sandbox/          # Rust WASM (Docker)
├── scripts/               # أوامر سهلة
├── docker-compose.yml     # التكوين الأساسي
├── docker-compose.prod.yml # إعدادات الإنتاج
├── .env.example           # متغيرات البيئة
└── DOCKER_SETUP.md        # دليل Docker المفصل
```

---

## 🔄 دورة التطوير العادية

### 1. تعديل الكود

```bash
# عدّل الملفات في:
# - frontend/ → واجهة المستخدم
# - backend/ → API
# - smart-contracts/ → العقود

# التغييرات تُعاد تحميلها تلقائياً (Hot Reload)
```

### 2. عرض السجلات

```bash
./scripts/logs.sh backend   # سجلات Backend
./scripts/logs.sh frontend  # سجلات Frontend
```

### 3. إعادة الخدمات

```bash
./scripts/restart.sh
# أو خدمة محددة:
docker-compose restart backend
```

---

## 🐛 استكشاف الأخطاء الشائعة

### ❌ الخطأ: "Could not connect to Docker daemon"
```bash
# تأكد من تشغيل Docker
docker ps
# إذا لم يعمل، شغّل Docker Desktop أو daemon
```

### ❌ الخطأ: "Port already in use"
```bash
# غيّر الميناء في .env أو:
./scripts/stop.sh  # أوقف الخدمات
lsof -i :3000     # تحقق من الميناء
```

### ❌ الخطأ: "Container exited with error"
```bash
./scripts/logs.sh   # عرض السجلات
./scripts/clean.sh  # تنظيف شامل
./scripts/start.sh  # إعادة بدء
```

---

## 🔐 ملاحظات الأمان

⚠️ **تحذير مهم:**

- **لا تضع المفاتيح الخاصة في الكود**
- **لا تنشر ملف `.env` على GitHub**
- **استخدم GitHub Secrets للمتغيرات الحساسة**
- **فعّل 2FA على حسابك**
- **غيّر كلمات المرور الافتراضية**

```bash
# تأكد من أن .env محمي
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
git add .gitignore
git commit -m "🔐 حماية ملفات البيئة"
```

---

## 🌐 الانتشار (Deployment)

### للإنتاج

```bash
# استخدم إعدادات الإنتاج
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# أو استخدم السكريبتات
./scripts/start.sh  # يكتشف البيئة تلقائياً
```

### على السحابة (AWS, GCP, Azure, DigitalOcean)

```bash
# 1. انسخ المشروع
git clone https://github.com/dilrsex2015sex-ship-it/Black-matrix.git

# 2. أعد المتغيرات
nano .env  # عدّل القيم الإنتاجية

# 3. شغّل الخدمات
docker-compose up -d

# 4. نسّق النطاق و SSL
# استخدم Nginx أو Traefik كـ reverse proxy
```

---

## 📊 مراقبة الخدمات

### عرض استهلاك الموارد

```bash
docker stats
```

### عرض شبكة Docker

```bash
docker network inspect blackmatrix-net
```

### نسخ احتياطي من البيانات

```bash
# نسخ احتياطي من IPFS
docker volume inspect blackmatrix-ipfs-data

# نسخ احتياطي من قاعدة البيانات (إن وجدت)
docker-compose exec db pg_dump -U user dbname > backup.sql
```

---

## 🔧 الإعدادات المتقدمة

### تغيير الميناء

```bash
# في .env أو docker-compose.yml
FRONTEND_PORT=3001
BACKEND_PORT=4001
HARDHAT_PORT=8546
```

### تفعيل Debug Mode

```bash
# في .env
LOG_LEVEL=debug
DEBUG=blackmatrix:*
```

### استخدام صور مخصصة

```bash
# بناء صور Dockerfile خاصة
docker-compose build --no-cache
```

---

## 📚 موارد إضافية

- 📖 [DOCKER_SETUP.md](./DOCKER_SETUP.md) - دليل Docker المفصل
- 📖 [README.md](./README.md) - معلومات المشروع
- 🌐 [Docker Docs](https://docs.docker.com/)
- 🌐 [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)

---

## 🤝 المساهمة

هل تريد المساهمة؟

1. Fork المستودع
2. أنشئ فرع جديد: `git checkout -b feature/your-feature`
3. Commit التغييرات: `git commit -m "Add your feature"`
4. Push الفرع: `git push origin feature/your-feature`
5. افتح Pull Request

---

## 📞 الدعم والمساعدة

- 🐛 **اكتشفت خطأ؟** أنشئ [Issue](https://github.com/dilrsex2015sex-ship-it/Black-matrix/issues)
- 💡 **لديك فكرة؟** شارك في [Discussions](https://github.com/dilrsex2015sex-ship-it/Black-matrix/discussions)
- 📧 **تحتاج مساعدة؟** اتصل بنا عبر GitHub

---

## ✅ قائمة التحقق الأساسية

قبل الشروع، تأكد من:

- [ ] Docker مثبت وقيد التشغيل
- [ ] Docker Compose v2.0+
- [ ] Git مثبت
- [ ] توفر المساحة (10GB على الأقل)
- [ ] الاتصال بالإنترنت (لتحميل الصور)

---

## 🎉 مبروك!

أنت الآن جاهز للبدء! 🚀

```bash
./scripts/start.sh
```

واستمتع بـ **Black-Matrix**!

---

**آخر تحديث:** 2026-08-08  
**الإصدار:** 1.0  
**الحالة:** ✅ جاهز للاستخدام
