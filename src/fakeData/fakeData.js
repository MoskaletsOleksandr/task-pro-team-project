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
                  text: 'Reflect on how to make the most of your time today.Brainstorm and develop creative concepts and ideas that align with the projects objectives, considering factors such as target audience, messaging, and visual representation',
                  priority: 'without',
                  deadline: '2023-08-30',
                  order: '3',
              },
              {
                  _id: 'board-1-column-1-task-4',
                  title: 'New Task 1',
                  boardId: 'board-1',
                  columnId: 'board-1-column-1',
                  text: 'This is a new task description for testing',
                  priority: 'medium',
                  deadline: '2023-08-30',
                  order: '4',
              },
              {
                  _id: 'board-1-column-1-task-5',
                  title: 'New Task 2',
                  boardId: 'board-1',
                  columnId: 'board-1-column-1',
                  text: 'Another new task for the first column',
                  priority: 'low',
                  deadline: '2023-10-20',
                  order: '5',
              },
              {
                  _id: 'board-1-column-1-task-6',
                  title: 'New Task 3',
                  boardId: 'board-1',
                  columnId: 'board-1-column-1',
                  text: 'Yet another task to complete',
                  priority: 'high',
                  deadline: '2023-10-10',
                  order: '6',
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
                  priority: 'medium',
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
      {
          _id: 'board-1-column-3',
          title: 'title column 3', // Replace with desired title
          boardId: 'board-1',
          tasks: [
              {
                  _id: 'board-1-column-3-task-1',
                  title: 'task title 1',
                  boardId: 'board-1',
                  columnId: 'board-1-column-3',
                  text: 'Your task text here.Reflect on how to make the most of your time today. Reflect on how to make the most of your time today', // Replace with desired task text
                  priority: 'low',
                  deadline: '2023-08-31',
                  order: '1',
              },
              {
                  _id: 'board-1-column-3-task-2',
                  title: 'task 2',
                  boardId: 'board-1',
                  columnId: 'board-1-column-3',
                  text: 'Your task text here', // Replace with desired task text
                  priority: 'high',
                  deadline: '2023-08-30',
                  order: '2',
              },
          ],
      },
      {
          _id: 'board-1-column-4',
          title: 'title column 4', // Replace with desired title
          boardId: 'board-1',
          tasks: [
              {
                  _id: 'board-1-column-4-task-1',
                  title: 'task title 1',
                  boardId: 'board-1',
                  columnId: 'board-1-column-4',
                  text: 'Your task text here', // Replace with desired task text
                  priority: 'medium',
                  deadline: '2023-08-30',
                  order: '1',
              },
              {
                  _id: 'board-1-column-4-task-2',
                  title: 'task 2',
                  boardId: 'board-1',
                  columnId: 'board-1-column-4',
                  text: 'Your task text here.Reflect on how to make the most of your time today. Reflect on how to make the most of your time today', // Replace with desired task text
                  priority: 'without',
                  deadline: '2023-08-31',
                  order: '2',
              },
          ],
      },
    //   {
    //       _id: 'board-1-column-5',
    //       title: 'column title 5',
    //       boardId: 'board-1',
    //       tasks: [
    //           {
    //               _id: 'board-1-column-5-task-1',
    //               title: 'task title 1',
    //               boardId: 'board-1',
    //               columnId: 'board-1-column-5',
    //               text: 'Generate ideas for a new marketing campaign and create a brainstorming document with your findings. Consider target audience, messaging, and potential channels.',
    //               priority: 'high',
    //               deadline: '2023-09-15',
    //               order: '1',
    //           },
    //           {
    //               _id: 'board-1-column-5-task-2',
    //               title: 'task 2',
    //               boardId: 'board-1',
    //               columnId: 'board-1-column-5',
    //               text: 'Conduct a thorough analysis of the company\'s social media metrics for the past quarter. Identify trends, engagement rates, and areas for improvement.',
    //               priority: 'medium',
    //               deadline: '2023-09-20',
    //               order: '2',
    //           },
    //       ],
    //   },
    //   {
    //       _id: 'board-1-column-6',
    //       title: 'title column 6',
    //       boardId: 'board-1',
    //       tasks: [
    //           {
    //               _id: 'board-1-column-6-task-1',
    //               title: 'task title 1',
    //               boardId: 'board-1',
    //               columnId: 'board-1-column-6',
    //               text: 'Write a detailed product description for the upcoming product launch. Highlight its features, benefits, and unique selling points.',
    //               priority: 'low',
    //               deadline: '2023-09-10',
    //               order: '1',
    //           },
    //           {
    //               _id: 'board-1-column-6-task-2',
    //               title: 'task 2',
    //               boardId: 'board-1',
    //               columnId: 'board-1-column-6',
    //               text: 'Collaborate with the design team to create visually appealing graphics for the new website. Ensure that the visuals align with the brand\'s identity.',
    //               priority: 'without',
    //               deadline: '2023-09-25',
    //               order: '2',
    //           },
    //       ],
    //   },
  ],
};






