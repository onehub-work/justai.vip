# JustAI 企业官网

JustAI 品牌官方网站 - AI助力你的生意，一键生成全平台营销文案。

## 项目介绍

本项目是 justai.vip 品牌的响应式企业官网，参考 justai.vip的设计风格，为线下实体商家提供AI营销工具的产品展示。

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: TailwindCSS
- **动画**: Framer Motion
- **图标**: Lucide React

## 功能模块

1. **Hero Section** - 首屏展示，核心价值主张
2. **Features** - 核心优势展示
3. **UseCases** - 多平台使用场景
4. **Showcase** - AI探店写真样片
5. **Testimonials** - 用户评价
6. **Stats** - 数据统计
7. **Resources** - 运营干货资源
8. **Footer** - 底部导航和转化

## 品牌设计

### 色彩系统
- 主色: #0EA5E9 (天空蓝) → #10B981 (翡翠绿) 渐变
- 辅色: #6366F1 (靛蓝)
- 背景: #F8FAFC
- 文字: #1E293B / #64748B

### 设计风格
- 清爽简约浅色系
- 大量留白
- 圆角卡片布局
- 渐变色彩点缀

## 开发命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 目录结构

```
justai-website/
├── src/
│   ├── components/      # 通用组件
│   ├── sections/        # 页面区块
│   ├── styles/          # 样式文件
│   ├── App.tsx          # 应用入口
│   └── main.tsx         # 主入口
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 部署

构建后的静态文件可部署到任何静态托管服务：
- Vercel
- Netlify
- GitHub Pages
- 阿里云 OSS
- 腾讯云 COS

## 注意事项

1. 确保所有图片资源使用CDN加速
2. 配置正确的SEO meta标签
3. 添加网站访问统计代码
4. 配置404页面重定向

---

**JustAI** - 让每一个店铺老板都能轻松搞定线上营销