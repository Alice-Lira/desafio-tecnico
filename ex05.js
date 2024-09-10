// // 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está,
// // mas pode ligar e desligar os interruptores quantas vezes quiser.  Seu objetivo é descobrir qual interruptor controla qual lâmpada.
// // Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// Primeiro passo, ligo o primeiro interruptor (Interruptor 1) e deixo ligado por alguns minutos, isso vai fazer com que a lâmpada conectada a ele esquente.

// Segundo passo, depois de um tempo, desligo o primeiro interruptor (Interruptor 1). Liguo o segundo interruptor (Interruptor 2) e deixo ligado.

// Terceiro passo, vou até a sala das lâmpadas. Ao chegar na sala das lâmpadas, vou ter três cenários possíveis:

// Lâmpada acesa: A lâmpada que estiver acesa está conectada ao Interruptor 2 (o que ficou ligado antes de ir até a sala).
// Lâmpada apagada, mas quente: A lâmpada apagada, mas que ainda está quente, está conectada ao Interruptor 1 (que foi ligado por um tempo e depois desligado).
// Lâmpada apagada e fria: A lâmpada apagada e fria está conectada ao Interruptor 3 (que não foi ligado em momento algum).