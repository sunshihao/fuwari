<script>
  import { onMount } from 'svelte';
  import { languages } from "../i18n/languages";
  import { getCurrentLanguage } from "../i18n/translation";
  
  // 声明变量
  let currentPath = '';
  let languageSwitcher;
  let languageButton;
  let languagePanel;
  let currentLang = '';
  
  // 在组件挂载后执行
  onMount(() => {
    // 获取当前路径
    currentPath = window.location.pathname;
    
    // 获取DOM元素
    languageSwitcher = document.querySelector(".language-switcher");
    languageButton = document.getElementById("language-switch");
    languagePanel = document.getElementById("language-panel");
    
    // 点击按钮切换面板显示状态
    languageButton?.addEventListener("click", () => {
      languagePanel?.classList.toggle("float-panel-closed");
    });
    
    // 鼠标悬浮显示面板
    languageButton?.addEventListener("mouseenter", () => {
      languagePanel?.classList.remove("float-panel-closed");
    });
    
    // 鼠标离开隐藏面板
    languageSwitcher?.addEventListener("mouseleave", () => {
      languagePanel?.classList.add("float-panel-closed");
    });
    
    // 点击外部关闭下拉菜单
    document.addEventListener("click", (event) => {
      if (!languageSwitcher?.contains(event.target)) {
        languagePanel?.classList.add("float-panel-closed");
      }
    });
    
    // 设置当前语言
    currentLang = getCurrentLanguage();
    document.documentElement.lang = currentLang;
    
    // 标记当前选中的语言
    const currentLangItem = languagePanel?.querySelector(`[data-lang="${currentLang}"]`);
    currentLangItem?.classList.add("current-language");
    
    // 页面加载时恢复滚动位置
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      localStorage.removeItem('scrollPosition');
    }
  });
  
  // 切换语言的函数
  function switchLanguage(event, lang, url) {
    event.preventDefault();
    
    // 添加点击动画效果
    const clickedItem = event.currentTarget;
    clickedItem.classList.add('language-click-effect');
    
    // 保存用户选择的语言到 localStorage
    localStorage.setItem('preferred-lang', lang);
    
    // 保存当前滚动位置
    localStorage.setItem('scrollPosition', window.scrollY.toString());
    
    // 延迟跳转，让动画效果显示
    setTimeout(() => {
      // 使用 location.href 进行硬刷新而不是客户端导航
      window.location.href = url;
    }, 150);
  }
</script>

<div class="language-switcher relative z-50" role="menu" tabindex="-1" bind:this={languageSwitcher}>
  <button aria-label="Language" role="menuitem" class="btn-plain scale-animation rounded-lg w-11 h-11 active:scale-90" id="language-switch">
    <span class="material-symbols-language text-[1.25rem]">language</span>
  </button>
  <div id="language-panel" class="hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5">
    <div class="card-base float-panel p-2">
      {#each Object.values(languages) as lang}
        <a
          href={`/${lang.code}${currentPath.replace(/^\/[a-z]{2}\/|^\//, "/")}`}
          class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5 language-item"
          data-lang={lang.code}
          on:click={(e) => switchLanguage(e, lang.code, `/${lang.code}${currentPath.replace(/^\/[a-z]{2}\/|^\//, "/")}`)}
        >
          {lang.name}
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  .language-switcher {
    position: relative;
  }
  
  .float-panel {
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }
  
  .float-panel-closed {
    transform: translateY(-10px);
    opacity: 0;
    pointer-events: none;
  }
  
  .current-language {
    background-color: var(--btn-active-bg);
    color: var(--btn-active-color);
  }
  
  .language-click-effect {
    animation: pulse 0.15s ease-in-out;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  
  .language-item {
    position: relative;
    overflow: hidden;
  }
  
  .language-item::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  }
  
  .language-item:active::after {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0.1;
  }
</style>