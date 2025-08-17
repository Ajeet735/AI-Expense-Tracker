import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>
              AI-Powered Financial Management
            </span>
            <span className='sm:hidden'>AI Financial Management</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight'>
            Welcome to{' '}
            <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
              ExpensifyAI 
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0'>
            Track your expenses, manage your budget, and get AI-powered insights
            to take control of your finances with intelligent automation.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0'>
            <SignInButton>
              <button className='group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'>
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Get Started Free
                  <span className='text-lg'>→</span>
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              </button>
            </SignInButton>
            <button className='group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'>
              Learn More
            </button>
          </div>

          {/* Feature highlights */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0'>
            <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                <span className='text-white text-base sm:text-lg'>🤖</span>
              </div>
              <h3 className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center'>
                AI Insights
              </h3>
              <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center'>
                Smart analysis of your spending patterns
              </p>
            </div>
            <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                <span className='text-white text-base sm:text-lg'>✨</span>
              </div>
              <h3 className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center'>
                Auto Categories
              </h3>
              <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center'>
                Intelligent expense categorization
              </p>
            </div>
            <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 sm:col-span-2 md:col-span-1'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                <span className='text-white text-base sm:text-lg'>📊</span>
              </div>
              <h3 className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center'>
                Smart Dashboard
              </h3>
              <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center'>
                Beautiful, intuitive financial overview
              </p>
            </div>
          </div>
        </div>
      </section>

{/* How It Works Section */}
<section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10 sm:mb-12 md:mb-16">
      <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
        <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"></span>
        How It Works
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 px-2 sm:px-0">
        Track Smarter, <span className="text-emerald-600 dark:text-emerald-400">Spend Better</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
        ExpensifyAI makes managing your finances effortless. Add your expenses, let AI organize them, and visualize your spending with interactive charts.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {/* Step 1 */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
          <span className="text-white text-xl">➕</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Add Expenses</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Quickly log your daily spending with amount, date, and category like food, shopping, college, and more.
        </p>
      </div>

      {/* Step 2 */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
          <span className="text-white text-xl">🗂️</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Smart Categorization</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Expenses are automatically organized into categories, helping you see exactly where your money goes.
        </p>
      </div>

      {/* Step 3 */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
          <span className="text-white text-xl">📊</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Visual Insights</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Track spending patterns with beautiful charts and bar graphs updated in real-time.
        </p>
      </div>

      {/* Step 4 */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
          <span className="text-white text-xl">🤖</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">AI Recommendations</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Get personalized insights and tips from AI to improve your budgeting and save more.
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Guest;
