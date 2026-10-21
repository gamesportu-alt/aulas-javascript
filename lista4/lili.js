const usuarios= [

   {nome:'Ana',ativo:true},

   {nome:'Beto',ativo:false},

   {nome:'Caio',ativo:true},

   {nome:'Duda',ativo:false}

];

const usuariosAtivos = usuarios.filter((usuarios) => {
    return usuarios.ativo === true;
  });

  console.log(usuariosAtivos);