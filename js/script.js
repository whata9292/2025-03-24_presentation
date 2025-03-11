// インサイトカードの展開機能
document.addEventListener('DOMContentLoaded', function() {
    // インサイトカードの展開/折りたたみ
    const insightCards = document.querySelectorAll('.insight-card');
    
    insightCards.forEach(card => {
      const expandButton = card.querySelector('.expand-button');
      
      if (expandButton) {
        expandButton.addEventListener('click', (e) => {
          e.stopPropagation();
          card.classList.toggle('expanded');
          
          if (card.classList.contains('expanded')) {
            expandButton.textContent = '詳細を閉じる';
          } else {
            expandButton.textContent = '詳細を表示';
          }
        });
      }
    });
    
    // ケーススタディの展開/折りたたみ
    const caseStudies = document.querySelectorAll('.case-study');
    
    caseStudies.forEach(study => {
      const header = study.querySelector('.case-header');
      
      if (header) {
        header.addEventListener('click', () => {
          study.classList.toggle('expanded');
          
          // アイコンの変更
          const icon = study.querySelector('.case-icon');
          if (icon) {
            if (study.classList.contains('expanded')) {
              icon.textContent = '▲';
            } else {
              icon.textContent = '▼';
            }
          }
        });
      }
    });
    
    // ドット背景の生成（メインページのみ）
    const dotsBackground = document.getElementById('dots-background');
    if (dotsBackground) {
      createDots();
    }
    
    function createDots() {
      const numDots = 100;
      
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        // ランダムな位置を設定
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        dot.style.left = x + '%';
        dot.style.top = y + '%';
        
        dotsBackground.appendChild(dot);
      }
    }
    
    // ローディング画面
    const loader = document.querySelector('.loading-overlay');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('loading-hidden');
      }, 1000);
    }
    
    // 初期状態で最初のケーススタディを開く（ケーススタディページのみ）
    if (window.location.href.includes('case-studies.html') && caseStudies.length > 0) {
      caseStudies[0].classList.add('expanded');
      const firstIcon = caseStudies[0].querySelector('.case-icon');
      if (firstIcon) {
        firstIcon.textContent = '▲';
      }
    }
  });