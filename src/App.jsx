import { useEffect } from "react";
import {
  initClarity,
  initMetaPixel,
  saveUtmParams,
  trackMeta,
} from "./tracking";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Flame,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import "./App.css";

const WHATSAPP_GROUP_LINK =
  import.meta.env.VITE_WHATSAPP_GROUP_LINK ||
  "https://chat.whatsapp.com/YOUR_GROUP_LINK";

function joinWhatsApp(position) {
  trackMeta("Lead", {
    content_name: "Free Online Income WhatsApp Training",
    button_position: position,
  });

  setTimeout(() => {
    window.location.href = WHATSAPP_GROUP_LINK;
  }, 250);
}

function App() {
  useEffect(() => {
    saveUtmParams();
    initMetaPixel();
    initClarity();
  }, []);

  return (
    <main className="page">
      <section className="top-alert">
        <Flame size={18} />
        FREE WHATSAPP TRAINING
      </section>

      <section className="hero">
        <div className="hero-inner">
          <div className="host-card">
            <div className="host-avatar">
              <Sparkles size={30} />
            </div>
            <div>
              <p>Hosted by</p>
              <h3>VFL Winners Circle</h3>
            </div>
          </div>

          <p className="eyebrow">FREE WHATSAPP TRAINING</p>

          <h1>
            LEARN HOW PEOPLE ARE MAKING DAILY INCOME ONLINE USING A SIMPLE
            COPY-AND-PASTE SYSTEM FROM THEIR PHONE.
          </h1>

          <p className="subheadline">Students. Workers. Business owners.</p>

          <p className="subheadline">
            People are quietly using this system to grow small money daily
            without needing any special skill.
          </p>

          <p className="subheadline">
            No complicated setup.
            <br />
            No hard learning.
            <br />
            No stress.
          </p>

          <button className="main-cta" onClick={() => joinWhatsApp("hero")}>
            CLICK BELOW TO JOIN THE FREE TRAINING NOW
            <ArrowRight size={22} />
          </button>

          <p className="under-cta">Limited Access Available.</p>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <p className="section-kicker">
            This Is NOT The Normal Sports Betting You Know.
          </p>

          <h2>
            No Waiting 90 Minutes. No Analyzing Teams. No Watching Matches All
            Day.
          </h2>

          <div className="story-card">
            <p>Just:</p>

            <p>
              • Fund your account
              <br />
              • Copy the signal
              <br />
              • Paste it
              <br />
              • Follow the system
              <br />• Grow your capital gradually
            </p>
          </div>

          <button
            className="main-cta mid"
            onClick={() => joinWhatsApp("story")}
          >
            CLICK BELOW TO JOIN THE FREE TRAINING NOW
            <MessageCircle size={22} />
          </button>
        </div>
      </section>

      <section className="media-proof-section">
        <div className="container">
          <p className="section-kicker">
            Some People Treat It Like Forex Trading.
          </p>

          <h2>
            The more disciplined you are, the more your capital can grow over
            time.
          </h2>

          <p className="proof-intro">You Don’t Need To Be A Betting Expert.</p>

          <p className="proof-intro">Even Complete Beginners Can Learn It.</p>

          <p className="proof-intro">
            Everything Will Be Broken Down Step-By-Step Inside The WhatsApp
            Training.
          </p>

          <button
            className="main-cta mid"
            onClick={() => joinWhatsApp("proof_preview")}
          >
            CLICK BELOW TO JOIN THE FREE TRAINING NOW
            <MessageCircle size={22} />
          </button>
        </div>
      </section>

      <section className="discover-section">
        <div className="container">
          <p className="section-kicker">
            Inside The Free Training, You’ll Learn:
          </p>

          <h2>Inside The Free Training, You’ll Learn:</h2>

          <div className="discover-list">
            <div className="discover-item">
              <div className="icon-wrap">
                <Target />
              </div>
              <div>
                <h3>How the system works</h3>
              </div>
            </div>

            <div className="discover-item">
              <div className="icon-wrap">
                <Zap />
              </div>
              <div>
                <h3>How people grow small capital gradually</h3>
              </div>
            </div>

            <div className="discover-item">
              <div className="icon-wrap">
                <ShieldCheck />
              </div>
              <div>
                <h3>How to avoid emotional betting</h3>
              </div>
            </div>

            <div className="discover-item">
              <div className="icon-wrap">
                <TrendingUp />
              </div>
              <div>
                <h3>How to follow structured signals correctly</h3>
              </div>
            </div>

            <div className="discover-item">
              <div className="icon-wrap">
                <Users />
              </div>
              <div>
                <h3>How to compound profit consistently</h3>
              </div>
            </div>

            <div className="discover-item">
              <div className="icon-wrap">
                <Sparkles />
              </div>
              <div>
                <h3>How people are building extra monthly income from it</h3>
              </div>
            </div>
          </div>

          <button
            className="main-cta mid"
            onClick={() => joinWhatsApp("discover")}
          >
            CLICK BELOW TO JOIN THE FREE TRAINING NOW
            <ArrowRight size={22} />
          </button>
        </div>
      </section>

      <section className="proof-style-section">
        <div className="container two-col">
          <div>
            <p className="section-kicker">People Are Quietly Using This To:</p>

            <h2>People Are Quietly Using This To:</h2>

            <div className="check-list">
              {[
                "Build Extra Monthly Income",
                "Grow Small Capital Faster",
                "Make Money Daily From Their Phone",
                "Create Another Stream Of Income",
                "Scale Gradually Over Time",
              ].map((item) => (
                <div key={item}>
                  <CheckCircle2 />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="result-card">
            <div className="result-top">
              <span>You Don’t Need To Be Rich To Start.</span>
              <b>FREE</b>
            </div>

            <div className="pick-box">
              <span>You Don’t Need Any Special Skill.</span>
              <h3>Join The Group</h3>
            </div>

            <p>
              You Just Need To Learn The System And Follow The Signals
              Correctly.
            </p>

            <button
              className="main-cta full"
              onClick={() => joinWhatsApp("preview")}
            >
              CLICK BELOW TO JOIN THE FREE TRAINING NOW
              <MessageCircle size={22} />
            </button>
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="container">
          <p className="section-kicker">REAL PROOF</p>

          <h2>
            Real Screenshots.
            <br />
            Real Testimonials.
            <br />
            Real Results.
          </h2>

          <div className="proof-gallery">
            <div className="proof-image">
              <img src="/proof/proof1.jpg" alt="Proof 1" />
            </div>

            <div className="proof-image">
              <img src="/proof/proof2.jpg" alt="Proof 2" />
            </div>

            <div className="proof-image">
              <img src="/proof/proof3.jpg" alt="Proof 3" />
            </div>

            <div className="proof-image">
              <img src="/proof/proof4.jpg" alt="Proof 4" />
            </div>
          </div>

          <div className="video-proof">
            <video controls>
              <source src="/proof/video1.mp4" type="video/mp4" />
            </video>
          </div>

          <button className="main-cta" onClick={() => joinWhatsApp("final")}>
            CLICK BELOW TO JOIN THE FREE TRAINING NOW
            <ArrowRight size={22} />
          </button>

          <p className="under-cta">Limited Access Available.</p>

          <div className="countdown-box">
            <Clock size={19} />
            <span>Group access may close once training starts.</span>
          </div>
        </div>
      </section>

      <footer>Limited Access Available.</footer>

      <button className="sticky-cta" onClick={() => joinWhatsApp("sticky")}>
        <MessageCircle size={20} />
        REGISTER NOW
      </button>
    </main>
  );
}

export default App;
