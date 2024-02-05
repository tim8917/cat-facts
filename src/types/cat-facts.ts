export interface Fact {
  _id: string;
  text: string;
}

export interface UserData {
  currentFact: Fact,
  favouriteFacts: Fact[],
}
