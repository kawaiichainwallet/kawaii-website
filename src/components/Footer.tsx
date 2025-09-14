import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "首页", href: "/" },
    { name: "文档", href: "/docs" },
    { name: "下载", href: "/download" },
    { name: "关于", href: "/about" },
  ];

  const resourceLinks = [
    { name: "GitHub", href: "https://github.com/kawaiichainwallet" },
    { name: "API文档", href: "/docs/api" },
    { name: "开发指南", href: "/docs/developer" },
    { name: "社区讨论", href: "https://github.com/kawaiichainwallet/kawaii-docs/discussions" },
  ];

  const legalLinks = [
    { name: "免责声明", href: "/legal/disclaimer" },
    { name: "隐私政策", href: "/legal/privacy" },
    { name: "使用条款", href: "/legal/terms" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* 品牌信息 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                <span className="text-lg font-bold text-white">K</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                KawaiiChain
              </span>
            </div>
            <p className="text-sm text-foreground/60 max-w-xs">
              安全、便捷的区块链数字钱包解决方案，让您轻松管理数字资产。
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/kawaiichainwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 开发资源 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">开发资源</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 法律信息 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">法律信息</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 版权信息和免责声明 */}
        <div className="mt-8 border-t pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-foreground/60">
              © {currentYear} KawaiiChain Team. 采用 BSD 3-Clause 许可证.
            </p>
            <p className="text-xs text-foreground/40 max-w-2xl mx-auto">
              ⚠️ 本项目仅供技术研究和教育目的使用。使用前请确保在您所在的司法管辖区合法，
              并遵守当地关于数字货币和区块链技术的法律法规。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}