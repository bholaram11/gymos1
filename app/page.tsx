'use client'

import { useState } from 'react'
import { LayoutDashboard, Users, Wallet, Settings } from 'lucide-react'
import { OverviewView } from '@/components/overview-view'
import { MembersView } from '@/components/members-view'
import { StaffView } from '@/components/staff-view'
import { CashbookView } from '@/components/cashbook-view'

type Tab = 'Overview' | 'Cashbook' | 'Members' | 'Staff'

export default function Page(){const [tab,setTab]=useState<Tab>('Overview');const nav:[Tab,typeof LayoutDashboard,string,string?][]=[['Overview',LayoutDashboard,'Overview'],['Cashbook',Wallet,'Cashbook'],['Members',Users,'Members','1,284'],['Staff',Users,'Staff','8']];return <main className="flex h-screen w-screen overflow-hidden bg-[#090a0c] text-white"><aside className="flex w-60 shrink-0 flex-col justify-between border-r border-white/[.06] bg-[#090a0c] p-4"><div><div className="flex items-center gap-2 px-2 py-2"><div className="flex size-8 items-center justify-center rounded-lg bg-[#7c3aed] text-sm font-bold">K</div><span className="font-semibold">Kinetiq</span><span className="rounded-full bg-white/[.05] px-2 py-0.5 text-[9px] text-zinc-400">Admin</span></div><nav className="mt-8 flex flex-col gap-1">{nav.map(([key,Icon,label,badge])=><button key={key} onClick={()=>setTab(key)} className={`nav-item ${tab===key?'active':''}`}><Icon/>{label}{badge&&<span>{badge}</span>}</button>)}</nav><button className="nav-item mt-1"><Settings/>Settings</button></div><div className="rounded-2xl border border-white/[.07] bg-[#101214] p-3.5"><p className="text-xs font-medium">Vikram Rathore</p><p className="mt-1 text-[10px] text-zinc-500">Owner</p><button onClick={()=>setTab('Cashbook')} className="mt-3 h-9 w-full rounded-xl border border-white/[.1] bg-white/[.04] text-xs text-zinc-200">⇄ Open Reception POS</button></div></aside><section className="flex min-w-0 flex-1 flex-col">{tab==='Overview'?<OverviewView/>:tab==='Members'?<MembersView/>:tab==='Staff'?<StaffView/>:<CashbookView/>}</section></main>}
