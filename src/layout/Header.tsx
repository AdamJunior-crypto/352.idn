import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';

import SiteLogo from '../components/navigation/SiteLogo';
import SearchBar from '../components/navigation/SearchBar';
import { MainNavigation } from './MainNavigation';
import { ThemeToggle } from '../components/navigation/ThemeToggle';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-[var(--container-max)] items-center px-4">
        <div className="flex w-1/4">
          <SiteLogo />
        </div>

        <div className="hidden flex-1 justify-center md:flex">
          <SearchBar className="w-80 lg:w-96" />
        </div>

        <div className="flex w-1/4 justify-end items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            className="rounded-md p-2 text-text-secondary md:hidden hover:bg-surface"
          >
            {mobileMenuOpen ? (
              <IoCloseSharp className="h-5 w-5" />
            ) : (
              <BsList className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <MainNavigation
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
