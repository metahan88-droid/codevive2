import { StoryboardFrame } from './StoryboardFrame';

export function Storyboard() {
  const storyboardFrames = [
    {
      title: "VIVE CODING 소개",
      goal: "차세대 코딩 교육 플랫폼",
      tool: "React + TypeScript + Tailwind",
      skills: ["Modern Stack", "Responsive", "Interactive"],
      imageUrl: "https://images.unsplash.com/photo-1648747067003-0e4660db791f?w=500&h=300&fit=crop",
      accentColor: 'yellow' as const,
      link: "vivecoding.html"
    },
    {
      title: "웹 문서",
      goal: "인터랙티브 학습 문서 제공",
      tool: "Markdown + Rich Editor",
      skills: ["문서화", "튜토리얼", "가이드"],
      imageUrl: "https://images.unsplash.com/photo-1724501405264-945712f7f05a?w=500&h=300&fit=crop",
      accentColor: 'blue' as const,
      link: "https://metahan88-droid.github.io/cbci/concept-based-math-curriculum.html"
    },
    {
      title: "웹 문서 심화",
      goal: "코드 예제와 실습 자료",
      tool: "Code Playground + Live Preview",
      skills: ["실습", "예제", "템플릿"],
      imageUrl: "https://images.unsplash.com/photo-1650600538903-ec09f670c391?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      link: "vc2.html"
    },
    {
      title: "웹 인포그래픽",
      goal: "시각적 데이터 스토리텔링",
      tool: "D3.js + Chart.js + SVG",
      skills: ["데이터 시각화", "차트", "그래프"],
      imageUrl: "https://images.unsplash.com/photo-1642756062014-24ad9dad01b6?w=500&h=300&fit=crop",
      accentColor: 'yellow' as const,
      link: "LM.HTML"
    },
    {
      title: "대시보드",
      goal: "실시간 학습 진도 관리",
      tool: "React Dashboard + Analytics",
      skills: ["진도 추적", "통계", "리포트"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      accentColor: 'blue' as const
    },
    {
      title: "인터랙티브 콘텐츠",
      goal: "참여형 학습 경험 제공",
      tool: "Interactive Widgets + Animations",
      skills: ["인터랙션", "애니메이션", "UX"],
      imageUrl: "https://images.unsplash.com/photo-1625574199526-97cdca86bcea?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
            link: "LM2.HTML"

    },
    {
      title: "퀴즈",
      goal: "지식 평가 및 피드백",
      tool: "Quiz Engine + Gamification",
      skills: ["평가", "점수", "리더보드"],
      imageUrl: "https://images.unsplash.com/photo-1584601218757-8a412705aaa6?w=500&h=300&fit=crop",
      accentColor: 'yellow' as const
    },
    {
      title: "올인원 솔루션",
      goal: "통합 교육 플랫폼",
      tool: "Full-Stack Education System",
      skills: ["통합관리", "클라우드", "확장성"],
      imageUrl: "https://images.unsplash.com/photo-1613151096599-b234757eb4d2?w=500&h=300&fit=crop",
      accentColor: 'blue' as const
    },
    {
      title: "지금 시작하세요",
      goal: "코딩 교육의 미래를 경험하다",
      tool: "Free Trial + Premium Features",
      skills: ["무료체험", "프리미엄", "지원"],
      imageUrl: "https://images.unsplash.com/photo-1758270703716-f7b145372f52?w=500&h=300&fit=crop",
      accentColor: 'red' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] py-12 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="relative inline-block">
          {/* Brand Name */}
          <h1 className="text-6xl font-black text-white mb-4 tracking-wider font-mono relative z-10">
            VIVE CODING
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] via-[#00FFFF] to-[#FF2E63] rounded-lg blur opacity-20"></div>
        </div>
        
        {/* Tagline */}
        <p className="text-xl text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed">
          차세대 코딩 교육 플랫폼 — 인터랙티브 학습 경험
        </p>
        
        {/* Subtitle */}
        <p className="text-lg text-[#00FFFF] font-mono tracking-wide">
          // INTERACTIVE EDUCATION MATERIALS
        </p>
      </div>

      {/* Storyboard Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storyboardFrames.map((frame, index) => (
            <StoryboardFrame
              key={index}
              title={frame.title}
              goal={frame.goal}
              tool={frame.tool}
              skills={frame.skills}
              imageUrl={frame.imageUrl}
              accentColor={frame.accentColor}
              link={frame.link}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm font-mono">
            © 2025 VIVE CODING • 혁신적인 코딩 교육 솔루션
          </p>
          <div className="flex justify-center gap-8 mt-4 text-sm text-gray-500">
            <span>웹 문서</span>
            <span>•</span>
            <span>인포그래픽</span>
            <span>•</span>
            <span>대시보드</span>
            <span>•</span>
            <span>인터랙티브 콘텐츠</span>
            <span>•</span>
            <span>퀴즈</span>
          </div>
        </div>
      </div>
    </div>
  );
}
