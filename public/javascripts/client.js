let board = [];

function drawBoard() {
	for (i = 0; i < 8; i++) {
		for (j = 0; j < 8; j++) {
			if (board[i][j][0]) {
				let obj = $('<div>', { class: 'piece', text: board[i][j][1] }).css({
					top: 100 / 8 * i + '%',
					left: 100 / 8 * j + '%'
					//color: (board[i][j][0] = "w") ? "white" : "black"
				});
				$('.overlayBoard').append(obj);
			}
		}
	}
}

function initBoard() {
	let color = 'b';

	for (rows = 0; rows < 8; rows++) {
		let row = [];

		if (rows <= 1) {
			color = 'b';
		} else if (rows >= 6) {
			color = 'w';
		} else {
			color = null;
		}

		for (cols = 0; cols < 8; cols++) {
			if (color) {
				if (rows == 0 || rows == 7) {
					switch (cols) {
						case 0:
						case 7:
							row[cols] = [ color, 'r' ];
							break;
						case 1:
						case 6:
							row[cols] = [ color, 'k' ];
							break;
						case 2:
						case 5:
							row[cols] = [ color, 'b' ];
							break;
						case 3:
							row[cols] = [ color, 'q' ];
							break;
						case 4:
							row[cols] = [ color, 'h' ];
							break;
					}
				} else {
					row[cols] = [ color, 'p' ];
				}
			} else {
				row[cols] = [];
			}
		}

		board.push(row);
	}
	drawBoard();
}

initBoard();
