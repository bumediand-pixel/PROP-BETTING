export default function Footer() {
  const links = {
    Product: ["Live Props", "Prop Builder", "Leaderboard", "Odds Tracker", "API"],
    Sports: ["NFL", "NBA", "MLB", "NHL", "UFC", "Soccer"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Terms", "Privacy", "Responsible Gaming", "Contact"],
  };

  return (
    <footer className="border-t border-white/6 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">PropEdge</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              The sharpest prop betting platform on the internet. Real-time odds. Instant payouts.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-300 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-sm">© 2025 PropEdge. All rights reserved.</p>
          <p className="text-gray-700 text-sm">
            Must be 18+ to bet. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
