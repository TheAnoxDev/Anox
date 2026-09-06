import en from "./en";
import type { Translation } from "./types";
import type { Locale } from "./registry";

const common: Record<string, Partial<Record<Locale, string>>> = {
  "Home": { fa:"خانه", ar:"الرئيسية", ru:"Главная", es:"Inicio", zh:"首页" },
  "About": { fa:"درباره ما", ar:"من نحن", ru:"О нас", es:"Nosotros", zh:"关于我们" },
  "Technology": { fa:"فناوری", ar:"التقنية", ru:"Технологии", es:"Tecnología", zh:"技术" },
  "Projects": { fa:"پروژه‌ها", ar:"المشاريع", ru:"Проекты", es:"Proyectos", zh:"项目" },
  "Contact": { fa:"تماس", ar:"اتصال", ru:"Контакты", es:"Contacto", zh:"联系" },
  "Login": { fa:"ورود", ar:"تسجيل الدخول", ru:"Войти", es:"Iniciar sesión", zh:"登录" },
  "Register": { fa:"ثبت‌نام", ar:"إنشاء حساب", ru:"Регистрация", es:"Registrarse", zh:"注册" },
  "Store": { fa:"فروشگاه", ar:"المتجر", ru:"Магазин", es:"Tienda", zh:"商店" },
  "Platform": { fa:"پلتفرم", ar:"المنصة", ru:"Платформа", es:"Plataforma", zh:"平台" },
  "NEXT GENERATION TECHNOLOGY": { fa:"فناوری نسل آینده", ar:"تقنية الجيل القادم", ru:"Технологии нового поколения", es:"Tecnología de nueva generación", zh:"下一代技术" },
  "Building Intelligent Systems For The Future": { fa:"ساخت سیستم‌های هوشمند برای آینده", ar:"نبني أنظمة ذكية للمستقبل", ru:"Создаём интеллектуальные системы будущего", es:"Construimos sistemas inteligentes para el futuro", zh:"构建面向未来的智能系统" },
  "Security, Software & Intelligent Infrastructure": { fa:"امنیت، نرم‌افزار و زیرساخت هوشمند", ar:"الأمن والبرمجيات والبنية التحتية الذكية", ru:"Безопасность, ПО и интеллектуальная инфраструктура", es:"Seguridad, software e infraestructura inteligente", zh:"安全、软件与智能基础设施" },
  "Start Collaboration": { fa:"شروع همکاری", ar:"ابدأ التعاون", ru:"Начать сотрудничество", es:"Iniciar colaboración", zh:"开始合作" },
  "Explore Architecture": { fa:"مشاهده معماری", ar:"استكشف المعمارية", ru:"Изучить архитектуру", es:"Explorar arquitectura", zh:"探索架构" },
  "Smart Support": { fa:"پشتیبانی هوشمند", ar:"دعم ذكي", ru:"Умная поддержка", es:"Soporte inteligente", zh:"智能支持" },
  "Artificial Intelligence": { fa:"هوش مصنوعی", ar:"الذكاء الاصطناعي", ru:"Искусственный интеллект", es:"Inteligencia artificial", zh:"人工智能" },
  "Future Focus": { fa:"تمرکز بر آینده", ar:"تركيز على المستقبل", ru:"Фокус на будущем", es:"Enfoque en el futuro", zh:"面向未来" },
  "ABOUT ANOX": { fa:"درباره ANOX", ar:"عن ANOX", ru:"О ANOX", es:"SOBRE ANOX", zh:"关于 ANOX" },
  "About ANOX": { fa:"درباره ANOX", ar:"عن ANOX", ru:"Об ANOX", es:"Sobre ANOX", zh:"关于 ANOX" },
  "Our Vision": { fa:"چشم‌انداز ما", ar:"رؤيتنا", ru:"Наше видение", es:"Nuestra visión", zh:"我们的愿景" },
  "Our Mission": { fa:"ماموریت ما", ar:"مهمتنا", ru:"Наша миссия", es:"Nuestra misión", zh:"我们的使命" },
  "TECHNOLOGY": { fa:"فناوری", ar:"التقنية", ru:"ТЕХНОЛОГИИ", es:"TECNOLOGÍA", zh:"技术" },
  "Our Expertise": { fa:"تخصص‌های ما", ar:"خبراتنا", ru:"Наша экспертиза", es:"Nuestra experiencia", zh:"我们的专长" },
  "Cyber Security": { fa:"امنیت سایبری", ar:"الأمن السيبراني", ru:"Кибербезопасность", es:"Ciberseguridad", zh:"网络安全" },
  "Software Engineering": { fa:"مهندسی نرم‌افزار", ar:"هندسة البرمجيات", ru:"Разработка ПО", es:"Ingeniería de software", zh:"软件工程" },
  "Cloud Infrastructure": { fa:"زیرساخت ابری", ar:"البنية التحتية السحابية", ru:"Облачная инфраструктура", es:"Infraestructura cloud", zh:"云基础设施" },
  "Automation": { fa:"اتوماسیون", ar:"الأتمتة", ru:"Автоматизация", es:"Automatización", zh:"自动化" },
  "Web Development": { fa:"توسعه وب", ar:"تطوير الويب", ru:"Веб-разработка", es:"Desarrollo web", zh:"Web 开发" },
  "Architecture Layers": { fa:"لایه‌های معماری", ar:"طبقات المعمارية", ru:"Слои архитектуры", es:"Capas de arquitectura", zh:"架构层" },
  "Technology Stack": { fa:"پشته فناوری", ar:"حزمة التقنيات", ru:"Технологический стек", es:"Stack tecnológico", zh:"技术栈" },
  "Secure By Design": { fa:"امنیت از ابتدا", ar:"الأمان حسب التصميم", ru:"Безопасность по проекту", es:"Seguridad desde el diseño", zh:"安全设计" },
  "Our Services": { fa:"خدمات ما", ar:"خدماتنا", ru:"Наши услуги", es:"Nuestros servicios", zh:"我们的服务" },
  "Why ANOX?": { fa:"چرا ANOX؟", ar:"لماذا ANOX؟", ru:"Почему ANOX?", es:"¿Por qué ANOX?", zh:"为什么选择 ANOX？" },
  "ANOX Store": { fa:"فروشگاه ANOX", ar:"متجر ANOX", ru:"Магазин ANOX", es:"Tienda ANOX", zh:"ANOX 商店" },
  "Buy Now": { fa:"خرید", ar:"اشترِ الآن", ru:"Купить", es:"Comprar ahora", zh:"立即购买" },
  "MOST POPULAR": { fa:"محبوب‌ترین", ar:"الأكثر شعبية", ru:"ПОПУЛЯРНОЕ", es:"MÁS POPULAR", zh:"最受欢迎" },
  "Access ANOX": { fa:"ورود به ANOX", ar:"الدخول إلى ANOX", ru:"Вход в ANOX", es:"Acceder a ANOX", zh:"访问 ANOX" },
  "Create ANOX Account": { fa:"ساخت حساب ANOX", ar:"إنشاء حساب ANOX", ru:"Создать аккаунт ANOX", es:"Crear cuenta ANOX", zh:"创建 ANOX 账户" },
  "Email": { fa:"ایمیل", ar:"البريد الإلكتروني", ru:"Эл. почта", es:"Correo electrónico", zh:"电子邮箱" },
  "Password": { fa:"رمز عبور", ar:"كلمة المرور", ru:"Пароль", es:"Contraseña", zh:"密码" },
  "Full Name": { fa:"نام کامل", ar:"الاسم الكامل", ru:"Полное имя", es:"Nombre completo", zh:"姓名" },
  "Sign In": { fa:"ورود", ar:"دخول", ru:"Войти", es:"Iniciar sesión", zh:"登录" },
  "Create Account": { fa:"ایجاد حساب", ar:"إنشاء حساب", ru:"Создать аккаунт", es:"Crear cuenta", zh:"创建账户" },
  "Forgot Password?": { fa:"رمز عبور را فراموش کرده‌اید؟", ar:"هل نسيت كلمة المرور؟", ru:"Забыли пароль?", es:"¿Olvidaste tu contraseña?", zh:"忘记密码？" },
  "Continue with Google": { fa:"ادامه با گوگل", ar:"المتابعة باستخدام Google", ru:"Продолжить с Google", es:"Continuar con Google", zh:"使用 Google 继续" },
  "Continue with GitHub": { fa:"ادامه با گیت‌هاب", ar:"المتابعة باستخدام GitHub", ru:"Продолжить с GitHub", es:"Continuar con GitHub", zh:"使用 GitHub 继续" },
  "Dashboard": { fa:"داشبورد", ar:"لوحة التحكم", ru:"Панель управления", es:"Panel", zh:"控制台" },
  "Welcome Back": { fa:"خوش آمدید", ar:"مرحباً بعودتك", ru:"С возвращением", es:"Bienvenido de nuevo", zh:"欢迎回来" },
  "Profile": { fa:"پروفایل", ar:"الملف الشخصي", ru:"Профиль", es:"Perfil", zh:"个人资料" },
  "Settings": { fa:"تنظیمات", ar:"الإعدادات", ru:"Настройки", es:"Ajustes", zh:"设置" },
  "Logout": { fa:"خروج", ar:"تسجيل الخروج", ru:"Выйти", es:"Cerrar sesión", zh:"退出" },
  "CONTACT": { fa:"تماس", ar:"اتصال", ru:"КОНТАКТЫ", es:"CONTACTO", zh:"联系" },
  "Get In Touch": { fa:"ارتباط با ما", ar:"تواصل معنا", ru:"Свяжитесь с нами", es:"Contáctanos", zh:"联系我们" },
  "Start Conversation": { fa:"شروع گفتگو", ar:"ابدأ محادثة", ru:"Начать разговор", es:"Iniciar conversación", zh:"开始对话" },
  "Send Message": { fa:"ارسال پیام", ar:"إرسال رسالة", ru:"Отправить сообщение", es:"Enviar mensaje", zh:"发送消息" },
  "Sending...": { fa:"در حال ارسال...", ar:"جارٍ الإرسال...", ru:"Отправка...", es:"Enviando...", zh:"正在发送..." },
  "Privacy Policy": { fa:"حریم خصوصی", ar:"سياسة الخصوصية", ru:"Политика конфиденциальности", es:"Política de privacidad", zh:"隐私政策" },
  "Terms of Service": { fa:"قوانین و شرایط", ar:"شروط الخدمة", ru:"Условия использования", es:"Términos del servicio", zh:"服务条款" },
  "Your Privacy Matters": { fa:"حریم خصوصی شما مهم است", ar:"خصوصيتك مهمة", ru:"Ваша конфиденциальность важна", es:"Tu privacidad importa", zh:"您的隐私很重要" },
  "All rights reserved.": { fa:"تمامی حقوق محفوظ است.", ar:"جميع الحقوق محفوظة.", ru:"Все права защищены.", es:"Todos los derechos reservados.", zh:"版权所有。" },
};

function translateValue(value: string, locale: Locale) {
  return common[value]?.[locale] ?? value;
}

function deepTranslate<T>(value: T, locale: Locale): T {
  if (typeof value === "string") return translateValue(value, locale) as T;
  if (Array.isArray(value)) return value.map((item) => deepTranslate(item, locale)) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value)) out[key] = deepTranslate(child, locale);
    return out as T;
  }
  return value;
}

export function buildTranslation(locale: Locale): Translation {
  if (locale === "en") return en;
  return { ...deepTranslate(en, locale), lang: locale } as Translation;
}
