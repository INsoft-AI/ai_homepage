import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AISolutionsPage = () => {
  const location = useLocation();

  useEffect(() => {
    // URL 해시가 있으면 해당 섹션으로 스크롤
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const solutions = [
    {
      id: 'ecommerce',
      category: '이커머스',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      description: '이커머스 비즈니스의 운영 효율성을 극대화하고 고객 경험을 혁신하는 AI 솔루션입니다.',
      services: [
        {
          title: '상품 자동 분류 및 카테고라이징',
          description: 'AI가 상품 이미지와 설명을 분석하여 자동으로 적절한 카테고리에 분류합니다. 수천 개의 상품도 빠르고 정확하게 정리할 수 있습니다.',
        },
        {
          title: 'AI 기반 상품 검색 및 추천',
          description: '고객의 검색 의도를 파악하고, 구매 이력과 행동 패턴을 분석하여 개인화된 상품을 추천합니다. 전환율과 객단가를 높여줍니다.',
        },
        {
          title: '재고 관리 자동화',
          description: '판매 데이터와 시장 트렌드를 분석하여 수요를 예측하고, 최적의 재고 수준을 유지합니다. 재고 부족과 과잉 재고를 방지합니다.',
        },
        {
          title: '고객 문의 챗봇',
          description: '24시간 고객 문의에 응대하는 AI 챗봇으로 주문 조회, 반품/교환, FAQ 등을 자동으로 처리합니다. 고객 만족도를 높이고 운영 비용을 절감합니다.',
        },
      ],
    },
    {
      id: 'marketing',
      category: '마케팅/광고',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      description: '마케팅 효율을 극대화하고 창의적인 콘텐츠 제작을 지원하는 AI 솔루션입니다.',
      services: [
        {
          title: '영상 콘텐츠 자동 편집',
          description: 'AI가 영상을 분석하여 하이라이트를 추출하고, 자동으로 편집합니다. 숏폼 콘텐츠, 광고 영상 제작 시간을 대폭 단축합니다.',
        },
        {
          title: 'AI 카피라이팅',
          description: '브랜드 톤앤매너에 맞는 광고 문구, 상품 설명, SNS 포스팅을 AI가 생성합니다. A/B 테스트용 다양한 버전도 빠르게 만들 수 있습니다.',
        },
        {
          title: '타겟 고객 분석',
          description: '고객 데이터를 분석하여 세그먼트를 나누고, 각 그룹의 특성과 행동 패턴을 파악합니다. 정밀한 타겟팅으로 광고 효율을 높입니다.',
        },
        {
          title: '광고 성과 최적화',
          description: 'AI가 실시간으로 광고 성과를 분석하고, 예산 배분과 타겟팅을 자동으로 최적화합니다. ROAS를 극대화합니다.',
        },
      ],
    },
    {
      id: 'automation',
      category: '업무 자동화',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'from-green-500 to-teal-500',
      description: '반복적인 업무를 자동화하여 직원들이 더 가치 있는 일에 집중할 수 있도록 지원합니다.',
      services: [
        {
          title: '문서 자동 처리 및 분류',
          description: 'AI가 다양한 형식의 문서(PDF, 이미지, 스캔본)를 인식하고 내용을 추출하여 자동으로 분류합니다. 계약서, 영수증, 보고서 등을 효율적으로 관리합니다.',
        },
        {
          title: '데이터 입력 자동화',
          description: '수작업 데이터 입력을 AI가 대신합니다. 엑셀, ERP, CRM 등 다양한 시스템에 데이터를 자동으로 입력하고 검증합니다.',
        },
        {
          title: '보고서 자동 생성',
          description: '데이터를 분석하여 인사이트를 도출하고, 정해진 양식에 맞춰 보고서를 자동으로 생성합니다. 일간/주간/월간 보고서 작성 시간을 절약합니다.',
        },
        {
          title: '워크플로우 최적화',
          description: '업무 프로세스를 분석하여 병목 지점을 찾아내고, AI 기반 자동화로 워크플로우를 개선합니다. 업무 처리 속도와 정확도를 높입니다.',
        },
      ],
    },
    {
      id: 'custom',
      category: '맞춤형 AI',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      description: '귀사의 고유한 비즈니스 요구에 맞춰 설계된 맞춤형 AI 솔루션을 제공합니다.',
      services: [
        {
          title: '비즈니스 맞춤형 AI 모델 개발',
          description: '귀사의 데이터와 비즈니스 로직에 최적화된 AI 모델을 개발합니다. 기성 솔루션으로는 해결할 수 없는 고유한 문제를 해결합니다.',
        },
        {
          title: '기존 시스템 AI 통합',
          description: '현재 사용 중인 ERP, CRM, 레거시 시스템에 AI 기능을 통합합니다. 기존 워크플로우를 유지하면서 AI의 이점을 누릴 수 있습니다.',
        },
        {
          title: 'AI 컨설팅 및 전략 수립',
          description: '비즈니스 분석을 통해 AI 도입이 가장 효과적인 영역을 파악하고, 단계별 도입 전략을 수립합니다. ROI를 극대화하는 AI 로드맵을 제시합니다.',
        },
        {
          title: '지속적인 모델 개선 및 유지보수',
          description: 'AI 모델의 성능을 지속적으로 모니터링하고, 새로운 데이터로 학습시켜 정확도를 유지합니다. 안정적인 운영을 위한 기술 지원을 제공합니다.',
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI 솔루션
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              각 산업과 비즈니스에 최적화된 AI 서비스로 <br className="hidden md:block" />
              비즈니스 혁신을 실현합니다
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex overflow-x-auto py-4 gap-4 md:gap-8 justify-start md:justify-center">
              {solutions.map((solution) => (
                <a
                  key={solution.id}
                  href={`#${solution.id}`}
                  className="flex-shrink-0 px-4 py-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-medium transition-colors duration-200"
                >
                  {solution.category}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Solutions Sections */}
        {solutions.map((solution, index) => (
          <section
            key={solution.id}
            id={solution.id}
            className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white`}>
                  {solution.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {solution.category}
                  </h2>
                  <p className="text-lg text-gray-600 mt-1">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {solution.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center text-white flex-shrink-0`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <Link
                  to="/consultation"
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${solution.color} text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200`}
                >
                  <span>{solution.category} 솔루션 상담받기</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              어떤 솔루션이 필요하신지 모르겠다면?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              전문 컨설턴트가 귀사의 비즈니스를 분석하고 <br className="hidden md:block" />
              최적의 AI 솔루션을 제안해드립니다
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <span>무료 상담 신청하기</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AISolutionsPage;
