import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Heart, MessageCircle, Share2, Check } from 'lucide-react'

const platforms = [
  {
    id: 'review',
    name: '团购/外卖平台',
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    description: '一键生成美团、大众点评优质评价',
    features: ['自动适配平台风格', '多种星级评价模板', '突出店铺特色', '真实感好评文案'],
    example: {
      platform: '美团好评',
      content: '这家店的服务真的没得说！从进门就感受到热情周到的接待，菜品口味正宗，分量也很足。环境干净整洁，性价比超高。已经是第三次来了，每次都很满意，强烈推荐给大家！',
      tags: ['服务好', '口味佳', '环境棒', '性价比'],
    },
  },
  {
    id: 'content',
    name: '内容平台',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    description: '小红书、抖音、知乎种草笔记生成',
    features: ['爆款标题生成', 'emoji自动搭配', '话题标签推荐', '多风格切换'],
    example: {
      platform: '小红书种草',
      content: '姐妹们！发现一家宝藏店铺✨\n\n📍地址：市中心XX路\n💰人均：80元\n\n店面不大但是装修超有格调，拍照打卡巨出片！主打创意料理，每道菜都像艺术品一样精致。\n\n推荐必点：\n🌟招牌XX - 口感层次丰富\n🌟特色XX - 颜值与美味并存\n\n#探店 #美食推荐 #周末去哪儿 #宝藏店铺',
      tags: ['探店', '美食', '打卡'],
    },
  },
  {
    id: 'private',
    name: '微信生态',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    description: '朋友圈文案、活动通知、私域营销',
    features: ['朋友圈短文案', '活动长文案', '社群话术', '节日营销模板'],
    example: {
      platform: '朋友圈文案',
      content: '今日份开心🎉\n\n感谢每一位到店支持的朋友，你们的认可是我们前进的动力！\n\n周末特惠活动进行中，到店享8折优惠，快来尝尝我们的新品吧～\n\n#感恩有你 #周末约起来',
      tags: ['活动', '优惠', '新品'],
    },
  },
]

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('review')
  const activePlatform = platforms.find((p) => p.id === activeTab) || platforms[0]

  return (
    <section id="usecases" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            使用场景
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            一码搞定 <span className="gradient-text">全平台营销</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            去中心化营销获客，让顾客成为你的店铺推广大使
          </p>
        </motion.div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActiveTab(platform.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === platform.id
                  ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-muted hover:text-foreground hover:shadow-md'
              }`}
            >
              <platform.icon className="w-4 h-4" />
              {platform.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left - Features */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {activePlatform.description}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {activePlatform.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${activePlatform.color} flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-muted">{feature}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="btn-primary">
                立即体验
                <Share2 className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Right - Example Card */}
            <div className={`${activePlatform.bgColor} rounded-3xl p-6 lg:p-8`}>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                {/* Platform Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${activePlatform.color} text-white`}>
                    {activePlatform.example.platform}
                  </span>
                  <div className="flex gap-2">
                    {activePlatform.example.tags.map((tag, index) => (
                      <span key={index} className="text-xs text-muted bg-slate-100 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Content */}
                <div className="text-foreground leading-relaxed whitespace-pre-line">
                  {activePlatform.example.content}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}