import {yongin, first_main, two_main, korxona, gallery_1, gallery_2, gallery_3, gallery_4} from '../assets'

// filter-calculate page
export const filterCalculate = {
    heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorem enim excepturi illo iusto' +
        ' laboriosam minus non perspiciatis quasi voluptatem.',
    btn_1: 'Bir o\'lchovli masala',
    btn_2: 'Ikki o\'lchovli masala',
    btn_3: 'Ikki qatlam bir o\'lchovli masala',
    img: yongin
}

// calculate
export const calculate = {
    heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid aperiam cupiditate nam nobis quod',
    inputList: [
        {id: 1, nameAndId: 'developmentTime', label: 'development time NT'},
        {id: 2, nameAndId: 'initialPressure', label: 'initial pressure Pn'},
        {id: 3, nameAndId: 'filtration', label: 'filtration coefficient k'},
        {id: 4, nameAndId: 'waterYield', label: 'water yield coefficient m'},
        {id: 5, nameAndId: 'lengthPressure', label: 'length pressure L'},
        {id: 6, nameAndId: 'flowRate', label: 'flow rate of well Q'},
        {id: 7, nameAndId: 'thickness', label: 'thickness pressure mh'},
    ],
    btnName: 'Calculate',
    img_1: first_main,
    img_2: two_main
}

// info
export const info = {
    heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid aperiam cupiditate nam nobis quod',
    title: 'Kiruvchi ma\'lumotlar:',
    btn: 'Hisoblash',
    btn_1: 'Kiruvchi ma\'lumotlarni fayldan yuklash',
    btn_2: 'Sonli natijalarni fayldan ko\'rish',
    img: korxona,
    inputList: [
        {id: 1, nameAndId: 'locX', label: 'x o\'qi buyicha nuqtalar sonini kiriting:'},
        {id: 2, nameAndId: 'locY', label: 'y o\'qi buyicha nuqtalar sonini kiriting:'},
        {id: 3, nameAndId: 'resultTime', label: 'Hisoblash vaqtini kiriting:'},
        {id: 4, nameAndId: 'lengthKm', label: 'Sohani uzinligini kiriting:'},
        {id: 5, nameAndId: 'cube', label: 'Sohani hajmini kiriting:'},
        {id: 6, nameAndId: 'bosim', label: 'Boshlang\'ich bosimni kiriting:'},
        {id: 7, nameAndId: 'neftQovushqoqligi', label: 'Neftning qovushqoqligini kiriting:'},
        {id: 8, nameAndId: 'qatlamEl', label: 'Qatlam elastikligini kiriting:'},
        {id: 9, nameAndId: 'qarlamUt', label: 'Qatlam utkazuvchanligini kiriting:'},
        {id: 10, nameAndId: 'resultTimeQad', label: 'Hisoblash vaqti qadamini kiriting:'},
        {id: 11, nameAndId: 'quduqDeb', label: 'Quduq debitini kiriting:'},
        {id: 12, nameAndId: 'qatlamQuv', label: 'Qatlam quvvatini kiriting:'}
    ]
}

// gallery
export const imgData = [
    {id: 1, img: gallery_1},
    {id: 2, img: gallery_2},
    {id: 3, img: gallery_3},
    {id: 4, img: gallery_4},
    {id: 5, img: two_main},
    {id: 6, img: korxona},
    {id: 7, img: first_main},
    {id: 8, img: yongin},
]
