export const boardsForSideBar = [
  {
    title: 'test board title 1',
    icon: 'icon1',
    owner: 'user-1',
    _id: 'board-1',
  },
  {
    title: 'test board 2',
    icon: 'icon2',
    owner: 'user-1',
    _id: 'board-2',
  },
];

export const currentBoardForScreensPage = {
  _id: 'board-1',
  title: 'test board title 1',
  owner: 'user-1',
  icon: 'icon1',
  background:
    'https://cdn.pixabay.com/photo/2023/05/29/14/05/mountains-8026175_1280.jpg',
  columns: [
    {
      _id: 'board-1-column-1',
      title: 'column title 1',
      boardId: 'board-1',
      tasks: [
        {
          _id: 'board-1-column-1-task-1',
          title: 'task title 1',
          boardId: 'board-1',
          columnId: 'board-1-column-1',
          text: 'Write a 50-character sentence about the bright morning',
          priority: 'low',
          deadline: '2023-08-30',
          order: '1',
        },
        {
          _id: 'board-1-column-1-task-2',
          title: 'task 2',
          boardId: 'board-1',
          columnId: 'board-1-column-1',
          text: 'Explore and brainstorm new creative ideas for a project',
          priority: 'high',
          deadline: '2023-08-31',
          order: '2',
        },
        {
          _id: 'board-1-column-1-task-3',
          title: 'title 3',
          boardId: 'board-1',
          columnId: 'board-1-column-1',
          text: 'Reflect on how to make the most of your time today. Reflect on how to make the most of your time today',
          priority: 'without',
          deadline: '2023-09-30',
          order: '3',
        },
      ],
    },
    {
      _id: 'board-1-column-2',
      title: 'title column 2',
      boardId: 'board-1',
      tasks: [
        {
          _id: 'board-1-column-2-task-1',
          title: 'task title 1',
          boardId: 'board-1',
          columnId: 'board-1-column-2',
          text: 'Research the latest trends in web design for inspiration',
          priority: 'low',
          deadline: '2023-08-30',
          order: '1',
        },
        {
          _id: 'board-1-column-2-task-2',
          title: 'task 2',
          boardId: 'board-1',
          columnId: 'board-1-column-2',
          text: 'List down three healthy snacks to keep you energized throughout the day.',
          priority: 'high',
          deadline: '2023-08-31',
          order: '2',
        },
      ],
    },
  ],
};
