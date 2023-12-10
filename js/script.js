function salvarCadastro() {
    
    const codigo = document.getElementById("codigo").value;
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const telefone = document.getElementById("telefone").value;
    const celular = document.getElementById("celular").value;
    const sexo = document.getElementById("sexo").value;
    const rg = document.getElementById("rg").value;
    const cpf = document.getElementById("cpf").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;
    const foto = document.getElementById("foto").value;

    
    const cliente = {
        codigo,
        nome,
        dataNascimento,
        telefone,
        celular,
        sexo,
        rg,
        cpf,
        endereco,
        email,
        foto
    };

    console.log("Cliente cadastrado:", cliente);

    
    limparCampos();
}

function limparCampos() {
    
    document.getElementById("cadastroForm").reset();
}