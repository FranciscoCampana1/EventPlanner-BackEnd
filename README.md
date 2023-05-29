# Event Planner BackEnd


## About

El proyecto final se realizo con el fin de plasmar lo aprendido en el Bootcamp. Éste "Event Planner" es una aplicación que va a servir para organizar eventos de la mejor manera.

## Navegación por la web

Como users se podrán hacer estas acciones: 
<ol>
<li>Registrarse</li>
<li>Loggearse</li>
<li>Crear un evento</li>
<li>Ver los próximos eventos</li>
<li>Modificar eventos</li>
<li>Eliminar eventos</li>
<li>Eliminar una invitación a determinado evento</li>
<li>Ver su perfil</li>
<li>Ver su agenda de contactos</li>
<li>Agregar contactos a la agenda</li>
</ol>

Como admin ademas de las acciones anteriores: 
<ol>
<li>Puede ver todos los contactos registrados en la aplicación</li>
</ol>

---

## Stack
Tecnologías utilizadas:
<div>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://jwt.io/">
    <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</a>
<a href="https://www.postman.com/">
    <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
</a>
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>
<a href="https://www.github.com/">
    <img src= "https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<a href="https://git-scm.com/">
    <img src= "https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white"/>
</a>
<a href="https://www.docker.com/">
    <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</a>
<a href="https://www.sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
 </div>
 
 ---

 ## Diagrama de la Base de Datos
   <img src="./_images/img-base-de-datos.png" alt="imagen de diagrama de base de datos">

 ---

 ## Instalación 
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones: npx sequelieze-cli db:migrate ``` 
5. ``` $ Ejecutamos los seeders: npx sequelize-cli db:seed:all ``` 
6. ``` $ npm run dev ``` 

---

## Endpoints

<details>
<summary>Endpoints</summary>

- AUTH

- REGISTRAR USUARIO

       POST http://localhost:3000/api/auth/register

  body:

  ```js
   {
       "nombre": "Luisito",
       "apellidos": "Comunica",
       "email": "luis@luis.com",
       "phone": "66678945",
       "password": "12345678"
   }
  ```

- LOGIN

       POST  http://localhost:3000/api/auth/login

  body:

  ```js
  {
      "email": "jose@correo.com",
      "password":"12345678"
  }
  ```

- USER

- PERFIL DE USER

        GET  http://localhost:3000/api/users/get-profile


- VER CONTACTOS

        GET  http://localhost:3000/api/users/get-my-contacts

- VER TODOS LOS USERS REGISTRADOS (RUTA DE ADMIN)

        GET  http://localhost:3000/api/users/get-all?page=1


- AGENDAR CONTACTO

       POST  http://localhost:3000/api/users/create-contact

  body:

  ```js
  {
      "phone": "692821554",
  }
  ```
- CREAR EVENTO

       POST  http://localhost:3000/api/event/create

  body:

  ```js
  {
        "title": "Cumpleaños de Lolo",
        "description": "Vamos a navergar en velero",
        "date": "2023-08-15",
        "time": "10:00:00"
  }
  ```


- MODIFICAR EVENTO

      PUT  http://localhost:3000/api/event/update-event/3

  body:

  ```js
  {
        "title": "REENCUENTRO",
        "date": "2023-07-07",
        "time": "12:00"
  }
  ```

- VER EVENTO

       GET  http://localhost:3000/api/event/get-events


- ELIMINAR EVENTO

      PUT  http://localhost:3000/api/event/delete-event/3

- ELIMINAR INVITACIÓN

       DELETE  http://localhost:3000/api/event/delete-invitation/2

- AGREGAR INVITADO AL EVENTO

       POST http://localhost:3000/api/event/add-guests/1

  body:

  ```js
    {
          "user_id": 5,
    }
  ```




## Contacto



**_Francisco Campana_**  
<a href="https://github.com/FranciscoCampana1" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>

<a href="mailto:campanafrancisco1@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>

<a href="https://www.linkedin.com/in/francisco-campana-06b946273/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</p>