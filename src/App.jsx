import Hero from './components/Hero';
import Objectives from './components/Objectives';
import Roles from './components/Roles';
import Features from './components/Features';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Objectives />
      <Roles />
      <Features />

      <footer className="border-t border-gray-200 mt-10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Community Connect. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#roles" className="hover:text-gray-900">Roles</a>
            <a href="#objectives" className="hover:text-gray-900">Objectives</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
