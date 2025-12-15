import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      category: '이커머스',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      services: [
        '상품 자동 분류 및 카테고라이징',
        'AI 기반 상품 검색 및 추천',
        '재고 관리 자동화',
        '고객 문의 챗봇',
      ],
    },
    {
      category: '마케팅/광고',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      services: [
        '영상 콘텐츠 자동 편집',
        'AI 카피라이팅',
        '타겟 고객 분석',
        '광고 성과 최적화',
      ],
    },
    {
      category: '업무 자동화',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'from-green-500 to-teal-500',
      services: [
        '문서 자동 처리 및 분류',
        '데이터 입력 자동화',
        '보고서 자동 생성',
        '워크플로우 최적화',
      ],
    },
    {
      category: '맞춤형 AI',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      services: [
        '비즈니스 맞춤형 AI 모델 개발',
        '기존 시스템 AI 통합',
        'AI 컨설팅 및 전략 수립',
        '지속적인 모델 개선 및 유지보수',
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            도메인별 <span className="text-gradient">AI 솔루션</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            귀사의 산업과 비즈니스에 최적화된 AI 서비스를 제공합니다
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 card-shadow border border-gray-100 hover:border-transparent"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {solution.category}
                </h3>
              </div>

              {/* Services List */}
              <ul className="space-y-3">
                {solution.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all duration-200"
                >
                  <span>자세히 알아보기</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            원하는 솔루션이 없으신가요?
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            귀사의 니즈에 맞는 맞춤형 AI 솔루션을 개발해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              맞춤 솔루션 문의
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200">
              포트폴리오 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
