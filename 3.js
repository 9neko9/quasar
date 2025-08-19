<!DOCTYPE html>
<html lang="ko">
<head>
// 스크롤 시 패럴랙스 효과 적용
window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const speed = section.dataset.speed || 0.5;
        const offset = window.pageYOffset * speed;
        section.style.backgroundPosition = `center ${offset}px`;
    });
});