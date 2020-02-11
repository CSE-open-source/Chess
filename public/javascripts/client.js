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
				obj.addClass(board[i][j][0] == 'w' ? 'white' : 'black');

				obj.attr('row', i).attr('col', j).attr('piece', board[i][j][1]);

				$('.overlayBoard').append(obj);
			}
		}
	}
}

function initBoard() {
	localStorage.setItem('userColor', 'white');
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

function drawPosibleMove(row, col) {
	console.log('draw posible move ate', row, col);
	const obj = $('<div>', { class: 'posibleMoves' }).css({
		top: 100 / 8 * row + '%',
		left: 100 / 8 * col + '%'
	});

	$('.overlayBoard').append(obj);
}

function posibleMovesPawn(row, col) {
	if (localStorage.userColor == 'white') {
		if (row == 6) {
			drawPosibleMove(row - 2, col);
		}
		drawPosibleMove(row - 1, col);
	} else {
		if (row == 1) {
			drawPosibleMove(row + 2, col);
		}
		drawPosibleMove(row + 1, col);
	}
}

$(document).on('click', '.piece.' + localStorage.userColor, function() {
	$('.overlayBoard .posibleMoves').remove();

	const row = parseInt($(this).attr('row'));
	const col = parseInt($(this).attr('col'));
	const p = $(this).attr('piece');

	console.log(p, row, col);

	switch (p) {
		case 'p':
			posibleMovesPawn(row, col);
	}
});

initBoard();
