# TermoChemLevelEditor **v0.3.1**

Este repositório é um local para subir os arquivos de level do jogo ThermoChem para poder testá-los e editá-los. Fique atento as versões da documentação
- \* : siginifica recém modificado 
<br/>

# Novidades **
- Novos sprites para plataformas(cenário de gelo, deserto e pantano)
- Novos sprites para checkpoint, player (axolote), coletável de vida, heatPlace(Fornalha), coletável de nitrogênio
- bugfix na fallingPlataformPantano
- Novo tileset agua do deserto adicionado
- Novos backgrounds para pantano e deserto adicionados
- Props do Deserto adicionados
- Props do Pantano adicionados
- Novos Main Objects: Geiser de Metano, Flor Trampolim, EspinhosNotSolid, inimigo voador (NotFollow),inimigo Voador (Follow), Cacto Perfurante, Nuvem de Areia, Fogueira(heatPlacePantano) e Cano de Gelo (coldPlace).  
- Propriedades Customizadas adicionadas para os tipos: player, movingPlataform, fallingPlataform, heatPlace, coldPlace, basicEnemy, fly, flyFollow -> Olhar documentação.


<br/>

# Tutorial

Relacionado a v0.1.0 ~ v0.1.1:
- Como editar um Nível do ThermoChem, sendo mais específico para o contexto do ThermoChem: [old link](https://drive.google.com/file/d/1K_8DbwqHgjTwB0TWyUYcDQdiWE7G1FX7/view?usp=sharing)

- Vídeo análogo ao de cima, porém para criar um Level: [old link](https://drive.google.com/file/d/1nJoSF63s37F5pu0T42ZkdvoZfMlKoNum/view?usp=sharing)

 - Recomendado assistir um vídeo que ensina o básico do Tiled, caso não tenha ficado claro nos outros vídeos, porém é em inglês e mais genérico: 
[old link](https://www.youtube.com/watch?v=ZwaomOYGuYo)

Relacionado a v0.2.0:
- Novos padrões e Novos tilesets, o que mudou para v0.2.0: [oldlink](https://drive.google.com/file/d/1wBexMTxSD58QM1nP8fQ-17iMBIah21cl/view?usp=sharing)

Relacionado a v0.3.0:
- Novidades e Novas camadas, o que mudou para v0.3.0:[oldlink](https://drive.google.com/file/d/1uP2CVpyAaLjR9FPlvEPCjJj9gTdnh7bs/view?usp=sharing)

Relacionado a v0.3.1:
- Novidades e Propriedades customizadas para a versão v0.3.1: [link]()

<br/>


# Documentação/Regras

É importante mencionar que essa documentação é só uma forma de tentar manter as regras/funcionalidades por escrito dos elementos específicos do jogo ThermoChem, que virá a modificar ao longo do processo de evolução então é de bastante importância, sempre verificar a TAG da documentação para checar o versionamento de tal.
<br/>
<br/>

## • Camadas

Ao criar/editar um mapa, verifique as camadas que ficam na superior direita localização como na imagem:

<img src= "Readme Images/camadas.PNG">

Verifique se as camadas estão de acordo com os seguintes nomes(respeitando letra maiúscula e espaço) e respectiva ordem:

1. Over Objects Layer
2. Over Tile Layer
3. Main Objects Layer
4. Main Hole Tile Layer
5. Main Sliding Tile Layer
6. Main Tile Layer
7. Under Tile Layer
8. Under Objects Layer
9. Over Background Objects Layer
10. Backgroound Objects Layer

Se estiver correto, você não terá nenhum problema com relação a definição das camadas.

Porém, é importante ficar atento para o que cada camada representa no momento de criação. Por isto, vou explicar o que cada uma significa. Antes disso, é preciso entender o conceito de ordem de renderização de camadas. Seguindo a ordem acima, significa as camadas que as camadas mais acima estão acima das outras mais abaixo, ou seja, o background objects layer fica atrás de tudo, o over background objects layer fica acima do background, o under objects layer acima do over background objects layer e background objects layer e assim por diante. Isso quer dizer que algo pintado no background pode vir a ser coberto por algo que está na camada acima. Um elemento da camada Main Objects Layer sempre estará na frente de um Tile da camada Main Tile Layer, por exemplo.

É importante não confundir camadas de objetos com camadas de tiles, tiles são feitos para serem utilizados na camada de Tiles e objetos nas camadas de Objetos. Objetos são dispostos num espaço contínuo no mapa enquanto tiles são dispostos num espaço discreto por Tiles (quadradinhos base).

1. **Camada de Objetos: Over Objects Layer**

    Nessa camada é colocado objetos que ficam a frente de qualquer coisa, por enquanto não há nenhum uso, mas no futuro, será possível colocar um objeto como uma árvore e essa árvore ficar a frente na tela para parecer que o player passou por de trás da árvore, dando uma sensação do uso de camadas.

2. **Camada de Tile: Over Tile Layer**

	 É só uma camada para colocar tiles de ENFEITE do level, caso seja necessário colocar tiles que fiquem acima do Main Objects Layer, Main Hole Tile Layer, Under Tile Layer... E assim por diante.

3. **Camada de Objetos: Main Objects Layer**

	Nessa camada é colocado os objetos do level, como por exemplo, Player, Inimigo Básico, Fogueira, entre outros. Esses objetos diferentemente de qualquer outra camada, não são dispostos em GRID, são dispostos num espaço contínuo. Ou seja, fique atento ao colocar um objeto para ver se encosta no chão ou não, pois diferentemente das outras camadas, você pode mover a posição dos objetos livremente, ao invés de Tiles.

4. **Camada de Tile: Main Hole Tile Layer**

	Nessa camada é colocado os tiles que funcionarão como um buraco no jogo, ou seja, quando o jogador colidir com um tile dessa camada, aplicará a consequencia de um buraco. O visual do tile colocado nessa camada não importa, pois não será renderizado no jogo, só  a informação dos tiles que servirá para aplicar os efeitos um buraco. Ou seja, se tem um buraco no Level no Main Tile Layer, coloque alguns tiles abaixo, tiles de buraco.
	Existe um tileset de buraco para representar visualmente no Tiled um buraco. Lembrando que só no Tiled, dentro do jogo, não será renderizado.

5. **Camada de Tile: Main Sliding Tile Layer**

	Nessa camada é colocado os tiles que serão deslizantes, como por exemplo, um tile referente a um chão deslizante de gelo. Qualquer tile colocado aqui, funcionará como um chão deslizante, porém existem os tiles certos referentes a chão deslizante.

6. **Camada de Tile: Main Tile Layer**
	
	Camada por onde há as colisões com Tiles. Camada para colocar paredes e chão. Qualquer Tile colocado nessa camada, será interpretado como um tile com colisão, ou seja, se o player tentar passar, irá colidir. Impórtante não colocar objetos nessa camada, apenas TILES.

7. **Camada de Tile: Under Tile Layer**

	 É só uma camada para colocar tiles de ENFEITE do level, caso seja necessário colocar tiles que fiquem acima do Under Objects Layer, Over Background Objects Layer... E assim por diante e fique abaixo de Main Tile Layer, Main Sliding Tile Layer e assim por diante.

	 Normalmente utilizada para Tiles que preenchem o chão e parade, mas não são interagíveis com o player.

8. **Camada de Objetos: Under Objects Layer**

	Camada de objetos utilizada para enfeitar o mapa e adicionar objetos que enfeitem o Level, mas não interferem no gameplay. Formam/Compõe o cenário do level.

9. **Camada de Objetos: Over Background Objects Layer**
	
	Camada para colocar um background, porém não é o último background. Ainda haverá um background atrás dessa camada.

10. **Camada de Objetos: Background Objects Layer**

	Última camada, background que fica atrás de tudo.
<br/>
<br/>

## • Tilesets
<br/>

Carregue os tilesets já preparados do repositório, são os arquivos .tsx que ficam dentro da pasta Tilesets e suas respectivas subpastas. Normalmente os Devs irão já configurar e deixar pronto os arquivos .tsx na pasta. É importante verificar a versão do github e se há alguma atualização, como novos .tsx ou modificações.
<br/>
<br/>
## • Exportar Level
<br/>
Ao terminar de editar/criar um Level, não confunda salvar como ou salvar, com exportar como. SEMPRE deve-se usar a opção “exportar como”. Ao selecionar e escolher a pasta, o nome do arquivo deve seguir o seguinte padrão: 
<br/>

 - Level_00.xml
 - Level_01.xml
 - Level_02.xml
 - …
 - Level_XY.xml

 Não confunda .tmx com .xml, sempre exporte como .xml, é só nomear o arquivo com .xml, pois o programa Tiled, automaticamente coloca como .tmx.

A última coisa porém, bastante importante, verifique se a preferência abaixo, está marcada, ela fica localizada em “Editar/Preferências/”, marcar a opção “Resolve object types and properties”, como na imagem abaixo:

<img src= "Readme Images/preferences.PNG">

Depois de seguir esses passos, você pode subir o arquivo na Pasta /Levels/ do repositório e o jogo Thermo Chem já automaticamente fará download dos arquivos de level do último commit feito no repositório.

<br/>
<br/>

## • Objetos (.tsx da camda de Objetos) *
<br/>

Cada objeto disponível para ser utilizado na camada de objetos, tem um significado e um tipo associado. Como por exemplo, na imagem abaixo, dá para identificar o Player, pelo type: player, como na imagem, circulado em vermelho.

obs: É importante mencionar, que no momento não é suportado pelo jogo, escalar objetos, mudando o seu tamanho dentro do Tiled, pois essa informação será perdida.

<img src= "Readme Images/objectType.PNG">

- **Player (type: player)**

	É o objeto referente ao player, é onde o jogador iniciará o level. 

- **Fornalha (type: heatPlace)**

    É o objeto referente a uma fogueira, ou um local que emite calor para o jogador e onde ficará no level.

- **Inimigo Básico (type: enemyBasic)**

    É o objeto referente a um inimigo, e onde iniciará no level.

- **Local de Chegada (type: finishPlace)**

    É o objeto referente aonde o player deve chegar para finalizar o level.

- **Plataforma Móvel de Gelo (type: movingPlataform)**

	É o objeto referente a uma plataforma que se mexe para o lado e para o outro, posicionando seu local inicial do level.

- **Plataforma Temporária de Gelo (type: fallingPlataform)**

	 É o objeto referente a uma plataforma fica que depois de algum curto tempo cai, se o player tiver pisado.

- **Plataforma de Um lado de Gelo (type: oneWayPlataform)**

	É o objeto referente a uma plataforma que não tem colisão de baixo para cima, ou seja, se o player estiver abaixo da plataforma e pular e tiver alcance para subir, ele não irá bater a cabeça e em seguida poderá ficar de pé nesta plataforma.

- **Estalactite (type: stalactite)**

	É o objeto referente a uma estalactite, que irá cair se o player passar por debaixo, o player tem pouco tempo para não ser acertado pela estalactite que cairá sob efeito da gravidade.

- **Capsula Ativda (type: capsulaAtivda)**

	É um objeto só referente a capsula inicial do jogo, não há nenhuma interação com o player, mas tem colisão.

- **Coletável de HP (type: collectableHP)**

	É um objeto coletável que ao coletar, o player ganhará uma vida.

- **Coletável de Sal (type: collectableSalt)**

	É um objeto coletável que ao coletar, o player poderá arremassar sal. Obs: O sal não é destruido após ser coletado.

- **Flores coletáveis (type: collectableFlowers)**

	É um objeto coletável que ao coletar, o player poderá arremessar flores. Obs: As flores não são destruídas após serem coletadas.

- **Nitrogênio coletável (type: collectableNitrogen)**

	É um objeto coletável que ao coletar, o player poderá atirar nitrogênio. Obs: O nitrogênio não é destruído após ser coletado.

- **Ovo coletável (type: collectableEgg)**

	É um objeto coletável que tem uma quantidade limitada por mapa, não impacta no level em si, mas é uma conquista pegar todos os ovos.

- **Checkpoint (type: checkpoint)**

	É um objeto que guarda a posição do player. Serve para quando o player cair num buraco, o player voltar para o último local salvo no mapa.

- **Portão de Gelo (type: portaoGelo)**

	Objeto referente a um portão de gelo. Ele está fechado e com a trava congelada. Só abre se jogar sal no gelo para derreter e assim abrir o portão.

- **Grade (Não sólida) (type: gradeNotSolid)**

	Objeto referente a uma grade/porta, a parte não-sólida significa que o player não passa pela grade se estiver na forma sólida. Consegue passar em qualquer outras forma.

- **Espinhos (Não Sólido) (type: espinhosNotSolid)**

	Objeto referente a um grande espinho, no qual serve como uma passagem, na qual só passa qualquer estado do player que não seja gasoso. Similar a Grade (Não Sólida), só muda que é um espinho ao invés de uma grade.

- **Flor Trampolim (type: jumpFlower)**

	Objeto referente a uma flor que ao pisar no topo de sua flor, faz o jogador ser arremessado para cima como um trampolim.

- **Geiser de Metano (type: geiserMetano)**

	Objeto referente a um geiser de metano no qual serve como um obstáculo dinâmico. De tempos em tempos, o geiser libera metano (umas bolhinhas) que causam dano ao jogador quando tocadas. Então, para passar o jogador deve esperar o geiser parar de liberar metano.

- **Inimigo Voador (Not Follow) (type: fly)**

	Objeto referente ao inimigo voador (mosca) que se move no eixo Y, para cima e para baixo. Colisão = dano, criatura também morre.

- **Inimigo Voador (Follow) (type: flyFollow)**

	Objeto referente ao inimigo voador (mosca) que segue ao chegar perto dela, funciona do mesmo jeito que o citado acima, porém apenas segue o jogador.

- **Cacto Perfurante (type: cactoPerfurante)**

	Objeto referente a um obstáculo de um cacto com espinhos. Colisão = dano.

- **Nuvem Areia (NotGas) (type: nuvemAreiaNotGas)**

	Objeto referente a uma nuvem de areia que não permite o jogador passar se estiver na forma de gás.

- **Fogueira (type: heatPlacePantano)**

	Objeto similar a fornalha, porém será utilizado nos leveis que forem no Pantano. É um objeto que obtém calor, ao player trocar calor com o objeto, o player ganhar calor e, por isso, aumenta sua entalpia.

- **Cano de Gelo (type: coldPlace)**

	Objeto similar a fogueira ou fornalha, porém, funciona inversamente. Esse local absorve calor, então o jogador liberará calor para o objeto. 

<br/>
<br/>

## • Propriedades Customizáveis dos Objetos **

<br/>
Propriedades customizáveis são propriedades adicionadas a algum objeto para poder customizá-lo de alguma forma, como exemplo, modificar seu comportamento. Alguma variáveis estarão relacionadas a essas tais propriedades e ao modificá-las, mudará o comportamento do objeto. É o local para modificar e testar vários comportamentos diferentes, para realizar vários testes em um objeto dentro do jogo. Por exemplo, atente a imagem disposta logo abaixo, perceba que a fallingPlataformDeserto está selecionada e na parte circulada em vermelho em propriedades tem algumas variáveis. É aí que se encontra as propriedades customizadas. Nem todos objetos tem propriedades customizadas, então deve-se ficar atento a documentação para saber quais objetos têm. Essas propriedades vêm previamente configurada no arquivo .tsx, então não se deve modificar nenhum nome de variável, apenas o campo à sua direita. Por exemplo, a fallingPlataformDeserto, tem um campo chamado timeUntilRespawn e a sua direita um valor, esse valor é que deve ser alterado se quiser modificar o comportamento do objeto.

<img src= "Readme Images/propertiesExample.PNG">

Entretanto, antes de modificar um objeto, faça uma cópia. Atente ao campo "_name", se o valor for igual a default, quer dizer que é o objeto original, então não altere, pois se você alterar, vai sobrescrever e o valor antigo será perdido. O que se deve fazer? Crie uma cópia. 

<img src= "Readme Images/novoObjeto.PNG">

Vá no seu .tsx e crie um novo objeto clicando no botão "+". Ao clicar, um janela abrirá para você selecionar uma imagem correspondente. Então escolha a imagem referente ao objeto que você quer clonar. Nesse exemplo, como estamos querendo clonar a fallingPlataformDeserto, devemos selecionar a imagem referente a fallingPlataformDeserto.png,(se tiver dúvida aonde está, o campo imagem mostra à sua direita o endereço.) Ao escolher a imagem, talvez este aviso apareça:

<img src= "Readme Images/novoObjetoAviso.PNG">

Ele só está avisando que você está criando um objeto que já existe, porém, aceite e tenha algo mais ou menos como na próxima imagem:

<img src= "Readme Images/novoObjetoCriado.PNG">

Repare que circulado de vermelho é a plataforma selecionada e que você acabou de clonar. Repare que o circulado de azul é o antigo objeto que você clonou. 

Agora repare nos campos circulados em preto. Não há nenhuma propriedades adicionada e nem seu tipo referente. Então você terá que adicionar manualmente. Á direita do campo Type, adicione exatamente como está escrito na documentação, tanto na seção objetos, como nessa mesma seção mais abaixo, o "type" do objeto.

<img src= "Readme Images/novoObjetoTypeAdicionado.PNG">

Após isso, você deve agora adicionar, as propriedades customizadas. Para isso, dê um clique com o botão direito em propriedades personalizadas. Clique em adicionar propriedades depois, como na imagem abaixo:

<img src= "Readme Images/novoObjetoNovaPropriedade.PNG">

Após isso uma nova janela aparecerá, nela você irá adicionar uma propriedade. Para isso, você terá que colocar exatamente o nome da variável referente a propriedade que você está clonando. Continuando meu exemplo, eu teria que adicionar a variável "timeUntilRespawn", depois escolher o tipo associado a variável certo. PARA ISSO, VOCÊ DEVE OLHAR NA DOCUMENTAÇÃO ABAIXO, QUAL É O TIPO ASSOCIADO AQUELA PROPRIEDADE/VARIÁVEL, OK?! fique atento. No caso, "timeUntilRespawn" é o tipo associado chamado float. Ao prencher, você deve confirmar e sua propriedade será adicionada.

<img src= "Readme Images/novoObjetoPropriedadeAdicionada.PNG">

Pronto, repita esse processo para cada uma das propriedades, não esqueça de adicionar todas e verificar o tipo associado corretamente a cada variável na documentação abaixo. Como por exemplo:

<img src= "Readme Images/novoObjetoPronto.PNG">

Todas propriedades adicionadas, agora você está livre para modificar. Coloque o valor que você quer para cada variável. (Lembrando de verificar o que cada valor quer dizer em cada propriedade, na documentação mais abaixo.) Não esqueça de salvar.

<img src= "Readme Images/pronto.PNG">

Seu objeto estará disponível na sua paleta de objetos na parte de criação de Level, basta adicionar o objeto certo. Para verificar se está adicionando o objeto certo, verifique na aba de propriedades na hora de colocar objetos no mapa.

<img src= "Readme Images/exemplo.PNG">


Pronto. Você aprendeu a clonar e poder utilizar vários clones. Para remover um objeto teste que não servirá mais, basta selecionar e clicar no "-" que fica ao lado do "+", que foi clicado para criar um objeto.


<br/>

Já que você aprender a clonar, vou te ensinar algumas coisas que podem poupar tempo.
Você PODE não clonar um objeto, apenas adicioná-lo no PRÓPRIO MAPA e modificar as variáveis no MAPA na parte de propriedades, ao clicar duas vezes no campo com os valores a serem modificados. Exemplo na imagem:

<img src= "Readme Images/dica.PNG">

clique duas vezes no campo que você quer alterar e ele abrirá para você editar. Sua mudança ficará apenas salva no MAPA e não no arquivo.tsx, então você ainda terá uma objeto original não modificado salvo dentro de seu .tsx

<img src= "Readme Images/doubleClick.PNG">
<br/>
<br/>

Uma outra dica é, na hora de clonar um objeto. Depois que você acabou de adicionar um objeto, mas ele ainda está vazio. É possível apenas selecionar os campos do objeto original (segurar crtl, para selecionar mais de um), dar crtl+c, para copiar e depois crtl+v, ao selecionar as propriedades de seu objeto clonado. Assim fica mais fácil ainda para clonar.

<br/>
<br/>

OBS: Quando você cria um clone no .tsx, você está modificando o arquivo .tsx referente aquele objeto, então você está localmente modificando o arquivo no SEU COMPUTADOR. No nosso caso o "ObjectsMainCollection.tsx". Então, se você quer que todos vejam os clones que você criou ou tenham acesso a objetos que você modificou, você deve subir o arquivo no repositório no mesmo local em que ele estava. Commitar e ESCREVER quais são os updates detalhadamente, para podermos ter controle das modificações. Cuidado ao fazer essa parte, só suba o arquivo se você realmente precisar subir.
<br/>
<br/>

## Objetos e suas propriedades

<br/>
Nessa seção, irei detalhar cada propriedade de cada objeto que tem propriedades customizáveis.

<br/>
<br/>

### • **Propriedade Comum a todos Objetos**

- variável: **_name**, tipo: **string**

	a variável com o campo "_name" é comum a todos os objetos, ele serve apenas de identificação para não confundir objetos clonados com objetos originais. Para você poder nomear um objeto no qual você está testando e identificá-lo, não há nenhuma regra em como você deve nomear, porém você nunca deve alterar um objeto que no campo associado ao "_name" tem o valor "default" associado, pois significa que ele é original.

<br/>


### • Player (type: **player**)

- variável: **ambientTemperature**, tipo: **float**

	Apesar deste valor estar associado ao jogador, é a variável correspondente a temperatura do LEVEL. Como a temperatura do jogador, está sempre trocando calor com a temperatura ambiente (temperatura do level), esse é o valor associado a isto. Por exemplo, se o valor está em zero, significa que o jogador ficará trocando calor com o ambiente até sua temperatura chegar em zero para ficar igual a temperatura ambiente e assim não trocar mais calor. Ou seja, quando quiser que o jogador sempre se mantenha no estado sólido no level (fase gelo), deixe esse valor baixo, de 0 a 33. Se quiser que o jogador fique sempre no estado líquido, coloque um valor entre 34 - 66. Se quiser que o jogador fique sempre no estado gasoso, coloque um valor entre 67 - 100. 

- variável: **initialEnthalpy**, tipo: **float**

	É a propriedade responsável por quanto o jogador começará de entalpia no nível. O valor, pode variar de 0 a 100. Se quiser, que ele comecei com nenhuma energia, coloque 0, se quiser a entalpia no máximo coloque 100. Se quiser metade, coloque 50, e assim por diante.

- variável: **maxEnthalpyOnLevel**, tipo: **float**

	é a propriedade responsável pelo limite superior de energia que o jogador pode chegar num nível. Obs: esse valor só pode ficar de 0 a 100. Exemplo, se o você quer criar um level (como os leveis de gelo) que o jogador não pode se transformar no estado gasoso, então se você colocar o máximo de entalpia acumulada do jogador a 66, o jogador não poderá trocar mais calor com o ambiente quando o jogador atingir 66 de entalpia.

- variável: **minEnthalpyOnLevel**, tipo: **float**

	é a propriedade responsável pelo limite inferior de energia que o jogador pode chegar num nível. Obs: esse valor só pode ficar de 0 a 100. Exemplo, se o você quer criar um level (como os leveis de deserto) que o jogador não pode se transformar no estado sólido, então se você colocar o mínimo de entalpia do jogador a 34, o jogador não poderá trocar mais calor com o ambiente, quando atingir 34 de entalpia, então se manterá no mínimo no estado líquido.

<br/>

### • Fornalha (type: **heatPlace**)

- variável: **totalEnthalpy**, tipo: **float**

	é a propriedade associada ao total de energia que objeto pode LIBERAR. Um objeto pode dar calor em um valor entre 0 a 100. Ou seja, se essa propriedade tiver 50 de valor associado, quer dizer que o objeto Fornalha, quando o JOGADOR passar por cima, absorverá no máximo 50 de entalpia/calor, pois é o total que o objeto pode dar antes de apagar. Funciona como aquecimento.

- variável: **useReloadSafeEnthalpy**, tipo: **bool**

	é a propriedade associada a se o objeto deve ou não utilizar a variável "reloadWhenPlayerHasXofEnthalpy" em conta. Significa que se estiver marcada a caixinha, o objeto levará em conta o valor associado a variável "reloadWhenPlayerHasXofEnthalpy". Caso contrário, não levará em conta. E o valor associado a variável mencionada, será ignorado.

- variável: **reloadWhenPlayerHasXofEnthalpy**, tipo: **float**

	propriedade associada ao quanto de CALOR/ENTALPIA o jogador deve ter para a fornalha repor a sua própria energia. Por exemplo, vamos supor que o jogador já sugou todo calor de uma fornalha, e isso, o deu um total de 50 de calor/entalpia. Significa que a fornalha irá apagar e o jogador aos poucos irá perder esse calor para o ambiente, (caso esteja num ambiente com temperatura mais baixa que ele, como o do gelo). Então, é possível, que você só queira que a fornalha automaticamente se reponha quando o jogador tenha X de entalpia. Como por exemplo, 0 de entalpia. Quando o jogador tiver 0 de novo, a fornalha irá se repor automaticamente, para ser possível ele absorver calor novamente. Valor só pode ser um número de 0 a 100.

<br/>

### • Fogueira (type: **heatPlacePantano**)

- variável: **totalEnthalpy**, tipo: **float**

	é a propriedade associada ao total de energia que objeto pode LIBERAR. Um objeto pode dar calor em um valor entre 0 a 100. Ou seja, se essa propriedade tiver 50 de valor associado, quer dizer que o objeto Fogueira, quando o JOGADOR passar por cima, absorverá no máximo 50 de entalpia/calor, pois é o total que o objeto pode dar antes de apagar. Funciona como aquecimento.

- variável: **useReloadSafeEnthalpy**, tipo: **bool**

	é a propriedade associada a se o objeto deve ou não utilizar a variável "reloadWhenPlayerHasXofEnthalpy" em conta. Significa que se estiver marcada a caixinha, o objeto levará em conta o valor associado a variável "reloadWhenPlayerHasXofEnthalpy". Caso contrário, não levará em conta. E o valor associado a variável mencionada, será ignorado.

- variável: **reloadWhenPlayerHasXofEnthalpy**, tipo: **float**

	propriedade associada ao quanto de CALOR/ENTALPIA o jogador deve ter para a fogueira repor a sua própria energia. Por exemplo, vamos supor que o jogador já sugou todo calor de uma fogueira, e isso, o deu um total de 50 de calor/entalpia. Significa que a fogueira irá apagar e o jogador aos poucos irá perder esse calor para o ambiente, (caso esteja num ambiente com temperatura mais baixa que ele, como o do gelo). Então, é possível, que você só queira que a fogueira automaticamente se reponha quando o jogador tenha X de entalpia. Como por exemplo, 0 de entalpia. Quando o jogador tiver 0 de novo, a fogueira irá se repor automaticamente, para ser possível ele absorver calor novamente. Valor só pode ser um número de 0 a 100.

<br/>

### • Cano de Gelo (type: **coldPlace**)

- variável: **totalNegEnthalpy**, tipo: **float**

	é a propriedade associada ao total de energia que objeto pode ABSORVER. Um objeto pode absorver calor em um valor entre 0 a 100. Ou seja, se essa propriedade tiver 50 de valor associado, quer dizer que o objeto Cano de Gelo, quando o jogador passar por cima, LIBERARÁ no máximo 50 de entalpia/calor, pois é o total que o objeto pode dar antes de acabar. Funciona como resfriamento.

- variável: **useReloadSafeEnthalpy**, tipo: **bool**

	é a propriedade associada a se o objeto deve ou não utilizar a variável "reloadWhenPlayerHasXofEnthalpy" em conta. Significa que se estiver marcada a caixinha, o objeto levará em conta o valor associado a variável "reloadWhenPlayerHasXofEnthalpy". Caso contrário, não levará em conta. E o valor associado a variável mencionada, será ignorado.

- variável: **reloadWhenPlayerHasXofEnthalpy**, tipo: **float**

	propriedade associada ao quanto de CALOR/ENTALPIA o jogador deve ter para o cano de gelo repor a sua própria forma. Por exemplo, vamos supor que o jogador já liberou todo seu calor no cano de gelo, e isso, o deu um total de -50 de calor/entalpia. Significa que o cano de gelo, virou um cano "líquido" e não tem mais gelo para derreter. O jogador aos poucos irá absorver calor para o ambiente, (caso esteja num ambiente com temperatura mais alta que ele, como o do deserto). Então, é possível, que você só queira que o cano de gelo automaticamente se reponha quando o jogador tenha X de entalpia. Como por exemplo, 100 de entalpia. Quando o jogador tiver 100 de novo, o cano de gelo irá se repor automaticamente, para ser possível ele liberar calor novamente e se resfriar. Valor só pode ser um número de 0 a 100.

<br/>

### • Plataforma Temporária de Gelo (type: **fallingPlataform**)

- variável: **shouldRespawn**, tipo: **bool**

	propriedade associada a se um objeto deve ou não reaparecer depois de ter sumido. Se estiver com a opção marcada, significa que irá repor a plataforma, com o tempo especificado na variável "timeUntilRespawn". Caso contrário, a plataforma não será resposta e o valor especificado na variável mencionada, será ignorado.

- variável: **timeUntilRespawn**, tipo: **float**

	propriedade associada ao tempo de respawn (resurgimento) da plataforma, depois que ela tenha desaparecido, caso a opção "shouldRespawn" esteja marcada. Valor entre 0 e infinito.

- variável: **timeUntilFall**, tipo: **float**

	propriedade associada ao tempo para a plataforma cair assim que o jogador encostar na superfície superior da própria plataforma, ou seja, pisar nela. Depois que o tempo passar, a plataforma irá cair. Valor entre 0 e infinito. Tempo está em segundos.

<br/>

### • Plataforma Temporária do Pantano (type: **fallingPlataformPantano**)

- variável: **shouldRespawn**, tipo: **bool**

	propriedade associada a se um objeto deve ou não reaparecer depois de ter sumido. Se estiver com a opção marcada, significa que irá repor a plataforma, com o tempo especificado na variável "timeUntilRespawn". Caso contrário, a plataforma não será resposta e o valor especificado na variável mencionada, será ignorado.

- variável: **timeUntilRespawn**, tipo: **float**

	propriedade associada ao tempo de respawn (resurgimento) da plataforma, depois que ela tenha desaparecido, caso a opção "shouldRespawn" esteja marcada. Valor entre 0 e infinito.

- variável: **timeUntilFall**, tipo: **float**

	propriedade associada ao tempo para a plataforma cair assim que o jogador encostar na superfície superior da própria plataforma, ou seja, pisar nela. Depois que o tempo passar, a plataforma irá cair. Valor entre 0 e infinito. Tempo está em segundos.

<br/>

### • Plataforma Temporária do Deserto (type: **fallingPlataformDeserto**)

- variável: **shouldRespawn**, tipo: **bool**

	propriedade associada a se um objeto deve ou não reaparecer depois de ter sumido. Se estiver com a opção marcada, significa que irá repor a plataforma, com o tempo especificado na variável "timeUntilRespawn". Caso contrário, a plataforma não será resposta e o valor especificado na variável mencionada, será ignorado.

- variável: **timeUntilRespawn**, tipo: **float**

	propriedade associada ao tempo de respawn (resurgimento) da plataforma, depois que ela tenha desaparecido, caso a opção "shouldRespawn" esteja marcada. Valor entre 0 e infinito.

- variável: **timeUntilFall**, tipo: **float**

	propriedade associada ao tempo para a plataforma cair assim que o jogador encostar na superfície superior da própria plataforma, ou seja, pisar nela. Depois que o tempo passar, a plataforma irá cair. Valor entre 0 e infinito. Tempo está em segundos.

<br/>

### • Plataforma Móvel do Gelo (type: **movingPlataform**)

imagem para ilustrar explicação: <img src= "Readme Images/movingPlataformExample.PNG">

o ponto amarelo na imagem, representa a coordenada "Init". O ponto laranja indica a coordenada central (Origem). Ponto vermelho indica a coordenada final. A plataforma se move, indo de um lado para o outro, extremo para o outro extremo. Do amarelo para o Vermelho. Tente imaginar um plano cartesiano, como o ponto laranja na origem. O eixo x é a horizontal, crescendo para direita e diminuindo para esquerda. O eixo y é a vertical, crescendo para cima e diminuindo para baixo do centro. Com isso em consideração, veja as propriedades.

- variável: **initCoordX**, tipo: **float**

	propriedade relacionada a posição no EIXO X do ponto Init(amarelo), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da da initCoordX está igual a -4, pois a posição Init está a quatro tiles à esquerda do centro, considerando o eixo horizontal. Valor pode estar entre -infinto a +infinito

- variável: **initCoordY**, tipo: **float**

	propriedade relacionada a posição no EIXO Y do ponto Init(amarelo), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da initCoordY está igual a 0, pois a posição Init encontra-se na mesma altura que a origem, considerando o eixo vertical. Valor pode estar entre -infinto a +infinito

- variável: **finalCoordX**, tipo: **float**

	propriedade relacionada a posição no EIXO X do ponto Final(vermelho), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da finalCoordX está igual a 4, pois a posição Final está a quatro tiles à direita do centro, considerando o eixo horizontal. Valor pode estar entre -infinto a +infinito

- variável: **finalCoordY**, tipo: **float**

	propriedade relacionada a posição no EIXO Y do ponto Final(vermelho), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da finalCoordY está igual a 0, pois a posição Init encontra-se na mesma altura que a origem, considerando o eixo vertical. Valor pode estar entre -infinto a +infinito

- variável: **speed**, tipo: **float**

	propriedade relacionada a velocidade em que a plataforma se move de um lado para o outro. Valor pode estar entre 0 a +infinito

- variável: **startAtInit**, tipo: **bool**

	propriedade que indica qual é o ponto que a plataforma irá começar. Inicialmente, a plataforma irá em direção ao ponto Init (amarelo), se a opção estiver marcada. Caso não esteja marcada, a plataforma irá inicialmente em direção ao ponto Final (vermelho).

<br/>

### • Plataforma Móvel do Pantano (type: **movingPlataformPantano**)

A imagem de referência, é a mesma que a plataforma móvel de gelo. Entre uma e outra, só muda a sprite/skin.

- variável: **initCoordX**, tipo: **float**

	propriedade relacionada a posição no EIXO X do ponto Init(amarelo), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da da initCoordX está igual a -4, pois a posição Init está a quatro tiles à esquerda do centro, considerando o eixo horizontal. Valor pode estar entre -infinto a +infinito

- variável: **initCoordY**, tipo: **float**

	propriedade relacionada a posição no EIXO Y do ponto Init(amarelo), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da initCoordY está igual a 0, pois a posição Init encontra-se na mesma altura que a origem, considerando o eixo vertical. Valor pode estar entre -infinto a +infinito

- variável: **finalCoordX**, tipo: **float**

	propriedade relacionada a posição no EIXO X do ponto Final(vermelho), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da finalCoordX está igual a 4, pois a posição Final está a quatro tiles à direita do centro, considerando o eixo horizontal. Valor pode estar entre -infinto a +infinito

- variável: **finalCoordY**, tipo: **float**

	propriedade relacionada a posição no EIXO Y do ponto Final(vermelho), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da finalCoordY está igual a 0, pois a posição Init encontra-se na mesma altura que a origem, considerando o eixo vertical. Valor pode estar entre -infinto a +infinito

- variável: **speed**, tipo: **float**

	propriedade relacionada a velocidade em que a plataforma se move de um lado para o outro. Valor pode estar entre 0 a +infinito

- variável: **startAtInit**, tipo: **bool**

	propriedade que indica qual é o ponto que a plataforma irá começar. Inicialmente, a plataforma irá em direção ao ponto Init (amarelo), se a opção estiver marcada. Caso não esteja marcada, a plataforma irá inicialmente em direção ao ponto Final (vermelho).

<br/>

### • Plataforma Móvel do Deserto (type: **movingPlataformDeserto**)

A imagem de referência, é a mesma que a plataforma móvel de gelo. Entre uma e outra, só muda a sprite/skin.

- variável: **initCoordX**, tipo: **float**

	propriedade relacionada a posição no EIXO X do ponto Init(amarelo), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da da initCoordX está igual a -4, pois a posição Init está a quatro tiles à esquerda do centro, considerando o eixo horizontal. Valor pode estar entre -infinto a +infinito

- variável: **initCoordY**, tipo: **float**

	propriedade relacionada a posição no EIXO Y do ponto Init(amarelo), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da initCoordY está igual a 0, pois a posição Init encontra-se na mesma altura que a origem, considerando o eixo vertical. Valor pode estar entre -infinto a +infinito

- variável: **finalCoordX**, tipo: **float**

	propriedade relacionada a posição no EIXO X do ponto Final(vermelho), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da finalCoordX está igual a 4, pois a posição Final está a quatro tiles à direita do centro, considerando o eixo horizontal. Valor pode estar entre -infinto a +infinito

- variável: **finalCoordY**, tipo: **float**

	propriedade relacionada a posição no EIXO Y do ponto Final(vermelho), em relação a origem/centro. O valor de uma unidade equivale a 1 tile. Ou seja, na imagem o valor da finalCoordY está igual a 0, pois a posição Init encontra-se na mesma altura que a origem, considerando o eixo vertical. Valor pode estar entre -infinto a +infinito

- variável: **speed**, tipo: **float**

	propriedade relacionada a velocidade em que a plataforma se move de um lado para o outro. Valor pode estar entre 0 a +infinito

- variável: **startAtInit**, tipo: **bool**

	propriedade que indica qual é o ponto que a plataforma irá começar. Inicialmente, a plataforma irá em direção ao ponto Init (amarelo), se a opção estiver marcada. Caso não esteja marcada, a plataforma irá inicialmente em direção ao ponto Final (vermelho).

<br/>

### • Inimigo Básico (type: **enemyBasic**)

- variável: **idleTime**, tipo: **float**

	Propriedade relacionada a quanto tempo, em segundos, o inimigo fica parado, antes de trocar seu estado para Walk (andar).

- variável: **walkTime**, tipo: **float**

	Propriedade relacionada a quanto tempo, em segundos, o inimigo fica andando, antes de trocar seu estado para Idle (parado). *Caso não tenha encontrado o player, pois se isso acontecer, ele tentará seguir o player e trocará seu estado para Follow. Obs: inimigo se move no eixo X, para esquerda e para direita.

- variável: **walkSpeed**, tipo: **float**

	Propriedade relacionada a velocidade do inimigo ao andar. Valor entre 0 e infinito.

- variável: **followTime**, tipo: **float**

	Caso o inimigo tenha avistado o jogador, enquanto estava andando (patrulhando), essa propriedade está relacionada a quanto tempo, em segundos, o inimigo continua "seguindo" a última direção de quando viu o jogador, ou seja, se movendo em direção última visão do jogador, antes de trocar seu estado para Idle (parado). Obs: O inimigo só segue horizontalmente, até perder o jogador de vista ou acabar o tempo.

- variável: **followSpeed**, tipo: **float**

	Propriedade relacionada a velocidade do inimigo ao perseguir o jogador. Valor entre 0 e infinito.

- variável: **followXRange**, tipo: **float**

	imagem para ilustrar: <img src= "Readme Images/range.PNG">

	Propriedade relacionada ao tamanho da visão do inimigo horizontalmente, ou seja, o X, dessa caixa amarela, ou melhor ainda, o tamanho horizontal dessa caixa amarela, que representa a visão do inimigo. O valor ilustrado está igual a 5. O tamanho dessa visão serve para caso o jogador entre nessa caixa amarela enquanto anda (patrulha), o inimigo irá agora seguir o jogador, ou seja, o inimigo só começará a seguir caso o jogador entre na visão (caixa amarela). O valor deve estar entre 0 e infinito.

<br/>

### • Inimigo Voador (Follow) (type: **flyFollow**)

- variável: **idleTime**, tipo: **float**

	Propriedade relacionada a quanto tempo, em segundos, o inimigo fica parado, antes de trocar seu estado para Walk (andar).

- variável: **walkTime**, tipo: **float**

	Propriedade relacionada a quanto tempo, em segundos, o inimigo fica andando, antes de trocar seu estado para Idle (parado). *Caso não tenha encontrado o player, pois se isso acontecer, ele tentará seguir o player e trocará seu estado para Follow. Obs: inimigo se move no eixo Y, para cima e para baixo.

- variável: **walkSpeed**, tipo: **float**

	Propriedade relacionada a velocidade do inimigo ao andar. Valor entre 0 e infinito.

- variável: **followTime**, tipo: **float**

	Caso o inimigo tenha avistado o jogador, enquanto estava andando (patrulhando), essa propriedade está relacionada a quanto tempo, em segundos, o inimigo continua "seguindo" a última direção de quando viu o jogador, ou seja, se movendo em direção última visão do jogador, antes de trocar seu estado para Idle (parado). Obs: O inimigo segue tanto horizontalmente, quanto verticalmente, até perder o jogador de vista ou acabar o tempo. 

- variável: **followSpeed**, tipo: **float**

	Propriedade relacionada a velocidade do inimigo ao perseguir o jogador. Valor entre 0 e infinito.

- variável: **followRadiusRange**, tipo: **float**

	imagem para ilustrar: <img src= "Readme Images/range2.PNG">

	Propriedade relacionada ao raio da visão do inimigo, perceba o círculo da imagem, representa o tamanho da visão do inimigo voador. Apesar da imagem não está clara, ele se encontra no centro do círculo. Ao informar um raio de tamanho 5, gerou essa visão ao inimigo. Ou seja, quando o jogador entrar, nesse círculo amarelo, o inimigo voador, irá seguir o jogador até acabar o tempo, ou o perder de vista.

<br/>


### • Inimigo Voador (NotFollow) (type: **fly**)

- variável: **idleTime**, tipo: **float**

	Propriedade relacionada a quanto tempo, em segundos, o inimigo fica parado, antes de trocar seu estado para Walk (andar).

- variável: **walkTime**, tipo: **float**

	Propriedade relacionada a quanto tempo, em segundos, o inimigo fica andando, antes de trocar seu estado para Idle (parado). Obs: inimigo se move no eixo Y, para cima e para baixo.

- variável: **walkSpeed**, tipo: **float**

	Propriedade relacionada a velocidade do inimigo ao andar. Valor entre 0 e infinito.

<br/>
<br/>






