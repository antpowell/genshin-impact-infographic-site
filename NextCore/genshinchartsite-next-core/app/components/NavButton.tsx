interface iNavButton {
  href: string;
  text: string;
}

export const NavButton = ({ href, text }: iNavButton) => {
  return (
    <a href={href} className="text-white px-3 font-medium text-sm py-2 rounded-md hover:bg-gray-700 hover:text-white">
      {text}
    </a>
  );
};
