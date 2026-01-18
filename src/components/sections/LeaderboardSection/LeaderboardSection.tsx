import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui-kit/button/Button';
import { RocketAnimation } from '@/components/animations/RocketAnimation';

interface LeaderboardRow {
  id: number;
  trend: 'up' | 'down' | 'same';
  modelName: string;
  average: string;
  arc: string;
  heimSwing: string;
  mmlu: string;
  truthfulQA: string;
  winegrande: string;
  gsmbk: string;
  usage: string;
}

// Initial data
const initialData: LeaderboardRow[] = [
  {
    id: 1,
    trend: 'same',
    modelName: 'daviddm205/White-72b-v0.5',
    average: '81.22',
    arc: '79.78',
    heimSwing: '91.15',
    mmlu: '77.05',
    truthfulQA: '74.50',
    winegrande: '87.85',
    gsmbk: '78.12',
    usage: '1,384,193',
  },
  {
    id: 2,
    trend: 'up',
    modelName: 'MTSAIR/Multiviews_708',
    average: '81.09',
    arc: '79.57',
    heimSwing: '59.77',
    mmlu: '73.22',
    truthfulQA: '75.16',
    winegrande: '87.53',
    gsmbk: '78.65',
    usage: '1,361,156',
  },
  {
    id: 3,
    trend: 'same',
    modelName: 'SF-Foundation(Eth-72B-v0.1)',
    average: '80.88',
    arc: '78.79',
    heimSwing: '83.02',
    mmlu: '77.30',
    truthfulQA: '79.02',
    winegrande: '84.05',
    gsmbk: '78.77',
    usage: '1,288,535',
  },
  {
    id: 4,
    trend: 'up',
    modelName: 'abscclad/Smiling-72B-v0.1',
    average: '80.45',
    arc: '79.02',
    heimSwing: '69.27',
    mmlu: '77.15',
    truthfulQA: '78.57',
    winegrande: '85.09',
    gsmbk: '78.10',
    usage: '1,256,720',
  },
  {
    id: 5,
    trend: 'down',
    modelName: 'lbl/lb/sigbase dragon-72B-v1',
    average: '78.30',
    arc: '73.99',
    heimSwing: '58.16',
    mmlu: '77.40',
    truthfulQA: '72.89',
    winegrande: '86.03',
    gsmbk: '77.63',
    usage: '1,239,080',
  },
  {
    id: 6,
    trend: 'same',
    modelName: 'mistralai/Mistral-8x7B-Instruct-v0.1',
    average: '79.15',
    arc: '72.7',
    heimSwing: '82.08',
    mmlu: '77.77',
    truthfulQA: '68.14',
    winegrande: '85.18',
    gsmbk: '82.03',
    usage: '1,206,492',
  },
  {
    id: 7,
    trend: 'up',
    modelName: 'mwesh/MoMo-72B-lors-13.7 DPO',
    average: '78.55',
    arc: '70.82',
    heimSwing: '85.98',
    mmlu: '77.13',
    truthfulQA: '74.71',
    winegrande: '84.05',
    gsmbk: '78.62',
    usage: '1,205,577',
  },
  {
    id: 8,
    trend: 'up',
    modelName: 'cloudyu/TomGrc_FusionNet_34B42_MuE__',
    average: '77.91',
    arc: '74.05',
    heimSwing: '85.74',
    mmlu: '76.55',
    truthfulQA: '72.24',
    winegrande: '83.35',
    gsmbk: '74.45',
    usage: '1,059,621',
  },
];

// Fake data generation
const leaderboardData: LeaderboardRow[] = Array.from({ length: 42 }, (_, i) => {
  const template = initialData[i % initialData.length];
  return {
    ...template,
    id: i + 1,
    modelName: `${template.modelName} ${Math.floor(i / 8) > 0 ? `v${Math.floor(i / 8) + 1}` : ''}`,
  };
});


const TrendIcon = ({ trend }: { trend: 'up' | 'down' | 'same' }) => {
  switch (trend) {
    case 'up': return <span className="trend-up">↑</span>;
    case 'down': return <span className="trend-down">↓</span>;
    case 'same': return <span className="trend-same">—</span>;
  }
};

export const LeaderboardSection: React.FC = () => {

  const sectionEndRef = useRef<HTMLDivElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [showRocket, setShowRocket] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tableContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = tableContainerRef.current;
        // Check if we are close to the bottom (within 10px)
        setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
      }
    };

    const container = tableContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (tableContainerRef.current) {
      if (isAtBottom) {
        tableContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        tableContainerRef.current.scrollTo({
          top: tableContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (!sectionEndRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowRocket(true);

          observer.unobserve(entry.target);

        }
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionEndRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='leaderboard' className="section">
      <div className="container flex flex-col gap-2 md:justify-center md:h-full">
        <div className="flex flex-col items-center text-center gap-3 md:flex-row md:justify-between md:text-left">
          <h3>LLM Leaderboard</h3>

          <Button
            bg
            size="big"
            className="w-full md:w-auto">
            Submit Your Model
          </Button>
        </div>


        <p className='text-xs'>
          We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks. The higher the score, the better the LLM.
        </p>

        <div
          ref={tableContainerRef}
          className="table-container"
          style={{
            maxHeight: '70vh',
            overflowY: 'auto',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Hide WebKit Scrollbar */}
          <style>{`
            .table-container::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>#</th>
                <th>Model Name</th>
                <th>Average</th>
                <th>ARC</th>
                <th>HeimSwing</th>
                <th>MMLU</th>
                <th>TruthfulQA</th>
                <th>Winegrande</th>
                <th>GSMBK</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((row, i) => (
                <tr key={row.id}>
                  <td><TrendIcon trend={row.trend} /></td>
                  <td>{i + 1}</td>
                  <td className="model-name">{row.modelName}</td>
                  <td className="score">{row.average}</td>
                  <td className="score">{row.arc}</td>
                  <td className="score">{row.heimSwing}</td>
                  <td className="score">{row.mmlu}</td>
                  <td className="score">{row.truthfulQA}</td>
                  <td className="score">{row.winegrande}</td>
                  <td className="score">{row.gsmbk}</td>
                  <td className="usage">{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='flex items-center justify-end gap-3 mt-2'>
          <Button size="small">View full leaderboard</Button>

          <button
            onClick={handleScrollClick}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-current text-white hover:bg-white/10 transition-colors"
            aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
          >
            {isAtBottom ? "↑" : "↓"}
          </button>
        </div>
      </div>

      <div ref={sectionEndRef} style={{ height: '1px' }} />
      {showRocket && <RocketAnimation />}
    </section>
  );
};

