# checkDoubleWord
estudando JS
# Contador de Palavras

Este projeto é um script Node.js que lê um arquivo de texto, conta a frequência de cada palavra no texto e exibe o resultado no console.

## Como Funciona

1. **Receber o Conteúdo**:
   - O script recebe o caminho de um arquivo de texto como argumento de linha de comando.
   - Exemplo de uso: `node src/index.js caminho/para/o/arquivo.txt`

2. **Processar o Conteúdo**:
   - O script lê o conteúdo do arquivo usando o módulo nativo `fs` (file system) do Node.js.
   - O conteúdo do arquivo é então processado para contar a frequência de cada palavra.

3. **Saída**:
   - O resultado é um objeto onde as chaves são as palavras e os valores são as contagens de cada palavra.
   - O resultado é exibido no console.

