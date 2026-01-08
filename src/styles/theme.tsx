// Reusable Background Effects
export const backgroundEffects = (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
  </div>
);

// Section Divider
export const sectionDivider = (
  <div className="absolute bottom-0 left-0 right-0 h-[2px]">
    <div className="h-full w-full bg-gradient-to-r from-transparent via-[#6c757d] to-transparent opacity-60"></div>
  </div>
);

// Animation Styles
export const animationStyles = `
  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(20px, -50px) scale(1.1); }
    50% { transform: translate(-20px, 20px) scale(0.9); }
    75% { transform: translate(50px, 50px) scale(1.05); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }
  
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes spin-slower { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
  @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
  @keyframes pulse-fast { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.2); } }
  @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  
  .animate-blob { animation: blob 7s infinite; }
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
  .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
  .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out; }
  .animate-fadeInRight { animation: fadeInRight 0.8s ease-out; }
  .animate-fadeInScale { animation: fadeInScale 0.8s ease-out; }
  .animate-spin-slow { animation: spin-slow 20s linear infinite; }
  .animate-spin-slower { animation: spin-slower 30s linear infinite; }
  .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
  .animate-pulse-fast { animation: pulse-fast 1.5s ease-in-out infinite; }
  .animate-slideIn { animation: slideIn 0.4s ease-out; }
  
  .animation-delay-200 { animation-delay: 0.2s; }
  .animation-delay-300 { animation-delay: 0.3s; }
  .animation-delay-400 { animation-delay: 0.4s; }
  .animation-delay-600 { animation-delay: 0.6s; }
  .animation-delay-900 { animation-delay: 0.9s; }
  .animation-delay-1000 { animation-delay: 1s; }
  .animation-delay-1200 { animation-delay: 1.2s; }
  .animation-delay-1500 { animation-delay: 1.5s; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-3000 { animation-delay: 3s; }
  .animation-delay-4000 { animation-delay: 4s; }
`;