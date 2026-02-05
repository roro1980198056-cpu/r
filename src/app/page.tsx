"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

// Anime data
const featuredAnime = [
  {
    id: 1,
    title: "هجوم العمالقة",
    titleEn: "Attack on Titan",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    episode: "الحلقة 87",
    type: "مترجم",
    rating: 9.8,
    gradient: "from-red-900 via-gray-900 to-black",
  },
  {
    id: 2,
    title: "جوجوتسو كايسن",
    titleEn: "Jujutsu Kaisen",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    episode: "الحلقة 47",
    type: "مترجم",
    rating: 9.5,
    gradient: "from-purple-900 via-blue-900 to-black",
  },
  {
    id: 3,
    title: "ديمون سلاير",
    titleEn: "Demon Slayer",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    episode: "الحلقة 44",
    type: "مترجم",
    rating: 9.7,
    gradient: "from-teal-900 via-green-900 to-black",
  },
];

const latestEpisodes = [
  {
    id: 1,
    title: "ون بيس",
    titleEn: "One Piece",
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    episode: "الحلقة 1102",
    type: "مترجم",
    time: "منذ ساعة",
  },
  {
    id: 2,
    title: "جوجوتسو كايسن",
    titleEn: "Jujutsu Kaisen",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    episode: "الحلقة 47",
    type: "مترجم",
    time: "منذ ساعتين",
  },
  {
    id: 3,
    title: "ديمون سلاير",
    titleEn: "Demon Slayer",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    episode: "الحلقة 44",
    type: "مترجم",
    time: "منذ 3 ساعات",
  },
  {
    id: 4,
    title: "ناروتو شيبودن",
    titleEn: "Naruto Shippuden",
    image: "https://cdn.myanimelist.net/images/anime/5/17407.jpg",
    episode: "الحلقة 500",
    type: "مترجم",
    time: "منذ 5 ساعات",
  },
  {
    id: 5,
    title: "هجوم العمالقة",
    titleEn: "Attack on Titan",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    episode: "الحلقة 87",
    type: "مترجم",
    time: "منذ 6 ساعات",
  },
  {
    id: 6,
    title: "دراغون بول",
    titleEn: "Dragon Ball Z",
    image: "https://cdn.myanimelist.net/images/anime/1607/117271.jpg",
    episode: "الحلقة 291",
    type: "مترجم",
    time: "منذ 8 ساعات",
  },
];

const popularAnime = [
  { id: 1, title: "ون بيس", views: "1.2M" },
  { id: 2, title: "ناروتو", views: "980K" },
  { id: 3, title: "هجوم العمالقة", views: "870K" },
  { id: 4, title: "جوجوتسو كايسن", views: "750K" },
  { id: 5, title: "ديث نوت", views: "650K" },
];

const categories = [
  "أكشن",
  "مغامرات",
  "كوميدي",
  "دراما",
  "خيال",
  "رعب",
  "غموض",
  "رومانسي",
  "خيال علمي",
  "رياضي",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredAnime.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] bg-noise">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center glow-red">
                <span className="text-white font-bold text-xl">أ</span>
              </div>
              <h1 className="text-xl font-bold text-gradient">ryx</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white hover:text-red-500 transition-colors font-medium">
                الرئيسية
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors font-medium">
                قائمة الأنمي
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors font-medium">
                أفلام الأنمي
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors font-medium">
                جدول الأنمي
              </a>
            </nav>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block relative">
                <Input
                  placeholder="ابحث عن أنمي..."
                  className="w-64 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-500"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="md:hidden p-2 text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#0a0a0a] border-white/10">
                  <nav className="flex flex-col gap-4 mt-8">
                    <a href="#" className="text-white text-lg font-medium">الرئيسية</a>
                    <a href="#" className="text-gray-400 text-lg">قائمة الأنمي</a>
                    <a href="#" className="text-gray-400 text-lg">أفلام الأنمي</a>
                    <a href="#" className="text-gray-400 text-lg">جدول الأنمي</a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] glow-red">
            {featuredAnime.map((anime, index) => (
              <div
                key={anime.id}
                className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-br ${anime.gradient || 'from-red-900 via-gray-900 to-black'} ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover opacity-60"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 right-0 p-8 md:p-12">
                  <Badge className="bg-red-600 hover:bg-red-700 mb-4">{anime.type}</Badge>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 glow-text">
                    {anime.title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-4">{anime.titleEn}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-yellow-500 flex items-center gap-1">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      {anime.rating}
                    </span>
                    <span className="text-gray-400">{anime.episode}</span>
                  </div>
                  <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-medium transition-all hover:scale-105 glow-red">
                    مشاهدة الآن
                  </button>
                </div>
              </div>
            ))}

            {/* Slider dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredAnime.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-red-500 w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Latest Episodes */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-red-500 rounded-full" />
                  آخر الحلقات المضافة
                </h2>
                <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                  عرض الكل
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {latestEpisodes.map((anime) => (
                  <Card
                    key={anime.id}
                    className="anime-card bg-transparent border-0 cursor-pointer group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-red-900/50 via-gray-900 to-black">
                      <img
                        src={anime.image}
                        alt={anime.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                      {/* Episode badge */}
                      <Badge className="absolute top-2 right-2 bg-red-600/90 text-xs">
                        {anime.episode}
                      </Badge>

                      {/* Play button on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center glow-red">
                          <svg className="w-6 h-6 text-white mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="absolute bottom-0 right-0 left-0 p-3">
                        <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">
                          {anime.title}
                        </h3>
                        <p className="text-gray-400 text-xs">{anime.time}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Categories */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-red-500 rounded-full" />
                  التصنيفات
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="px-6 py-3 bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-600 rounded-xl text-gray-300 hover:text-white transition-all"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80">
            {/* Popular Anime */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-red-500 rounded-full" />
                الأكثر مشاهدة
              </h3>
              <div className="space-y-4">
                {popularAnime.map((anime, index) => (
                  <a
                    key={anime.id}
                    href="#"
                    className="flex items-center gap-4 group"
                  >
                    <span className={`text-2xl font-bold ${
                      index < 3 ? "text-red-500" : "text-gray-600"
                    }`}>
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-white group-hover:text-red-500 transition-colors font-medium">
                        {anime.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{anime.views} مشاهدة</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-red-500 rounded-full" />
                جدول الأسبوع
              </h3>
              <div className="space-y-3">
                {["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء"].map((day, index) => (
                  <div
                    key={day}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                      index === 0
                        ? "bg-red-600/20 border border-red-600/30"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <span className={index === 0 ? "text-red-500 font-medium" : "text-gray-400"}>
                      {day}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {[5, 3, 4, 6, 2][index]} أنمي
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5 mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">أ</span>
                </div>
                <h2 className="text-xl font-bold text-gradient">أنمي عربي</h2>
              </div>
              <p className="text-gray-500 leading-relaxed">
                موقع أنمي عربي هو وجهتك الأولى لمشاهدة وتحميل أحدث حلقات الأنمي المترجمة بجودة عالية.
                نقدم لكم أفضل الأنميات العربية والمترجمة مع تحديث يومي للحلقات الجديدة.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-red-500 transition-colors">الرئيسية</a></li>
                <li><a href="#" className="text-gray-500 hover:text-red-500 transition-colors">قائمة الأنمي</a></li>
                <li><a href="#" className="text-gray-500 hover:text-red-500 transition-colors">أفلام الأنمي</a></li>
                <li><a href="#" className="text-gray-500 hover:text-red-500 transition-colors">اتصل بنا</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-bold mb-4">تابعنا</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-white/10" />

          <div className="text-center text-gray-500 text-sm">
            <p>جميع الحقوق محفوظة © 2026 أنمي عربي</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
