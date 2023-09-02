export const selectAllBoards = state => state.boards.info;

export const selectBoardId = state => state.board.info._id;
export const selectIsBoardsLoading = state => state.boards.isLoading;
export const selectBoardData = state => state.board.info;

// -------vit--------
export const selectCurrentBoard = state => state.boards.currentBoard;
export const selectBoardBackground = state => state.board.background;
// -------vit--------
