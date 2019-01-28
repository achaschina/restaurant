const data = {
    mainPageSlider: [
        {name: 1, url: './assets/1a.jpeg'},
        {name: 2, url: './assets/2a.jpeg'},
        {name: 3, url: './assets/3a.jpeg'},
        {name: 4, url: './assets/4a.jpeg'},
        {name: 5, url: './assets/5a.jpeg'},
    ],
    category: [
        {id: '1', name: 'Одежда', parentId: ''},
        {id: '2', name: 'Одежда для женщин', parentId: '1', pic:'wc.JPG'},
        {id: '7', name: 'Одежда для мужчин', parentId: '1', pic:'mc.JPG'},
        {id: '3', name: 'Одежда для детей', parentId: '1', pic:'chc.JPG'},
        {id: '4', name: 'Обувь', parentId: '', pic:''},
        {id: '5', name: 'Обувь для женщин', parentId: '4', pic:'ws.JPG'},
        {id: '6', name: 'Обувь для мужчин', parentId: '4', pic:'ms.JPG'},
        {id: '8', name: 'Обувь для детей', parentId: '4', pic:'chs.JPG'},
    ],
    items: [
        {name: 'Платье', discription: 'Очень хорошее и красивое платье', foto: ['', '', ''], parentId: '2', brand: ''},
        {name: 'Платье', discription: 'Очень хорошее и красивое платье', foto: ['', '', ''], parentId: '2'},
        {name: 'Платье', discription: 'Очень хорошее и красивое платье', foto: ['', '', ''], parentId: '2'},
        {name: 'Платье', discription: 'Очень хорошее и красивое платье', foto: ['', '', ''], parentId: '2'}
    ]
}

export default data;