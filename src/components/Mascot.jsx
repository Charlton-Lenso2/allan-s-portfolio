import { useEffect, useRef, useState } from "react";
import "./Mascot.css";

function Mascot() {
  const [phase, setPhase] = useState("hidden");
  const timersRef = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const later = (fn, ms) => timersRef.current.push(setTimeout(fn, ms));

    later(() => setPhase("enter"), 250);
    later(() => setPhase("wave"), 1600);
    later(() => setPhase("wink"), 3200);
    later(() => setPhase("leaving"), 4300);
    later(() => setPhase("done"), 5000);

    return () => {
      timersRef.current.forEach((id) => clearTimeout(id));
      timersRef.current = [];
    };
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  return (
    <div className={`mascotStage phase-${phase}`} aria-hidden="true">
      <div className="mascotCharWrap">
        <svg className="mascotChar" viewBox="0 0 200 260">
          <path
            d="M60 140 Q40 184 46 224"
            stroke="#dcdcdc"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="90" y="96" width="20" height="18" fill="#dcdcdc" />
          <path
            d="M100 112 C68 116 56 140 56 176 L56 244 L144 244 L144 176 C144 140 132 116 100 112 Z"
            fill="#ffffff"
            stroke="#16161a"
            strokeWidth="3"
          />
          <path
            d="M86 113 Q100 126 114 113"
            stroke="#c9c9c9"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <g className="waveArm">
            <path
              d="M134 138 Q170 116 178 78"
              stroke="#dcdcdc"
              strokeWidth="15"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="180" cy="68" r="12" fill="#ffffff" stroke="#16161a" strokeWidth="3" />
          </g>
          <circle cx="100" cy="64" r="40" fill="#ffffff" stroke="#16161a" strokeWidth="3" />
          <path
            d="M60 62 C60 28 76 16 100 16 C124 16 140 28 140 62 C132 46 122 40 108 42 C96 44 88 34 76 40 C68 44 62 50 60 62 Z"
            fill="#16161a"
          />
          <path
            d="M79 52 Q86 48 93 51"
            stroke="#16161a"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M107 51 Q114 48 121 52"
            stroke="#16161a"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <circle className="eyeL" cx="86" cy="64" r="5" fill="#16161a" />
          <circle className="eyeR" cx="114" cy="64" r="5" fill="#16161a" />
          <rect
            className="eyeLid"
            x="105"
            y="56"
            width="18"
            height="16"
            rx="8"
            fill="#ffffff"
          />
          <path
            className="winkLine"
            d="M106 64 Q114 58 122 64"
            stroke="#16161a"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            className="mouth"
            d="M85 82 Q100 94 115 82"
            stroke="#16161a"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Mascot;