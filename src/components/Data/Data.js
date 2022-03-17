const cardList = [
  {
    id: 1,
    photo:
      'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
    name: 'Ms Ginny',
    item: 'Potato',
    quantity: '12kgs',
    time: '2 days',
  },
  {
    id: 2,
    name: 'Mr Harry',
    photo: 'https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg',
    item: 'Carrot',
    quantity: '5kgs',
    time: '5 days',
  },
  {
    id: 3,
    photo:
      'https://media.istockphoto.com/photos/peas-and-pea-pods-picture-id104822169?b=1&k=20&m=104822169&s=170667a&w=0&h=9sg-BT6ep2eD5kIImksSC5RyRoYqnRNoYT-7Pi4fyVU=',
    name: 'Ms Marvel',
    item: 'Peas',
    quantity: '12kgs',
    time: '6 days',
  },
  {
    id: 4,
    photo:
      'https://media.istockphoto.com/photos/row-of-onions-picture-id892022394?b=1&k=20&m=892022394&s=170667a&w=0&h=FrMkXZK1Df2YS1mOR0Tv6tl7BWeMIUGuqQpG59qlOXM=',
    name: 'Mr Davis',
    item: 'Onion',
    quantity: '10kgs',
    time: '9 days',
  },
  {
    id: 5,
    photo:
      'https://media.istockphoto.com/photos/bush-of-green-peas-at-garden-in-summer-tasty-picture-id1135983128?b=1&k=20&m=1135983128&s=170667a&w=0&h=Wxru-2JxspUInaFYxHmuAdkYJNq1eOMqvrmo9IfA0b4=',
    name: 'Ms Moris',
    item: 'Green Beans',
    quantity: '7kgs',
    time: '12 days',
  },
  {
    id: 6,
    photo:
      'https://media.istockphoto.com/photos/ginger-root-and-ginger-powder-in-the-bowl-picture-id647402644?b=1&k=20&m=647402644&s=170667a&w=0&h=5lyuLq8qT16BelSweo6vprZzM62uDGZXdpPXdEDzqBc=',
    name: 'Mr Carry',
    item: 'Ginger',
    quantity: '7kgs',
    time: '15 days',
  },
];

const myProducts = [
  {
    id: 1,
    photo:
      'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
    item: 'Potato',
    quantity: '30kgs',
    time: '2 days',
  },
  {
    id: 2,
    photo: 'https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg',
    item: 'Carrot',
    quantity: '20kgs',
    time: '5 days',
  },
  {
    id: 3,
    photo:
      'https://media.istockphoto.com/photos/peas-and-pea-pods-picture-id104822169?b=1&k=20&m=104822169&s=170667a&w=0&h=9sg-BT6ep2eD5kIImksSC5RyRoYqnRNoYT-7Pi4fyVU=',
    item: 'Peas',
    quantity: '15kgs',
    time: '6 days',
  },
  {
    id: 4,
    photo:
      'https://media.istockphoto.com/photos/freshly-picked-radishes-lie-on-a-bed-picture-id1162302506?b=1&k=20&m=1162302506&s=170667a&w=0&h=KqmI2TXeHdYfJcvlIsynt8un1v0ZbCe0hDkGQuzXnIk=',
    item: 'Radish',
    quantity: '10kgs',
    time: '9 days',
  },
  {
    id: 5,
    photo:
      'https://media.istockphoto.com/photos/kiwifruit-picture-id182887661?b=1&k=20&m=182887661&s=170667a&w=0&h=tGOV3f6b-S2F8-r0vsPt2moALgWqmAa5pkJbNK5-7lo=',
    item: 'Kiwi',
    quantity: '6kgs',
    time: '10 days',
  },
  {
    id: 6,
    photo:
      'https://media.istockphoto.com/photos/row-of-onions-picture-id892022394?b=1&k=20&m=892022394&s=170667a&w=0&h=FrMkXZK1Df2YS1mOR0Tv6tl7BWeMIUGuqQpG59qlOXM=',
    item: 'Onion',
    quantity: '4kgs',
    time: '13 days',
  },
];

const bartarList = [
  {
    id: 1,
    name: cardList[0].name,
    item1: cardList[0].item,
    item2: cardList[5].item,
    quantity1: '4kg',
    quantity2: cardList[5].quantity,
    // "time": "4 day",
  },
  {
    id: 2,
    name: cardList[1].name,
    item1: cardList[1].item,
    item2: cardList[4].item,
    quantity1: '15kg',
    quantity2: cardList[4].quantity,
    // time: "6 day",
  },
  {
    id: 3,
    name: cardList[2].name,
    item1: cardList[2].item,
    item2: cardList[0].item,
    quantity1: '8kg',
    quantity2: cardList[0].quantity,
    // time: "10 day",
  },
];

const addingProduct = (newProduct) => {
  myProducts.push(newProduct);
};

export { cardList, myProducts, addingProduct, bartarList };
