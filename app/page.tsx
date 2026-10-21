'use client'

import { useState } from 'react'

export default function Page() {
  const [role, setRole] = useState<'owner' | 'staff'>('owner')

  return (
    <main className="min-h-screen bg-[#090a0c] text-white selection:bg-violet-500/30">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative hidden overflow-hidden bg-[#0a0b0e] lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,.12),transparent_38%),radial-gradient(circle_at_78%_82%,rgba(16,185,129,.07),transparent_34%)]" />
          <div className="relative flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#7c3aed] text-sm font-semibold shadow-[0_0_24px_rgba(124,58,237,.28)]">K</div>
            <span className="text-lg font-semibold tracking-tight">Kinetiq</span>
          </div>
          <div className="relative max-w-lg pb-4">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[.22em] text-violet-300/70">Operations, elevated</p>
            <h1 className="max-w-md text-4xl font-semibold leading-[1.08] tracking-[-.04em] text-white xl:text-5xl">The high-performance operating system for premium fitness spaces.</h1>
            <p className="mt-6 max-w-sm text-sm leading-6 text-zinc-500">Run every member, payment, and shift from one precise command center.</p>
          </div>
          <p className="relative text-xs text-zinc-600">© 2024 Kinetiq Systems</p>
        </section>

        <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-sm">
            <div className="mb-8 flex items-center gap-3 lg:hidden"><div className="flex size-9 items-center justify-center rounded-xl bg-[#7c3aed] text-sm font-semibold">K</div><span className="text-lg font-semibold tracking-tight">Kinetiq</span></div>
            <div className="mb-8 flex w-full rounded-lg bg-white/[.03] p-1">
              <button onClick={() => setRole('owner')} className={`flex-1 rounded-md py-2 text-xs font-medium transition ${role === 'owner' ? 'bg-white/[.08] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}>Workspace Owner</button>
              <button onClick={() => setRole('staff')} className={`flex-1 rounded-md py-2 text-xs font-medium transition ${role === 'staff' ? 'bg-white/[.08] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}>Staff Terminal</button>
            </div>
            <div>
              <h2 className="mb-1 text-2xl font-semibold tracking-tight text-white">Welcome back</h2>
              <p className="mb-6 text-sm text-zinc-500">Enter your credentials to access your workspace.</p>
              <form onSubmit={(event) => event.preventDefault()} className="flex flex-col gap-4">
                <label className="flex flex-col gap-2 text-xs font-medium text-zinc-400">Email<input type="email" placeholder="you@yourgym.com" className="h-10 rounded-xl border border-white/[.06] bg-white/[.02] px-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]" /></label>
                <label className="flex flex-col gap-2 text-xs font-medium text-zinc-400">Password<input type="password" placeholder="Enter your password" className="h-10 rounded-xl border border-white/[.06] bg-white/[.02] px-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]" /></label>
                <div className="-mt-1 flex justify-end"><button type="button" className="text-xs text-zinc-400 transition hover:text-white">Forgot password?</button></div>
                <button type="submit" className="mt-1 h-10 rounded-xl bg-[#7c3aed] text-sm font-medium text-white transition hover:bg-[#6d28d9]">Sign in to Workspace</button>
              </form>
              <p className="mt-6 text-center text-xs text-zinc-500">Don&apos;t have an account? <button className="text-zinc-300 transition hover:text-white">Request Access</button></p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
