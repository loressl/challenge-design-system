##Components

- [ ] Text
- [ ] Heading
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep

##Criar um monorepo
Na pasta pai, onde esta a pasta package dar o comando:
    - yarn init -y
No package coloca:
    - private como true, pois não vai subir
    - workspaces e a pasta packages, onde estão os subrepositórios
Na pasta do react coloca como devDependence o nome do package do tokens com um * na versão, pois é preciso que seja refletida na hora, sem versão estática, e na mesma pasta digita o comando para instalar as dependencias. Uma pasta node_modules é gerada na raiz.

##Criando storybook
- npx sb init --builder @storybook/builder-vite --type react