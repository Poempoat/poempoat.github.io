const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#ff0000',
    loop: 'all',
    order: 'list',
    preload: false,
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: '夜に駆ける',
        artist: '5時、ナイトコードで',
        url: '/music/向夜晚奔去/xywbq.mp3',
        cover: '/music/向夜晚奔去/xywbq.jpg',
        lrc: '/music/向夜晚奔去/xywbq.lrc'
        
      },
{
        name: '七里香',
        artist: '周杰伦',
        url: '/music/七里香/qlx.mp3',
        cover: '/music/七里香/qlx.jpg',
        lrc: '/music/七里香/qlx.lrc'
        
      },
{
        name: 'Für Elise',
        artist: 'Richard Clayderman',
        url: '/music/致爱丽丝/zals.mp3',
        cover: '/music/致爱丽丝/zals.jpg',
        lrc: '/music/致爱丽丝/zals.lrc'
        
      },
{
        name: '真的不快乐（女版）',
        artist: '苏星婕',
        url: '/music/真的不快乐/zdbkl.mp3',
        cover: '/music/真的不快乐/zdbkl.jpg',
        lrc: '/music/真的不快乐/zdbkl.lrc'
        
      },
{
        name: 'aLIEz',
        artist: '瑞葵、SawanoHiroyuki[nZk]',
        url: '/music/aLIEz/aliez.mp3',
        cover: '/music/aLIEz/aliez.jpg',
        lrc: '/music/aLIEz/aliez.lrc'
        
      }
    ]
});