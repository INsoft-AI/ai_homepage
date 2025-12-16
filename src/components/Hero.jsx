import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1727434032773-af3cd98375ba?w=1920&q=80')`
        }}
      ></div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-gray-900/70 to-blue-900/80"></div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
          <span className="text-white font-semibold text-sm">
            INSOFT AI Store
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          쉽고, 빠르고, 효과적으로
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">AI 솔루션</span>을 도입하세요
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          전문 컨설팅부터 맞춤형 AI 개발까지,
          <br className="hidden sm:block" />
          귀사의 비즈니스를 한 단계 끌어올릴 AI 파트너
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link to="/consultation" className="w-full sm:w-auto gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg text-center">
            무료 상담 시작하기
          </Link>
          <a href="#solutions" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-200 transform hover:scale-105 text-center">
            솔루션 둘러보기
          </a>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 mb-2">
              2주
            </div>
            <div className="text-gray-200 font-medium">평균 도입 기간</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 mb-2">
              30%+
            </div>
            <div className="text-gray-200 font-medium">비용 절감 효과</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 mb-2">
              100+
            </div>
            <div className="text-gray-200 font-medium">성공 프로젝트</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
