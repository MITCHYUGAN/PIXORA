import { Link } from "react-router-dom";
import { ArrowRight, Moon, Sun } from "lucide-react";
import heroCreativeAsset from "@/assets/hero-creative.png.asset.json";
import testimonialAvatarAsset from "@/assets/testimonial-avatar.jpg.asset.json";
import { useTheme } from "next-themes";

import { StackedLogo } from "@/components/StackedLogo";

const Landing = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const diagonalLineColor = isDark ? "hsl(240 4% 26%" : "hsl(240 4% 80%";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-background border-b border-border px-6">
        <div className="mx-auto flex h-[56px] max-w-[1200px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2 -ml-0.5">
            <StackedLogo size={16} />
            <span className="text-[14px] font-bold text-foreground tracking-[0.08em] uppercase">PIXORA</span>
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#for-creatives" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
              For Creatives
            </a>
            <a href="#for-clients" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
              For Clients
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              title="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            <a href="#waitlist">
              <button className="text-[13px] h-8 px-4 bg-foreground text-background hover:bg-foreground/90 transition-colors">
                Join waitlist
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-16 pb-0 px-6 overflow-hidden">
        <div className="mx-auto max-w-[1200px] relative">
          {/* Two-column hero: text left, cube right */}
          <div className="pt-[52px] pb-16 relative flex">
            {/* Left column — text */}
            <div className="relative z-[3] flex-1 min-w-0 max-w-[540px]">
              <p className="text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
                Built for African creatives · Powered by AI + Blockchain
              </p>
              <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-[500] leading-[1.08] tracking-[-0.04em] text-foreground max-w-[560px]">
                Your work deserves to outlast any platform.
              </h1>
              <p className="mt-5 text-[17px] md:text-[18px] leading-[1.5] text-foreground max-w-[460px]">
                Get paid. Get proof. <span className="text-primary">Build legacy.</span>
              </p>
              <p className="mt-5 text-[14px] leading-[1.7] text-muted-foreground max-w-[440px]">
                Pixora is where photographers, videographers, and designers find clients, deliver work, and get paid — with every agreement, file, and transaction stored permanently on the blockchain and summarized by AI. No disputes. No ghosting. No data loss.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#waitlist">
                  <button className="group relative inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium bg-foreground text-background transition-all duration-200 hover:bg-foreground/90">
                    Join the waitlist
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </a>
                <a href="#how-it-works">
                  <button className="group relative inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium border border-foreground/40 text-foreground transition-all duration-200 hover:bg-foreground hover:text-background hover:border-foreground">
                    See how it works
                  </button>
                </a>
              </div>
            </div>

            {/* Right column — creative hero visual */}
            <div className="hidden md:flex flex-1 items-center justify-center relative z-[1] pointer-events-none" style={{ minWidth: 0 }}>
              <img
                src={heroCreativeAsset.url}
                alt="Camera and film — creative work preserved"
                className="w-full max-w-[520px] h-auto object-contain opacity-95"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-t-xl border border-b-0 border-border bg-card overflow-hidden">
              <div className="flex min-h-[420px]">
                {/* Sidebar mock */}
                <div className="w-[200px] border-r border-border p-3 flex flex-col gap-1 shrink-0">
                  <div className="flex items-center gap-2 px-2 h-8 mb-2">
                    <StackedLogo size={16} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-foreground">PIXORA</span>
                  </div>
                  <div className="h-px bg-border" />
                  {[
                    { label: "Projects", active: true },
                    { label: "Deliveries", active: false },
                    { label: "Contracts", active: false },
                    { label: "Clients", active: false },
                    { label: "Payments", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 px-2 h-8 rounded ${item.active ? "bg-accent" : ""}`}
                    >
                      <div className="h-3 w-3 rounded bg-muted-foreground/15 shrink-0" />
                      <span className={`text-[11px] ${item.active ? "text-foreground" : "text-muted-foreground"}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                  <div className="mt-auto p-2">
                    <div className="h-7 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-[10px] text-primary font-medium">New brief</span>
                    </div>
                  </div>
                </div>

                {/* Main content — deliveries */}
                <div className="flex-1 flex flex-col min-w-0">
                  <div className="flex items-center justify-between px-4 h-10 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-20 rounded-full bg-foreground/15" />
                      <div className="h-2 w-12 rounded-full bg-muted-foreground/10" />
                    </div>
                    <div className="ml-auto flex gap-2">
                      <div className="h-5 w-5 rounded bg-muted-foreground/8" />
                      <div className="h-5 w-5 rounded bg-muted-foreground/8" />
                    </div>
                  </div>
                  <div className="flex-1 p-3 space-y-2">
                    {[
                      { title: "Editorial — Lagos", client: "Acme Studios", status: "Verified", amount: "$2,400", statusColor: "bg-success", statusText: "text-success" },
                      { title: "Brand Identity — Ngozi", client: "Ngozi & Co", status: "Delivered", amount: "$1,800", statusColor: "bg-warning", statusText: "text-warning" },
                      { title: "Music Video — Afrobeat", client: "Pheelz", status: "In brief", amount: "$3,500", statusColor: "bg-primary", statusText: "text-primary" },
                      { title: "Lookbook — Arewa", client: "Arewa Fashion", status: "Paid", amount: "$900", statusColor: "bg-success", statusText: "text-success" },
                      { title: "Product Shoot — Kente", client: "Kente Co", status: "In review", amount: "$1,200", statusColor: "bg-destructive", statusText: "text-destructive" },
                    ].map((row, i) => (
                      <div
                        key={row.title}
                        className={`flex items-center gap-3 px-3 py-2 rounded border ${i === 0 ? "border-border bg-accent/10" : "border-transparent hover:bg-muted/50"} transition-colors`}
                      >
                        <div className="h-10 w-10 rounded bg-muted-foreground/15 shrink-0" />
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <span className="block text-[11px] font-medium text-foreground truncate">{row.title}</span>
                          <span className="block text-[10px] text-muted-foreground truncate">{row.client}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground shrink-0">{row.amount}</span>
                        <span className={`text-[10px] font-medium ${row.statusText} shrink-0 w-14 text-right`}>{row.status}</span>
                        <div className={`h-2 w-2 rounded-full ${row.statusColor} shrink-0`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detail panel */}
                <div className="w-[280px] border-l border-border shrink-0 hidden lg:flex flex-col">
                  <div className="flex items-center justify-between px-4 h-10 border-b border-border">
                    <div className="h-2 w-24 rounded-full bg-foreground/15" />
                    <div className="flex gap-1.5">
                      <div className="h-4 w-4 rounded bg-muted-foreground/10" />
                      <div className="h-4 w-4 rounded bg-muted-foreground/10" />
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="space-y-1">
                      <div className="h-2 w-32 rounded-full bg-foreground/20" />
                      <div className="h-1.5 w-20 rounded-full bg-muted-foreground/10" />
                    </div>
                    <div className="h-px bg-border" />
                    {[
                      { label: "Status", value: "bg-success" },
                      { label: "Client", value: "bg-primary" },
                      { label: "Payment", value: "bg-warning" },
                      { label: "Proof", value: "bg-info" },
                    ].map((prop) => (
                      <div key={prop.label} className="flex items-center justify-between">
                        <span className="text-[11px] text-muted-foreground">{prop.label}</span>
                        <div className={`h-2.5 w-2.5 rounded-full ${prop.value}`} />
                      </div>
                    ))}
                    <div className="h-px bg-border" />
                    <div className="space-y-3 pt-1">
                      <div className="h-1.5 w-14 rounded-full bg-muted-foreground/10" />
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="flex gap-2">
                          <div className="h-5 w-5 rounded-full bg-muted-foreground/10 shrink-0 mt-0.5" />
                          <div className="space-y-1 flex-1">
                            <div className="h-1.5 w-full rounded-full bg-muted-foreground/8" />
                            <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/8" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width divider */}
      <div className="relative z-10 w-full border-t border-border" />

      {/* Features */}
      <section className="relative z-10 pt-24 pb-24 px-6 overflow-hidden">
        <div className="mx-auto max-w-[1200px] relative">
          <p className="text-[13px] uppercase tracking-[0.15em] text-muted-foreground mb-4">
            Built for speed
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-[500] tracking-[-0.03em] text-foreground max-w-[500px] leading-[1.15]">
            Less process.<br />More progress.
          </h2>

          <div className="mt-16 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  title: "Priority ranking",
                  desc: "Four severity levels. SLA deadlines. One glance tells you what to fix next — and when you're out of time.",
                  graphic: "bars",
                },
                {
                  title: "Team workflows",
                  desc: "Assign, reassign, comment, resolve. Every state change leaves a trail. Nothing slips through.",
                  graphic: "flow",
                },
                {
                  title: "Real-time analytics",
                  desc: "Resolution time. Severity trends. Team velocity. Numbers that tell you something — not dashboards for dashboards' sake.",
                  graphic: "chart",
                },
              ].map((feature, i) => (
                <div
                  key={feature.title}
                  className={`p-8 ${i < 2 ? "md:border-r border-border" : ""} ${i > 0 ? "border-t md:border-t-0 border-border" : ""}`}
                >
                  <div className="mb-6 h-32 rounded-lg border border-border bg-card/30 flex items-center justify-center">
                    <div className="space-y-2 w-full px-6">
                      {feature.graphic === "bars" && (
                        <>
                          {[
                            { w: "w-full", color: "bg-destructive" },
                            { w: "w-3/4", color: "bg-warning" },
                            { w: "w-1/2", color: "bg-primary" },
                            { w: "w-1/4", color: "bg-success" },
                          ].map((bar, j) => (
                            <div key={j} className="flex items-center gap-2">
                              <div className={`h-2 ${bar.w} rounded-full ${bar.color}`} />
                            </div>
                          ))}
                        </>
                      )}
                      {feature.graphic === "flow" && (
                        <div className="flex items-center justify-between px-2">
                          {["bg-info", "bg-warning", "bg-success"].map((c, j) => (
                            <div key={j} className="flex flex-col items-center gap-2">
                              <div className={`h-8 w-8 rounded-full ${c}`} />
                              <div className="h-1 w-8 rounded-full bg-muted-foreground/10" />
                            </div>
                          ))}
                        </div>
                      )}
                      {feature.graphic === "chart" && (
                        <div className="flex items-end gap-1.5 h-16 px-2">
                          {[40, 65, 45, 80, 55, 70, 90].map((h, j) => (
                            <div key={j} className="relative flex-1 rounded-t border border-border overflow-hidden" style={{ height: `${h}%` }}>
                              <div className="absolute inset-0" style={{
                                backgroundImage: `repeating-linear-gradient(-45deg, ${diagonalLineColor} / 0.5) 0px, ${diagonalLineColor} / 0.5) 1px, transparent 1px, transparent 5px)`,
                              }} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="text-[15px] font-medium text-foreground mb-2">{feature.title}</h3>
                  <p className="text-[13px] leading-[1.6] text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width divider */}
      <div className="relative z-10 w-full border-t border-border" />

      {/* Social proof */}
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        {/* Angular line shading background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              ${diagonalLineColor} / 0.55) 0px,
              ${diagonalLineColor} / 0.55) 1px,
              transparent 1px,
              transparent 8px
            )`,
            backgroundSize: "100% 100%",
          }}
        />
        <div className="mx-auto max-w-[1200px] relative">
          <div className="border border-border bg-background p-10 max-w-[720px] mx-auto">
            <blockquote className="text-[20px] font-[400] leading-[1.5] tracking-[-0.01em] text-foreground/85">
              "We replaced three tools with one. Mean time to resolution dropped 40% in the first month. The team actually uses it — that's the real win."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <img src={testimonialAvatarAsset.url} alt="Jamie Kim" className="h-8 w-8 rounded-full object-cover" />
              <div>
                <span className="text-[13px] font-medium text-foreground">Jamie Kim</span>
                <span className="text-[13px] text-muted-foreground ml-2">Engineering Lead, Acme Corp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width divider */}
      <div className="relative z-10 w-full border-t border-border" />

      {/* CTA */}
      <section className="relative z-10 pt-32 pb-40 px-6 overflow-hidden">
        <div className="mx-auto max-w-[1200px] text-center relative">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-[500] tracking-[-0.035em] text-foreground leading-[1.1] mx-auto max-w-[560px]">
            Your bugs aren't going to track themselves.
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground max-w-[400px] mx-auto">
            Two minutes to set up. No credit card. No sales call.<br />Just fewer bugs, starting now.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/auth">
              <button
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 text-[15px] font-medium transition-all duration-200 border border-foreground/40 text-foreground hover:bg-foreground hover:text-background hover:border-foreground"
              >
                Start tracking now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10 border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 -ml-0.5">
            <StackedLogo size={16} />
            <span className="text-[12px] font-bold text-foreground uppercase tracking-[0.08em]">PIXORA</span>
          </div>
          <span className="text-[12px] text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
