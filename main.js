
//Exercício 1 - Classes

class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);

        this.admin = true;
    }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1.isAdmin()); //false
console.log(Adm1.isAdmin());  //true

// Exercício 2 - Métodos de Array
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   const { idade } = usuarios;

   const rocket18 = usuarios.filter(function(el) {
        if(el.empresa === 'Rocketseat' && el.idade >= 18) {
            return el;
        } 
   });

   // 2.2
   const workOnGoogle = usuarios.find(function(el) {
       return el.empresa === 'Google';
   })

   //2.3
   const multiplyYearsByTwo = usuarios.map(usuarios => ( {... usuarios, idade: usuarios.idade * 2}))
   .filter(usuario => usuario.idade <= 50);

   console.log(rocket18);
   console.log(workOnGoogle);
   console.log(multiplyYearsByTwo);
   
   // Exercício 3 - Arrow Function

//3.1
const arr = [1, 2, 3, 4, 5];

console.log(arr.map(item => item + 10));

//3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

//3.3
const nome1 = "Diego";
const idade1 = 23;

const mostraUsuario = (nome1, idade1) => [nome1, idade1]; 

   
console.log(mostraUsuario(nome1, idade1));

//3.4 

const promise = () => new Promise((resolve, reject) => resolve());



   
//Exercício 4 - Desestruturação

//4.1

const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

   const { nome, endereco: { cidade, estado}} = empresa;

   console.log(nome);
   console.log(cidade);
   console.log(estado);

   //4.2

   function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
   }
   
   console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

   //Exercício 5 - Rest

   //5.1

   const arr1 = [1,2,3,4,5,6];
   const [x, ...y] = arr1;

   console.log(x);
   console.log(y);

    function soma(...params) {
       return params.reduce((total, next) => total + next);
   }
    
    console.log(soma(1, 2, 3, 4, 5, 6)); // 21
    console.log(soma(1, 2)); // 3
   
   //5.2 - Spread

   const usuario3 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };
   
   const usuario2 = {...usuario3, nome:'Gabriel'};
   const usuario4 = {...usuario3, cidade:'Lontras'};

   console.log(usuario2);
   console.log(usuario4);

   //Exercício 6 - Template Literals

    const usuariodiego = 'Diego';
    const idade23 = 23;
    console.log(`O usuário ${usuariodiego} possui ${idade23} anos`);

    //Exercício 7 - Object Short Syntax

    const nome47 = 'Diego';
    const idadesla = 23;

    const usuario94 = {
    nome47,
    idadesla,
    cidade: 'Rio do Sul',
};

/// ASYNC/AWAIT

const minhaPromise = () => new Promise((resolve, reject) => 
    setTimeout(() => { resolve('OK') }, 2000));

   
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise();

/*Axios

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Usuário não existente');
        }
    }
}

Api.getUserInfo('PiviaN');
*/

// Função delay aciona o .then após 1s

/*const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const umPorSegundo = async () => {
    console.log('1s' + await delay());
    console.log('2s' + await delay());
    console.log('3s' + await delay());
    console.log('4s' + await delay());
}
umPorSegundo();
*/