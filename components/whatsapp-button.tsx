'use client';

import { useEffect, useRef, useState } from 'react';

import { site } from '@/data/site';
import { cn } from '@/lib/utils';

const POPUP_DELAY = 2500;
const MESSAGE_INTERVAL = 3000;
const POPUP_AUTO_DISMISS = 10000;

const popupMessages = [
  "Looking for a website? We're online 👋",
  'Fast delivery • Clean design • SEO-ready 🚀',
  'Chat with D-LABS — typically replies in minutes ⚡',
];

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi D-LABS! I'm interested in getting a website. Can we talk?"
)}`;

export function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const hasShownRef = useRef(false);

  useEffect(() => {
    // First show the button after a short delay
    const buttonTimer = setTimeout(() => setShowButton(true), 500);

    // Check if we already showed the popup in this session
    if (sessionStorage.getItem('dlabs-whatsapp-popup-shown') === '1') {
      return () => clearTimeout(buttonTimer);
    }

    // Show popup after delay
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem('dlabs-whatsapp-popup-shown', '1');
      hasShownRef.current = true;
    }, POPUP_DELAY);

    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  // Cycle through messages while popup is visible
  useEffect(() => {
    if (!showPopup) return;

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % popupMessages.length);
    }, MESSAGE_INTERVAL);

    // Auto-dismiss popup after it's been shown long enough
    const dismissTimer = setTimeout(() => setShowPopup(false), POPUP_AUTO_DISMISS);

    return () => {
      clearInterval(interval);
      clearTimeout(dismissTimer);
    };
  }, [showPopup]);

  function handleClick() {
    setShowPopup(false);
    sessionStorage.setItem('dlabs-whatsapp-popup-shown', '1');
    window.open(whatsappHref, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {/* Popup bubble */}
      <div
        className={cn(
          'w-[19rem] max-w-[calc(100vw-3rem)] origin-bottom-right rounded-3xl rounded-br-md border border-white/10 bg-[#0d1520] p-4 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.45)] transition-all duration-500',
          showPopup && showButton
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-3 scale-95 opacity-0'
        )}
        role="dialog"
        aria-label="WhatsApp chat invitation"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15">
            <svg viewBox="0 0 32 32" className="h-5 w-5 fill-[#25D366]" aria-hidden="true">
              <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.72 6.4L3.2 28.8l6.58-1.72a12.74 12.74 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.81-12.8zm0 23.47c-1.91 0-3.78-.51-5.41-1.48l-.39-.23-4.06 1.06 1.08-3.96-.25-.4a10.63 10.63 0 0 1-1.64-5.66c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.54c0 5.88-4.78 10.64-10.66 10.64zm5.84-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.56-1.58a9.63 9.63 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.64-.52-.55-.72-.56h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.25 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-white">D-LABS Support</p>
                <p className="text-xs text-[#25D366]">● Typically replies within minutes</p>
              </div>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
                aria-label="Close WhatsApp popup"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p key={messageIndex} className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-sm leading-6 text-white/85">
              {popupMessages[messageIndex]}
            </p>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          'group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#1fb959] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          showButton ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-90 opacity-0'
        )}
        aria-label="Chat with D-LABS on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" style={{ animationDuration: '2.5s' }} aria-hidden="true" />

        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.72 6.4L3.2 28.8l6.58-1.72a12.74 12.74 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.81-12.8zm0 23.47c-1.91 0-3.78-.51-5.41-1.48l-.39-.23-4.06 1.06 1.08-3.96-.25-.4a10.63 10.63 0 0 1-1.64-5.66c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.54c0 5.88-4.78 10.64-10.66 10.64zm5.84-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.56-1.58a9.63 9.63 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.64-.52-.55-.72-.56h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.25 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
        </svg>

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full border border-white/10 bg-[#0d1520] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          Chat with us
        </span>
      </button>
    </div>
  );
}
