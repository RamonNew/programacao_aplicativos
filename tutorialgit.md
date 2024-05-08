//Começando projeto novo
git init

//como clonar um reposititorio
git clone https://github.com/RamonNew/programacao_aplicativos.git

//Configurando
git config user.email "exemplo@gmail.com"
git config user.name "Ramon de Holanda"

//Selecionando a branch
git branch -M main
git remote add origin https://github.com/RamonNew/programacao_aplicativos.git

//adicionando arquivos
git add .

//colocando comentario do commit "commitar"
git commit -m "O que foi realizado"

//Subindo alterações
git push -u origin main
