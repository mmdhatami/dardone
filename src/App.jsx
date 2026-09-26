import React, { useEffect, useMemo, useState } from "react";

const brand = {
  green: "#0d6b4a",
  orange: "#f59e0b",
  cream: "#faf5ec",
  purple: "#a78bfa"
};

const categories = [
  ["دیجیتال", "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=360&q=58"],
  ["پوشاک", "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=360&q=58"],
  ["خانه", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=360&q=58"],
  ["خودرو", "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=360&q=58"],
  ["کودک", "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=360&q=58"],
  ["ورزشی", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=360&q=58"],
  ["ابزار", "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=360&q=58"],
  ["حیوانات", "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=360&q=58"],
  ["صنایع دستی", "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=360&q=58"]
];

const listings = [
  { id: 1, title: "آیفون ۱۳", price: "۱۳ میلیون تومان", city: "شهرکرد", image: "https://images.unsplash.com/photo-1592286927505-6d0e0bdc7c20?auto=format&fit=crop&w=720&q=60" },
  { id: 2, title: "پژو ۲۰۷", price: "۴۸۰ میلیون تومان", city: "شهرکرد", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=720&q=60" },
  { id: 3, title: "کافه رستوران سنتی", price: "توافقی", city: "بروجن", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=720&q=60" },
  { id: 4, title: "ویلا ساحلی", price: "۲ میلیارد تومان", city: "سامان", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=720&q=60" },
  { id: 5, title: "لباس مجلسی", price: "۴ میلیون تومان", city: "شهرکرد", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=720&q=60" },
  { id: 6, title: "دوچرخه کوهستان", price: "۲۲ میلیون تومان", city: "فارسان", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=720&q=60" }
];

const nearbySeed = [
  { id: "n1", type: "کسب‌وکارها", title: "رستوران بام شهر", meta: "شهرکرد · ۳۵۰ متر", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=720&q=60" },
  { id: "n2", type: "بازارچه", title: "فروشگاه پوشاک آفتاب", meta: "شهرکرد · ۶۵۰ متر", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=720&q=60" },
  { id: "n3", type: "کمپین‌ها", title: "جشنواره پاییزه", meta: "شهرکرد · ۹۰۰ متر", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=720&q=60" }
];

const publicMessages = [
  { id: 1, name: "آرمان", text: "کسی جای خوب برای صبحانه شهرکرد می‌شناسه؟", time: "۱۰:۴۲" },
  { id: 2, name: "سارا", text: "اطراف میدان امام حسین چند جای خوب هست 🌱", time: "۱۰:۴۴" },
  { id: 3, name: "میلاد", text: "اگه بازارچه هم اضافه بشه خیلی کاربردی میشه.", time: "۱۰:۴۷" }
];

function LogoMark({ small = false }) {
  const size = small ? 44 : 52;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden="true">
      <defs>
        <linearGradient id="pinG" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient id="mountG" x1="0" x2="1">
          <stop offset="0%" stopColor="#0d6b4a" />
          <stop offset="100%" stopColor="#4fa57b" />
        </linearGradient>
      </defs>
      <path d="M40 6c-15.4 0-28 12.6-28 28 0 18 18.2 29.5 28 40 9.8-10.5 28-22 28-40C68 18.6 55.4 6 40 6Z" fill="url(#pinG)" />
      <circle cx="40" cy="34" r="18" fill="#faf5ec" />
      <path d="M26 51 37 38l8 9 7-10 10 14c-7 8-16 13-22 19-5-5.5-11-10.7-14-19Z" fill="url(#mountG)" />
      <path d="M29 48 37 38l3 3-6 7 6-2 5 5 4-5 4 6H29Z" fill="#fff" opacity=".9" />
      <rect x="31.5" y="27" width="17" height="12" rx="2.8" fill="#0d6b4a" />
      <path d="M35 27c0-4 10-4 10 0" fill="none" stroke="#0d6b4a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="58" cy="18" r="2.4" fill="#f59e0b" />
      <circle cx="64" cy="23" r="2.1" fill="#f59e0b" />
      <circle cx="58.5" cy="27.8" r="1.9" fill="#f59e0b" />
    </svg>
  );
}

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.85, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    user: <><circle cx="12" cy="8" r="3.2" /><path d="M5.5 19c1.4-3.2 3.8-4.8 6.5-4.8s5.1 1.6 6.5 4.8" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 6-2 6-2 8h16c0-2-2-2-2-8Z" /><path d="M10 21h4" /></>,
    heart: <path d="M20.3 8.7c0 5-8.3 10-8.3 10s-8.3-5-8.3-10a4.5 4.5 0 0 1 8.3-2.2A4.5 4.5 0 0 1 20.3 8.7Z" />,
    search: <><circle cx="10.5" cy="10.5" r="6.4" /><path d="m15.3 15.3 4.1 4.1" /></>,
    mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11.5A6.5 6.5 0 0 0 12 18a6.5 6.5 0 0 0 6.5-6.5M12 18v3M9.2 21h5.6" /></>,
    pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.7" /></>,
    send: <><path d="m21 3-7.6 7.6" /><path d="M21 3 15.5 21l-4.1-8.4L3 8.5 21 3Z" /></>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function ProgressiveImage({ src, alt, className = "" }) {
  const low = src.replace("w=720&q=60", "w=320&q=46").replace("w=360&q=58", "w=220&q=44");
  const [current, setCurrent] = useState(low);

  useEffect(() => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    img.onload = () => setCurrent(src);
  }, [src]);

  return (
    <img
      className={`progressive-img ${className}`}
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={(event) => {
        event.currentTarget.style.opacity = "0.35";
      }}
    />
  );
}

function timeLabel(date) {
  try {
    return date.toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "همین حالا";
  }
}

function App() {
  const [tab, setTab] = useState("businesses");
  const [activeNav, setActiveNav] = useState("خانه");
  const [search, setSearch] = useState("");
  const [offline, setOffline] = useState(() => !navigator.onLine);
  const [cachedMode, setCachedMode] = useState(() => !navigator.onLine);
  const [updatedAt, setUpdatedAt] = useState(() => new Date());
  const [introOpen, setIntroOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [nearby, setNearby] = useState(null);
  const [nearbyFilter, setNearbyFilter] = useState("همه");
  const [chatText, setChatText] = useState("");
  const [messages, setMessages] = useState(publicMessages);
  const [marketView, setMarketView] = useState(false);

  const filteredListings = useMemo(() => {
    const q = search.trim();
    if (!q) return listings;
    return listings.filter((item) => [item.title, item.city, item.price].join(" ").includes(q));
  }, [search]);

  const refreshHome = () => {
    if (!navigator.onLine) return;
    setCachedMode(false);
    setUpdatedAt(new Date());
  };

  useEffect(() => {
    const sync = () => {
      const isOffline = !navigator.onLine;
      setOffline(isOffline);
      setCachedMode(isOffline);
      if (!isOffline) refreshHome();
    };
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    const timer = window.setInterval(refreshHome, 45000);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "dardone-home-cache",
        JSON.stringify({ savedAt: new Date().toISOString(), listings, categories })
      );
    } catch {
      // Best-effort cache only.
    }
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 3200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const openIntro = () => {
    setIntroOpen(true);
    window.setTimeout(() => setIntroOpen(false), 4000);
  };

  const askNearby = () => {
    if (!navigator.geolocation) {
      setNotice("رفیق دُردونه 🌱 دسترسی مکان روی این دستگاه در دسترس نیست.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      () => setNearby(nearbySeed),
      () => setNotice("برای دیدن نزدیک‌ترین‌ها باید اجازه دسترسی به مکان را بدهی.")
    );
  };

  const sendChat = () => {
    const text = chatText.trim();
    if (!text) return;
    setMessages((items) => [
      ...items,
      { id: Date.now(), name: "شما", text, time: timeLabel(new Date()) }
    ]);
    setChatText("");
  };

  const navItems = ["خانه", "اکسپلور", "ثبت آگهی", "کمپین‌ها", "پیام‌ها"];

  const changeTab = (key) => {
    setTab(key);
    setMarketView(key === "market");
  };

  return (
    <div
      className="app-shell"
      style={{
        "--green": brand.green,
        "--orange": brand.orange,
        "--cream": brand.cream,
        "--purple": brand.purple
      }}
    >
      <header className="top-header">
        <button className="brand-area" onClick={openIntro} aria-label="درباره دُردونه">
          <LogoMark small />
          <span className="brand-copy">
            <strong>دُردونه</strong>
            <span>نبضِ هوشمند چهارمحال و بختیاری</span>
          </span>
        </button>

        <div className="header-actions">
          <button className="icon-button" aria-label="پروفایل" onClick={() => setNotice("پروفایل در مرحله بعدی تکمیل می‌شود.")}>
            <Icon name="user" />
          </button>
          <button className="icon-button has-dot" aria-label="اعلان‌ها" onClick={() => setNotice("هنوز اعلان تازه‌ای نداری.")}>
            <Icon name="bell" />
          </button>
          <button className="icon-button" aria-label="علاقه‌مندی‌ها" onClick={() => setNotice("علاقه‌مندی‌ها در مرحله بعدی تکمیل می‌شود.")}>
            <Icon name="heart" />
          </button>
        </div>
      </header>

      {introOpen && (
        <div className="brand-popover" role="status">
          دُردونه، مرجع جامع کسب‌وکارها، خدمات و محصولات استان؛ جایی برای پیدا کردن راحت‌تر و دیده‌شدن بهتر.
        </div>
      )}

      <main className="page-content">
        <section className="hero-search">
          <label className="search-box">
            <span className="search-icon"><Icon name="search" size={22} /></span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="توی استان دنبال چی می‌گردی؟"
              aria-label="جستجو در استان"
            />
            <button type="button" className="mic-button" aria-label="جستجوی صوتی" onClick={() => setNotice("جستجوی صوتی در مرحله بعدی فعال می‌شود.")}>
              <Icon name="mic" size={21} />
            </button>
          </label>
        </section>

        <div className="home-status-row">
          <button className="nearby-mini" onClick={askNearby} aria-label="نمایش نزدیک‌ترین‌ها">
            <span className="nearby-pin"><Icon name="pin" size={18} /></span>
            <span>نزدیک‌ترین‌ها</span>
          </button>
          {cachedMode && <span className="freshness-note">آخرین بروزرسانی: {timeLabel(updatedAt)}</span>}
        </div>

        <section className="mode-tabs" aria-label="بخش‌های اصلی خانه">
          {[
            ["businesses", "کسب‌وکارها"],
            ["public", "گفت‌وگوی عمومی"],
            ["market", "بازارچه دُردونه"]
          ].map(([key, label]) => (
            <button
              key={key}
              className={`mode-tab ${tab === key ? "active" : ""}`}
              onClick={() => changeTab(key)}
            >
              <span>{label}</span>
            </button>
          ))}
        </section>

        {tab === "businesses" && (
          <>
            <section className="section-block">
              <div className="section-heading">
                <h2>دسته‌بندی‌ها</h2>
              </div>

              <div className="category-strip" aria-label="دسته‌بندی‌ها">
                {categories.map(([title, image], index) => (
                  <button
                    className={`category-card ${index === 2 ? "featured" : ""}`}
                    key={title}
                    onClick={() => setNotice(`دسته «${title}» انتخاب شد.`)}
                  >
                    <div className="category-image">
                      <ProgressiveImage src={image} alt={title} />
                    </div>
                    <span className="category-title">{title}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="section-block">
              <div className="section-heading">
                <h2>جدیدترین آگهی‌ها</h2>
                <button type="button" onClick={() => changeTab("market")}>مشاهده همه</button>
              </div>

              <div className="listing-grid">
                {filteredListings.map((item) => (
                  <article className="listing-card" key={item.id}>
                    <div className="listing-image">
                      <ProgressiveImage src={item.image} alt={item.title} />
                    </div>
                    <div className="listing-info">
                      <h3>{item.title}</h3>
                      <div className="listing-meta">
                        <strong>{item.price}</strong>
                        <span>{item.city}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="card-heart"
                      aria-label={`افزودن ${item.title} به علاقه‌مندی‌ها`}
                      onClick={() => setNotice("به علاقه‌مندی‌ها اضافه شد.")}
                    >
                      <Icon name="heart" size={18} />
                    </button>
                  </article>
                ))}

                {!filteredListings.length && (
                  <div className="empty-state">
                    هنوز چیزی با این جستجو پیدا نکردیم 🌱
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {tab === "public" && (
          <section className="surface-card chat-card">
            <div className="surface-head">
              <div>
                <span className="eyebrow">کل استان</span>
                <h2>گفت‌وگوی عمومی</h2>
              </div>
              <span className="live-dot" />
            </div>
            <div className="chat-rules">بدون تبلیغ، آگهی، جذب عضو و مزاحمت؛ گفت‌وگوی آزاد و محترمانه.</div>
            <div className="chat-list">
              {messages.map((message) => (
                <div className={`chat-row ${message.name === "شما" ? "mine" : ""}`} key={message.id}>
                  <div className="chat-avatar">{message.name[0]}</div>
                  <div className="chat-bubble-wrap">
                    <div className="chat-name-row"><strong>{message.name}</strong><span>{message.time}</span></div>
                    <div className="chat-bubble">{message.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-compose">
              <input value={chatText} onChange={(event) => setChatText(event.target.value)} placeholder="پیامت رو بنویس..." onKeyDown={(event) => { if (event.key === "Enter") sendChat(); }} />
              <button type="button" aria-label="ارسال پیام" onClick={sendChat}><Icon name="send" size={18} /></button>
            </div>
          </section>
        )}

        {tab === "market" && (
          <section className="section-block">
            <div className="surface-card market-card">
              <div className="surface-head">
                <div>
                  <span className="eyebrow">بازارچه دُردونه</span>
                  <h2>چیزهایی که می‌تونی همین امروز پیدا کنی</h2>
                </div>
                <button type="button" className="ghost-action" onClick={() => changeTab("businesses")}>برگشت</button>
              </div>
              <div className="listing-grid">
                {listings.map((item) => (
                  <article className="listing-card" key={`market-${item.id}`}>
                    <div className="listing-image"><ProgressiveImage src={item.image} alt={item.title} /></div>
                    <div className="listing-info">
                      <h3>{item.title}</h3>
                      <div className="listing-meta"><strong>{item.price}</strong><span>{item.city}</span></div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {nearby && (
          <div className="modal-backdrop" role="presentation" onClick={() => setNearby(null)}>
            <section className="nearby-modal" role="dialog" aria-modal="true" aria-label="نزدیک‌ترین‌ها" onClick={(event) => event.stopPropagation()}>
              <div className="surface-head">
                <div>
                  <span className="eyebrow">بر اساس موقعیت فعلی</span>
                  <h2>نزدیک‌ترین‌ها</h2>
                </div>
                <button className="close-button" type="button" onClick={() => setNearby(null)}><Icon name="close" /></button>
              </div>
              <div className="nearby-filters">
                {["همه", "کسب‌وکارها", "بازارچه", "کمپین‌ها"].map((item) => (
                  <button key={item} className={nearbyFilter === item ? "active" : ""} onClick={() => setNearbyFilter(item)}>{item}</button>
                ))}
              </div>
              <div className="nearby-list">
                {nearby.filter((item) => nearbyFilter === "همه" || item.type === nearbyFilter).map((item) => (
                  <article className="nearby-item" key={item.id}>
                    <ProgressiveImage src={item.image} alt={item.title} />
                    <div><strong>{item.title}</strong><span>{item.meta}</span></div>
                  </article>
                ))}
                {!nearby.filter((item) => nearbyFilter === "همه" || item.type === nearbyFilter).length && (
                  <div className="empty-state">هنوز چیزی اینجا پیدا نکردیم 🌱</div>
                )}
              </div>
            </section>
          </div>
        )}
      </main>

      <nav className="bottom-nav" aria-label="ناوبری اصلی">
        {navItems.map((item) => {
          const active = activeNav === item;
          const prominent = item === "ثبت آگهی";
          return (
            <button
              key={item}
              type="button"
              className={`bottom-item ${active ? "active" : ""} ${prominent ? "prominent" : ""}`}
              onClick={() => {
                setActiveNav(item);
                if (item === "خانه") changeTab("businesses");
                else if (item === "ثبت آگهی") setNotice("فرم ثبت آگهی در مرحله بعدی تکمیل می‌شود.");
                else setNotice(`${item} در مرحله بعدی تکمیل می‌شود.`);
              }}
            >
              {item}
            </button>
          );
        })}
      </nav>

      {notice && <div className="toast" role="status">{notice}</div>}
    </div>
  );
}
