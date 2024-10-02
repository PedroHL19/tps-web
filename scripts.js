
const bebidaChocolate = document.getElementById('chocolate');
const torraSection = document.getElementById('torraSection');
const btnFazerPedido = document.getElementById('fazerPedido');

function verificarBebida() {
  if (bebidaChocolate.checked) {
    torraSection.style.display = 'none'; 
  } else {
    torraSection.style.display = 'block'; 
  }
}

function fazerPedido() {
  const bebidaEscolhida = document.querySelector('input[name="bebida"]:checked');
  const torraEscolhida = document.querySelector('input[name="torra"]:checked');
  const acompanhamentosEscolhidos = document.querySelectorAll('input[name="acompanhamento"]:checked');

  if (!bebidaEscolhida) {
    alert('Por favor, escolha uma bebida.');
    return;
  }

  let pedido = `Bebida: ${bebidaEscolhida.nextElementSibling.textContent}`;

  if (bebidaEscolhida.value !== 'chocolate' && torraEscolhida) {
    pedido += `, Torra: ${torraEscolhida.nextElementSibling.textContent}`;
  }

  if (acompanhamentosEscolhidos.length > 0) {
    const acompanhamentos = Array.from(acompanhamentosEscolhidos)
      .map(acomp => acomp.nextElementSibling.textContent)
      .join(', ');
    pedido += `, Acompanhamentos: ${acompanhamentos}`;
  }

  alert(`Pedido confirmado!\n\n${pedido}`);
}

document.querySelectorAll('input[name="bebida"]').forEach(bebida => {
  bebida.addEventListener('change', verificarBebida);
});

btnFazerPedido.addEventListener('click', fazerPedido);
