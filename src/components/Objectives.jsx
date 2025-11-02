import { Users, Newspaper, Shield, Image as ImageIcon, Bell } from 'lucide-react';

const items = [
  {
    icon: Users,
    title: 'Keep members connected',
    desc: 'Directory, profiles, and ways to connect while respecting privacy.',
  },
  {
    icon: Newspaper,
    title: 'Share news & updates',
    desc: 'Announcements, invitations, and timely information for everyone.',
  },
  {
    icon: Shield,
    title: 'Secure member directory',
    desc: 'Role-based access and privacy controls to protect sensitive data.',
  },
  {
    icon: ImageIcon,
    title: 'Event photos & media',
    desc: 'Albums and galleries for memories, optimized for speed.',
  },
  {
    icon: Bell,
    title: 'Real-time notifications',
    desc: 'Instant push notifications for events, updates, and media uploads.',
  },
];

export default function Objectives() {
  return (
    <section id="objectives" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Primary Objectives</h2>
          <p className="mt-2 text-gray-600">
            A secure, modern platform designed to keep your community active and informed.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
