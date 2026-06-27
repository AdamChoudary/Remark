'use client';

import { useScrollContext } from '../ScrollProvider';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const { progress } = useScrollContext();
  return <div className="scroll-progress" style={{ width: `${progress * 100}%` }} aria-hidden />;
}
