function insert(num)
{
    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero + num;
}
function voltar()
{
    var tela = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1);
}
function limpar()
{
    document.getElementById('tela').innerHTML = "";
}
function calcular()
{
    var tela = document.getElementById('tela').innerHTML;
    if(tela)
    {
        document.getElementById('tela').innerHTML = eval(tela);
    }
    else
    {
        document.getElementById('tela').innerHTML = " "
    }
}
