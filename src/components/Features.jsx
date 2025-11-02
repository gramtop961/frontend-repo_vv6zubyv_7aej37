import { Lock, Calendar, Image as ImageIcon, Bell, Megaphone, Database, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Authentication & Privacy',
    points: [
      'Email/phone login with OTP',
      'Role-based access control',
      'Privacy controls for member data',
    ],
  },
  {
    icon: Database,
    title: 'Directory & Profiles',
    points: [
      'Search, filter, and profile pages',
      'Admin approval workflow (optional)',
      'Exportable member data',
    ],
  },
  {
    icon: Calendar,
    title: 'Events & Invitations',
    points: [
      'Create events with RSVP',
      'Invite individuals or all members',
      'Calendar views for upcoming and past',
    ],
  },
  {
    icon: ImageIcon,
    title: 'Gallery / Media',
    points: [
      'Albums per event',
      'Upload photos & videos',
      'Optimized images for speed',
    ],
  },
  {
    icon: Bell,
    title: 'Notifications',
    points: [
      'Real-time push alerts',
      'Target individuals, groups, or all',
      'Announcements and gallery updates',
    ],
  },
  {
    icon: Megaphone,
    title: 'Announcements',
    points: [
      'News feed with filters',
      'Optional likes and comments',
      'Archive older posts',
    ],
  },
  {
    icon: Smartphone,
    title: 'Platforms & Admin',
    points: [
      'iOS, Android apps + Web dashboard',
      'Analytics and role management',
      'Backups and restore options',
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Key Features</h2>
          <p className="mt-2 text-gray-600">Everything you need to run a secure, engaging community hub.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, points }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-200 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {points.map((p) => (
                  <li key={p} className="pl-2">• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
