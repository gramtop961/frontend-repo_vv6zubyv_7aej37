import { Rocket, Users, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-600/90 to-indigo-700 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Community Connect</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-white/90">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#roles" className="hover:text-white">Roles</a>
          <a href="#objectives" className="hover:text-white">Objectives</a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20 mb-4">
              <Users className="h-3.5 w-3.5" />
              Built for vibrant communities
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Keep your community connected, informed, and engaged
            </h1>
            <p className="mt-4 text-white/90 text-base sm:text-lg">
              A cross‑platform experience for members and admins: announcements, events, gallery, secure directory, and real‑time notifications.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md bg-white text-indigo-700 px-5 py-3 font-semibold shadow-sm hover:bg-white/90"
              >
                Explore Features
              </a>
              <a
                href="#roles"
                className="inline-flex items-center justify-center rounded-md bg-transparent ring-1 ring-white/40 text-white px-5 py-3 font-semibold hover:bg-white/10"
              >
                See Roles & Access
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                <span className="text-sm">iOS • Android • Web Dashboard</span>
              </div>
            </div>
          </div>

          <div>
            <div className="relative mx-auto aspect-[4/3] max-w-xl rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent" aria-hidden />
              <div className="relative grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="h-24 rounded-xl bg-white/10 ring-1 ring-white/10"
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto h-16 w-5/6 rounded-full bg-black/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
