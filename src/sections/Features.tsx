import { motion } from 'framer-motion'
import { Cpu, Zap, Globe, Shield, Clock, Palette } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: '定制化AI模型',
    description: '基于Deepseek、Azure、豆包等顶尖大模型，针对营销场景深度调优，生成更贴合平台调性的优质内容',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: '零门槛使用',
    description: '无需注册登录，扫码即用。三步完成文案生成，从店铺信息到成品文案只需30秒',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: '全平台覆盖',
    description: '一次生成，适配美团、大众点评、抖音、小红书、朋友圈等多个平台，实现全渠道营销',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'AI探店写真',
    description: '搭配AI虚拟博主，批量生成多场景的真实感探店照片，让你的店铺形象更出众',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: '稳定可靠',
    description: '自2023年4月上线以来持续迭代优化，服务稳定，已有数千家商家信赖使用',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Clock,
    title: '7x24小时服务',
    description: '随时随地生成营销文案，深夜上新、节假日促销都不怕，AI永远在线',
    color: 'from-indigo-500 to-violet-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            核心优势
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            为什么选择 <span className="gradient-text">JustAI</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            专为线下实体商家打造的AI营销工具，让复杂的营销文案创作变得简单高效
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}