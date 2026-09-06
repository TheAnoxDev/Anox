"use client";

import { useEffect } from "react";
import { useLang } from "@/components/LangContext";

const map: Record<string, Record<string, string>> = {
  "ANOX PLATFORM": { fa:"پلتفرم ANOX", ar:"منصة ANOX", ru:"ПЛАТФОРМА ANOX", es:"PLATAFORMA ANOX", zh:"ANOX 平台" },
  "ANOX ARCHITECTURE": { fa:"معماری ANOX", ar:"معمارية ANOX", ru:"АРХИТЕКТУРА ANOX", es:"ARQUITECTURA ANOX", zh:"ANOX 架构" },
  "ANOX Architecture": { fa:"معماری ANOX", ar:"معمارية ANOX", ru:"Архитектура ANOX", es:"Arquitectura ANOX", zh:"ANOX 架构" },
  "ANOX Cart": { fa:"سبد خرید ANOX", ar:"سلة ANOX", ru:"Корзина ANOX", es:"Carrito ANOX", zh:"ANOX 购物车" },
  "ANOX Store": { fa:"فروشگاه ANOX", ar:"متجر ANOX", ru:"Магазин ANOX", es:"Tienda ANOX", zh:"ANOX 商店" },
  "Access ANOX": { fa:"ورود به ANOX", ar:"الدخول إلى ANOX", ru:"Вход в ANOX", es:"Acceder a ANOX", zh:"访问 ANOX" },
  "Add To Cart": { fa:"افزودن به سبد", ar:"أضف إلى السلة", ru:"В корзину", es:"Añadir al carrito", zh:"加入购物车" },
  "Architecture Layers": { fa:"لایه‌های معماری", ar:"طبقات المعمارية", ru:"Слои архитектуры", es:"Capas de arquitectura", zh:"架构层" },
  "Build With ANOX": { fa:"با ANOX بسازید", ar:"ابنِ مع ANOX", ru:"Создавайте с ANOX", es:"Construye con ANOX", zh:"与 ANOX 一起构建" },
  "Buy": { fa:"خرید", ar:"شراء", ru:"Купить", es:"Comprar", zh:"购买" },
  "CONTACT ANOX": { fa:"تماس با ANOX", ar:"تواصل مع ANOX", ru:"КОНТАКТЫ ANOX", es:"CONTACTO ANOX", zh:"联系 ANOX" },
  "Cart": { fa:"سبد خرید", ar:"السلة", ru:"Корзина", es:"Carrito", zh:"购物车" },
  "Checkout": { fa:"پرداخت", ar:"الدفع", ru:"Оформление", es:"Pagar", zh:"结账" },
  "Clear Cart": { fa:"خالی کردن سبد", ar:"إفراغ السلة", ru:"Очистить корзину", es:"Vaciar carrito", zh:"清空购物车" },
  "Email Address": { fa:"آدرس ایمیل", ar:"البريد الإلكتروني", ru:"Электронная почта", es:"Correo electrónico", zh:"电子邮箱" },
  "Explore Store": { fa:"مشاهده فروشگاه", ar:"استكشف المتجر", ru:"Открыть магазин", es:"Explorar tienda", zh:"探索商店" },
  "Forgot password?": { fa:"رمز عبور را فراموش کرده‌اید؟", ar:"هل نسيت كلمة المرور؟", ru:"Забыли пароль?", es:"¿Olvidaste tu contraseña?", zh:"忘记密码？" },
  "Full Name": { fa:"نام کامل", ar:"الاسم الكامل", ru:"Полное имя", es:"Nombre completo", zh:"姓名" },
  "ONLINE": { fa:"آنلاین", ar:"متصل", ru:"ОНЛАЙН", es:"EN LÍNEA", zh:"在线" },
  "OR": { fa:"یا", ar:"أو", ru:"ИЛИ", es:"O", zh:"或" },
  "Password": { fa:"رمز عبور", ar:"كلمة المرور", ru:"Пароль", es:"Contraseña", zh:"密码" },
  "Popular": { fa:"محبوب", ar:"الأكثر شعبية", ru:"Популярные", es:"Populares", zh:"热门" },
  "Price High": { fa:"گران‌ترین", ar:"السعر الأعلى", ru:"Сначала дорогие", es:"Precio alto", zh:"价格从高到低" },
  "Price Low": { fa:"ارزان‌ترین", ar:"ارزان‌ترین", ru:"Сначала дешёвые", es:"Precio bajo", zh:"价格从低到高" },
  "Privacy Policy": { fa:"حریم خصوصی", ar:"سياسة الخصوصية", ru:"Политика конфиденциальности", es:"Política de privacidad", zh:"隐私政策" },
  "Ready To Build The Future?": { fa:"آماده ساخت آینده‌اید؟", ar:"هل أنت مستعد لبناء المستقبل؟", ru:"Готовы создавать будущее?", es:"¿Listo para construir el futuro?", zh:"准备好构建未来了吗？" },
  "Secure Checkout": { fa:"پرداخت امن", ar:"دفع آمن", ru:"Безопасная оплата", es:"Pago seguro", zh:"安全结账" },
  "Start Project": { fa:"شروع پروژه", ar:"ابدأ المشروع", ru:"Начать проект", es:"Iniciar proyecto", zh:"开始项目" },
  "Subtotal": { fa:"جمع جزءی", ar:"المجموع الفرعي", ru:"Подытог", es:"Subtotal", zh:"小计" },
  "Tax": { fa:"مالیات", ar:"الضريبة", ru:"Налог", es:"Impuesto", zh:"税费" },
  "Terms of Service": { fa:"قوانین و شرایط", ar:"شروط الخدمة", ru:"Условия использования", es:"Términos del servicio", zh:"服务条款" },
  "Total": { fa:"مجموع", ar:"الإجمالي", ru:"Итого", es:"Total", zh:"总计" },
  "Your Privacy Matters": { fa:"حریم خصوصی شما مهم است", ar:"خصوصيتك مهمة", ru:"Ваша конфиденциальность важна", es:"Tu privacidad importa", zh:"您的隐私很重要" },
  "Your cart is empty": { fa:"سبد خرید شما خالی است", ar:"سلة التسوق فارغة", ru:"Ваша корзина пуста", es:"Tu carrito está vacío", zh:"购物车为空" },
  "Future": { fa:"آینده", ar:"المستقبل", ru:"будущее", es:"futuro", zh:"未来" },
  "SECURED BY ANOX IDENTITY SYSTEM": { fa:"محافظت‌شده توسط سیستم هویت ANOX", ar:"مؤمّن بواسطة نظام هوية ANOX", ru:"ЗАЩИЩЕНО СИСТЕМОЙ ИДЕНТИФИКАЦИИ ANOX", es:"PROTEGIDO POR EL SISTEMA DE IDENTIDAD ANOX", zh:"由 ANOX 身份系统保护" },
  "The Intelligence Infrastructure of Tomorrow": { fa:"زیرساخت هوشمند فردا", ar:"البنية التحتية الذكية للغد", ru:"Интеллектуальная инфраструктура будущего", es:"La infraestructura inteligente del mañana", zh:"未来的智能基础设施" },
  "Launch Platform": { fa:"اجرای پلتفرم", ar:"تشغيل المنصة", ru:"Запустить платформу", es:"Iniciar plataforma", zh:"启动平台" },
  "Explore Technology": { fa:"کاوش فناوری", ar:"استكشف التقنية", ru:"Изучить технологии", es:"Explorar tecnología", zh:"探索技术" },
  "The technology layers powering the ecosystem": { fa:"لایه‌های فناوری که اکوسیستم را می‌سازند", ar:"طبقات التقنية التي تدعم المنظومة", ru:"Технологические слои экосистемы", es:"Las capas tecnológicas del ecosistema", zh:"驱动生态系统的技术层" },
  "Let&apos;s Build The": { fa:"بیایید بسازیم", ar:"لنبنِ", ru:"Давайте создадим", es:"Construyamos", zh:"一起构建" },
  " Future": { fa:" آینده", ar:" المستقبل", ru:" будущее", es:" futuro", zh:"未来" },
  "Connect With ANOX": { fa:"ارتباط با ANOX", ar:"تواصل مع ANOX", ru:"Связаться с ANOX", es:"Conecta con ANOX", zh:"联系 ANOX" },
  "Send Request": { fa:"ارسال درخواست", ar:"إرسال الطلب", ru:"Отправить запрос", es:"Enviar solicitud", zh:"发送请求" },
  "Contact Privacy Team": { fa:"تماس با تیم حریم خصوصی", ar:"تواصل مع فريق الخصوصية", ru:"Связаться с командой конфиденциальности", es:"Contactar al equipo de privacidad", zh:"联系隐私团队" },
  "Contact ANOX": { fa:"تماس با ANOX", ar:"تواصل مع ANOX", ru:"Связаться с ANOX", es:"Contactar ANOX", zh:"联系 ANOX" },
  "Accepting These Terms": { fa:"پذیرش این شرایط", ar:"قبول هذه الشروط", ru:"Принятие условий", es:"Aceptación de estos términos", zh:"接受这些条款" },
  "Proceed Payment": { fa:"ادامه پرداخت", ar:"متابعة الدفع", ru:"Перейти к оплате", es:"Continuar al pago", zh:"继续付款" },
  "Encrypted Payment": { fa:"پرداخت رمزنگاری‌شده", ar:"دفع مشفّر", ru:"Зашифрованная оплата", es:"Pago cifrado", zh:"加密支付" },
  "Search ANOX products...": { fa:"جستجوی محصولات ANOX...", ar:"ابحث عن منتجات ANOX...", ru:"Поиск продуктов ANOX...", es:"Buscar productos ANOX...", zh:"搜索 ANOX 产品..." },
  "MOST POPULAR": { fa:"محبوب‌ترین", ar:"الأكثر شعبية", ru:"ПОПУЛЯРНОЕ", es:"MÁS POPULAR", zh:"最受欢迎" },
};

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export default function LocaleTextBridge() {
  const { lang } = useLang();

  useEffect(() => {
    if (lang === "en") return;

    const translate = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const raw = node.nodeValue ?? "";
        const key = normalize(raw);
        const translated = map[key]?.[lang];
        if (translated && key === raw.trim()) node.nodeValue = raw.replace(key, translated);
      }
    };

    translate();
    const observer = new MutationObserver(translate);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [lang]);

  return null;
}
