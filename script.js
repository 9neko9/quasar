<script>
  const BAR_HEIGHT = 50;

  // 위쪽 띠
  const topBar = document.createElement('div');
  topBar.className = 'top-bar';

  // 아래쪽 띠
  const bottomBar = document.createElement('div');
  bottomBar.className = 'bottom-bar';

  // 스타일 강제로 고정 위치로 바꾸기
  Object.assign(topBar.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: BAR_HEIGHT + 'px',
    backgroundColor: 'black',
    zIndex: '9999',
  });

  Object.assign(bottomBar.style, {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    height: BAR_HEIGHT + 'px',
    backgroundColor: 'black',
    zIndex: '9999',
  });

  // 띠 삽입
  document.body.appendChild(topBar);
  document.body.appendChild(bottomBar);

  // body에 padding 추가해서 컨텐츠가 띠 밑에 가리지 않도록 공간 확보
  document.body.style.paddingTop = BAR_HEIGHT + 'px';
  document.body.style.paddingBottom = BAR_HEIGHT + 'px';

</script>

