export const dashBoards = [
  {
    icon: 'icon1',
    title: 'test board title 1',
    background:
      'https://cdn.pixabay.com/photo/2023/05/29/14/05/mountains-8026175_1280.jpg',
    _id: '1',
    columns: [
      {
        _id: '1-1',
        title: 'column title 1',
        board: '1',
        tasks: [
          {
            title: 'task title 1',
            description:
              'test task descr 1 dddddd hhhhhhhhh hhhhhhhhhhh ffffffff',
            priority: 'high',
            deadline: '2023-08-30',
            column: '1-1',
            _id: '1-1-1',
          },
        ],
      },
    ],
  },
  {
    icon: 'icon2',
    title: 'test board title 2',
    background:
      'https://cdn.pixabay.com/photo/2023/08/02/14/21/cloud-8165401_1280.jpg',
    _id: '2',
    columns: [
      {
        _id: '2-1',
        title: 'column title 1',
        board: '2',
        tasks: [
          {
            title: 'task title 1',
            description:
              'test task descr 1 ffffffffff ffffffffffff fffffffffffffff fffffffffffff fffffffffffff fffffffffff',
            priority: 'low',
            deadline: '2023-08-29',
            column: '2-1',
            _id: '2-1-1',
          },
          {
            title: 'task title 2',
            description: 'test task descr 2',
            priority: 'high',
            deadline: '2023-08-26',
            column: '2-1',
            _id: '2-1-2',
          },
        ],
      },
      {
        _id: '2-2',
        title: 'column title 2',
        board: '2',
        tasks: [
          {
            title: 'task title 11',
            description:
              'test task descr 11 ffffffffff fffffffffffffff fffffffffffffffffff fffffffffffffffff ffffffffffffff',
            priority: 'low',
            deadline: '2023-08-28',
            column: '2-2',
            _id: '2-2-1',
          },
        ],
      },
    ],
  },
];
