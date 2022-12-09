

const initialState : {allProvincias: {id:number, name: string, img: string }[]} = {

    allProvincias:[
        {
            id:1,
            name: "Tierra del fuego",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg"
        },
        {
            id:2,
            name: "Chubut",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670535755/Fotos/Chubut.jpg"
        },
        {
            id:3,
            name: "Santiago del estero",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536022/Fotos/SantiagoDelEstero.jpg"
        },
        {
            id:4,
            name: "San luis",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670535954/Fotos/San%20Luis.jpg"
        },
        {
            id:5,
            name: "Tucuman",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536171/Fotos/Tucuman.jpg"
        },
        {
            id:6,
            name: "Misiones",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536215/Fotos/Misiones.jpg"
        },
        {
            id:7,
            name: "Catamarca",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536227/Fotos/Catamarca.jpg"
        },
        {
            id:8,
            name: "La rioja",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536237/Fotos/LaRioja.jpg"
        },
        {
            id:9,
            name: "Jujuy",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536275/Fotos/Jujuy.jpg"
        },
        {
            id:10,
            name: "Santa cruz",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536350/Fotos/SantaCruz.jpg"
        },
        {
            id:11,
            name: "Buenos aires",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536383/Fotos/BuenosAires.jpg"
        },
        {
            id:12,
            name: "Chaco",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536411/Fotos/Chaco.jpg"
        },
        {
            id:13,
            name: "La pampa",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536434/Fotos/LaPampa.jpg"
        },
        {
            id:14,
            name: "Entre rios",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536447/Fotos/EntreRios.jpg"
        },
        {
            id:15,
            name: "Santa fe",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536458/Fotos/SantaFe.jpg"
        },
        {
            id:16,
            name: "Rio negro",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536510/Fotos/RioNegro.jpg"
        },
        {
            id:17,
            name: "Corrientes",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536537/Fotos/Corrientes.jpg"
        },
        {
            id:18,
            name: "Neuquen",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536546/Fotos/Neuquen.jpg"
        },
        {
            id:19,
            name: "Salta",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536557/Fotos/Salta.jpg"
        },
        {
            id:20,
            name: "Formosa",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536572/Fotos/Formosa.jpg"
        },
        {
            id:21,
            name: "Mendoza",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536633/Fotos/Mendoza.jpg"
        },
        {
            id:22,
            name: "Cordoba",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536665/Fotos/Cordoba.jpg"
        },
        {
            id:23,
            name: "San juan",
            img: "https://res.cloudinary.com/pfcampy/image/upload/v1670536684/Fotos/SanJuan.jpg"
        },
    ]

};


function rootReducer(state : any = initialState, action : any): any {
    return initialState;
}







export default rootReducer;