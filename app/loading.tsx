import Image from 'next/image';

import logoMark from '../images/logo1-360.webp';

export default function Loading() {
  return (
    <div className="premium-hero fixed inset-0 z-50 flex items-center justify-center">
      <div className="glass-surface flex flex-col items-center gap-4 rounded-[2rem] p-8 text-white">
        <Image src={logoMark} alt="D-LABS logo" className="h-20 w-20 rounded-full object-cover" priority />
        <p className="text-sm uppercase tracking-[0.24em] text-white/80">Loading</p>
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/20">
          <span className="block h-full w-1/2 animate-[shimmer_1.6s_linear_infinite] bg-gradient-to-r from-[#6BEA32] via-white to-[#18A94B]" />
        </div>
      </div>
    </div>
  );
}
