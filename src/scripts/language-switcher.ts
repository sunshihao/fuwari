// 在页面加载时初始化语言设置
document.addEventListener('DOMContentLoaded', () => {
  // 从 localStorage 获取保存的语言
  const savedLang = localStorage.getItem('preferred-lang');
  
  // 如果有保存的语言，应用它
  if (savedLang) {
    document.documentElement.setAttribute('lang', savedLang);
    
    // 如果需要，可以在这里添加其他与语言相关的初始化
  }
});

// 导出一个函数，用于在其他组件中切换语言
export function switchLanguage(lang: string): void {
  localStorage.setItem('preferred-lang', lang);
  window.location.reload();
}