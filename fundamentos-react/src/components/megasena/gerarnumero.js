export const gerarNumeroNaoContido = (min, max, array) => {
  const aleatorio = parseInt(Math.random() * ( (max+1) - min)) + min
  return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
}

export const gerarNumeros = (qtde) => {
  const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = gerarNumeroNaoContido(1, 60, nums)
      console.log([...nums, novoNumero])
      return [...nums, novoNumero]
    }, [])
    .sort((a, b) => a - b)

    return numeros;
}
