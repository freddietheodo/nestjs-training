export class CreateShinyDto {
  pokemonSpeciesId: number;
  paymentDetails: {
    cardNumber: number;
    cardCVC: number;
    cardExpiryDate: string;
  };
}
