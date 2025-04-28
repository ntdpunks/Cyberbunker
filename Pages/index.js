
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="text-center p-10 neon-text">
        <h1 className="text-4xl text-pink-400 animate-pulse">Катастрофа: Глобальная ядерная война</h1>
        <p className="mt-4 text-cyan-400">Ситуация в бункере: Критический режим. Система жизнеобеспечения перегружена.</p>
        <p className="mt-2 text-purple-400">Доступных мест: 3</p>
      </div>
      <div className="grid grid-cols-4 gap-4 p-10">
        {['NeonWolf', 'CyberSamurai', 'GlitchGhost', 'PixelRunner', 'DarkSynth', 'ZeroPulse', 'ChromeViper', 'AcidRain'].map((name, index) => (
          <div key={index} className="border-2 border-pink-500 p-6 pulse-neon rounded-lg">
            <p className="text-center">{name}</p>
          </div>
        ))}
      </div>
      <div className="fixed bottom-5 right-5 bg-purple-700 p-5 rounded-xl pulse-neon w-64">
        <h2 className="text-xl text-white">NeonWolf</h2>
        <p className="text-sm text-cyan-200">Роль: Инженер</p>
        <p className="text-xs text-gray-300 mt-2">Специалист по поддержанию энергетических систем в условиях катастрофы. Умён, бесстрашен, опытен.</p>
      </div>
    </div>
  );
}
