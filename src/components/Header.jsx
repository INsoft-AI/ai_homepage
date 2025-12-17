import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // 두 번째 섹션이 화면의 2/3를 채우는 시점 (Hero 섹션의 2/3 스크롤)
      const threshold = window.innerHeight * 0.66;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '서비스', href: '#services', isRoute: false },
    { name: 'AI 솔루션', href: '#solutions', isRoute: false },
    { name: '성과 사례', href: '#impact', isRoute: false },
    { name: '뉴스', href: '/news', isRoute: true },
    { name: '회사소개', href: '/about', isRoute: true },
    { name: '문의하기', href: '/consultation', isRoute: true },
  ];

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    if (location.pathname !== '/') {
      // 다른 페이지에 있으면 홈으로 이동 후 스크롤
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // 홈페이지에 있으면 바로 스크롤
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  // 홈이 아닌 페이지에서는 항상 그라데이션 배경 적용
  const isHomePage = location.pathname === '/';
  const showColoredHeader = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        showColoredHeader
          ? isHomePage
            ? 'bg-white/95 backdrop-blur-sm shadow-md'
            : 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={`text-2xl md:text-3xl font-bold transition-all duration-500 ease-in-out ${
                isHomePage && isScrolled
                  ? 'text-gradient'
                  : 'text-white drop-shadow-lg'
              }`}>
                INSOFT AI Store
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-500 ease-in-out ${
                    isHomePage && isScrolled
                      ? 'text-gray-700 hover:text-purple-600'
                      : 'text-white/90 hover:text-white drop-shadow-md'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className={`font-medium transition-all duration-500 ease-in-out cursor-pointer ${
                    isHomePage && isScrolled
                      ? 'text-gray-700 hover:text-purple-600'
                      : 'text-white/90 hover:text-white drop-shadow-md'
                  }`}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/consultation" className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-500 ease-in-out ${
              isHomePage && isScrolled
                ? 'gradient-bg text-white hover:opacity-90'
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
            }`}>
              무료 상담
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-all duration-500 ease-in-out ${
              isHomePage && isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              )
            ))}
            <Link to="/consultation" className="block w-full gradient-bg text-white px-4 py-2 rounded-lg font-semibold mt-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              무료 상담
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
