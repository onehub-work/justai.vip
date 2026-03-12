import { Sparkles, QrCode, MessageCircle, Mail } from 'lucide-react'

const footerLinks = {
  product: {
    title: '产品',
    links: [
      { label: 'AI文案生成', href: '#' },
      { label: 'AI探店写真', href: '#' },
      { label: '小程序体验', href: '#' },
      { label: '使用教程', href: '#' },
    ],
  },
  resources: {
    title: '资源',
    links: [
      { label: '营销日历', href: '#' },
      { label: '运营指南', href: '#' },
      { label: '推广模板', href: '#' },
      { label: '常见问题', href: '#' },
    ],
  },
  about: {
    title: '关于',
    links: [
      { label: '关于我们', href: '#' },
      { label: '联系我们', href: '#' },
      { label: '商务合作', href: '#' },
      { label: '隐私政策', href: '#' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto section-padding py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                准备好让AI助力你的生意了吗？
              </h2>
              <p className="text-white/60">
                扫码免费体验，无需注册，立即开始使用
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary bg-white text-foreground hover:bg-white/90">
                <Sparkles className="mr-2 w-4 h-4" />
                免费体验
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand & QR Codes */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">JustAI</span>
            </a>
            <p className="text-white/60 mb-6 max-w-sm">
              AI助力你的生意，让每一位店铺老板都能轻松搞定线上营销
            </p>
            
            {/* QR Codes */}
            <div className="flex gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-xl mb-2 flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-foreground" />
                </div>
                <span className="text-xs text-white/60">小程序</span>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-xl mb-2 flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-foreground" />
                </div>
                <span className="text-xs text-white/60">公众号</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto section-padding py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © 2024 JustAI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}