/* Local dependencies */
import { GetDevicesRequest } from "./action";

export interface GetDevicesState {
  loading: boolean;
  error: null | Error;
}

export const initialGetDevicesState: GetDevicesState = {
  loading: false,
  error: null,
};

export default function loginReducer( state = initialGetDevicesState, action: GetDevicesRequest ) {
  switch ( action.type ) {

    default:
      return state;
  }
}