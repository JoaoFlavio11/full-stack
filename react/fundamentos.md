# React
> biblioteca de interfaces em JS
  - facilita a construção usando componentes que podem ser reaproveitados
  - manipula o DOM

## componentes: 
  - similar a uma peça de lego, que pode ser reutilizada em lugares diferentes
  - um componente precisa de um elemento precisa
  revebem as props como argumentos e sao chamadas: {props.nome} (podem ser tipadas) ({name}: Props) -> {name}
  - podem ser passados métodos: onClick?: () => void | {onClick, name}
  - propriedades podem ser extendidas pelo: React.componentProps<"button"> & {personalizadas}
  - ... spread é usado para extender propriedades.

## estilos no app react:
  - globals.css: -> importar no topo do app.tsx
    ```
    * {
      margin: 0;
      padding: 0;
    }
    
    ```

## hooks React 
> Permitem que você use estados e outros recursos do react sem escrever uma classe. Encapsula funcionalidades e facilita o reaproveitamento da lógica.

###### useState
Permite adicionar uma variável de estado no componente
###### useEffect
Usado no novo ciclo de vida do componente e permite trabalhar com side-effects (efeitos colaterais)

## Renderização e estados 
> Antes dos componentes serem exibidos na tela, eles sao renderizados

### Etapas
> *Acionar* > *Renderizar* > *Exibir*

- **Acionar**
  - Quando o  app é iniciado ou quando quando o estado do componente muda e ele é renderizado novamente

- **Renderizar**
  - Depois de acionado, é chamado o componente raiz para comparar as alterações (virtual DOM e DOM)

- **Exibição**
  - É usada a API-DOM para exibir na tela os nós do DOM
  - A re-renderização aplica operações mínimas para atualizar os itens do componente que foram alterados.

## O _useEffect_ e _useState_:
### useEffect()
> Usado no __ciclo de vida do componente__ quando o componente é renderizado. E permite trabalhar com side-effects.
- Precisa estar **dentro de um componente React** para ter acesso aos estados do componente.
- Disparado quando o coponente é realizado ou quando o estado do componente muda.

### useState()
> Muda o estado do componente, atrelado ao __useEffect()__

## Efeito colateral ou _Side Effects_
> Gerencia as dependências do useEffect()
- toda vez que a dependência muda, o estado é alterado e o componente re-renderizado