let amigo = {
    nome:'José', 
    peso: 85.4,
    engordar(p=0){
        console.log(`Engordou ${p}Kg`)
        this.peso += p
    }

}

    amigo.engordar(2)
    console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)