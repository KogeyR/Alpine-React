import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Default: [
    {
      version: [
        { name: 'Pure' },
        { name: 'Legend' }
      ],
      couleur: [
        { name: '', price: 0 },
        { name: '', price: 0 },
        { name: 'Peinture opaque Blanc Glacier', price: 0 },
      ],
      jantes: [
        { name: 'Standard', price: 0 },
        { name: '', price: 0 },
      ],
      selleries: [
        { name: 'Sièges baquets en cuir noir et Dinamica', price: 0 },
        { name: '', price: 0 },
      ],
      design: [
        { name: 'Pack héritage', price: 180 },
        { name: 'Repose-pieds passager en aluminium', price: 96 },
      ],
      medianav: [
        { name: '', price: 0 },
        { name: '', price: 0 },
        { name: '', price: 0 },
        { name: 'Système Audio standard', price: 0 },
      ],
      confort: [
        { name: 'Retroviseur intérieur électrochrome', price: 0 },
        { name: '', price: 0 },
        { name: '', price: 0 },
        { name: 'Régulateur / limiteur de vitesse', price: 0 },
      ],
    },
  ],
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    
  },
});

export default storeSlice.reducer;
