import { motion } from 'framer-motion'
import { BookOpen, Calendar, FileText, ExternalLink } from 'lucide-react'

const resources = [
  {
    icon: Calendar,
    title: '2025营销日历',
    description: '全年营销节点规划，节日、热点、促销一个不落',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    action: '免费下载',
  },
  {
    icon: BookOpen,
    title: '平台运营指南',
    description: '美团、小红书、抖音等平台运营技巧与避坑指南',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    action: '查看详情',
  },
  {
    icon: FileText,
    title: '推广计划模板',
    description: '可复制的新店开业、节日促销推广计划模板',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    action: '免费获取',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-32 bg-white">
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
            运营干货
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            免费 <span className="gradient-text">营销资源</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            精选实用营销资料，助力你的生意更上一层楼
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`${resource.bgColor} rounded-3xl p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-xl`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {resource.title}
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  {resource.description}
                </p>

                {/* Action */}
                <button className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group/btn">
                  {resource.action}
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}