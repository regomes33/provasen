function salvarCadastro() {
    // Obter os valores do formulário
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
    const fotoInput = document.getElementById("foto");

    if (!codigo || !nome || !dataNascimento || !telefone || !celular || !sexo || !rg || !cpf || !endereco || !email) {
        console.log("esta sendo executado")
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;

    }

    // Verificar se uma imagem foi selecionada
    if (fotoInput.files.length > 0) {
        const foto = fotoInput.files[0];
        
        // Criar um objeto FileReader para ler a imagem
        const reader = new FileReader();

        // Configurar uma função de callback para ser executada quando a leitura for concluída
        reader.onload = function (e) {
            const miniatura = e.target.result;

            // Exibir a miniatura da imagem
            exibirMiniatura(miniatura);

            // Simular o armazenamento dos dados (pode ser substituído por uma chamada de API para um servidor)
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
                foto: miniatura
            };

            console.log("Cliente cadastrado:", cliente);

            // Limpar os campos após salvar
            limparCampos();
        };

        // Iniciar a leitura da imagem como uma URL de dados
        reader.readAsDataURL(foto);
    } else {
        alert("Por favor, selecione uma imagem antes de salvar.");
    }
}

function handleFileSelect() {
    const fotoInput = document.getElementById("foto");
    
    if (fotoInput.files.length > 0) {
        const foto = fotoInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const miniatura = e.target.result;
            exibirMiniatura(miniatura);
        };

        reader.readAsDataURL(foto);
    }
}

// Modifique o seu código para adicionar um ouvinte de eventos ao input do tipo arquivo
document.getElementById("foto").addEventListener("change", handleFileSelect);


function exibirMiniatura(miniatura) {
    // Obter a div para exibir a miniatura
    const miniaturaContainer = document.getElementById("miniaturaContainer");

    // Se a div já existe, atualizar o conteúdo, senão, criar uma nova div
    if (miniaturaContainer) {
        miniaturaContainer.innerHTML = `<img src="${miniatura}" alt="Miniatura da Foto">`;
    } else {
        console.error("Elemento miniaturaContainer não encontrado no HTML.");
    }
}

function limparCampos() {
    // Limpar todos os campos do formulário e a miniatura da imagem
    document.getElementById("cadastroForm").reset();
    const miniaturaContainer = document.getElementById("miniaturaContainer");
    if (miniaturaContainer) {
        miniaturaContainer.innerHTML = "";
    }
}