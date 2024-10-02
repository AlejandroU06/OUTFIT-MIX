const tipoModelo = document.getElementById('model');

const cambio = () => {
    const normalR = tipoModelo.classList.contains('ropa');
    if(normalR){
        tipoModelo.setAttribute('src', '3d/body2.glb');
        tipoModelo.classList.remove('ropa');
    }
    else{
        tipoModelo.setAttribute('src', '3d/ropa.glb');
        tipoModelo.classList.add('ropa');
    }
    console.log(tipoModelo.attributes);
    console.log(normalR);
}