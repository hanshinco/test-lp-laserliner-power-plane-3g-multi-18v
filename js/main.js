// スクロール連動フェードイン（.reveal に .in を付与）
const io = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('in');
    io.unobserve(entry.target);
  }
}), { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ハンバーガーメニュー（サイトヘッダー・製品ナビ 各トグル）
document.querySelectorAll('.hamburger').forEach(toggle => {
  const menu = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  });

  // メニュー内リンクの選択で閉じる
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
});
