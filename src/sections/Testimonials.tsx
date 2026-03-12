import { motion } from 'framer-motion'
import { Quote, Star, Store, UtensilsCrossed, Home, Sparkles } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: '王老板',
    business: '老王烧烤',
    category: '餐饮',
    icon: UtensilsCrossed,
    avatar: 'W',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    content: '用了JustAI之后，美团好评率明显提升了！以前顾客不知道怎么写评价，现在扫码就能生成，质量还高。最惊喜的是文案都很真实，不像机器生成的。',
    rating: 5,
    stats: '好评率提升 40%',
  },
  {
    id: 2,
    name: '李店长',
    business: '溪云民宿',
    category: '民宿',
    icon: Home,
    avatar: 'L',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
    content: '民宿在小红书上的曝光量翻了一倍！AI生成的种草笔记配图精美、文案走心，完全抓住了年轻用户的喜好。现在每天都有新客人从小红书找过来。',
    rating: 5,
    stats: '曝光量增长 120%',
  },
  {
    id: 3,
    name: '张经理',
    business: '美颜坊',
    category: '美业',
    icon: Sparkles,
    avatar: 'Z',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    content: '朋友圈文案一直是我的痛点，自己写太花时间，请人写又太贵。JustAI的朋友圈文案生成得特别好，还能根据不同活动换风格，真的太实用了！',
    rating: 5,
    stats: '转化率提升 35%',
  },
  {
    id: 4,
    name: '陈老板',
    business: '发艺轩',
    category: '美发',
    icon: Store,
    avatar: 'C',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    content: '我们店在社区，主要靠老客带新客。现在顾客做完发型，扫码就能发一条带图好评到朋友圈，自带我们店的位置信息，不知不觉就帮我们宣传了。',
    rating: 5,
    stats: '新客增长 60%',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
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
            用户评价
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            已有 <span className="gradient-text">数千家商家</span> 信赖使用
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            来自餐饮、民宿、美业等不同行业商家的真实反馈
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${testimonial.bgColor} rounded-3xl p-6 lg:p-8`}
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Avatar */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                {/* Info */}
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <testimonial.icon className="w-4 h-4" />
                    <span>{testimonial.business}</span>
                    <span className="text-slate-300">|</span>
                    <span>{testimonial.category}</span>
                  </div>
                </div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Stats Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${testimonial.color}`} />
                <span className="text-sm font-medium text-foreground">{testimonial.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}