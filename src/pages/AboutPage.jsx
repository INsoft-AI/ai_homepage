import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const baseUrl = 'https://www.in-soft.co.kr';

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <p className="text-lg md:text-xl mb-4 opacity-90">About us</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              미래를 함께 만드는<br />
              혁신적인 IT 솔루션 전문가를 만나보세요
            </h1>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                아이엔소프트는
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  아이엔소프트는 2002년 설립 이래 클라우드 모니터링과 클라우드 통합 관리 솔루션을 기반으로 꾸준히 성장해온 Total Cloud Service 전문 IT 기업입니다.
                </p>
                <p>
                  Agile한 전문 조직을 통해 최적화된 클라우드 서비스와 컨설팅을 제공하며, 다년간 축적된 제품 개발 및 프로젝트 수행 경험을 바탕으로 전통적인 IT 서비스의 한계를 넘어 안정적이고 효율적인 솔루션을 제시합니다.
                </p>
                <p>
                  고객의 비즈니스 성공을 위해 최고의 비즈니스 파트너가 될 것을 목표로 하고 있으며, 고객들이 비용 절감과 운영 효율성을 극대화할 수 있도록 시스템 개발 및 운영부터 최적의 솔루션과 컨설팅 서비스를 제공하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                새로운 세상, 새로운 접근방식
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-gradient">
                Agent
              </p>
            </div>

            {/* Agent 이미지 */}
            <div className="flex justify-center">
              <img
                src={`${baseUrl}/wp-content/uploads/2025/10/그룹-35338.png`}
                alt="AI Agent 비즈니스 모델"
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Agentic AI Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Agent와 함께 일하는 혁신 기업
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-gradient">
                Agentic AI 시대로의 가속화
              </p>
            </div>

            {/* Agentic AI 이미지 */}
            <div className="flex justify-center">
              <img
                src={`${baseUrl}/wp-content/uploads/2025/10/img_Agentic-AI.png`}
                alt="Agentic AI"
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Intelligence Integration Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Let's Intelligence Integration<br />with IN Soft
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
                AX Native / Cloud Native Full Stack 기술을 활용한 비즈니스 혁신을 달성하는데 있어서
                IN Soft는 Intelligence Integration 솔루션과 서비스를 제공해 드리는 회사가 되겠습니다.
              </p>
            </div>
            {/* Intelligence Integration 이미지 - 세로 배치 */}
            <div className="flex flex-col items-center gap-8">
              <img
                src={`${baseUrl}/wp-content/uploads/2025/10/img_01.png`}
                alt="Intelligence Integration 1"
                className="max-w-full w-full h-auto rounded-xl"
              />
              <img
                src={`${baseUrl}/wp-content/uploads/2025/10/img_02.png`}
                alt="Intelligence Integration 2"
                className="max-w-full w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Core Competency Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Core Competency & Value
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Solutions and Experience
              </p>
            </div>

            {/* 핵심 역량 이미지 */}
            <div className="flex justify-center">
              <img
                src={`${baseUrl}/wp-content/uploads/2025/10/img_양자보안.png`}
                alt="Core Competency"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              AI 솔루션에 대해 더 알고 싶으신가요?
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

export default AboutPage;
