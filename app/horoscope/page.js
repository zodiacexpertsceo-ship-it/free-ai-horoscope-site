'use client';
import { useMemo, useState } from 'react';
import { signs, dailyCopy } from '@/lib/astroData';

const tabs = ['Daily', 'Love', 'Career', 'Money', 'Health', 'Weekly', 'Monthly'];

export default function HoroscopePage() {
  const [sign, setSign] = useState('Aries');
  const [tab, setTab] = useState('Daily');
  const current = signs.find(s => s.name === sign) || signs[0];
  const reading = useMemo(() => `${sign} ${tab} Horoscope: ${dailyCopy[tab]} Your ${current.element.toLowerCase()} element gives this reading a stronger focus on ${current.element === 'Fire' ? 'action and confidence' : current.element === 'Earth' ? 'stability and practical choices' : current.element === 'Air' ? 'communication and ideas' : 'intuition and feelings'}.`, [sign, tab, current]);
  return <main className="section"><div className="container"><div className="sectionTitle"><span className="kicker">Horoscope</span><h2>Choose Your Zodiac Sign</h2><p>Daily, love, career, money, health, weekly, and monthly reading sections.</p></div><div className="formShell"><div className="formCard"><label>Zodiac Sign</label><select value={sign} onChange={e=>setSign(e.target.value)}>{signs.map(s=><option key={s.name}>{s.name}</option>)}</select><div className="tabs">{tabs.map(t=><button key={t} className={`tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>)}</div><div className="notice">Tip: Keep this page updated daily to bring visitors back again.</div></div><div className="resultBox"><h3>{current.symbol} {sign} {tab} Reading</h3><p>{reading}</p><div className="grid grid2" style={{marginTop:18}}><div className="resultCard"><h3>Lucky Focus</h3><p>Patience, clear timing, and simple choices.</p></div><div className="resultCard"><h3>Best Area</h3><p>{tab === 'Love' ? 'Relationships and communication.' : tab === 'Career' ? 'Work and planning.' : 'Personal balance and clarity.'}</p></div></div></div></div></div></main>;
}
