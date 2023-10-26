import { AsyncStatus } from "./asyncState";

export default class BaseState {
    public initState = {
        status: AsyncStatus.none,
        error: null,
    };

}