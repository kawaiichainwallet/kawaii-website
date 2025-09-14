"use client";

import { useState } from "react";
import { Metadata } from "next";

export default function DownloadPage() {
  const [activeTab, setActiveTab] = useState("mobile");

  const platforms = {
    mobile: {
      title: "移动端应用",
      description: "原生移动端体验，支持iOS和Android双平台",
      apps: [
        {
          name: "iOS 应用",
          icon: "📱",
          status: "coming-soon",
          requirements: "iOS 14.0 或更高版本",
          size: "约 50MB",
          features: ["Face ID / Touch ID 支持", "推送通知", "生物识别", "离线模式"],
          downloadLink: "#",
          storeLink: "App Store"
        },
        {
          name: "Android 应用",
          icon: "🤖",
          status: "coming-soon",
          requirements: "Android 7.0 或更高版本",
          size: "约 45MB",
          features: ["指纹识别", "推送通知", "暗黑模式", "多语言支持"],
          downloadLink: "#",
          storeLink: "Google Play"
        }
      ]
    },
    web: {
      title: "Web 版本",
      description: "在浏览器中直接使用，无需安装",
      apps: [
        {
          name: "Web 应用",
          icon: "🌐",
          status: "beta",
          requirements: "现代浏览器（Chrome 90+、Firefox 88+、Safari 14+）",
          size: "在线使用",
          features: ["响应式设计", "PWA 支持", "离线缓存", "跨平台同步"],
          downloadLink: "https://app.kawaiichainwallet.com",
          storeLink: "立即使用"
        },
        {
          name: "浏览器插件",
          icon: "🧩",
          status: "planned",
          requirements: "Chrome 90+ 或 Firefox 88+",
          size: "约 5MB",
          features: ["DApp 连接", "一键交易", "网页集成", "密码管理"],
          downloadLink: "#",
          storeLink: "Chrome 商店"
        }
      ]
    },
    desktop: {
      title: "桌面版本",
      description: "完整的桌面体验，功能更加丰富",
      apps: [
        {
          name: "Windows 版",
          icon: "🪟",
          status: "planned",
          requirements: "Windows 10 或更高版本",
          size: "约 150MB",
          features: ["完整功能", "硬件钱包支持", "多窗口", "高级安全"],
          downloadLink: "#",
          storeLink: "直接下载"
        },
        {
          name: "macOS 版",
          icon: "🍎",
          status: "planned",
          requirements: "macOS 11.0 或更高版本",
          size: "约 120MB",
          features: ["原生体验", "Touch Bar 支持", "Keychain 集成", "通知中心"],
          downloadLink: "#",
          storeLink: "直接下载"
        },
        {
          name: "Linux 版",
          icon: "🐧",
          status: "planned",
          requirements: "Ubuntu 20.04+ 或同等发行版",
          size: "约 140MB",
          features: ["开源构建", "包管理器支持", "终端工具", "系统集成"],
          downloadLink: "#",
          storeLink: "直接下载"
        }
      ]
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">可用</span>;
      case "beta":
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">测试版</span>;
      case "coming-soon":
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">即将发布</span>;
      case "planned":
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">计划中</span>;
      default:
        return null;
    }
  };

  const tabs = [
    { id: "mobile", name: "移动端", icon: "📱" },
    { id: "web", name: "Web 版", icon: "🌐" },
    { id: "desktop", name: "桌面版", icon: "💻" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            下载 KawaiiChain Wallet
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-foreground/60">
            选择适合您设备的版本，开始您的区块链数字钱包之旅。我们支持多个平台，确保您在任何设备上都能获得最佳体验。
          </p>

          {/* 项目状态提示 */}
          <div className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 text-sm text-yellow-800 dark:text-yellow-200">
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            项目处于早期开发阶段，部分版本仍在开发中
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 rounded-lg bg-foreground/5 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              {platforms[activeTab as keyof typeof platforms].title}
            </h2>
            <p className="text-foreground/60">
              {platforms[activeTab as keyof typeof platforms].description}
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {platforms[activeTab as keyof typeof platforms].apps.map((app, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-foreground/10 bg-background p-8 shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{app.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {app.name}
                        </h3>
                        <p className="text-sm text-foreground/60">{app.size}</p>
                      </div>
                    </div>
                    {getStatusBadge(app.status)}
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">系统要求</h4>
                    <p className="text-sm text-foreground/60">{app.requirements}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">主要特性</h4>
                    <ul className="space-y-1">
                      {app.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-foreground/60">
                          <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download Button */}
                  <div className="pt-4">
                    {app.status === "available" || app.status === "beta" ? (
                      <a
                        href={app.downloadLink}
                        className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:from-purple-700 hover:to-pink-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
                        target={app.downloadLink.startsWith("http") ? "_blank" : undefined}
                        rel={app.downloadLink.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        前往 {app.storeLink}
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full inline-flex items-center justify-center rounded-lg bg-foreground/10 px-6 py-3 text-base font-medium text-foreground/40 cursor-not-allowed"
                      >
                        {app.status === "coming-soon" ? "即将发布" : "敬请期待"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mt-16 rounded-2xl bg-foreground/5 p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">安装指南</h2>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <span className="mr-2">🔒</span>
                  安全提醒
                </h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>• 请只从官方渠道下载应用，避免使用非官方版本</li>
                  <li>• 安装前请验证应用的数字签名</li>
                  <li>• 首次使用时，请仔细阅读隐私政策和使用条款</li>
                  <li>• 建议在安全的网络环境中进行下载和安装</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <span className="mr-2">📋</span>
                  使用须知
                </h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>• 本项目仅供技术研究和教育目的</li>
                  <li>• 使用前请了解当地相关法律法规</li>
                  <li>• 妥善保管您的私钥和助记词</li>
                  <li>• 建议先在测试网络上进行体验</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-16 text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            需要帮助？
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            如果您在下载或安装过程中遇到问题，请查看我们的帮助文档或联系技术支持。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-6 py-3 text-base font-medium text-foreground hover:bg-foreground/5 transition-colors"
            >
              查看文档
            </a>
            <a
              href="https://github.com/kawaiichainwallet/kawaii-docs/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-6 py-3 text-base font-medium text-foreground hover:bg-foreground/5 transition-colors"
            >
              技术支持
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}