import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://pic3.zhimg.com/80/v2-b5a1c3f569213e05d363595ff1cf896e_720w.webp",
    siteTitle: "我的个人空间",
    github: "https://github.com/DuYi-Edu",
    qq: "1844254923",
    qqQrCode: "https://pic3.zhimg.com/80/v2-b5a1c3f569213e05d363595ff1cf896e_720w.webp",
    weixin: "12345",
    weixinQrCode: "https://pic3.zhimg.com/80/v2-b5a1c3f569213e05d363595ff1cf896e_720w.webp",
    mail: "wz@gmail.com",
    icp: "黑ICP备17001719号",
    githubName: "wz123",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});