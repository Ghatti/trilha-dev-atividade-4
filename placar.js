"use strict";

let scoreBoard = null; // array responsável por manter o placar.

function createScoreBoard() {
  // Implementar
  scoreBoard = [{ Pixelito: 1000000 }];
}

function addPlayer(nome, pontos) {
  // Implementar
  const playerRegistered = scoreBoard.some(
    (jogador) => jogador[nome] !== undefined
  );

  if (!playerRegistered) {
    scoreBoard.push({ [nome]: pontos });
  } else {
    console.log("Jogador já cadastrado!");
  }
}

function removePlayer(nome) {
  // Implementar

  scoreBoard = scoreBoard.filter((jogador) => jogador[nome] === undefined);
}

function updateScore(nome, pontos) {
  // Implementar
  const player = scoreBoard.find((jogador) => jogador[nome] !== undefined);

  if (player) {
    player[nome] += pontos;
  } else {
    console.log("Jogador ainda não cadastrado");
  }
}

function applyBonus() {
  // Implementar
  scoreBoard.forEach((jogador) => {
    const nome = Object.keys(jogador)[0];
    updateScore(nome, 50);
  });
}

function listScoreBoard() {
  // Implementar
  scoreBoard
    .map((jogador) => {
      const nome = Object.keys(jogador)[0];

      return { nome: nome, pontos: jogador[nome] };
    })
    .sort((jogador1, jogador2) => jogador2.pontos - jogador1.pontos)
    .forEach((jogador, i) =>
      console.log(`${i + 1}. ${jogador.nome} - ${jogador.pontos} pontos`)
    );
}

createScoreBoard();
addPlayer("Higor", 150);
addPlayer("Jefferson", 200);
addPlayer("Stephan", 111);
removePlayer("Jefferson");
updateScore("Higor", 100);
applyBonus();
listScoreBoard();
// Retorno esperado:
// 1. Higor - 250 pontos
// 2. Stephan - 111 pontos
