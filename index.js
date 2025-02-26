// index.js
Page({
  data: {
    currentDate: ''
  },
  onLoad() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    this.setData({
      currentDate: formattedDate
    });
  },
  handleSubmit(e) {
    const { name, email, message } = e.detail.value;
    wx.showToast({
      title: `提交成功！姓名: ${name}`,
      icon: 'success',
      duration: 2000
    });
  }
});
