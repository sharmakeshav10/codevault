import { GoZap } from "react-icons/go";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              CodeVault
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Your secure space for storing and sharing code snippets, notes,
              and documentation. Simple, fast, and beautiful.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link to={"/create-paste"}>
                <button className="flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 active:scale-95">
                  Get Started <GoZap size={18} className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Everything you need to manage your code snippets
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Powerful features that make CodeVault the perfect place for
            developers to store and share their code.
          </p>
        </div>

        {/* <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Sparkles}
            title="Syntax Highlighting"
            description="Support for over 100 programming languages with beautiful syntax highlighting."
          />
          <FeatureCard
            icon={Shield}
            title="Secure Storage"
            description="Your code is encrypted and stored securely. Only you control who can access it."
          />
          <FeatureCard
            icon={Share2}
            title="Easy Sharing"
            description="Share your snippets with a simple link or keep them private. You're in control."
          />
          <FeatureCard
            icon={Code2}
            title="Version Control"
            description="Track changes with built-in versioning. Never lose your work again."
          />
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Optimized for speed. Search and access your snippets instantly."
          />
          <FeatureCard
            icon={FileText}
            title="Rich Text Support"
            description="Write documentation with Markdown support and real-time preview."
          />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
