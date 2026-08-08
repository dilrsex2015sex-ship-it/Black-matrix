# مشروع بلاك ماتريكس (Black-Matrix)

مرحباً — هذا المستودع يحتوي على الـ scaffold المبدئي لمشروع "بلاك ماتريكس".
الهدف: تشغيل نسخة MVP محليّة بدون اشتراكات تشمل:
- واجهة Frontend (Next.js) بالعربية.
- Backend (Node.js) لإدارة الوكلاء ونقاط النهاية.
- محرك جينيّ مبدئي (Rust) لبناء AST → WASM (skeleton).
- WASM sandbox (WASI/Docker) لتشغيل المعاينات محلياً.
- Smart-contracts (Solidity + Hardhat) للاختبار محلي.
- infra: docker-compose لتشغيل Hardhat, IPFS, backend, frontend.

تحذير أمني مهم
- لا تضع كلمات مرور أو مفاتيح في هذا المستودع. استخدم ملف `.env` وGitHub Secrets عند الحاجة.
- إذا سبق ونشرت أي كلمة مرور، غيّرها فوراً وفعل 2FA.

تشغيل سريع محلياً (بعد رفع الملفات)
1. ثبت Docker و Docker Compose على جهازك.
2. من داخل جذر المشروع:
   chmod +x scripts/*.sh
   ./scripts/deploy_local.sh
3. افتح المتصفح:
   - واجهة المستخدم: http://localhost:3000
   - API: http://localhost:4000
   - Hardhat RPC: http://localhost:8545
   - IPFS API: http://localhost:5001

تجربة سريعة للـ API:
curl -X POST http://localhost:4000/product/beam -H "Content-Type: application/json" -d '{"productId":"test-prod-1"}'

ماذا تفعل بعد تنزيل المستودع
- اذهب إلى docs/SECRETS.md لتهيئة المتغيّرات الحساسة.
- لا تضع أي مفاتيح سرية داخل GitHub.

المساعدة
- لو واجهت أي خطأ أثناء الخطوات أعلاه انسخ رسالة الخطأ هنا.
- بعد ما تنشئ README اكتب "تم" وسأرسلك الملف التالي.
