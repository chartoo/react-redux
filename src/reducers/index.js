import * as types from "./../actions/types";

const INITIAL_STATE = {
    loading:true,
    error:false
}

export default (state = INITIAL_STATE, action={}) => {
	switch(action.type) {
		case types.FETCH_DATA:
			return {
				...state,
				...action.payload,
                ...{loading:false}
			};
		case types.FETCH_DATA_ERROR:
			return {
				...state,
				...{error:action.payload},
				...{loading:false}
			};
		default:
			return state;
	}
};