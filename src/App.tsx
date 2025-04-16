import React from 'react';
import { Terminal } from 'lucide-react';
import { newsItems } from './data/news';

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-[800px] border-2 border-[#ffb000] rounded-lg p-6 bg-black/95 relative overflow-hidden crt">
        <div className="flex items-center gap-3 mb-6">
          <Terminal className="w-6 h-6 text-[#ffb000]" />
          <h1 className="text-[#ffb000] text-2xl font-mono">N1ghtw1re System News</h1>
        </div>
        
        <div className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="font-mono">
              <div className="text-[#00ff00]/70 text-sm">[{item.date}]</div>
              <div className="text-[#00ff00]">
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-[#ffb000] hover:text-[#ffb000]/80 underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.content}
                  </a>
                ) : (
                  item.content
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-[#ffb000] text-sm font-mono mt-6 flex items-center gap-2">
          <div className="w-2 h-2 bg-[#ffb000] animate-pulse rounded-full"></div>
          System Status: Online
        </div>
      </div>
    </div>
  );
}

export default App