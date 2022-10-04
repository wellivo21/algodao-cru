## Algodão Cru - Cópia

### Descrição

Este site é uma cópia de um layout antigo do site "algodãocru". Foi feito apenas por motivos de estudos. Você pode conferir como o site ficou clicando [aqui](https://algodao-cru-ivo.netlify.app/).

### Processo de Criação

Não há o que falar quanto à estrutura (HTML) e estilos (CSS) do site, além do fato de possuir diversas media-queries para telas menores, então falarei brevemente apenas sobre as funcionalidades adicionadas via JavaScript:

1.  A função "requiredInput" confere todos os _inputs_ da página e, caso possuam o atributo "required", é adicionado ao seu elemento irmão (span), que possui o título de cada _label_, o símbolo do asterisco, como forma de mostrar ao usuário que tais dados **precisam** ser preenchidos;
2.  A função "formData" coleta todos os valores digitados pelo usuário e os coloca num objeto. Decidi apenas jogar tais informações no console;
3.  "formValidator" é a função que realiza a validação do formulário, feito através da resposta à última pergunta, que deve ser "15". Caso o valor do _input_ colocado seja esse, o botão que realiza a submisão do formulário fica ativo. Caso contrário, o mesmo continua desativado.
