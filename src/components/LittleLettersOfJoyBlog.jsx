export default function LittleLettersOfJoyBlog() {
  const featuredPosts = [
    {
      title: 'Finding Joy in the Little Things',
      excerpt:
        'Sometimes happiness hides in the smallest moments — a handwritten note, a warm cup of tea, or a kind word from a stranger.',
      category: 'Positivity',
    },
    {
      title: 'The Power of Encouragement',
      excerpt:
        'Words can heal, inspire, and transform lives. Discover how encouragement can create meaningful change every day.',
      category: 'Inspiration',
    },
    {
      title: 'Stories That Touch the Heart',
      excerpt:
        'Every story carries emotion, wisdom, and connection. Here are heartfelt reflections that remind us we are never alone.',
      category: 'Storytelling',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,182,193,0.3),transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-rose-500 text-sm font-semibold mb-4">
                littlelettersofjoy.com
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                A Beautiful Space for
                <span className="block text-rose-500">Positivity & Storytelling</span>
              </h1>

              <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
                littlelettersofjoy.com is a heartfelt digital platform dedicated to sharing uplifting stories, encouragement, and inspiration that brighten everyday life. Through meaningful storytelling, thoughtful reflections, and positive messages, the platform inspires readers to embrace hope, kindness, and joy in every season of life.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="px-7 py-3 rounded-2xl bg-rose-500 text-white font-medium shadow-lg hover:scale-105 transition-transform">
                  Explore Stories
                </button>

                <button className="px-7 py-3 rounded-2xl border border-rose-200 bg-white/80 backdrop-blur text-rose-500 font-medium hover:bg-rose-50 transition-colors">
                  Share Your Joy
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-rose-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-50"></div>

              <div className="relative bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-[2rem] p-8">
                <div className="space-y-6">
                  <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                    <h3 className="text-xl font-semibold text-rose-500 mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To create a comforting online sanctuary where stories, encouragement, and positivity
                      inspire people from all walks of life.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
                      <p className="text-3xl font-bold text-pink-500">100%</p>
                      <p className="mt-2 text-sm text-gray-600">Heartfelt Content</p>
                    </div>

                    <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100">
                      <p className="text-3xl font-bold text-rose-500">∞</p>
                      <p className="mt-2 text-sm text-gray-600">Moments of Joy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}