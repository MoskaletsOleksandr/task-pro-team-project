export const selectAllBoards = state => state.boards.info;
export const selectBoardId = state => state.board.info._id;
export const selectIsBoardsLoading = state => state.boards.isLoading;
export const selectBoardData = state => state.board.info;