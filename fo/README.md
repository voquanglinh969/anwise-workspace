# Anwise - Next-Gen Tech Discovery Platform (Frontend)

Anwise là một nền tảng khám phá công nghệ hiện đại, chuyên cung cấp các bài viết đánh giá chuyên sâu, tin tức công nghệ mới nhất, hướng dẫn mua sắm (Buying Guides) và các chương trình khuyến mãi (Deals) hấp dẫn.

Dự án này được xây dựng với mục tiêu mang lại trải nghiệm đọc tin tức công nghệ cao cấp, mượt mà và trực quan trên mọi nền tảng.

---

## 🚀 Công nghệ Sử dụng (Tech Stack)

Hệ thống Frontend (FO) được xây dựng dựa trên những công nghệ tiên tiến nhất hiện nay:

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) - Tối ưu hóa hiệu năng, SEO và routing mạnh mẽ.
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/) - Đảm bảo tính ổn định và chặt chẽ của mã nguồn.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Thiết kế giao diện hiện đại, tối ưu hóa CSS bundle.
- **Quản lý trạng thái**: [TanStack Query v5 (React Query)](https://tanstack.com/query/latest) - Xử lý caching và đồng bộ dữ liệu hiệu quả.
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/) - Các thành phần giao diện chuẩn, dễ dàng tùy biến.
- **Biểu tượng**: [Lucide React](https://lucide.dev/) - Bộ thư viện icon vector sắc nét.
- **Phông chữ**: Đồng bộ phông chữ cao cấp (Outfit cho Heading, Inter cho Body text).

---

## 📂 Kiến trúc Thư mục (Project Organization)

Toàn bộ mã nguồn được tổ chức theo cấu trúc module rõ ràng trong thư mục `src`:

```
src/
├── app/            # Cấu trúc Routing (Home, Search, Error Pages, Layout)
├── components/     # Các thành phần giao diện (UI, Layout, Business Components)
│   ├── ui/         # Components dùng chung (Button, Input, SafeImage, StatusState)
│   ├── search/     # Components đặc thù cho chức năng tìm kiếm
│   └── .../        # Sections cho trang chủ (Hero, Trending, Guides)
├── data/           # Mock data để mô phỏng dữ liệu thực tế từ Backend
├── hooks/          # Custom Hooks (useSearch, useArticles, useNavigation)
├── lib/            # Tiện ích chung (Utility functions, class merging)
├── services/       # Lớp trừu tượng quản lý API / Fetching dữ liệu
└── types/          # Định nghĩa kiểu dữ liệu TypeScript (Interface, Type)
```

---

## ✨ Tính năng Nổi bật

- **Trang chủ Năng động**: Hiển thị các bài viết Hero quan trọng cùng Sidebar xu hướng công nghệ (Trending Now).
- **Hệ thống Tìm kiếm Cao cấp**: Tìm kiếm tức thì các bài viết, sản phẩm và hướng dẫn với bộ lọc thông minh.
- **Buying Guides & Top Picks**: Khu vực chuyên biệt cho các bài đánh giá sản phẩm và hướng dẫn mua sắm (Expert Tips).
- **Xử lý Lỗi Thông minh**: 
  - **SafeImage Component**: Tự động hiển thị fallback branded UI khi hình ảnh từ nguồn bên thứ ba bị lỗi.
  - **Custom Error Boundaries**: Trang 404 (Not Found) và Error được thiết kế chuyên nghiệp theo phong cách Anwise.
- **Thiết kế Responsive**: Giao diện linh hoạt, tương thích hoàn hảo từ Mobile đến Desktop 4K.

---

## 🛠️ Hướng dẫn Khởi chạy (Getting Started)

### 1. Yêu cầu Hệ thống
- **Node.js**: Phiên bản 18.x trở lên.
- **Trình quản lý gói**: `npm`, `pnpm` hoặc `bun`.

### 2. Cài đặt
Cài đặt các gói phụ thuộc:
```bash
npm install
# hoặc
bun install
```

### 3. Chạy Môi trường Phát triển
Bật local server (mặc định tại `localhost:3000` hoặc `3001` tùy cấu hình):
```bash
npm run dev
```

### 4. Xây dựng & Triển khai
Để tạo bản build chính thức (Production):
```bash
npm run build
npm run start
```

---

## 📝 Quy ước & Best Practices

- **Typography**: Luôn sử dụng lớp `font-heading` cho tiêu đề và `font-sans` cho nội dung văn bản.
- **Image Handling**: Sử dụng `<SafeImage />` thay cho `<Image />` mặc định của Next.js để tránh vỡ giao diện khi mất nguồn ảnh.
- **Components**: Ưu tiên tái sử dụng các component trong `src/components/ui`.

---

© 2026 **Anwise Team**. Đã đăng ký bản quyền.
