const contenedorP=document.querySelector('.dondeVaParrafo')
const input=document.querySelector('input')
const  botonBorrar=document.querySelector('.borrar')
const ingresar=document.querySelector('.ingresar')

let nombres=[]
//eventos 
ingresar.addEventListener('click',()=>{
  if(input.value==''){
    return
  }else{
    let repetido=false
    for (let x = 0; x < nombres.length; x++) {
      if(nombres[x]==input.value){
        repetido=true
        alert('nombre repetido')
        limpiar()
        return
      }
      
    }
    if(repetido==false){
      nombres.push(input.value)
      limpiar()
    }
    
  }

  crearHTML(nombres)
})
botonBorrar.addEventListener('click',()=>{

  nombres=[]
  contenedorP.innerHTML=''
  limpiar()

})
contenedorP.addEventListener('click',(e)=>{

  const clase=e.target.className;
  if(clase){
    const parrafo=e.target.textContent
    let nombres2=nombres.filter(dat=>dat!==parrafo)
    contenedorP.innerHTML=''
    nombres=nombres2
    crearHTML(nombres2)
  }
   

})

//funciones 
function limpiar(){
  input.value=''
  input.focus()
}
function crearHTML(dato){
  contenedorP.innerHTML=''
  for (let x = 0; x < dato.length; x++) {
   const parrafo=document.createElement('p');
   parrafo.classList.add('parrafo')
   parrafo.innerHTML=dato[x]
    
   contenedorP.appendChild(parrafo)
  }
}

