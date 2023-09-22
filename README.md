# 1. cmd record
```bash
npx create-next-app@latest
npm install antd
npm install @ant-design/cssinjs --save
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

# 2. route contained
WIP:
- [x] pages and layout (app/page.tsx, app/layout.tsx, app/dashbord.tsx)
- [x] Link (app/page.tsx)
- [ ] Router (Mannually config history stack)
- [ ] Route Groups (Mannually collect models for the same usage 为方便前端分组管理代码，无实际效用)
- [x] Dynamic Route my-app\src\app\shop\\[categoryId]\\[itemId]
- [ ] Loading UI and streaming. Loading UI [参考链接](https://www.npmjs.com/package/react-loading-skeleton) 到时定制即可
- [x] Error Handling (app/dashboard/error.tsx)
- [ ] Parallel Loading . 用于layout中，可以并行加载渲染多个组件 
- [ ] Intercepting Routes 举例：在app/feed/page.js 你希望直接访问`/photo`而不是输入真实后端地址以获得对应photo(访问地址类似于app/feed/photo/[photoid] 样例代码[参考链接](https://github.com/vercel-labs/nextgram/tree/main/src/app/%40modal)
- [ ] Route Handler. Route 中转 (Why use it? *If you need to fetch data in a client component, you can call a Route Handler from the client. Route Handlers execute on the server and return the data to the client. This is useful when you don't want to expose sensitive information to the client, such as API tokens.*)
- [ ] 