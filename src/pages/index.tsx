import Image from 'next/image';
import { useEffect, useState } from 'react';

import logo from '@/assets/logo.svg';
import ArticleConstructor from '@/components/article/ArticleConstructor';
import BurgerMenu from '@/components/burger/BurgerMenu';
import { useTheme } from '@/components/theme/ThemeContext';
import ThemeSwitcher from '@/components/theme/ThemeSwitcher';
import { articles } from '@/data/constant';

export default function Home() {
  const { theme } = useTheme();

  const [textColor, setTextColor] = useState('text-white');
  useEffect(() => {
    const color =
      theme === 'light'
        ? 'text-black'
        : theme === 'dark' || theme === 'ocean'
        ? 'text-white'
        : '';
    setTextColor(color);
  }, [theme]);

  return (
    <div className="App">
      <div
        className={`${
          theme === 'light'
            ? 'bg-white'
            : theme === 'dark'
            ? 'bg-gray-900'
            : 'bg-sky-950'
        } relative
        ${textColor}
        transition-colors duration-300`}
      >
        <ThemeSwitcher />
        <BurgerMenu />
        <header className="flex flex-col justify-center items-center mb-10">
          <Image src={logo} className="w-1/2 animate-spin" alt="logo" />
          <h1 className="text-5xl text-theme font-bold ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            React en 5 min
          </h1>
        </header>
        {articles.map((article) => (
          <ArticleConstructor
            key={article.id}
            chapterID={article.chapter}
            title={article.title}
            text={article.text}
            hasIllustration={article.hasIllustration}
            IllustrationComponent={article?.IllustrationComponent}
          />
        ))}
        <footer>
          <section className="text-sm font-semibold italic">
            <p>écrit par CECILLON Enzo</p>
            <p> en collaboration avec LEDRU Romane, BOUDRAA Abdelhakim </p>
          </section>
        </footer>
      </div>
    </div>
  );
}
