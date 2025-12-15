import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Features = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2, rootMargin: '-50px' });
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: '무료 전문 컨설팅',
      description: 'AI 전문가가 귀사의 비즈니스를 분석하고 최적의 AI 솔루션을 제안합니다.',
      highlight: '100% 무료',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '빠른 도입',
      description: '검증된 프로세스로 평균 2주 만에 AI 솔루션을 실제 업무에 적용합니다.',
      highlight: '평균 2주',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '확실한 비용 절감',
      description: '업무 자동화와 효율성 개선으로 운영 비용을 30% 이상 절감합니다.',
      highlight: '30%+ 절감',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            왜 <span className="text-gradient">INSOFT AI</span>인가요?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            클릭 몇 번으로 시작하는 AI 혁신, 우리가 함께합니다
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 card-shadow h-full border border-gray-100">
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl gradient-bg text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              App Store처럼 쉬운 AI 도입
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              복잡한 기술 걱정은 내려놓으세요. 우리의 검증된 AI 솔루션을
              귀사의 비즈니스에 맞게 손쉽게 적용할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
