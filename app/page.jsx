import styles from './home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="py-10 flex-1 flex flex-col items-start justify-center gap-6">
      {/* Hero Header */}
      <div className="space-y-2">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 transition-colors hover:text-cyan-600">
          Hello Next.js 
        </h1>
        <p className="text-lg text-slate-600">
          Tailwind CSS & CSS Modules Project Starter Template for Next.js 13 with App Router.
        </p>
      </div>

      
      <div className="w-full max-w-md p-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm space-y-3">
        <h2 className="text-xl font-semibold text-slate-800">
          Styling Demonstration
        </h2>
        <p className={`${styles.title} px-4 py-2 rounded-md bg-white border border-slate-200 text-sm`}>
          This is a <code className="font-mono text-pink-600">home.module.css</code> style
        </p>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex gap-4 items-center">
        <Link 
          href="/about" 
          className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          About Page →
        </Link>
      </div>
    </main>
  );
};

export default Home;