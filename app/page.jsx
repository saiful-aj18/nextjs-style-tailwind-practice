import styles from './home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="py-10 flex-1 flex flex-col items-start justify-center gap-6">
      {/* Hero Header */}
      <div className="space-y-2">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors hover:text-cyan-600 dark:hover:text-cyan-400">
          Hello Next.js 
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Tailwind CSS & CSS Modules Project Starter Template for Next.js with App Router.
        </p>
      </div>

      {/* Styling Demonstration Card */}
      <div className="w-full max-w-md p-6 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-sm space-y-3">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          Styling Demonstration
        </h2>
        <p className={`${styles.title} px-4 py-2 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-200`}>
          This is a <code className="font-mono text-pink-600 dark:text-pink-400 font-semibold">home.module.css</code> style
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <Link 
          href="/about" 
          className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          About Page →
        </Link>
      </div>
    </main>
  );
};

export default Home;