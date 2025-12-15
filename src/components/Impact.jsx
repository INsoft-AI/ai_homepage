import React from 'react';

const Impact = () => {
  const cases = [
    {
      metric: '370만+',
      unit: '개',
      description: '상품 자동 분류',
      industry: '이커머스',
      detail: 'AI 기반 자동 카테고리 분류로 대규모 상품 관리 효율화',
    },
    {
      metric: '35%',
      unit: '자동화',
      description: '영상 편집 자동화',
      industry: '미디어/광고',
      detail: '반복적인 영상 편집 작업을 AI가 자동으로 처리',
    },
    {
      metric: '50%',
      unit: '절감',
      description: '운영 비용 절감',
      industry: '제조/물류',
      detail: '업무 프로세스 최적화로 인건비 및 시간 비용 대폭 감소',
    },
  ];

  const metrics = [
    { value: '95%', label: '고객 만족도' },
    { value: '100+', label: '완료 프로젝트' },
    { value: '24/7', label: '기술 지원' },
    { value: '2주', label: '평균 도입 기간' },
  ];

  return (
    <section id="impact" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            검증된 <span className="text-gradient">비즈니스 성과</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            실제 기업들이 경험한 놀라운 변화
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-shadow relative overflow-hidden group"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* Industry Tag */}
              <div className="inline-block mb-4">
                <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {item.industry}
                </span>
              </div>

              {/* Metric */}
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-gradient">
                    {item.metric}
                  </span>
                  <span className="text-2xl font-semibold text-gray-400 mb-2">
                    {item.unit}
                  </span>
                </div>
              </div>

              {/* Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.description}
              </h3>

              {/* Detail */}
              <p className="text-gray-600 leading-relaxed">
                {item.detail}
              </p>

              {/* Decorative Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Metrics */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-100">
            {metrics.map((metric, index) => (
              <div key={index} className="p-8 text-center hover:bg-purple-50 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            귀사의 성공 스토리를 함께 만들어가겠습니다
          </h3>
          <button className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg">
            무료 컨설팅 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;
