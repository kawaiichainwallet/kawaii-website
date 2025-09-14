import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解 KawaiiChain Wallet 项目的使命、愿景和开发团队。我们致力于构建安全、便捷的区块链数字钱包解决方案。",
};

export default function AboutPage() {
  const milestones = [
    {
      date: "2025年Q1",
      title: "项目启动",
      description: "确定技术架构和核心功能设计"
    },
    {
      date: "2025年Q2",
      title: "MVP开发",
      description: "完成基础钱包功能和核心API开发"
    },
    {
      date: "2025年Q3",
      title: "测试版发布",
      description: "发布移动端测试版本，开放社区测试"
    },
    {
      date: "2025年Q4",
      title: "正式发布",
      description: "发布稳定版本，上线应用商店"
    },
    {
      date: "2026年Q1",
      title: "功能扩展",
      description: "增加生活缴费和商户支付功能"
    },
    {
      date: "2026年Q2",
      title: "生态完善",
      description: "浏览器插件和桌面版本发布"
    }
  ];

  const values = [
    {
      icon: "🔒",
      title: "安全至上",
      description: "采用业界最高安全标准，保护用户的数字资产安全"
    },
    {
      icon: "🌍",
      title: "开放生态",
      description: "支持多链生态，为用户提供更广泛的选择"
    },
    {
      icon: "👥",
      title: "用户友好",
      description: "注重用户体验，降低区块链技术使用门槛"
    },
    {
      icon: "🚀",
      title: "技术创新",
      description: "持续探索前沿技术，推动行业发展"
    }
  ];

  const features = [
    "基于最新的加密算法确保资产安全",
    "支持主流区块链网络和代币",
    "原生移动端和Web端体验",
    "开源透明的开发过程",
    "活跃的社区生态系统",
    "持续的技术支持和更新"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950/20 dark:via-background dark:to-pink-950/20 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              关于 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">KawaiiChain</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-foreground/60">
              我们致力于构建安全、便捷的区块链数字钱包解决方案，让每个人都能轻松地管理和使用数字资产。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  我们的使命
                </h2>
                <p className="text-lg text-foreground/60">
                  让区块链技术更加普及和易用，为用户提供安全、便捷的数字资产管理体验。
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">🎯 愿景</h3>
                  <p className="text-foreground/60">
                    成为全球领先的区块链钱包解决方案，推动Web3技术的普及和发展。
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">💡 理念</h3>
                  <p className="text-foreground/60">
                    以用户为中心，通过技术创新降低区块链使用门槛，让更多人享受数字经济带来的便利。
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">🔮 未来</h3>
                  <p className="text-foreground/60">
                    构建完整的数字资产生态系统，支持从个人钱包到企业级解决方案的全方位需求。
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  核心价值观
                </h2>
                <p className="text-lg text-foreground/60">
                  我们的价值观指导着产品设计和技术决策的每一个环节。
                </p>
              </div>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{value.icon}</div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-foreground/60">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-foreground/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              为什么选择我们
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              KawaiiChain Wallet 具备以下核心优势和特性
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 rounded-lg bg-background border border-foreground/10 p-4"
              >
                <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              发展路线图
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              我们的项目发展规划和重要里程碑
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-foreground/20 sm:left-1/2 sm:ml-[-1px]"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center space-x-6 sm:space-x-0 ${
                    index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  <div className="absolute left-4 w-3 h-3 bg-purple-600 rounded-full sm:left-1/2 sm:ml-[-6px]"></div>

                  <div className={`ml-12 sm:ml-0 max-w-md ${index % 2 === 0 ? "sm:mr-12" : "sm:ml-12"}`}>
                    <div className="rounded-lg border border-foreground/10 bg-background p-6 shadow-sm">
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-purple-600">
                          {milestone.date}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-foreground/60">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-24 bg-yellow-50 dark:bg-yellow-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/20">
                <svg className="h-8 w-8 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">
                重要声明
              </h2>
            </div>

            <div className="prose prose-yellow max-w-none">
              <div className="bg-white dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                  技术交流与教育目的
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300 mb-4">
                  <strong>KawaiiChain Wallet 是一个开源的技术研究和教育项目，仅供学习、研究和技术交流使用。</strong>
                </p>

                <div className="space-y-4 text-yellow-700 dark:text-yellow-300">
                  <div>
                    <strong>合规责任：</strong>
                    使用者需自行了解并遵守所在国家和地区关于数字货币、区块链技术的相关法律法规。我们不对任何违法使用承担责任。
                  </div>

                  <div>
                    <strong>风险提示：</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>数字资产具有高风险性，价格波动剧烈</li>
                      <li>私钥丢失可能导致资产永久损失</li>
                      <li>区块链交易具有不可逆性</li>
                      <li>智能合约可能存在未知漏洞</li>
                    </ul>
                  </div>

                  <div>
                    <strong>无担保声明：</strong>
                    本软件按"现状"提供，不提供任何明示或暗示的担保。开发团队不对使用本软件造成的任何损失承担责任。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                联系我们
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-foreground/60">
                如果您对项目有任何问题或建议，欢迎通过以下方式与我们联系
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">GitHub</h3>
                <Link
                  href="https://github.com/kawaiichainwallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  @kawaiichainwallet
                </Link>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">邮箱</h3>
                <Link
                  href="mailto:kawaiichainwallet@gmail.com"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  kawaiichainwallet@gmail.com
                </Link>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">讨论</h3>
                <Link
                  href="https://github.com/kawaiichainwallet/kawaii-docs/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  社区讨论
                </Link>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">问题反馈</h3>
                <Link
                  href="https://github.com/kawaiichainwallet/kawaii-docs/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  提交 Issue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}