import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "开发文档",
  description: "KawaiiChain Wallet 开发文档，包括快速开始、API接口、SDK使用指南等。",
};

export default function DocsPage() {
  const docSections = [
    {
      title: "快速开始",
      description: "了解如何快速开始使用 KawaiiChain Wallet",
      items: [
        { name: "项目概述", href: "/docs/overview", status: "available" },
        { name: "安装指南", href: "/docs/installation", status: "available" },
        { name: "快速上手", href: "/docs/quickstart", status: "available" },
        { name: "环境配置", href: "/docs/environment", status: "available" },
      ]
    },
    {
      title: "用户指南",
      description: "面向最终用户的使用指南",
      items: [
        { name: "创建钱包", href: "/docs/user/create-wallet", status: "developing" },
        { name: "导入钱包", href: "/docs/user/import-wallet", status: "developing" },
        { name: "转账教程", href: "/docs/user/transfer", status: "developing" },
        { name: "安全设置", href: "/docs/user/security", status: "planned" },
      ]
    },
    {
      title: "开发者文档",
      description: "面向开发者的技术文档",
      items: [
        { name: "API 接口", href: "/docs/api", status: "available" },
        { name: "SDK 文档", href: "/docs/sdk", status: "planned" },
        { name: "智能合约", href: "/docs/contracts", status: "planned" },
        { name: "插件开发", href: "/docs/plugin", status: "planned" },
      ]
    },
    {
      title: "技术架构",
      description: "深入了解系统架构和设计原理",
      items: [
        { name: "系统架构", href: "/docs/architecture", status: "available" },
        { name: "数据库设计", href: "/docs/database", status: "available" },
        { name: "安全机制", href: "/docs/security", status: "available" },
        { name: "性能优化", href: "/docs/performance", status: "planned" },
      ]
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">可用</span>;
      case "developing":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">开发中</span>;
      case "planned":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">计划中</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            开发文档
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-foreground/60">
            欢迎使用 KawaiiChain Wallet 开发文档。这里包含了完整的使用指南、API接口文档以及技术架构说明，帮助您快速上手和深入理解项目。
          </p>

          {/* 搜索框占位 */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索文档..."
                className="w-full pl-10 pr-4 py-3 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-foreground/40 mt-2">搜索功能即将上线</p>
          </div>
        </div>

        {/* 文档分类 */}
        <div className="space-y-12">
          {docSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="text-foreground/60">
                  {section.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="relative rounded-lg border border-foreground/10 bg-background p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.name}
                      </h3>
                      {getStatusBadge(item.status)}
                    </div>

                    {item.status === "available" ? (
                      <Link
                        href={item.href}
                        className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium"
                      >
                        查看文档
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-sm text-foreground/40 font-medium">
                        {item.status === "developing" ? "正在编写中..." : "敬请期待"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 贡献指南 */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-8 text-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              参与贡献
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              文档正在不断完善中。如果您发现任何问题或希望贡献内容，欢迎提交 Issue 或 Pull Request。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/kawaiichainwallet/kawaii-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/80 transition-colors"
              >
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                查看源码
              </Link>
              <Link
                href="https://github.com/kawaiichainwallet/kawaii-docs/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
              >
                反馈问题
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}