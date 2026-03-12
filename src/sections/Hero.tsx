import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Check, Star, MessageCircle, Share2 } from 'lucide-react'

const floatingIcons = [
  { Icon: Star, color: 'text-yellow-500', delay: 0 },
  { Icon: MessageCircle, color: 'text-primary', delay: 0.2 },
  { Icon: Share2, color: 'text-secondary', delay: 0.4 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -20, 0] }}
          transition={{
            opacity: { duration: 0.5, delay },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay },
          }}
          className={`absolute hidden lg:block ${
            index === 0 ? 'top-32 right-1/4' : index === 1 ? 'top-1/3 left-20' : 'bottom-1/3 right-20'
          }`}
        >
          <div className={`w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center ${color}`}>
            <Icon className="w-6 h-6" />
          </div>
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto section-padding py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI助力你的生意
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              一键生成
              <br />
              <span className="gradient-text">全平台营销文案</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
              美团好评、抖音种草、小红书笔记、朋友圈文案...只需3步，AI帮你写出专业营销内容，让每一位店铺老板都能轻松搞定线上营销
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['无需注册', '免费使用', '多平台支持'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="btn-primary">
                免费体验
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#" className="btn-secondary">
                查看演示
              </a>
            </div>
          </motion.div>

          {/* Right Content - Product Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-6 lg:p-8">
                {/* Mock UI */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">AI文案生成</div>
                        <div className="text-xs text-muted">Deepseek 定制模型</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">美团</span>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <div className="text-xs text-muted mb-1">店铺名称</div>
                      <div className="text-sm">老街烧烤 · 夜宵专门店</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <div className="text-xs text-muted mb-1">特色菜品</div>
                      <div className="text-sm">秘制烤串、小龙虾、精酿啤酒</div>
                    </div>
                  </div>

                  {/* Generate Button */}
                  <button className="w-full py-3 rounded-xl bg-gradient-primary text-white font-medium flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    生成好评文案
                  </button>

                  {/* Result */}
                  <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-muted">已生成</span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">
                      这家烧烤店真的太赞了！秘制烤串香气扑鼻，肉质鲜嫩多汁，小龙虾个头超大，味道麻辣鲜香。环境也很棒，服务员态度热情。已经推荐给朋友们了，下次还要来！
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}