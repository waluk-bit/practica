const $formulario = document.querySelector('#formulario');
const $cardEstudiantes = document.querySelector('#cardEstudiantes');
const $cardProfesores = document.querySelector('#cardProfesores');

//TEMPLATE
const $templateEstudiantes = document.querySelector('#templateEstudiantes').content;
const $templateProfesores = document.querySelector('#templateProfesores').content;

//alert
const $alert = document.querySelector('.alert');
//validacion formulario name
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
//validacion formulario edad
const regUserAge = /[0-9]/; 

document.addEventListener('click', e =>{
    if(e.target.dataset.uid ){
        if(e.target.matches('.btn-success')){
            estudiantes.map(item => {
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = true;
                }
                return item;
            })
        } 
    }

    if(e.target.dataset.uid ){
        if(e.target.matches('.btn-danger')){
            estudiantes.map(item => {
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = false;
                }
                return item;
            })
        } 
    }

    Persona.pintarPersonaIU(estudiantes, "Estudiante")
})

const estudiantes = [];
const profesores = [];

class Persona {
    constructor(nombre, edad){
        this.nombre= nombre;
        this.edad = edad;   
        this.uid = `${Date.now()}`
    }

    static pintarPersonaIU(personas, tipo){
        if(tipo === "Estudiante"){
            $cardEstudiantes.textContent = "";

            const fragment = document.createDocumentFragment();

            personas.forEach(item =>{
                fragment.appendChild(item.agregarNuevoEstudiante())
            })

            $cardEstudiantes.appendChild(fragment);
        }

        if(tipo === "Profesor"){
            $cardProfesores.textContent = "";

            const fragment = document.createDocumentFragment();

            personas.forEach(item =>{
                fragment.appendChild(item.agregarNuevoProfesor())
            })

            $cardProfesores.appendChild(fragment);
        }

    }
}

class Estudiante extends Persona{
    #estado = false ;
    #estudiante = "Estudiante";

    set setEstado(estado){
        this.#estado = estado;
    }

    get getEstudiante(){
        return this.#estudiante;
    }

    agregarNuevoEstudiante(){
        const clone = $templateEstudiantes.cloneNode(true);
        clone.querySelector('.text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.#estudiante;
        clone.querySelector('.lead').textContent = this.edad;

        if(this.#estado){
            clone.querySelector('.badge').className = "badge bg-success";
            clone.querySelector('.btn-success').disabled = true;
            clone.querySelector('.btn-danger').disabled = false;
        }else{
            clone.querySelector('.badge').className = "badge bg-danger";
            clone.querySelector('.btn-danger').disabled = true;
            clone.querySelector('.btn-success').disabled = false;
        }

        clone.querySelector('.badge').textContent = this.#estado ? "Aprobado" : "Desaprobado"

        clone.querySelector('.btn-success').dataset.uid = this.uid;
        clone.querySelector('.btn-danger').dataset.uid = this.uid;

        return clone;
    }
}

class Profesor extends Persona {
    agregarNuevoProfesor(){
        const clone = $templateProfesores.cloneNode(true);
        clone.querySelector('h5').textContent = this.nombre;
        clone.querySelector('.lead').textContent = this.edad;

        return clone;
    }
}

$formulario.addEventListener('submit', e=>{
    e.preventDefault();

    $alert.classList.add('d-none');

    const data = new FormData($formulario);

    const [nombre, edad, opcion] = [...data.values()] 

    if(!nombre.trim()|| !edad.trim() || !opcion.trim()){
        $alert.classList.remove('d-none');
        return;
    }    

    if(opcion === "Estudiante" && regUserName.test(nombre)){
        const estudiante = new Estudiante(nombre, edad);

        estudiantes.push(estudiante);
    
        Persona.pintarPersonaIU(estudiantes, opcion);
    }

    if(opcion === "Profesor" && regUserName.test(nombre)){
        const profesor = new Profesor(nombre, edad);

        profesores.push(profesor);
    
        Persona.pintarPersonaIU(profesores, opcion);
    }

});