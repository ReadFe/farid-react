import { Provider } from "react-redux";
import Counter from "./pembahasan/Counter";
import store from "../../app/store";

const Redux = () => {
    return (
        <Provider store={store} >
            <Counter/>
        </Provider>
    )
}

export default Redux;