'use client'

import { Search, Download, MessageCircle, UserRound, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'

const members = [
  ['AM','Aarav Mehta','#M-1042','+91 98290 44120','Annual Pro Plan','By Riya S.','26 Oct 2027','₹8,500 Paid','green'],
  ['KV','Kunal Verma','#M-1039','+91 98112 33019','Quarterly + PT','₹1.5k Disc • Riya','26 Jan 2027','₹4,500 Paid','amber'],
  ['AM','Arjun Mehta','#M-0984','+91 98201 11209','Quarterly Pro','🔒 Gate Locked','Overdue 4d','₹4,500 Due','red'],
  ['SK','Simran Kaur','#M-1012','+91 99280 11204','6M Transformation','By Vikram R.','26 Apr 2027','₹5,500 Paid','purple'],
  ['PS','Priya Sharma','#M-0891','+91 98114 55201','Annual Elite','By Riya S.','Tomorrow','₹12,000 Due','amber'],
  ['RJ','Rohan Joshi','#M-1008','+91 94140 88210','Monthly Renew','By Riya S.','26 Nov 2026','₹2,400 Paid','green'],
  ['DC','Deepak Chahar','#M-0977','+91 97821 55401','Monthly Renew','By Riya S.','26 Nov 2026','₹2,000 Paid','green'],
  ['AT','Ankit Tiwari','#M-0943','+91 96102 77412','Personal Training','Partial Balance','14 Nov 2026','₹1,800 Due','red'],
] as const

const tones = {green:'bg-emerald-500/15 text-emerald-400', amber:'bg-amber-500/15 text-amber-400', red:'bg-rose-500/15 text-rose-400', purple:'bg-violet-500/15 text-violet-300'}

export function MembersView(){
  const [query,setQuery]=useState('')
  const visible=useMemo(()=>members.filter(m=>m.join(' ').toLowerCase().includes(query.toLowerCase())),[query])
  return <>
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/[.06] px-8">
      <h1 className="text-lg font-semibold">Members &amp; Subscriptions <span className="ml-3 rounded-lg border border-white/[.1] bg-white/[.04] px-3 py-2 text-sm font-normal text-zinc-300">1,284 Total</span></h1>
      <div className="flex items-center gap-3"><button className="flex h-9 items-center gap-2 rounded-full border border-white/[.1] bg-white/[.03] px-4 text-xs text-zinc-200"><Download size={15}/>Export CSV</button><button className="h-9 rounded-full border border-amber-500/30 bg-amber-500/[.08] px-4 text-xs font-medium text-amber-300">◯ Remind All Overdue (19)</button><button className="flex h-9 items-center gap-2 rounded-full bg-[#7c3aed] px-5 text-xs font-medium text-white"><span className="text-base">＋</span>Enroll Member</button></div>
    </header>
    <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-5 sm:p-8">
      <div className="grid shrink-0 grid-cols-4 gap-4">{[['TOTAL ENROLLED','1,284','↗ +42 joined this month','Active Base','text-white'],['ACTIVE ON FLOOR','1,227','95.5% Active Retention · 64 PT','● Turnstile Armed','text-emerald-400'],['EXPIRING IN 7 DAYS','₹1,42,000','38 Members in renewal pipeline','38 Renewals','text-white'],['OVERDUE / UNPAID DUES','₹48,500','14 Overdue Renewals · 5 Partial','19 Access Locked','text-rose-400']].map(c=><div key={c[0]} className="rounded-2xl border border-white/[.08] bg-[#101214] p-5"><div className="flex items-center justify-between text-[10px] tracking-wider text-zinc-400"><span>{c[0]}</span><span className="rounded bg-white/[.06] px-2 py-1 text-zinc-300">{c[3]}</span></div><p className={`mt-2 text-3xl font-semibold tabular-nums tracking-tight ${c[4]}`}>{c[1]}</p><p className="mt-2 text-xs text-zinc-400">{c[2]}</p></div>)}</div>
      <div className="flex shrink-0 items-center gap-3"><div className="relative flex-1 max-w-[520px]"><Search className="absolute left-4 top-2.5 size-4 text-zinc-500"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Member Name, #M-ID, or Phone..." className="h-10 w-full rounded-xl border border-white/[.1] bg-[#101214] pl-11 pr-4 text-sm text-white outline-none focus:border-[#7c3aed]"/></div><div className="ml-auto flex items-center gap-1 text-sm"><span className="rounded-full bg-white/[.1] px-4 py-2 font-medium">All · 1,284</span><span className="px-3 text-zinc-400">Active · 1,227</span><span className="rounded-full border border-rose-500/30 bg-rose-500/[.08] px-3 py-2 text-rose-300">Overdue Dues · 19</span><span className="rounded-full border border-amber-500/30 bg-amber-500/[.08] px-3 py-2 text-amber-300">⚠ Override Flags · 1</span></div></div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/[.08] bg-[#101214]"><div className="grid grid-cols-[1.55fr_1.15fr_1.6fr_.8fr_1fr_1fr] gap-4 border-b border-white/[.06] px-6 py-3 text-[10px] uppercase tracking-wider text-zinc-400"><span>Member &amp; ID</span><span>Mobile</span><span>Plan &amp; Desk Audit</span><span>Expiry</span><span>Billing Status</span><span className="text-right">Quick Actions</span></div><div className="divide-y divide-white/[.05]">{visible.map(m=><div key={m[2]} className="grid grid-cols-[1.55fr_1.15fr_1.6fr_.8fr_1fr_1fr] items-center gap-4 px-6 py-3 text-sm"><div className="flex items-center gap-3"><span className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold ${tones[m[8]]}`}>{m[0]}</span><span className="font-medium text-white">{m[1]}</span><span className="text-xs text-zinc-500">{m[2]}</span></div><span className="font-mono text-xs text-zinc-200">{m[3]}</span><div><span className="text-sm text-zinc-100">{m[4]}</span><span className={`ml-1 rounded px-2 py-1 text-[11px] ${m[8]==='amber'?'bg-amber-500/15 text-amber-300':m[8]==='purple'?'bg-violet-500/15 text-violet-300':'bg-white/[.06] text-zinc-400'}`}>{m[5]}</span></div><span className={m[6].startsWith('Overdue')?'font-semibold text-rose-400':m[6]==='Tomorrow'?'font-semibold text-amber-400':'text-zinc-200'}>{m[6]}</span><span className={`w-fit rounded border px-2 py-1 text-xs ${m[7].includes('Due')?'border-rose-500/30 bg-rose-500/10 text-rose-300':'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'}`}>{m[7]}</span><div className="flex justify-end gap-2"><button className="flex h-8 items-center gap-1 rounded-lg border border-white/[.1] bg-white/[.03] px-3 text-xs text-zinc-200"><MessageCircle size={14}/>WhatsApp</button><button className="h-8 rounded-lg border border-white/[.1] bg-white/[.04] px-3 text-xs font-medium text-white">Manage</button></div></div>)}</div><div className="flex items-center justify-between border-t border-white/[.06] px-6 py-3 text-sm text-zinc-400"><span>Showing 1–8 of 1,284 members</span><div><button className="h-8 rounded-lg border border-white/[.08] bg-white/[.04] px-3">‹ Prev</button><button className="ml-2 h-8 rounded-lg border border-white/[.08] bg-white/[.04] px-3 text-white">Next ›</button></div></div></div>
    </div>
  </>
}
