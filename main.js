const butnext=document.querySelector(`#next`) //dod
const butcalc=document.querySelector(`#calc`) //proc
const tablicaobiektow=[] //wyszukane przyciski i tablica pusta na obiekty


//przycisk dod
butnext.addEventListener(`click`,function(evt){
    evt.preventDefault()
    const electoralName=document.querySelector(`#electoralName`).value
    const isCoalition=document.querySelector(`#isCoalition`)
    const numberOfVotes=parseInt(document.querySelector(`#numberOfVotes`).value)
    const electoralList=document.querySelector(`#electoralList`)
    const obiekt={
        name: electoralName,
        progwyborczy: 5,
        numberOfVotes: numberOfVotes
    } //dane obiektu 
    if(isCoalition.checked){
        obiekt.progwyborczy=8
    } 
    
    tablicaobiektow.push(obiekt)
    const element=document.createElement(`li`)
    if(obiekt.progwyborczy==5){
    element.innerHTML=`<b>${obiekt.name}</b>, nie jest koalicją, ilość głosów: ${obiekt.numberOfVotes}`}
    else{
        
    element.innerHTML=`<b>${obiekt.name}</b>,  jest koalicją, ilość głosów: ${obiekt.numberOfVotes}`
    }

    electoralList.appendChild(element) //podpiac liste
})  

butcalc.addEventListener(`click`,function(evt){ //funkcja procenty
    evt.preventDefault()
    let suma=0

    tablicaobiektow.forEach(element => {
        suma+=element.numberOfVotes
    }); //liczba glosow 

    const results=document.querySelector(`#results`) //wyniki

    const main=document.querySelector(`main`)
    results.classList.remove(`hidden`)
    main.classList.add(`hidden`) //ukryte zeby bylo, dodane class hidden w results
    const table=document.querySelector(`table`)
    let lp=0
    tablicaobiektow.forEach(element => {
        lp++
        const nowyel=document.createElement(`tr`) //element z listy zeby byl
        const procent=((element.numberOfVotes/suma)*100).toFixed(2) //procenty
        nowyel.innerHTML=`
        <td>${lp}</td> 
            <td>${element.name}</td>
            <td>${element.progwyborczy}%</td>
            <td>${element.numberOfVotes}</td>
            <td>${procent}%</td>
        `//dane el
        if(procent>=element.progwyborczy){
            nowyel.style.backgroundColor=`lightgreen` 
        }
        else{
            nowyel.style.backgroundColor=`lightcoral`
        }
        table.appendChild(nowyel)
        });
})