import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, Check, Menu, Sparkles, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import familyImage from "@/assets/siraj-hero-family.jpg";
import teacherImage from "@/assets/siraj-teacher-session.jpg";
import academyMark from "@/assets/siraj-logo-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سِراج | تعليم القرآن الكريم عن بُعد" },
      {
        name: "description",
        content:
          "رحلة هادئة وميسّرة لتعلّم القرآن الكريم والتجويد مع معلمين متخصصين وباقات مرنة للعائلة.",
      },
      { property: "og:title", content: "سِراج | تعليم القرآن الكريم عن بُعد" },
      {
        property: "og:description",
        content: "تعلّم القرآن الكريم والتجويد مع معلمين متخصصين وخطط تناسب كل أسرة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const packages = [
  {
    name: "الأساسية",
    price: "٣٦٠",
    sessions: "٨ حصص شهريًا",
    pace: "حصتان أسبوعيًا",
    featured: false,
  },
  {
    name: "المميزة",
    price: "٤٥٠",
    sessions: "١٢ حصة شهريًا",
    pace: "٣ حصص أسبوعيًا",
    featured: true,
  },
  {
    name: "الأنسب للعائلة",
    price: "٧٥٠",
    sessions: "٢٠ حصة شهريًا",
    pace: "٥ حصص أسبوعيًا",
    featured: false,
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand-lockup" href="#home" aria-label="سِراج، الرئيسية">
            <img src={academyMark} alt="" className="brand-mark" />
            <span className="brand-copy">
              <span className="brand-name">سِراج</span>
              <span className="brand-caption">أكاديمية القرآن الكريم</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            <a href="#programs">برامجنا</a>
            <a href="#packages">الباقات</a>
            <a href="#families">للعائلات</a>
            <a href="#contact">تواصل معنا</a>
          </nav>

          <div className="header-actions">
            <Button variant="ghost" className="login-button" asChild>
              <a href="/login">تسجيل الدخول</a>
            </Button>
            <Button className="header-cta" asChild>
              <a href="/register">ابدأ رحلتك</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-button"
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="mobile-nav" aria-label="التنقل الرئيسي">
            <a href="#programs" onClick={() => setMenuOpen(false)}>برامجنا</a>
            <a href="#packages" onClick={() => setMenuOpen(false)}>الباقات</a>
            <a href="#families" onClick={() => setMenuOpen(false)}>للعائلات</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</a>
          </nav>
        ) : null}
      </header>

      <section id="home" className="home-hero geometric-background">
        <div className="floating-ornament ornament-one" aria-hidden="true">
          <span className="ornament-rosette" />
        </div>
        <div className="floating-ornament ornament-two" aria-hidden="true">
          <span className="ornament-rosette small" />
        </div>
        <div className="hero-content content-width">
          <div className="hero-copy motion-in">
            <p className="eyebrow"><span className="ornament-dot" /> طريقٌ من نورٍ وعلم</p>
            <h1>
              رحلة تبدأ بآية،
              <span>وتنمو مع القرآن.</span>
            </h1>
            <p className="hero-description">
              تعلّم القرآن الكريم والتجويد في صحبة معلمين متخصصين، بخطوات هادئة وخطة تناسب أسرتك.
            </p>
            <div className="hero-actions">
              <Button className="primary-action" size="lg" asChild>
                <a href="/register">ابدأ رحلتك الآن <ArrowLeft aria-hidden="true" /></a>
              </Button>
              <Button variant="outline" size="lg" className="secondary-action" asChild>
                <a href="#programs">اكتشف برامجنا <BookOpen aria-hidden="true" /></a>
              </Button>
            </div>
            <div className="hero-proof" aria-label="أرقام أكاديمية سراج">
              <div><strong>+٢٠٠٠</strong><span>طالب وطالبة</span></div>
              <span className="proof-divider" aria-hidden="true" />
              <div><strong>+٥٠</strong><span>معلم متخصص</span></div>
              <span className="proof-divider" aria-hidden="true" />
              <div><strong>+٣٠</strong><span>دولة حول العالم</span></div>
            </div>
          </div>

          <div className="hero-art motion-in motion-delay">
            <div className="hero-photo-frame">
              <img
                src={familyImage}
                alt="أم وابنتها تتعلمان القرآن معًا في المنزل"
                width="1408"
                height="1008"
                fetchPriority="high"
              />
              <div className="photo-caption">
                <span className="caption-icon"><BookOpen aria-hidden="true" /></span>
                <span><strong>تعلّم يجمع العائلة</strong><small>في وقتكم ومكانكم</small></span>
              </div>
            </div>
            <div className="hero-seal" aria-hidden="true">
              <span className="seal-rosette" />
              <span className="seal-center">سِراج</span>
              <span className="seal-caption">قرآنٌ يُتلى، وأثرٌ يبقى</span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#programs" aria-label="انتقل إلى البرامج">
          <span />
        </a>
      </section>

      <section id="programs" className="programs-section section-space">
        <div className="content-width">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow"><span className="ornament-dot" /> نُضيء درب التعلّم</p>
            <h2>علمٌ أصيل، بأسلوبٍ يلامس حياتكم</h2>
            <p>برامج متدرجة ترافق المتعلم من بداياته حتى يطمئن قلبه بكتاب الله.</p>
          </div>

          <div className="program-layout">
            <article className="program-story reveal-on-scroll">
              <div className="teacher-photo">
                <img
                  src={teacherImage}
                  alt="معلم قرآن يرافق طفلين في حصة تعليمية عن بُعد"
                  width="1408"
                  height="1008"
                  loading="lazy"
                />
              </div>
              <p className="image-note"><span className="note-ornament">۞</span> مجلسٌ عامرٌ بالتلاوة والتدبّر</p>
            </article>
            <div className="program-list">
              <article className="program-item reveal-on-scroll">
                <span className="program-index">٠١</span>
                <div>
                  <h3>حفظ القرآن الكريم</h3>
                  <p>منهج متدرج يراعي مستوى كل طالب، مع مراجعة ومتابعة مستمرة.</p>
                </div>
                <BookOpen aria-hidden="true" />
              </article>
              <article className="program-item reveal-on-scroll">
                <span className="program-index">٠٢</span>
                <div>
                  <h3>التجويد والتلاوة</h3>
                  <p>تعلّم مخارج الحروف وأحكام التجويد بالتطبيق العملي والتصحيح.</p>
                </div>
                <Sparkles aria-hidden="true" />
              </article>
              <article className="program-item reveal-on-scroll">
                <span className="program-index">٠٣</span>
                <div>
                  <h3>تعلّم يناسب الجميع</h3>
                  <p>حلقات فردية وجداول مرنة للأطفال والكبار أينما كنتم.</p>
                </div>
                <Users aria-hidden="true" />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="packages-section geometric-background section-space">
        <div className="content-width">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow"><span className="ornament-dot" /> لكل رحلةٍ إيقاعها</p>
            <h2>خطوتكم القادمة تبدأ هنا</h2>
            <p>اختروا عدد الحصص الذي يلائم وقتكم؛ جودة التعليم والمتابعة في كل باقة.</p>
          </div>

          <div className="packages-grid">
            {packages.map((item, index) => (
              <article
                className={`package-item reveal-on-scroll${item.featured ? " package-featured" : ""}`}
                key={item.name}
                style={{ "--item-order": index } as React.CSSProperties}
              >
                <div className="package-topline">
                  <span className="package-rosette" aria-hidden="true"><span>۞</span></span>
                  {item.featured ? <span className="package-badge">الأكثر اختيارًا</span> : null}
                </div>
                <h3>{item.name}</h3>
                <p className="package-pace">{item.pace}</p>
                <div className="package-price"><strong>{item.price}</strong><span>ريال <small>/ شهريًا</small></span></div>
                <p className="package-sessions">{item.sessions}</p>
                <ul>
                  <li><Check aria-hidden="true" /> معلمون متخصصون</li>
                  <li><Check aria-hidden="true" /> خطة تعلم ومتابعة</li>
                  <li><Check aria-hidden="true" /> مواعيد مرنة</li>
                </ul>
                <Button variant={item.featured ? "default" : "outline"} className="package-action" asChild>
                  <a href="/register">اختر الباقة</a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="families" className="family-section section-space">
        <div className="content-width family-callout reveal-on-scroll">
          <div className="family-copy">
            <p className="eyebrow"><span className="ornament-dot" /> للبيت كلّه</p>
            <h2>كلما كبرت الأسرة، اتّسع الأثر.</h2>
            <p>اجعلوا القرآن رفيقًا لكل فرد في العائلة. خصومات عائلية خاصة عند تسجيل أكثر من طالب.</p>
            <Button className="primary-action" asChild>
              <a href="/register">سجّلوا عائلتكم <ArrowLeft aria-hidden="true" /></a>
            </Button>
          </div>
          <div className="family-benefits">
            <div><span className="family-rosette" aria-hidden="true">۞</span><span>متابعة فردية لكل طالب</span></div>
            <div><span className="family-rosette" aria-hidden="true">۞</span><span>أوقات مرنة لجميع أفراد الأسرة</span></div>
            <div><span className="family-rosette" aria-hidden="true">۞</span><span>توفير خاص للتسجيل العائلي</span></div>
          </div>
        </div>
      </section>

      <section className="final-callout geometric-dark section-space">
        <div className="final-ornament" aria-hidden="true"><span className="ornament-rosette" /></div>
        <div className="final-copy reveal-on-scroll">
          <p className="eyebrow"><span className="ornament-dot" /> خطوة مباركة</p>
          <h2>ابدأوا اليوم رحلتكم مع القرآن.</h2>
          <p>مكانٌ لكم ولأحبابكم في حلقات سِراج، حيث يُروى القلب بالعلم والسكينة.</p>
          <Button size="lg" className="final-action" asChild>
            <a href="/register">سجّلوا الآن <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="content-width footer-inner">
          <a className="brand-lockup footer-brand" href="#home" aria-label="سِراج، الرئيسية">
            <img src={academyMark} alt="" className="brand-mark" />
            <span className="brand-copy"><span className="brand-name">سِراج</span><span className="brand-caption">أكاديمية القرآن الكريم</span></span>
          </a>
          <p>أكاديمية متخصصة في تعليم القرآن الكريم والتجويد عن بُعد.</p>
          <a className="footer-link" href="mailto:info@sirajacademy.com">تواصل معنا</a>
          <span className="copyright">© ٢٠٢٦ أكاديمية سِراج. جميع الحقوق محفوظة.</span>
        </div>
      </footer>
    </main>
  );
}
