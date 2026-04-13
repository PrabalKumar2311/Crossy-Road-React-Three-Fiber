import { useState, useRef, useEffect } from "react";
import useStore from "../store/game";
import { FaInfo, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./info.css";

export default function Info() {
  const score = useStore((state) => state.score);
  const [open, setOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  setTimeout(() => {
    setShowInfo(true);
  }, 2000);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && e.target instanceof Node && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (score !== 0) return null;

  return (
    <div id="info-wrapper" ref={wrapperRef}>
      {/* INFO BUTTON */}
      {showInfo && (
        <div id="info-btn" onClick={() => setOpen(!open)}>
          <FaInfo />
        </div>
      )}

      {/* SIDE OVERLAY */}
      {open && (
        <div id="info-popover">
          <p className="made-by">
            Made by <br />
            <span>Prabal Kumar</span>
          </p>

          <div className="divider" />

          <div className="socials">
            <a href="https://www.linkedin.com/in/prabal-kumar-70110b201/" target="_blank">
              <BsLinkedin />
            </a>

            <a href="https://github.com/PrabalKumar2311" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}