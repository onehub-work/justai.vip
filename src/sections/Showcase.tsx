import { motion } from 'framer-motion'
import { Camera, Sparkles, ExternalLink } from 'lucide-react'

const showcaseItems = [
  {
    id: 1,
    title: '精致咖啡馆',
    category: '餐饮',
    description: 'ins风探店写真，完美呈现咖啡店的格调与氛围',
    color: 'from-amber-600 to-orange-600',
    bgColor: 'bg-amber-50',
  },
  {
    id: 2,
    title: '网红餐厅',
    category: '餐饮',
    description: '高级感探店照片，突出菜品与环境的双重魅力',
    color: 'from-rose-600 to-pink-600',
    bgColor: 'bg-rose-50',
  },
  {
    id: 3,
    title: '精品民宿',
    category: '民宿',
    description: '温馨氛围写真，展现民宿的独特风格与贴心服务',
    color: 'from-teal-600 to-cyan-600',
    bgColor: 'bg-teal-50',
  },
  {
    id: 4,
    title: '美容院',
    category: '美业',
    description: '专业感探店图，传递美容院的专业与品质',
    color: 'from-purple-600 to-violet-600',
    bgColor: 'bg-purple-50',
  },
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Camera className="w-4 h-4 inline mr-1" />
            AI探店写真
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">AI虚拟博主</span> 探店样片
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            批量生成多场景真实感探店照片，提升店铺形象与吸引力
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`${item.bgColor} rounded-3xl p-6 lg:p-8 h-full transition-all duration-300 group-hover:shadow-xl`}>
                <div className="flex flex-col h-full">
                  {/* Placeholder for AI Image */}
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${item.color} mb-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Camera className="w-12 h-12 mx-auto mb-2 opacity-80" />
                        <span className="text-sm opacity-80">AI生成示例</span>
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium flex items-center gap-2 text-foreground">
                        <ExternalLink className="w-4 h-4" />
                        查看样片
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-muted flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        AI生成
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-secondary">
            <Camera className="mr-2 w-4 h-4" />
            查看更多样片
          </a>
        </motion.div>
      </div>
    </section>
  )
}