import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-muted/50 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 group overflow-hidden"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Sun icon */}
      <Sun 
        size={18} 
        className={`absolute transition-all duration-500 ${
          isDark 
            ? 'rotate-90 scale-0 opacity-0' 
            : 'rotate-0 scale-100 opacity-100 text-amber-500'
        }`}
      />
      {/* Moon icon */}
      <Moon 
        size={18} 
        className={`absolute transition-all duration-500 ${
          isDark 
            ? 'rotate-0 scale-100 opacity-100 text-primary' 
            : '-rotate-90 scale-0 opacity-0'
        }`}
      />
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
        isDark 
          ? 'bg-primary/10 opacity-0 group-hover:opacity-100' 
          : 'bg-amber-500/10 opacity-0 group-hover:opacity-100'
      }`} />
    </button>
  );
};

export default ThemeToggle;
