import CounterStore from "../Components/Counter";
import MarketStore from "../Components/Market";

class RootStore {
    Constructor() {
        this.counter = new CounterStore(this);
        this.market = new MarketStore(this);
    }
}

export default RootStore;