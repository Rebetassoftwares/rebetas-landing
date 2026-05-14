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
    content_name: "Free Virtual Football WhatsApp Training",
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
        HAPPENING SOON — Free WhatsApp Training. Join now before access closes.
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

          <p className="eyebrow">Free Private WhatsApp Training</p>

          <h1>
            LEARN HOW TO MAKE ₦1 MILLION MONTHLY FROM VIRTUAL FOOTBALL BETTING.
          </h1>

          <p className="subheadline">
            Stop losing money on sports betting and start using a faster
            strategy smart people are using to grow small capital daily.
          </p>

          <button className="main-cta" onClick={() => joinWhatsApp("hero")}>
            CLICK HERE TO JOIN THE FREE TRAINING
            <ArrowRight size={22} />
          </button>

          <p className="under-cta">100% Free Access — No Payment Required</p>

          <div className="countdown-box">
            <Clock size={19} />
            <span>Group access may close once the training starts.</span>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <p className="section-kicker">Read this carefully</p>

          <h2>
            Sports betting is keeping many people broke because they keep
            waiting, guessing and chasing losses.
          </h2>

          <div className="story-card">
            <p>
              Students, workers and business owners are now using virtual
              football as a faster income strategy because results come quicker
              and capital can be grown with timing, discipline and structured
              signals.
            </p>

            <p>
              This is not about betting anyhow. This is about learning how to
              approach virtual football like capital growth — almost like forex
              trading, but faster to understand.
            </p>

            <p className="bold-line">
              The full strategy, examples and signal access will be explained
              inside the WhatsApp group.
            </p>
          </div>

          <button
            className="main-cta mid"
            onClick={() => joinWhatsApp("story")}
          >
            JOIN THE WHATSAPP TRAINING NOW
            <MessageCircle size={22} />
          </button>
        </div>
      </section>

      <section className="media-proof-section">
        <div className="container">
          <p className="section-kicker">Proof preview</p>

          <h2>
            Real screenshots, results and testimonies will be shown inside.
          </h2>

          <p className="proof-intro">
            I won’t post everything publicly here. Join the WhatsApp group to
            see the full breakdown, examples and explanations.
          </p>

          <div className="proof-grid">
            <div className="proof-box video-box">
              <span>Video Preview</span>
              <h3>Private Training Clip</h3>
              <p>Full video will be shared inside WhatsApp.</p>
            </div>

            <div className="proof-box">
              <span>Screenshot Preview</span>
              <h3>Capital Growth Breakdown</h3>
              <p>Examples will be explained inside the group.</p>
            </div>

            <div className="proof-box">
              <span>Testimonial Preview</span>
              <h3>Member Results</h3>
              <p>Real comments and screenshots will be shown inside.</p>
            </div>
          </div>

          <button
            className="main-cta mid"
            onClick={() => joinWhatsApp("proof_preview")}
          >
            JOIN TO SEE THE PROOF INSIDE
            <MessageCircle size={22} />
          </button>
        </div>
      </section>

      <section className="discover-section">
        <div className="container">
          <p className="section-kicker">What you’ll learn</p>

          <h2>Here’s exactly what will be revealed inside:</h2>

          <div className="discover-list">
            <div className="discover-item">
              <div className="icon-wrap">
                <Target />
              </div>
              <div>
                <h3>How to stop losing money on sports betting</h3>
                <p>
                  Why normal sports betting keeps many people waiting, guessing
                  and losing money emotionally.
                </p>
              </div>
            </div>

            <div className="discover-item">
              <div className="icon-wrap">
                <Zap />
              </div>
              <div>
                <h3>How to grow small capital through virtual football</h3>
                <p>
                  The faster strategy for using timing, patience and repeated
                  opportunities to build capital gradually.
                </p>
              </div>
            </div>

            <div className="discover-item">
              <div className="icon-wrap">
                <TrendingUp />
              </div>
              <div>
                <h3>How people target ₦1 million monthly</h3>
                <p>
                  The capital growth approach, compounding mindset and signal
                  structure will be explained inside the group.
                </p>
              </div>
            </div>

            <div className="discover-item">
              <div className="icon-wrap">
                <ShieldCheck />
              </div>
              <div>
                <h3>How structured signals reduce random guessing</h3>
                <p>
                  Learn how signal-following helps you avoid blind entries,
                  emotional staking and desperate chasing.
                </p>
              </div>
            </div>

            <div className="discover-item">
              <div className="icon-wrap">
                <Users />
              </div>
              <div>
                <h3>How to access the private signal structure</h3>
                <p>
                  The WhatsApp training will show you how the strategy works and
                  how to follow it with discipline.
                </p>
              </div>
            </div>
          </div>

          <button
            className="main-cta mid"
            onClick={() => joinWhatsApp("discover")}
          >
            CLICK TO JOIN THE FREE TRAINING
            <ArrowRight size={22} />
          </button>

          <p className="scarcity">
            Limited access available. Group may be locked once training starts.
          </p>
        </div>
      </section>

      <section className="proof-style-section">
        <div className="container two-col">
          <div>
            <p className="section-kicker">Private access</p>

            <h2>
              This is not random gambling. This is capital growth strategy.
            </h2>

            <p>
              You will learn timing, discipline, signal-following and how to
              compound small capital responsibly through virtual football.
            </p>

            <div className="check-list">
              {[
                "No payment before joining",
                "No long boring lecture",
                "No fake lifestyle promises",
                "Simple WhatsApp breakdown",
                "Private strategy explanation inside the group",
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
              <span>Private Training Access</span>
              <b>FREE</b>
            </div>

            <div className="pick-box">
              <span>What happens next?</span>
              <h3>Join The Group</h3>
            </div>

            <p>
              The actual strategy, proof, examples and signal explanation will
              only be shared inside the WhatsApp group.
            </p>

            <button
              className="main-cta full"
              onClick={() => joinWhatsApp("preview")}
            >
              ENTER THE GROUP
              <MessageCircle size={22} />
            </button>
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="container">
          <p className="section-kicker">Final reminder</p>

          <h2>Join the free WhatsApp group now before the training starts.</h2>

          <p>
            The strategy breakdown, examples, proof and signal access will be
            explained inside the group.
          </p>

          <button className="main-cta" onClick={() => joinWhatsApp("final")}>
            CLICK HERE TO JOIN NOW
            <ArrowRight size={22} />
          </button>

          <p className="under-cta">Free Access — WhatsApp Only</p>
        </div>
      </section>

      <footer>
        Betting involves risk. This training is for education, discipline and
        virtual football strategy awareness. Only stake what you can afford to
        lose.
      </footer>

      <button className="sticky-cta" onClick={() => joinWhatsApp("sticky")}>
        <MessageCircle size={20} />
        REGISTER NOW
      </button>
    </main>
  );
}

export default App;
