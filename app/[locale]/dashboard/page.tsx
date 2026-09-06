"use client";

import { useState } from "react";
import Image from "next/image";

import {
  signOut,
  useSession,
} from "next-auth/react";

import {
  Activity,
  ArrowUpRight,
  Bell,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Database,
  Folder,
  LogOut,
  Menu,
  Search,
  Settings,
  Shield,
  User,
  X,
  Zap,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { useLang } from "@/components/LangContext";
import { cn } from "@/lib/cn";



type DashboardStats = {
  aiModels: number;
  apiRequests: number;
  securityScore: number;
  cloudNodes: number;
};



type ActivityItem = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  type: "success" | "info" | "warning";
};



const defaultStats: DashboardStats = {
  aiModels: 12,
  apiRequests: 18420,
  securityScore: 99.8,
  cloudNodes: 4,
};



const defaultActivities: ActivityItem[] = [
  {
    id: "1",
    title: "ANOX Core initialized",
    description: "Dashboard successfully connected.",
    createdAt: "Now",
    type: "success",
  },

  {
    id: "2",
    title: "Security layer active",
    description: "Your account is protected.",
    createdAt: "Now",
    type: "success",
  },

  {
    id: "3",
    title: "Cloud infrastructure ready",
    description: "Infrastructure is available.",
    createdAt: "Now",
    type: "info",
  },
];



export default function DashboardPage() {
  const { data: session, status } = useSession();

  const { lang } = useLang();

  const rtl = lang === "fa";

  const [mobileMenu, setMobileMenu] = useState(false);

  const [activeSection, setActiveSection] =
    useState("overview");

  const [searchOpen, setSearchOpen] =
    useState(false);

  const stats = defaultStats;

const activities = defaultActivities;





  if (status === "loading") {
    return (
      <div
        className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#020617]
        text-white
        "
      >
        <div className="text-center">
          <div
            className="
            mx-auto
            h-10
            w-10
            animate-spin
            rounded-full
            border-2
            border-cyan-400/20
            border-t-cyan-400
            "
          />

          <p className="mt-5 text-sm text-zinc-500">
            Loading ANOX Core...
          </p>
        </div>
      </div>
    );
  }



  if (status === "unauthenticated") {
    return (
      <div
        className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#020617]
        px-6
        text-white
        "
      >
        <div
          className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-8
          text-center
          backdrop-blur-xl
          "
        >
          <Shield
            size={42}
            className="mx-auto text-cyan-400"
          />

          <h1 className="mt-6 text-2xl font-black">
            Authentication Required
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Please sign in to access your ANOX dashboard.
          </p>

          <a
            href={`/${lang}/login`}
            className="
            mt-7
            inline-flex
            rounded-xl
            bg-cyan-400
            px-6
            py-3
            font-bold
            text-black
            transition
            hover:bg-cyan-300
            "
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }



  const userName =
    session?.user?.name || "ANOX User";

  const userEmail =
    session?.user?.email || "No email";

  const avatar =
    session?.user?.image;



  const menu = [
    {
      id: "overview",
      name: rtl ? "نمای کلی" : "Overview",
      icon: Activity,
    },

    {
      id: "ai",
      name: rtl ? "موتور هوش مصنوعی" : "AI Engine",
      icon: Brain,
    },

    {
      id: "security",
      name: rtl ? "امنیت" : "Security",
      icon: Shield,
    },

    {
      id: "cloud",
      name: rtl ? "زیرساخت ابری" : "Cloud",
      icon: Cloud,
    },

    {
      id: "projects",
      name: rtl ? "پروژه‌ها" : "Projects",
      icon: Folder,
    },

    {
      id: "settings",
      name: rtl ? "تنظیمات" : "Settings",
      icon: Settings,
    },
  ];



  const statCards = [
    {
      title: rtl ? "مدل‌های AI" : "AI Models",
      value: stats.aiModels.toString(),
      suffix: "+",
      icon: Brain,
    },

    {
      title: rtl ? "درخواست API" : "API Requests",
      value: stats.apiRequests.toLocaleString(),
      suffix: "",
      icon: Activity,
    },

    {
      title: rtl ? "امتیاز امنیتی" : "Security Score",
      value: stats.securityScore.toString(),
      suffix: "%",
      icon: Shield,
    },

    {
      title: rtl ? "نودهای ابری" : "Cloud Nodes",
      value: stats.cloudNodes.toString(),
      suffix: "",
      icon: Cloud,
    },
  ];



  return (
    <main
      dir={rtl ? "rtl" : "ltr"}
      className="
      min-h-screen
      overflow-hidden
      bg-[#020617]
      text-white
      "
    >

      {/* Background */}

      <div
        aria-hidden
        className="
        pointer-events-none
        fixed
        inset-0
        bg-[radial-gradient(circle_at_top,#00eaff18,transparent_42%)]
        "
      />

      <div
        aria-hidden
        className="
        pointer-events-none
        fixed
        -left-40
        top-1/3
        h-[400px]
        w-[400px]
        rounded-full
        bg-cyan-500/5
        blur-[140px]
        "
      />



      <div className="relative flex min-h-screen">



        {/* MOBILE OVERLAY */}

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="
              fixed
              inset-0
              z-40
              bg-black/70
              backdrop-blur-sm
              lg:hidden
              "
            />
          )}
        </AnimatePresence>



        {/* SIDEBAR */}

        <aside
          className={cn(
            `
            fixed
            inset-y-0
            z-50
            flex
            w-[290px]
            flex-col
            border-white/10
            bg-[#050a14]/95
            p-6
            backdrop-blur-2xl
            transition-transform
            lg:sticky
            lg:top-0
            lg:h-screen
            lg:translate-x-0
            lg:border-r
            `,
            rtl
              ? "right-0 border-l lg:right-auto"
              : "left-0",
            mobileMenu
              ? "translate-x-0"
              : rtl
                ? "translate-x-full"
                : "-translate-x-full"
          )}
        >

          {/* Brand */}

          <div className="flex items-center justify-between">

            <div>
              <h1
                className="
                text-3xl
                font-black
                tracking-[0.2em]
                text-cyan-400
                "
              >
                ANOX
              </h1>

              <p className="mt-1 text-xs text-zinc-500">
                AI Infrastructure OS
              </p>
            </div>


            <button
              onClick={() => setMobileMenu(false)}
              className="rounded-xl p-2 text-zinc-500 hover:bg-white/5 lg:hidden"
            >
              <X size={20} />
            </button>

          </div>



          {/* System status */}

          <div
            className="
            mt-9
            rounded-2xl
            border
            border-cyan-400/15
            bg-cyan-400/[0.06]
            p-5
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="
                h-2.5
                w-2.5
                animate-pulse
                rounded-full
                bg-cyan-400
                shadow-[0_0_15px_rgba(34,211,238,.8)]
                "
              />

              <span className="text-sm font-semibold">
                {rtl
                  ? "هسته آنلاین"
                  : "Core Online"}
              </span>

            </div>

            <p className="mt-3 text-xs text-zinc-500">
              {rtl
                ? "تمام سیستم‌ها عملیاتی هستند"
                : "All systems operational"}
            </p>

          </div>



          {/* Navigation */}

          <nav className="mt-8 space-y-1.5">

            {menu.map((item) => {
              const Icon = item.icon;

              const active =
                activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  whileHover={{
                    x: rtl ? -4 : 4,
                  }}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenu(false);
                  }}
                  className={cn(
                    `
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition
                    `,
                    active
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-zinc-500 hover:bg-white/[0.04] hover:text-white"
                  )}
                >
                  <Icon size={18} />

                  <span>
                    {item.name}
                  </span>

                  {active && (
                    <ChevronRight
                      size={15}
                      className={cn(
                        "ms-auto",
                        rtl && "rotate-180"
                      )}
                    />
                  )}

                </motion.button>
              );
            })}

          </nav>



          {/* User */}

          <div className="mt-auto">

            <div
              className="
              mb-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-4
              "
            >

              <div className="flex items-center gap-3">

                {avatar ? (
                  <Image
                    src={avatar}
                    alt={userName}
                    width={40}
                    height={40}
                    className="
                    h-10
                    w-10
                    rounded-xl
                    object-cover
                    "
                  />
                ) : (
                  <div
                    className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-400
                    "
                  >
                    <User size={19} />
                  </div>
                )}

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    {userName}
                  </p>

                  <p className="truncate text-xs text-zinc-500">
                    {userEmail}
                  </p>
                </div>

              </div>

            </div>


            <button
              onClick={() => signOut({
                callbackUrl: `/${lang}/login`,
              })}
              className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-sm
              text-zinc-500
              transition
              hover:bg-red-500/10
              hover:text-red-400
              "
            >
              <LogOut size={18} />

              {rtl
                ? "خروج از حساب"
                : "Sign out"}
            </button>

          </div>

        </aside>



        {/* CONTENT */}

        <section className="min-w-0 flex-1 p-5 sm:p-7 lg:p-10">



          {/* TOPBAR */}

          <header
            className="
            flex
            items-center
            justify-between
            gap-4
            "
          >

            <div className="flex items-center gap-3">

              <button
                onClick={() => setMobileMenu(true)}
                className="
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                p-3
                text-zinc-300
                lg:hidden
                "
              >
                <Menu size={20} />
              </button>


              <div>
                <h1 className="text-2xl font-black sm:text-4xl">
                  {rtl ? "داشبورد" : "Dashboard"}
                </h1>

                <p className="mt-1 text-sm text-zinc-500">
                  {rtl
                    ? `خوش آمدی، ${userName}`
                    : `Welcome back, ${userName}`}
                </p>
              </div>

            </div>



            <div className="flex items-center gap-2">

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                p-3
                text-zinc-400
                transition
                hover:border-cyan-400/30
                hover:text-cyan-400
                "
              >
                <Search size={18} />
              </button>


              <button
                className="
                relative
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                p-3
                text-zinc-400
                transition
                hover:border-cyan-400/30
                hover:text-cyan-400
                "
              >
                <Bell size={18} />

                <span
                  className="
                  absolute
                  right-2
                  top-2
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-400
                  "
                />
              </button>

            </div>

          </header>



          {/* SEARCH */}

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="overflow-hidden"
              >

                <div
                  className="
                  mt-5
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  "
                >

                  <Search
                    size={18}
                    className="text-zinc-500"
                  />

                  <input
                    autoFocus
                    placeholder={
                      rtl
                        ? "جستجو در ANOX..."
                        : "Search ANOX..."
                    }
                    className="
                    w-full
                    bg-transparent
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-600
                    "
                  />

                </div>

              </motion.div>
            )}
          </AnimatePresence>



          {/* CORE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
            mt-8
            overflow-hidden
            rounded-[30px]
            border
            border-cyan-400/15
            bg-gradient-to-br
            from-cyan-400/[0.12]
            via-cyan-400/[0.03]
            to-transparent
            p-6
            sm:p-8
            "
          >

            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

              <div className="flex items-center gap-4">

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  text-cyan-400
                  "
                >
                  <Zap size={26} />
                </div>

                <div>

                  <h2 className="text-xl font-black sm:text-2xl">
                    ANOX Core
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Artificial Intelligence Infrastructure
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-3">

                <span
                  className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-cyan-400
                  "
                />

                <span className="text-sm font-bold text-cyan-400">
                  ONLINE
                </span>

              </div>

            </div>

          </motion.div>



          {/* STATS */}

          <div
            className="
            mt-6
            grid
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
            "
          >

            {statCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-5
                  backdrop-blur-xl
                  "
                >

                  <div
                    className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-400
                    "
                  >
                    <Icon size={19} />
                  </div>

                  <p className="mt-5 text-sm text-zinc-500">
                    {item.title}
                  </p>

                  <p className="mt-1 text-3xl font-black">
                    {item.value}
                    <span className="text-cyan-400">
                      {item.suffix}
                    </span>
                  </p>

                </motion.div>
              );
            })}

          </div>



          {/* MAIN GRID */}

          <div className="mt-6 grid gap-6 xl:grid-cols-3">



            {/* SYSTEM HEALTH */}

            <div
              className="
              xl:col-span-2
              rounded-3xl
              border
              border-white/10
              bg-white/[0.035]
              p-6
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-black">
                    {rtl
                      ? "وضعیت سیستم"
                      : "System Health"}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    {rtl
                      ? "وضعیت سرویس‌های اصلی ANOX"
                      : "ANOX core services status"}
                  </p>
                </div>

                <CheckCircle2
                  className="text-cyan-400"
                  size={22}
                />

              </div>



              <div
                className="
                mt-6
                grid
                gap-4
                sm:grid-cols-2
                "
              >

                {[
                  {
                    name: "AI Engine",
                    icon: Brain,
                  },
                  {
                    name: "Security Layer",
                    icon: Shield,
                  },
                  {
                    name: "Cloud Infrastructure",
                    icon: Cloud,
                  },
                  {
                    name: "Database Cluster",
                    icon: Database,
                  },
                ].map((system) => {
                  const Icon = system.icon;

                  return (
                    <div
                      key={system.name}
                      className="
                      rounded-2xl
                      border
                      border-white/5
                      bg-black/20
                      p-5
                      "
                    >

                      <div className="flex items-center justify-between">

                        <div
                          className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-cyan-400/10
                          text-cyan-400
                          "
                        >
                          <Icon size={19} />
                        </div>

                        <CheckCircle2
                          size={17}
                          className="text-cyan-400"
                        />

                      </div>

                      <h3 className="mt-5 font-bold">
                        {system.name}
                      </h3>

                      <p className="mt-1 text-xs text-cyan-400">
                        Operational
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>



            {/* ACTIVITY */}

            <div
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.035]
              p-6
              "
            >

              <div className="flex items-center justify-between">

                <h2 className="text-xl font-black">
                  {rtl
                    ? "فعالیت اخیر"
                    : "Recent Activity"}
                </h2>

                <Activity
                  size={19}
                  className="text-cyan-400"
                />

              </div>


              <div className="mt-6 space-y-3">

                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="
                    rounded-2xl
                    border
                    border-white/5
                    bg-black/20
                    p-4
                    "
                  >

                    <div className="flex items-start gap-3">

                      <div
                        className="
                        mt-0.5
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-cyan-400/10
                        text-cyan-400
                        "
                      >
                        <Activity size={15} />
                      </div>

                      <div className="min-w-0">

                        <p className="text-sm font-semibold">
                          {activity.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-zinc-500">
                          {activity.description}
                        </p>

                        <p className="mt-2 text-[10px] text-zinc-600">
                          {activity.createdAt}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>



          {/* PROJECTS */}

          <div
            className="
            mt-6
            rounded-3xl
            border
            border-white/10
            bg-white/[0.035]
            p-6
            "
          >

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-xl font-black">
                  {rtl
                    ? "پروژه‌های فعال"
                    : "Active Projects"}
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  {rtl
                    ? "پروژه‌های متصل به اکوسیستم ANOX"
                    : "Projects connected to your ANOX ecosystem"}
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="text-zinc-500"
              />

            </div>



            <div
              className="
              mt-6
              grid
              gap-4
              md:grid-cols-3
              "
            >

              {[
                {
                  name: "ANOX AI",
                  icon: Brain,
                  status: "Active",
                },

                {
                  name: "Security Scanner",
                  icon: Shield,
                  status: "Active",
                },

                {
                  name: "Cloud Platform",
                  icon: Cloud,
                  status: "Development",
                },
              ].map((project) => {
                const Icon = project.icon;

                return (
                  <motion.div
                    key={project.name}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    p-5
                    transition
                    hover:border-cyan-400/20
                    "
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-cyan-400/10
                        text-cyan-400
                        "
                      >
                        <Icon size={19} />
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="
                        text-zinc-600
                        transition
                        group-hover:text-cyan-400
                        "
                      />

                    </div>

                    <h3 className="mt-5 font-bold">
                      {project.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2">

                      <span
                        className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-400
                        "
                      />

                      <span className="text-xs text-zinc-500">
                        {project.status}
                      </span>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>



          {/* FOOTER */}

          <footer
            className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-white/5
            pt-6
            text-xs
            text-zinc-600
            sm:flex-row
            sm:items-center
            sm:justify-between
            "
          >

            <span>
              © {new Date().getFullYear()} ANOX
            </span>

            <span>
              AI Infrastructure Platform
            </span>

          </footer>

        </section>

      </div>

    </main>
  );
}