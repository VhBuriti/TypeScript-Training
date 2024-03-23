class PokemonApi {
  static _baseUrl = "https://pokeapi.co/api/v2/pokemon";

  static async getPokemon(pokeNum) {
    const response = await fetch(`${PokemonApi._baseUrl}/${pokeNum}`);
    return response;
  }

  static async getMultiplePokemon(qtd) {
    const requests = [];

    for (let i = 1; i <= qtd; i++) {
      requests.push(fetch(`${PokemonApi._baseUrl}/${i}`));
    }

    const responses = await Promise.all(requests);
    
    for await (const response of responses) {
      console.log(response);
    }
  }
}

PokemonApi.getMultiplePokemon(4);
