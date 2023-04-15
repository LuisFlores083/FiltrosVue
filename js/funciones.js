const app = new Vue({
    el: "#cont",
    data: {
        minimo:5,
        busqueda:'',
        juegos: [
            
            {
                titulo: "Battlefield 1",
                genero: "FPS",
                puntuacion: 6
            },
            {
                titulo: "Civilization VI",
                genero: "Estrategia",
                puntuacion: 9
            },
            {
                titulo: "Resident Evil 7", 
                genero: "Survival Horror",
                puntuacion: 3
            }
        ]
        
    }, 
    computed:{
        ComprobarJuego(){
            return this.juegos.filter((juego)=> juego.puntuacion >= this.minimo);
        },
        BuscarJuego(){
            return this.juegos.filter((juego)=> juego.titulo.includes(this.busqueda));
        }

    },
    
});
