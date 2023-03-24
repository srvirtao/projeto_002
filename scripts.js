<script>
    function verificarAniversario() {
        var dataNascimento = new Date(document.getElementById("data-nascimento").value);
        var anoNascimento = dataNascimento.getFullYear();
        var diaNascimento = dataNascimento.getDate();
        var mesNascimento = dataNascimento.getMonth() + 1;

        // cria um objeto Date com a data atual
        var hoje = new Date();

        // verifica se o dia e o mês de hoje são iguais ao dia e mês de nascimento informados
        if (hoje.getDate() == diaNascimento && hoje.getMonth() + 1 == mesNascimento) {
            // se for o aniversário do usuário, exibe a mensagem de parabéns
            document.getElementById("resultado").innerHTML = "Parabéns pelo seu dia, mor! Você é a melhor pessoa do mundo e eu te amo muito!";
        } else {
            // caso contrário, exibe uma mensagem informando que não é o aniversário do usuário
            document.getElementById("resultado").innerHTML = "Hoje não é seu aniversário, mas não se preocupe, sempre te amo! <3";
        }
    }

    // adiciona um listener ao botão "Verificar" para chamar a função verificarAniversario() quando ele for clicado
    document.getElementById("btn-verificar").addEventListener("click", verificarAniversario);
</script>
