import { Users, Settings, Megaphone, Image as ImageIcon, Calendar, MessageSquare, Shield } from 'lucide-react';

export default function Roles() {
  return (
    <section id="roles" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">User Roles</h2>
          <p className="mt-2 text-gray-600">Clear access levels for members and administrators.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Member</h3>
                <p className="text-sm text-gray-600">General user experience</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><Calendar className="h-4 w-4 mt-0.5 text-indigo-600" /> View events, announcements, and photos</li>
              <li className="flex items-start gap-2"><Megaphone className="h-4 w-4 mt-0.5 text-indigo-600" /> Receive notifications and invitations</li>
              <li className="flex items-start gap-2"><Settings className="h-4 w-4 mt-0.5 text-indigo-600" /> Update personal profile and privacy</li>
              <li className="flex items-start gap-2"><MessageSquare className="h-4 w-4 mt-0.5 text-indigo-600" /> Connect with members (if enabled)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Admin</h3>
                <p className="text-sm text-gray-600">Management & moderation</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><Users className="h-4 w-4 mt-0.5 text-emerald-700" /> Manage users (add, approve, edit, remove)</li>
              <li className="flex items-start gap-2"><Calendar className="h-4 w-4 mt-0.5 text-emerald-700" /> Create events & invitations</li>
              <li className="flex items-start gap-2"><Megaphone className="h-4 w-4 mt-0.5 text-emerald-700" /> Send push notifications</li>
              <li className="flex items-start gap-2"><ImageIcon className="h-4 w-4 mt-0.5 text-emerald-700" /> Manage gallery uploads</li>
              <li className="flex items-start gap-2"><Settings className="h-4 w-4 mt-0.5 text-emerald-700" /> Control visibility & access rights</li>
              <li className="flex items-start gap-2"><MessageSquare className="h-4 w-4 mt-0.5 text-emerald-700" /> Export reports and data</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
