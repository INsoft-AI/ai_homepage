import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const baseUrl = import.meta.env.BASE_URL;

  // 뉴스 데이터
  const newsItems = [
    {
      id: 1,
      category: '회사 소식',
      title: '아이엔소프트, KT와 멀티 AI 에이전트 사업 MOU 체결',
      subtitle: '다양한 AI 에이전트를 쉽고 빠르게 구축, 기업 AX 전환 가속',
      summary: '아이엔소프트가 KT와 멀티 AI 에이전트 사업 협력을 위한 양해각서(MOU)를 체결하였습니다.',
      date: '2025-12-17',
      image: `${baseUrl}images/news/kt-insoft-mou.jpg`,
      hasDetail: true,
    },
    {
      id: 2,
      category: 'AI 트렌드',
      title: 'Agentic AI가 비즈니스를 변화시키는 방법',
      summary: 'AI 에이전트가 기업의 업무 자동화와 의사결정을 어떻게 혁신하고 있는지 알아봅니다.',
      date: '2025-01-15',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      category: '회사 소식',
      title: 'INSOFT AI Store 공식 런칭',
      summary: '아이엔소프트의 AI 솔루션 플랫폼이 새롭게 오픈했습니다. 다양한 AI 서비스를 만나보세요.',
      date: '2025-01-10',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    },
    {
      id: 4,
      category: '기술 블로그',
      title: 'AI Mesh Orchestration 아키텍처 소개',
      summary: '여러 AI 모델을 효율적으로 연결하고 관리하는 AI Mesh Orchestration의 핵심 개념을 설명합니다.',
      date: '2025-01-05',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
    },
    {
      id: 5,
      category: 'AI 트렌드',
      title: '2025년 AI 기술 전망',
      summary: '올해 주목해야 할 AI 기술 트렌드와 기업들이 준비해야 할 사항들을 정리했습니다.',
      date: '2025-01-01',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
    },
    {
      id: 6,
      category: '성공 사례',
      title: 'NPO 단체의 AI 도입 성공기',
      summary: '비영리 단체가 AI 솔루션을 통해 운영 효율성을 30% 개선한 사례를 소개합니다.',
      date: '2024-12-20',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop',
    },
    {
      id: 7,
      category: '기술 블로그',
      title: 'LLM 기반 업무 자동화 구축 가이드',
      summary: '대규모 언어 모델을 활용한 업무 자동화 시스템 구축 방법을 단계별로 안내합니다.',
      date: '2024-12-15',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop',
    },
  ];

  const categories = ['전체', 'AI 트렌드', '회사 소식', '기술 블로그', '성공 사례'];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <p className="text-lg md:text-xl mb-4 opacity-90">News & Insights</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              AI 트렌드와 인사이트를<br />
              가장 빠르게 만나보세요
            </h1>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                    category === '전체'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.summary}
                    </p>
                    {item.hasDetail ? (
                      <Link
                        to={`/news/${item.id}`}
                        className="text-purple-600 font-medium hover:text-purple-700 transition-colors inline-flex items-center gap-1"
                      >
                        자세히 보기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <span className="text-gray-400 font-medium inline-flex items-center gap-1 cursor-default">
                        준비중
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200">
                더 많은 뉴스 보기
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              AI 솔루션 도입을 고민하고 계신가요?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200"
              >
                <span>무료 상담 신청</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors duration-200"
              >
                <span>AI 솔루션 보기</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;
