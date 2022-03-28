const myModule = (function () {
  const tweets = [
    {
      id: '1',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC01:23:41'),
      author: 'snow',
      comments: [
        {
          id: '12',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC02:11:54'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '2',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC01:23:40'),
      author: 'snow',
      comments: [
        {
          id: '11',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC02:11:54'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '3',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC03:21:00'),
      author: 'Sasha',
      comments: [
        {
          id: '23',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC04:21:20'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '4',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC05:20:08'),
      author: 'Sasha',
      comments: [
        {
          id: '33',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC06:16:00'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '5',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC07:18:02'),
      author: 'Sasha',
      comments: [
        {
          id: '43',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC08:19:10'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '6',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC09:08:31'),
      author: 'Sasha',
      comments: [
        {
          id: '53',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC10:10:51'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '7',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC11:01:12'),
      author: 'Sasha',
      comments: [
        {
          id: '63',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC12:02:04'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '8',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC13:05:57'),
      author: 'Sasha',
      comments: [
        {
          id: '73',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC14:07:58'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '9',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC15:23:58'),
      author: 'Sasha',
      comments: [
        {
          id: 83,
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC16:03:10'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '10',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC17:04:15'),
      author: 'Sasha',
      comments: [
        {
          id: '93',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC18:04:48'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '11',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC19:05:57'),
      author: 'Sasha',
      comments: [
        {
          id: '103',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC20:00:00'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '12',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC20:06:24'),
      author: 'Sasha',
      comments: [
        {
          id: '113',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC21:06:40'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '13',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC23:07:15'),
      author: 'Sasha',
      comments: [
        {
          id: '133',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC01:08:30'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '14',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC01:09:10'),
      author: 'Sasha',
      comments: [
        {
          id: '143',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC02:10:10'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '15',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC03:11:23'),
      author: 'Sasha',
      comments: [
        {
          id: '153',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC04:12:32'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '16',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC05:13:00'),
      author: 'snow',
      comments: [
        {
          id: '163',
          text: 'hi, im Vova',
          createdAt: new Date('2022-03-12UTC06:13:21'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '17',
      text: 'hello world! #world',
      createdAt: new Date('2022-03-12UTC03:14:25'),
      author: 'Sasha',
      comments: [
        {
          id: '173',
          text: 'hi, im Vova',
          createdAt: Date('2022-03-12UTC08:15:30'),
          author: 'Vova',
        },
      ],
    },
    {
      id: '18',
      text: 'hello world! #world',
      createdAt: Date('2022-03-12UTC09:16:59'),
      author: 'snow',
      comments: [
        {
          id: '183',
          text: 'hi, im Vova',
          createdAt: Date('2022-03-12UTC10:23:33'),
          author: 'snow',
        },
      ],
    },
  ];

  const user = 'Sasha';
  const byDate = tweets.slice(0);
  let sortTwit = [];
  let sortIdentificator = [];
  function getTweets(
    skip,
    top,
    filterConfig = {
      id: '',
      author: '',
      dateFrom: new Date(),
      dateTo: new Date(),
      hashtags: [''],
      text: '',
    }
  ) {
    byDate.forEach((item) => {
      if (item.author === filterConfig.author) {
        sortTwit.push(item);
      }
    });

    sortTwit.sort((a, b) => {
      return a['createdAt'] - b['createdAt'];
    });

    // byDate.forEach((item) => {
    //   if (item.id == filterConfig.id) {
    //     sortId.push(item);
    //   }
    // });

    if ((skip, top)) {
      const getTweet = byDate.sort(function (a, b) {
        return a.createdAt - b.createdAt;
      });
      if (getTweet && skip === 0) {
        return byDate.splice(skip, top);
      } else {
        return byDate.splice(skip + 1, top + 10);
      }
    }
  }

  function sortid(id) {
    tweets.forEach((item) => {
      if (id == item.id) {
        return item;
      }
    });
  }

  ////////////////// Почему то sortid возвращает undefined

  function removeTweet(id) {
    const index = tweets.findIndex((n) => n.id == id);
    if (index !== -1) {
      tweets.splice(index, 1);
    } else {
      return false;
    }
  }

  function validateTweet(tw) {
    if (
      'id' in tw &&
      'text' in tw &&
      'createdAt' in tw &&
      'author' in tw &&
      'comments' in tw
    ) {
      return true;
    } else {
      return false;
    }
  }
  function validateComment(com) {
    if ('id' in com && 'text' in com && 'createdAt' in com && 'author' in com) {
      return true;
    } else {
      return false;
    }
  }

  const tweet = {
    id: Math.random(),
    text: 'lorem',
    createdAt: new Date(),
    author: user,
    comments: [],
  };

  function addTweet() {
    if (validateTweet() === true) {
      tweets.push(tweet);
      return true;
    } else {
      return false;
    }
  }
  function addComment(id, text) {
    if (validateComment() === true || id == tweet.id) {
      tweet.comments.push(text);
    }
  }
  function editTweet() {
    if (user === tweet.author) {
    } else {
      return false;
    }
  }
  function changeUser(usr) {
    return user.replace(user, usr);
  }

  return {
    getTweets,
    validateTweet,
    addTweet,
    editTweet,
    tweets,
    user,
    sortTwit,
    sortIdentificator,
    sortid,
    removeTweet,
    validateComment,
    addComment,
    changeUser,
  };
})();
