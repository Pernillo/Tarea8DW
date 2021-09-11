export const series = (cantidad) => {

    const url_generos = `https://api.themoviedb.org/3/tv/popular?api_key=21244914e59ab9ad2491141f6d28581d&include_image_language=es,null&language=es-ES&page=1`;

    const llave = "21244914e59ab9ad2491141f6d28581d";

    fetch(
        url_generos +
        new URLSearchParams({
            api_key: llave,

        })
    ).then((response) => {
        if (response.status !== 200) {
            console.log(`Error: ${ response.statusText } Codigo: ${ response.status }
        `);
            return;
        }
        // no hay problemas, podemos ver el contenido
        response.json().then((data) => {
            console.log(data);
            // console.log(data.genres);
            imprimirHTML(data.results);
        });
    });
};




function imprimirHTML(series) {
    let html = '';
    let html_comedia = '';
    series.forEach((pelicula) => {
        html += `
            Identificador: ${pelicula.id}<br>
            Nombre: ${pelicula.name}<br>
            Fecha: ${pelicula.first_air_date}<br>
             <img src='${"https://image.tmdb.org/t/p/w500/"+pelicula.backdrop_path}'<br><br>
            `;
    });
    const contenedorApp = document.querySelector("#app");
    contenedorApp.innerHTML = html;
}