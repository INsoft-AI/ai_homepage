import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ConsultationForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    industry: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const industries = [
    '이커머스/유통',
    '제조/물류',
    '미디어/광고',
    '금융/보험',
    '헬스케어',
    '교육',
    '기타',
  ];

  const budgets = [
    '500만원 미만',
    '500만원 ~ 1,000만원',
    '1,000만원 ~ 3,000만원',
    '3,000만원 ~ 5,000만원',
    '5,000만원 이상',
    '미정',
  ];

  const timelines = [
    '즉시 도입 희망',
    '1개월 이내',
    '3개월 이내',
    '6개월 이내',
    '미정',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS 설정값 - 실제 사용 시 본인의 값으로 교체 필요
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          name: '',
          email: '',
          phone: '',
          industry: '',
          budget: '',
          timeline: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center gap-2 text-gray-900 hover:text-purple-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-semibold">홈으로 돌아가기</span>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-sm">무료 상담</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            AI 도입 <span className="text-gradient">무료 상담</span> 신청
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            전문 컨설턴트가 귀사의 비즈니스에 맞는 최적의 AI 솔루션을 제안해 드립니다.
            <br className="hidden sm:block" />
            상담 신청 후 1영업일 이내 연락드리겠습니다.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                상담 신청이 완료되었습니다!
              </h2>
              <p className="text-gray-600 mb-8">
                담당자가 1영업일 이내에 연락드리겠습니다.
                <br />
                빠른 상담이 필요하시면 전화주세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:02-6309-5743"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-semibold hover:bg-purple-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  02-6309-5743
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 gradient-bg text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  홈으로 돌아가기
                </Link>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  연락처 정보
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      회사명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="회사명을 입력하세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      담당자명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="담당자명을 입력하세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  프로젝트 정보
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      산업 분야
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">선택하세요</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      예상 예산
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">선택하세요</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      도입 희망 시기
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">선택하세요</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  상담 내용
                </h3>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="도입을 희망하시는 AI 솔루션이나 해결하고 싶은 비즈니스 문제에 대해 자유롭게 작성해 주세요."
                  />
                </div>
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-red-800 font-medium">전송에 실패했습니다</p>
                    <p className="text-red-600 text-sm">잠시 후 다시 시도하시거나, 전화(02-6309-5743)로 문의해 주세요.</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      전송 중...
                    </>
                  ) : (
                    '무료 상담 신청하기'
                  )}
                </button>
              </div>

              {/* Privacy Notice */}
              <p className="text-center text-sm text-gray-500">
                상담 신청 시 <a href="#" className="text-purple-600 hover:underline">개인정보처리방침</a>에 동의하는 것으로 간주됩니다.
              </p>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">빠른 상담이 필요하신가요?</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:02-6309-5743"
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">02-6309-5743</span>
            </a>
            <a
              href="mailto:sales@in-soft.co.kr"
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">sales@in-soft.co.kr</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
