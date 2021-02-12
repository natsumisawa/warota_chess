let MODE = 'mono';

initialize();

function changeMode () {
  if (MODE === 'mono') {
    MODE = 'color';
  } else {
    MODE = 'mono';
  }
  initialize();
}

function initialize() {
  // コンストラクタに渡す初期値
  const config = {
    // チェスの駒を初期位置にする
    position: 'start',
    pieceTheme: 'img/chesspieces/' + MODE + '/{piece}.png'
  };
  ChessBoard('board', config);
}
