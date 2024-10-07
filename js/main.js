class Cancion {
    #id;
    #nombre;
    #artista;
    #genero;
    #album;
    #caratula;
    #ubicacion;
    #duracion;
    #anio;

    constructor(id, nombre, artista, genero, album, caratula, ubicacion, duracion, anio) {
        this.#id = id;
        this.#nombre = nombre;
        this.#artista = artista;
        this.#genero = genero;
        this.#album = album;
        this.#caratula = caratula;
        this.#ubicacion = ubicacion;
        this.#duracion = duracion;
        this.#anio = anio;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get artista() {
        return this.#artista;
    }

    set artista(artista) {
        this.#artista = artista;
    }

    get genero() {
        return this.#genero;
    }

    set genero(genero) {
        this.#genero = genero;
    }

    get album() {
        return this.#album;
    }

    set album(album) {
        this.#album = album;
    }

    get caratula() {
        return this.#caratula;
    }

    set caratula(caratula) {
        this.#caratula = caratula;
    }

    get ubicacion() {
        return this.#ubicacion;
    }

    set ubicacion(ubicacion) {
        this.#ubicacion = ubicacion;
    }

    get duracion() {
        return this.#duracion;
    }

    set duracion(duracion) {
        this.#duracion = duracion;
    }

    get anio() {
        return this.#anio;
    }

    set anio(anio) {
        this.#anio = anio;
    }

}

class Usuario {
    #id;
    #nombreUsuario;
    #correo;
    #contrasenia;
    #nombres;

    constructor(id, nombres, nombreUsuario, contrasenia, correo) {
        this.#id = id;
        this.#nombres = nombres;
        this.#nombreUsuario = nombreUsuario;
        this.#contrasenia = contrasenia;
        this.#correo = correo;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get nombreUsuario() {
        return this.#nombreUsuario;
    }

    set nombreUsuario(nombreUsuario) {
        this.#nombreUsuario = nombreUsuario;
    }

    get correo() {
        return this.#correo;
    }

    set correo(correo) {
        this.#correo = correo;
    }

    get contrasenia() {
        return this.#contrasenia;
    }

    set contrasenia(contrasenia) {
        this.#contrasenia = contrasenia;
    }

    get nombres() {
        return this.#nombres;
    }

    set nombres(nombres) {
        this.#nombres = nombres;
    }
}

class Reproductor {
    #id;
    #cancionActual;
    #caratulaActual;
    #playListActual;

    constructor(id, cancionActual, caratulaActual, playListActual) {
        this.#id = id;
        this.#cancionActual = cancionActual;
        this.#caratulaActual = caratulaActual;
        this.#playListActual = playListActual;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get cancionActual() {
        return this.#cancionActual;
    }

    set cancionActual(cancionActual) {
        this.#cancionActual = cancionActual;
    }

    get caratulaActual() {
        return this.#caratulaActual;
    }

    set caratulaActual(caratulaActual) {
        this.#caratulaActual = caratulaActual;
    }

    get playListActual() {
        return this.#playListActual;
    }

    set playListActual(playListActual) {
        this.#playListActual = playListActual;
    }

    empezar() {
        return this.#playListActual.reproducir();
    }

    anterior() {
        return this.#playListActual.anterior();
    }

    siguiente() {
        return this.#playListActual.siguiente();
    }

    actualizar() {
        return this.#playListActual.obtenerCanciones();
    }

}

class PlayList {
    #id;
    #nombre;
    #listaCanciones;
    #idActual;

    constructor(id, nombre, listaCanciones) {
        this.#id = id;
        this.#nombre = nombre;
        this.#listaCanciones = listaCanciones;
        this.#idActual = 0;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get listaCanciones() {
        return this.#listaCanciones;
    }

    set listaCanciones(listaCanciones) {
        this.#listaCanciones = listaCanciones;
    }

    get idActual() {
        return this.#idActual;
    }

    set idActual(idActual) {
        this.#idActual = idActual;
    }

    siguiente() {
        if (this.#idActual == this.#listaCanciones.length - 1) {
            this.#idActual = 0;
        } else {
            this.#idActual = this.#idActual + 1;
        }
        //this.reproducir();
    }

    anterior() {
        if (this.#idActual == 0) {
            this.#idActual = this.#listaCanciones.length - 1;
        } else {
            this.#idActual = this.#idActual - 1;
        }
        //this.reproducir();
    }

    reproducir() {
        return this.#listaCanciones[this.#idActual];
    }

    obtenerCanciones() {
        let htmlNuevo = '';
        for (let i = 0; i < this.#listaCanciones.length; i++) {
            let element = this.#listaCanciones[i];
            htmlNuevo = htmlNuevo + "<div><span><b>" + element.nombre + "</b> (" + element.genero + "/" + element.artista + ")</span><i data-id='" + element.id + "' class='bi bi-play-fill'></i><i data-id='" + element.id + "' class='favorite bi bi-heart-fill'></i><i data-id='" + element.id + "' class='playlist bi bi-plus-lg'></i></div>";
        }
        return htmlNuevo;

    }

    agregarCancionPorId(id, lista, type, listaFinal) {
        let htmlNuevo = '';
        const element = lista.filter(cancion => cancion.id == id);
        if (element) {

            let ojbcancion = new Cancion(element['0']['id'], element['0']['nombre'], element['0']['artista'], element['0']['genero'], element['0']['album'], element['0']['caratula'], element['0']['ubicacion'], element['0']['duracion'], element['0']['anio']);
            listaFinal.listaCanciones.push(ojbcancion);
            if (type === 'P') {
                htmlNuevo = htmlNuevo + "<div><span><b>" + element['0']['nombre'] + "</b> (" + element['0']['genero'] + "/" + element['0']['artista'] + ")</span><i data-id='" + element['0']['id'] + "' class='bi bi-play-fill'></i><i data-id='" + element['0']['id'] + "' class='infavorite bi bi-x-lg'></i></div>";
            } else {
                htmlNuevo = htmlNuevo + "<div><span><b>" + element['0']['nombre'] + "</b> (" + element['0']['genero'] + "/" + element['0']['artista'] + ")</span><i data-id='" + element['0']['id'] + "' class='bi bi-play-fill'></i><i data-id='" + element['0']['id'] + "' class='infavorite bi bi-heart'></i></div>";
            }
        }
        return htmlNuevo;
    }

    verificaCancionPorId(id, lista, type) {
        let resp = 0;
        if (lista != null) {
            const element = lista.filter(cancion => cancion.id == id);
            if (element)
                resp = 1;

        }
        return resp;
    }
}


const datosCanciones = [
    {
        id: 1,
        nombre: "Thriller",
        artista: "Michael Jackson",
        genero: "Disco",
        album: "Thriller",
        caratula: "1.png",
        ubicacion: "1.mp3",
        duracion: "00:31",
        anio: 1982
    },
    {
        id: 2,
        nombre: "Fireflies",
        artista: "Owl City",
        genero: "Electrónica",
        album: "Ocean Eyes",
        caratula: "2.png",
        ubicacion: "2.mp3",
        duracion: "00:30",
        anio: 2009
    },
    {
        id: 3,
        nombre: "Shooting Star",
        artista: "Owl City",
        genero: "Electrónica",
        album: "The Midsummer Station",
        caratula: "3.png",
        ubicacion: "3.mp3",
        duracion: "00:30",
        anio: 2012
    },
    {
        id: 4,
        nombre: "Wow",
        artista: "Post Malone",
        genero: "Hip hop",
        album: "Hollywood's Bleeding",
        caratula: "4.png",
        ubicacion: "4.mp3",
        duracion: "00:30",
        anio: 2019
    },
    {
        id: 5,
        nombre: "Better now",
        artista: "Post Malone",
        genero: "Hip hop",
        album: "Beerbongs & Bentleys",
        caratula: "5.png",
        ubicacion: "5.mp3",
        duracion: "00:30",
        anio: 2018
    },
    {
        id: 6,
        nombre: "Black or White",
        artista: "Michael Jackson",
        genero: "Hip hop",
        album: "Dangerous",
        caratula: "6.png",
        ubicacion: "6.mp3",
        duracion: "00:31",
        anio: 1991
    },
    {
        id: 7,
        nombre: "Standing next to you",
        artista: "Jungkook",
        genero: "K-pop",
        album: "Golden",
        caratula: "7.png",
        ubicacion: "7.mp3",
        duracion: "00:30",
        anio: 2023
    },
    {
        id: 8,
        nombre: "No one knows",
        artista: "Queens of the Stone Age",
        genero: "Metal",
        album: "Songs for the Deaf",
        caratula: "8.png",
        ubicacion: "8.mp3",
        duracion: "00:30",
        anio: 2002
    },
    {
        id: 9,
        nombre: "Mexicola",
        artista: "Queens of the Stone Age",
        genero: "Metal",
        album: "Rated R",
        caratula: "9.png",
        ubicacion: "9.mp3",
        duracion: "00:33",
        anio: 2000
    },
    {
        id: 10,
        nombre: "Thank you next",
        artista: "Ariana Grande",
        genero: "Pop",
        album: "Thank U, Next",
        caratula: "10.png",
        ubicacion: "10.mp3",
        duracion: "00:30",
        anio: 2019
    },
    {
        id: 11,
        nombre: "God is a woman",
        artista: "Ariana Grande",
        genero: "Pop",
        album: "Sweetener",
        caratula: "11.png",
        ubicacion: "11.mp3",
        duracion: "00:30",
        anio: 2018
    },
    {
        id: 12,
        nombre: "What i was made for",
        artista: "Billie Eilish",
        genero: "Pop",
        album: "Barbie the Album",
        caratula: "12.png",
        ubicacion: "12.mp3",
        duracion: "00:30",
        anio: 2023
    },
    {
        id: 13,
        nombre: "Toxic",
        artista: "Britney Spears",
        genero: "Pop",
        album: "In the Zone",
        caratula: "13.png",
        ubicacion: "13.mp3",
        duracion: "00:30",
        anio: 2004
    },
    {
        id: 14,
        nombre: "Bejeweled",
        artista: "Taylor Swift",
        genero: "Pop",
        album: "Midnights",
        caratula: "14.png",
        ubicacion: "14.mp3",
        duracion: "00:30",
        anio: 2022
    },
    {
        id: 15,
        nombre: "Lover",
        artista: "Taylor Swift",
        genero: "Pop",
        album: "Lover",
        caratula: "15.png",
        ubicacion: "15.mp3",
        duracion: "00:34",
        anio: 2019
    },
    {
        id: 16,
        nombre: "Runaway",
        artista: "Aurora",
        genero: "Pop",
        album: "All My Demons Greeting Me as a Friend",
        caratula: "16.png",
        ubicacion: "16.mp3",
        duracion: "00:30",
        anio: 2016
    },
    {
        id: 17,
        nombre: "Cure for me",
        artista: "Aurora",
        genero: "Pop",
        album: "The Gods We Can Touch",
        caratula: "17.png",
        ubicacion: "17.mp3",
        duracion: "00:30",
        anio: 2022
    },
    {
        id: 18,
        nombre: "Happier than ever",
        artista: "Billie Eilish",
        genero: "Pop",
        album: "Happier than ever",
        caratula: "18.png",
        ubicacion: "18.mp3",
        duracion: "00:27",
        anio: 2021
    },
    {
        id: 19,
        nombre: "Die Hard",
        artista: "Kendrick Lamar",
        genero: "Rap",
        album: "Mr. Morale & the Big Steppers",
        caratula: "19.png",
        ubicacion: "19.mp3",
        duracion: "00:33",
        anio: 2022
    },
    {
        id: 20,
        nombre: "Humble",
        artista: "Kendrick Lamar",
        genero: "Rap",
        album: "Damn",
        caratula: "20.png",
        ubicacion: "20.mp3",
        duracion: "00:28",
        anio: 2017
    },
    {
        id: 21,
        nombre: "Today was a good Day",
        artista: "Ice Cube",
        genero: "Rap",
        album: "The Predator",
        caratula: "21.png",
        ubicacion: "21.mp3",
        duracion: "00:30",
        anio: 1992
    },
    {
        id: 22,
        nombre: "Tusa",
        artista: "Karol G",
        genero: "Reggaeton",
        album: "KG0516",
        caratula: "23.png",
        ubicacion: "22.mp3",
        duracion: "00:30",
        anio: 2021
    },
    {
        id: 23,
        nombre: "Moscow mule",
        artista: "Bad Bunny",
        genero: "Reggaeton",
        album: "Un Verano Sin Ti",
        caratula: "22.png",
        ubicacion: "23.mp3",
        duracion: "00:30",
        anio: 2022
    },
    {
        id: 24,
        nombre: "Bichota",
        artista: "Karol G",
        genero: "Reggaeton",
        album: "KG0516",
        caratula: "23.png",
        ubicacion: "24.mp3",
        duracion: "00:21",
        anio: 2021
    },
    {
        id: 25,
        nombre: "Bohemian Rhapsody",
        artista: "Queen",
        genero: "Rock",
        album: "A Night at the Opera",
        caratula: "24.png",
        ubicacion: "25.mp3",
        duracion: "00:25",
        anio: 1975
    },
    {
        id: 26,
        nombre: "Don't fear the reaper",
        artista: "Blue Öyster Cult",
        genero: "Rock",
        album: "Agents of Fortune",
        caratula: "25.png",
        ubicacion: "26.mp3",
        duracion: "00:25",
        anio: 1976
    },
    {
        id: 27,
        nombre: "Hotel california",
        artista: "Eagles",
        genero: "Rock",
        album: "Hotel california",
        caratula: "26.png",
        ubicacion: "27.mp3",
        duracion: "00:31",
        anio: 1976
    },
    {
        id: 28,
        nombre: "Otherside",
        artista: "Red Hot Chili Peppers",
        genero: "Rock",
        album: "Californication",
        caratula: "27.png",
        ubicacion: "28.mp3",
        duracion: "00:31",
        anio: 1999
    },
    {
        id: 29,
        nombre: "Barracuda",
        artista: "Heart",
        genero: "Rock",
        album: "Little Queen",
        caratula: "28.png",
        ubicacion: "29.mp3",
        duracion: "00:25",
        anio: 1977
    },
    {
        id: 30,
        nombre: "505",
        artista: "Arctic Monkeys",
        genero: "Rock",
        album: "Favourite Worst Nightmare",
        caratula: "29.png",
        ubicacion: "30.mp3",
        duracion: "00:30",
        anio: 2007
    }
];


document.addEventListener("DOMContentLoaded", function () {

    const elementBL = document.getElementById('loginBtn');

    if (elementBL) {
        document.getElementById('loginBtn').addEventListener('click', function () {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            let usuario1 = new Usuario(1, "Carmen Bastidas", "cbastidas", "12345678", "cbastidas@gmail.com");
            let usuario2 = new Usuario(2, "Juan Rendon", "jrendon", "12345678", "juan.rendon@yahoo.com");
            let usuario3 = new Usuario(3, "Diana Sauces", "dsauces", "12345678", "diana-sauces@gmail.com");

            let usuarios = [usuario1, usuario2, usuario3];

            const usuarioEncontrado = usuarios.find(usuario => usuario.nombreUsuario === username && usuario.correo === email && usuario.contrasenia === password);

            if (usuarioEncontrado) {
                window.location.href = 'music.html';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    }

    const elementCL = document.getElementById('closeBtn');

    if (elementCL) {
        document.getElementById('closeBtn').addEventListener('click', function () {
            if (confirm("¿Estás seguro de que quieres cerrar sesión?")) {
                window.location.href = 'login.html';
            }
        });
    }

    const canciones = datosCanciones.map(cancion =>
        new Cancion(cancion.id, cancion.nombre, cancion.artista, cancion.genero, cancion.album, cancion.caratula, cancion.ubicacion, cancion.duracion, cancion.anio));


    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        document.getElementById('searchInput').addEventListener('input', function (e) {
            const value = e.target.value;
            const filteredItems = canciones.filter(cancion =>
                cancion.nombre.includes(value) || cancion.artista.includes(value) || cancion.genero.includes(value)
            );

            const resultsList = document.getElementById('resultados-buscador');
            resultsList.innerHTML = ''; // Limpiar resultados anteriores

            htmlNuevo = '';
            filteredItems.forEach(item => {
                htmlNuevo = htmlNuevo + "<div><span><b>" + item.nombre + "</b> (" + item.genero + "/" + item.artista + ")</span><i data-music='" + item.id + "' class='bi bi-play-fill'></i><i data-music='" + item.id + "' class='bi bi-heart-fill favorite'></i><i data-music='" + item.id + "' class='bi bi-plus-lg playlist'></i></div>";
            });

            let resultadosBuscador = document.getElementById("resultados-buscador");
            resultadosBuscador.innerHTML = (htmlNuevo === '' ? 'No hay canciones disponibles' : htmlNuevo);
        });
    }

    let playListFavorito = new PlayList(1, "Favoritos", null);
    let playListPersonal = new PlayList(1, "Mi lista", null);
    let playListPrincipal = new PlayList(1, "General", canciones);


    let reproductorPrincipal = new Reproductor(1, null, null, playListPrincipal);


    const anterior = document.getElementById('anterior');
    const reproducir = document.getElementById('reproducir');
    const pausar = document.getElementById('pausar');
    const siguiente = document.getElementById('siguiente');
    const parar = document.getElementById('parar');
    const desactivar = document.getElementById('desactivar');
    const activar = document.getElementById('activar');

    const caratula = document.getElementById('caratula');

    const reproductor = document.getElementById("reproductor");

    const nombre = document.getElementById('nombre');
    const artista = document.getElementById('artista');
    const genero = document.getElementById('genero');
    const album = document.getElementById('album');
    const anio = document.getElementById('anio');

    let resultadosBuscador = document.getElementById("resultados-buscador");

    resultadosBuscador.innerHTML = playListPrincipal.obtenerCanciones();

    //reproductor.play();

    anterior.addEventListener('click', () => {
        parar.click();
        reproductorPrincipal.anterior();
        reproducir.click();
    });

    reproducir.addEventListener('click', () => {
        let cancionInicial = reproductorPrincipal.empezar();
        caratula.src = "assets/caratula/" + cancionInicial.caratula;
        reproductor.src = "assets/audio/" + cancionInicial.ubicacion;
        nombre.innerText = cancionInicial.nombre;
        artista.innerText = cancionInicial.artista;
        genero.innerText = cancionInicial.genero;
        album.innerText = cancionInicial.album;
        anio.innerText = cancionInicial.anio;
        reproductor.play();
        reproducir.style.display = "none";
        pausar.style.display = "block";
    });

    pausar.addEventListener('click', () => {
        reproductor.pause();
        reproducir.style.display = "block";
        pausar.style.display = "none";
    });

    siguiente.addEventListener('click', () => {
        parar.click();
        reproductorPrincipal.siguiente();
        reproducir.click();
    });

    parar.addEventListener('click', () => {
        pausar.click();
        reproductor.currentTime = 0;
    });

    desactivar.addEventListener('click', () => {
        reproductor.muted = false;
        activar.style.display = "block";
        desactivar.style.display = "none";
    });

    activar.addEventListener('click', () => {
        reproductor.muted = true;
        activar.style.display = "none";
        desactivar.style.display = "block";
    });


    const elementFv = document.querySelectorAll('.favorite');

    elementFv.forEach(function (elemento) {
        elemento.addEventListener('click', function () {
            let song = elemento['dataset']['id'];
            const respuesta = confirm('¿Estás seguro de agregar al listado de Favoritos?"');
            if (respuesta) {
                let verifica = playListFavorito.verificaCancionPorId(song, playListFavorito.listaCanciones, 'F');
                if (verifica == 0) {
                    let resultados = document.getElementById("resultados-favorites");
                    resultados.insertAdjacentHTML('beforeend', playListFavorito.agregarCancionPorId(song, playListPrincipal.listaCanciones, 'F', playListFavorito));
                } else {
                    alert('Canción ya se encuentra agregada al Listado de Favoritos.')
                }


            }
        });
    });


    const elementPl = document.querySelectorAll('.playlist');

    elementPl.forEach(function (elemento) {
        elemento.addEventListener('click', function () {
            let song = elemento['dataset']['id'];
            const respuesta = confirm('¿Estás seguro de agregar al listado de PlayList?"');
            if (respuesta) {

                let resultados = document.getElementById("resultados-playlist");

                resultados.insertAdjacentHTML('beforeend', playListPersonal.agregarCancionPorId(song, playListPrincipal.listaCanciones, 'P', playListPersonal));

            }
        });
    });


});

