import create from 'zustand';
interface LoginStore {
    state: number;
}
// Creamos la tienda con el tipo de estado definido
const useCounterStore = create<LoginStore>(() => ({
    state: 0
}));
export default useCounterStore;