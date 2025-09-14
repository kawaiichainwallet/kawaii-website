import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: "🔐",
      title: "安全密钥管理",
      description: "支持创建、导入和安全存储用户私钥，采用AES-256加密技术"
    },
    {
      icon: "💰",
      title: "多币种支持",
      description: "支持比特币、以太坊、BSC等主流区块链网络和代币"
    },
    {
      icon: "🔄",
      title: "快速转账",
      description: "链上转账服务，智能Gas费估算，确保交易快速确认"
    },
    {
      icon: "🏪",
      title: "商户支付",
      description: "与合作商户的无缝支付集成，支持扫码支付和API对接"
    },
    {
      icon: "📱",
      title: "移动优先",
      description: "原生移动端体验，支持iOS和Android双平台"
    },
    {
      icon: "🌐",
      title: "Web支持",
      description: "完整的Web端管理界面和浏览器插件支持"
    }
  ];

  const techStack = [
    { name: "Flutter", desc: "移动端", color: "from-blue-500 to-blue-600" },
    { name: "Spring Cloud", desc: "后端", color: "from-green-500 to-green-600" },
    { name: "Next.js", desc: "前端", color: "from-gray-700 to-gray-800" },
    { name: "PostgreSQL", desc: "数据库", color: "from-blue-600 to-blue-700" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950/20 dark:via-background dark:to-pink-950/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  KawaiiChain Wallet
                </span>
                <span className="block text-foreground mt-2">
                  区块链数字钱包
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-foreground/60 sm:text-xl">
                安全、便捷的区块链数字钱包解决方案。支持多币种管理、快速转账和商户支付。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-medium text-white shadow-lg hover:from-purple-700 hover:to-pink-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              >
                立即下载
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-8 py-4 text-base font-medium text-foreground hover:bg-foreground/5 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
              >
                查看文档
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>

            {/* 项目状态提示 */}
            <div className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 text-sm text-yellow-800 dark:text-yellow-200">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              项目处于早期开发阶段，仅供技术研究和教育目的
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              核心功能特性
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              专业的区块链钱包解决方案，为您提供安全可靠的数字资产管理体验
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-foreground/10 bg-background p-8 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-foreground/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-foreground/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              现代化技术架构
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              采用业界最佳实践，构建稳定可靠的微服务架构
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="text-center space-y-3 p-6 rounded-xl bg-background border border-foreground/10 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                  <p className="text-sm text-foreground/60">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-16 text-center shadow-2xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                开始使用 KawaiiChain Wallet
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-purple-100">
                立即体验安全便捷的区块链数字钱包，开启您的Web3之旅
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-purple-600 shadow-lg hover:bg-gray-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-all duration-200 transform hover:scale-105"
                >
                  下载应用
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-medium text-white hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-all duration-200"
                >
                  开发文档
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
