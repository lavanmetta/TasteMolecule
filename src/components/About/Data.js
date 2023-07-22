import img1 from '../../Assets/images/img1.jpg'
import img2 from '../../Assets/images/img2.jpg'
import img3 from '../../Assets/images/img3.jpg'
import img4 from '../../Assets/images/img4.jpg'


const AboutData = [
    {
        text : 'Restaurant Partners Countrywide',
        number : '150000+'
    },
    {
        text : 'Employees across the Country',
        number : '5000+'
    },
    {
        text : 'Delivery Executives',
        number : '250000+'
    },
    {
        text : 'Cites PAN India',
        number : '500+'
    },

]


const images = [
    {
        id:1,
        imgUrl: img1
    },
    {
        id:2,
        imgUrl: img2
    },
    {
        id:3,
        imgUrl: img3
    },
    {
        id:4,
        imgUrl: img4
    },
]

export function imagesList() {
    return images
}

export function AboutDataList() {
    return AboutData
}