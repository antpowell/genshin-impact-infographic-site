import { NavButton } from './NavButton';

export const HomeNavBar = () => {
  return (
    <nav className="flex justify">
      <div className="flex mx-auto max-w-7xl space-x-4">
        <NavButton href="#weekly" text="Weekly" />
        <NavButton href="#normal" text="Normal" />
        <NavButton href="#common" text="Common" />
        <NavButton href="#talent" text="Talent" />
      </div>
    </nav>
  );
};
