const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#ff0000',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: '夜に駆ける',
        artist: '5時、ナイトコードで',
        url: '/music/xywbq.mp3',
        cover: '/images/music/xywbq.jpg',
        lrc: '/lyrics/xywbq.lrc'
        
      }
    ]
});