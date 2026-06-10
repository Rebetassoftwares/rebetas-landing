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

const testimonialProofs = [
  { type: "image", src: "/proof/testimonials/testimonial1.jpg" },
  { type: "image", src: "/proof/testimonials/testimonial2.jpg" },
  { type: "image", src: "/proof/testimonials/testimonial3.jpg" },
  { type: "image", src: "/proof/testimonials/testimonial4.jpg" },
  { type: "image", src: "/proof/testimonials/testimonial5.jpg" },
  { type: "image", src: "/proof/testimonials/testimonial6.jpg" },
  { type: "image", src: "/proof/testimonials/testimonial7.jpg" },
  { type: "image", src: "/proof/testimonials/testimonial8.jpg" },
  { type: "image", src: "/proof/testimonials/testimonial9.jpg" },
];

const resultProofs = [
  { type: "image", src: "/proof/results/result1.jpg" },
  { type: "image", src: "/proof/results/result2.jpg" },
  { type: "image", src: "/proof/results/result3.jpg" },
  { type: "image", src: "/proof/results/result4.jpg" },
  { type: "image", src: "/proof/results/result5.jpg" },
  { type: "image", src: "/proof/results/result6.jpg" },
  { type: "image", src: "/proof/results/result7.jpg" },
  { type: "image", src: "/proof/results/result1.jpg" },
];

function ProofCard({ item }) {
  return (
    <div className="portrait-proof-card">
      {item.type === "video" ? (
        <video controls playsInline preload="metadata">
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img src={item.src} alt="" />
      )}
    </div>
  );
}

function joinWhatsApp(position) {
  trackMeta("Lead", {
    content_name: "Virtual Football Strategy Training",
    button_position: position,
  });

  setTimeout(() => {
    window.location.href = WHATSAPP_GROUP_LINK;
  }, 250);
}

function scrollToTraining() {
  const section = document.getElementById("training-video");
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        FREE VIRTUAL FOOTBALL STRATEGY TRAINING
      </section>

      <section className="hero">
        <div className="hero-inner">
          <div className="host-card">
            <div className="host-avatar">
              <Sparkles size={30} />
            </div>
            <div>
              <p>Hosted by</p>
              <h3>TOP G</h3>
            </div>
          </div>

          <p className="eyebrow">FREE VIRTUAL FOOTBALL STRATEGY TRAINING</p>

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

          <button className="main-cta" onClick={scrollToTraining}>
            WATCH THE FREE TRAINING FIRST
            <ArrowRight size={22} />
          </button>

          <p className="under-cta">
            Watch the training before joining the coaching group.
          </p>
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

          <button className="main-cta mid" onClick={scrollToTraining}>
            WATCH THE FREE TRAINING FIRST
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
            Watch the training video below first. Everything is explained before
            you join the coaching group.
          </p>

          <button className="main-cta mid" onClick={scrollToTraining}>
            WATCH THE FREE TRAINING FIRST
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

          <button className="main-cta mid" onClick={scrollToTraining}>
            WATCH THE FREE TRAINING FIRST
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
              <h3>Watch First</h3>
            </div>

            <p>
              You just need to learn the system and understand how to follow the
              signals correctly.
            </p>

            <button className="main-cta full" onClick={scrollToTraining}>
              WATCH THE FREE TRAINING FIRST
              <MessageCircle size={22} />
            </button>
          </div>
        </div>
      </section>

      <section className="final-section" id="training-video">
        <div className="training-container">
          <p className="section-kicker">WATCH THIS FIRST</p>

          <h2>
            Watch The Training.
            <br />
            Understand The System.
            <br />
            Then Join The Coaching Group.
          </h2>

          <div className="video-proof">
            <iframe
              src="https://player.mediadelivery.net/embed/680559/f5f40706-452b-47c1-a9e2-4a37e6b03719?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
              loading="lazy"
              title="Virtual Football Strategy Training"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
              allowFullScreen
            />
          </div>

          <div className="join-gate-box">
            <h3>Before Joining The Coaching Group</h3>

            <p>
              Please watch the training video first. This group is not for free
              SportyBet codes, sure odds, or random prediction requests.
            </p>

            <button
              className="main-cta full"
              onClick={() => joinWhatsApp("after_training")}
            >
              JOIN THE LIVE COACHING GROUP
              <ArrowRight size={22} />
            </button>
          </div>

          <div className="proof-marquee-section">
            <div className="proof-marquee">
              <div className="proof-track">
                {testimonialProofs.map((item, index) => (
                  <ProofCard item={item} key={`testimonial-${index}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="proof-marquee-section">
            <div className="proof-marquee">
              <div className="proof-track reverse-speed">
                {resultProofs.map((item, index) => (
                  <ProofCard item={item} key={`result-${index}`} />
                ))}
              </div>
            </div>
          </div>

          <p className="under-cta">Limited Access Available.</p>

          <div className="countdown-box">
            <Clock size={19} />
            <span>Group access may close once training starts.</span>
          </div>
        </div>
      </section>

      <footer>Limited Access Available.</footer>

      <button className="sticky-cta" onClick={scrollToTraining}>
        <MessageCircle size={20} />
        WATCH TRAINING FIRST
      </button>
    </main>
  );
}

export default App;
