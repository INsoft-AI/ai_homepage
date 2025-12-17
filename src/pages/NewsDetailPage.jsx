import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsDetailPage = () => {
  const { id } = useParams();
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 뉴스 상세 데이터
  const newsData = {
    1: {
      id: 1,
      category: '회사 소식',
      title: '아이엔소프트, KT와 멀티 AI 에이전트 사업 MOU 체결',
      subtitle: '다양한 AI 에이전트를 쉽고 빠르게 구축, 기업 AX 전환 가속',
      date: '2025-12-17',
      image: `${baseUrl}images/news/kt-insoft-mou.jpg`,
      content: `
        <p>클라우드·AI 서비스전문기업 아이엔소프트가 KT와 멀티 AI 에이전트 사업 협력을 위한 양해각서(MOU)를 체결하고, 기업 고객이 다양한 AI 에이전트를 쉽고 빠르게 구축할 수 있는 서비스 공급에 나선다.</p>

        <p>이번 협력을 통해 양사는 복잡한 업무를 여러 AI 에이전트가 분담·협업하는 환경을 국내외 시장에 확산시키고, 엔터프라이즈 AI 전환(AX)을 본격적으로 가속한다는 계획이다.</p>
        <br>
        <h3>주요 협력 내용</h3>
        <ul>
          <li>기반 멀티 AI 에이전트 플랫폼 공동 개발</li>
          <li>기업 고객 대상 AI 에이전트 구축 서비스 제공</li>
          <li>국내외 엔터프라이즈 시장 공동 진출</li>
          <li>AI 전환(AX) 컨설팅 및 기술 지원 협력</li>
        </ul>
        <br>

        <p>아이엔소프트 관계자는 "이번 KT와의 협력을 통해 기업 고객들이 AI 기술을 더욱 쉽고 빠르게 도입할 수 있도록 지원하겠다"며 "멀티 AI 에이전트 기술로 기업의 디지털 전환을 가속화하는 데 기여하겠다"고 밝혔다.</p>
      `,
    },
  };

  const news = newsData[id];

  if (!news) {
    return (
      <>
        <Header />
        <main className="pt-20">
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">뉴스를 찾을 수 없습니다</h1>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                뉴스 목록으로 돌아가기
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              뉴스 목록
            </Link>
            <span className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              {news.category}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              {news.title}
            </h1>
            {news.subtitle && (
              <p className="text-lg md:text-xl text-white/90 mb-4">
                {news.subtitle}
              </p>
            )}
            <p className="text-white/70">{news.date}</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Image */}
            <div className="mb-10">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <article
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-ul:my-4 prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Share & Back */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  뉴스 목록으로 돌아가기
                </Link>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-sm">공유하기:</span>
                  <button className="p-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </button>
                  <button className="p-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                    </svg>
                  </button>
                  <button className="p-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                </div>
              </div>
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

export default NewsDetailPage;
